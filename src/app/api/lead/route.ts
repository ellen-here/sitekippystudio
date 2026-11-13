// Lead capture endpoint (RF-07 — backend integration).
//
// MVP behavior: validates the payload server-side and forwards it to a CRM
// webhook when LEAD_WEBHOOK_URL is configured (Pipedrive, RD Station, HubSpot,
// Notion, Zapier...). Without the env var, the lead is accepted and logged —
// simulating a successful CRM handoff.
//
// Configure in .env.local / hosting env vars:
//   LEAD_WEBHOOK_URL=https://your-crm-webhook.example.com/leads

interface LeadPayload {
  type?: "lead" | "newsletter";
  name?: string;
  email?: string;
  whatsapp?: string;
  services?: string[];
  budget?: string;
  message?: string;
  source?: string;
  website?: string; // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Basic rate limiting (in-memory, per instance — good enough for the MVP)
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 10;

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_HITS;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests. Try again in a minute." },
      { status: 429 }
    );
  }

  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot anti-spam: bots fill hidden fields
  if (payload.website) {
    return Response.json({ ok: true, id: "silently-discarded" });
  }

  const type = payload.type === "newsletter" ? "newsletter" : "lead";

  if (type === "newsletter") {
    if (!payload.email || !EMAIL_RE.test(payload.email)) {
      return Response.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }
  } else {
    const errors: string[] = [];
    if (!payload.name || payload.name.trim().length < 2) errors.push("name");
    if (!payload.email || !EMAIL_RE.test(payload.email)) errors.push("email");
    if (!payload.whatsapp || payload.whatsapp.replace(/\D/g, "").length < 10)
      errors.push("whatsapp");
    if (!payload.services || payload.services.length === 0) errors.push("services");
    if (!payload.message || payload.message.trim().length < 10) errors.push("message");

    if (errors.length > 0) {
      return Response.json(
        { ok: false, error: "Validation failed.", fields: errors },
        { status: 400 }
      );
    }
  }

  const lead = {
    type,
    ...payload,
    submittedAt: new Date().toISOString(),
    page: "https://www.kippystudio.com.br",
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!webhookResponse.ok) {
        console.error(`[lead] Webhook responded ${webhookResponse.status}`);
        return Response.json(
          { ok: false, error: "Could not reach the CRM." },
          { status: 502 }
        );
      }
    } catch (error) {
      console.error("[lead] Webhook error:", error);
      return Response.json(
        { ok: false, error: "Could not reach the CRM." },
        { status: 502 }
      );
    }
  } else {
    // No CRM connected yet — log so the lead is not lost in development
    console.log("[lead] Received (webhook not configured):", JSON.stringify(lead));
  }

  return Response.json({ ok: true, id: `lead_${Date.now()}` });
}
