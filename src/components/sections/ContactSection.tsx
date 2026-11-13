"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { serviceOptions } from "@/data/services";
import { site, whatsappLink } from "@/data/site";
import Icon from "@/components/ui/Icon";
import Sparkle from "@/components/ui/Sparkle";
import { cn, isValidEmail, maskPhone } from "@/lib/utils";
import { track } from "@/lib/analytics";

const budgetOptions = [
  "Até R$ 5 mil",
  "R$ 5 mil – R$ 15 mil",
  "R$ 15 mil – R$ 30 mil",
  "Acima de R$ 30 mil",
  "Ainda estou definindo",
];

interface FormValues {
  name: string;
  email: string;
  whatsapp: string;
  services: string[];
  budget: string;
  message: string;
  website: string; // honeypot — must stay empty
  privacy: boolean;
}

type FormErrors = Partial<Record<keyof FormValues | "whatsapp", string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  whatsapp: "",
  services: [],
  budget: "",
  message: "",
  website: "",
  privacy: false,
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Preencha seu nome completo.";
  } else if (values.name.trim().split(/\s+/).length < 2) {
    errors.name = "Digite nome e sobrenome.";
  }

  if (!values.email.trim()) {
    errors.email = "Informe um e-mail para retornarmos o contato.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "E-mail inválido.";
  }

  const digits = values.whatsapp.replace(/\D/g, "");
  if (!digits) {
    errors.whatsapp = "Informe seu WhatsApp com DDD.";
  } else if (digits.length < 10 || digits.length > 13) {
    errors.whatsapp = "Número incompleto — use (DDD) + número.";
  }

  if (values.services.length === 0) {
    errors.services = "Selecione ao menos um serviço.";
  }

  if (!values.message.trim()) {
    errors.message = "Conte um pouco sobre o seu projeto.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Descreva melhor o projeto (mínimo de 10 caracteres).";
  }

  if (!values.privacy) {
    errors.privacy = "É preciso aceitar a Política de Privacidade.";
  }

  return errors;
}

// Reference-style input shell: white field, soft border, rose focus.
const inputClass = (hasError?: boolean) =>
  cn(
    "w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-ink placeholder:text-graphite/60 focus:outline-none",
    hasError ? "border-blush-deep" : "border-black/10 focus:border-blush-deep"
  );

export default function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const errors = validate(values);
  const showError = (field: keyof FormValues) =>
    (touched[field] || submitAttempted) && errors[field] ? errors[field] : undefined;

  // Pre-select the service when a service modal CTA is clicked
  useEffect(() => {
    const onService = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      setValues((current) =>
        current.services.includes(slug)
          ? current
          : { ...current, services: [...current.services, slug] }
      );
      setTouched((current) => ({ ...current, services: true }));
    };
    window.addEventListener("kippy:select-service", onService);
    return () => window.removeEventListener("kippy:select-service", onService);
  }, []);

  function update<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function toggleService(slug: string) {
    setValues((current) => ({
      ...current,
      services: current.services.includes(slug)
        ? current.services.filter((item) => item !== slug)
        : [...current.services, slug],
    }));
    setTouched((current) => ({ ...current, services: true }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitAttempted(true);

    // Honeypot anti-spam: real users never fill this field
    if (values.website) return;

    const validation = validate(values);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "lead",
          name: values.name.trim(),
          email: values.email.trim(),
          whatsapp: values.whatsapp,
          services: values.services,
          budget: values.budget,
          message: values.message.trim(),
          source: "site_contato",
        }),
      });
      if (!response.ok) throw new Error("Failed to submit lead");
      track("submit_lead", {
        services: values.services.join(","),
        budget: values.budget || "nao_informado",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const acceleratedMessage = [
    `Olá, Kippy Studio! Meu nome é ${values.name.trim()}.`,
    values.services.length
      ? `Tenho interesse em: ${values.services
          .map((slug) => serviceOptions.find((option) => option.slug === slug)?.label ?? slug)
          .join(", ")}.`
      : null,
    values.budget ? `Faixa de investimento: ${values.budget}.` : null,
    `Projeto: ${values.message.trim()}`,
    `Meu WhatsApp: ${values.whatsapp}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section id="contato" aria-labelledby="contato-title" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        {/* Framed card, per the reference design */}
        <div className="rounded-3xl border border-black/5 bg-cream p-6 shadow-xl sm:p-8 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* -------- Copy / contact info -------- */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-blush/30 bg-rose-light/30 px-4 py-1.5 font-display text-xs font-bold tracking-wider text-blush-deep uppercase">
                <Icon name="sparkle" className="h-3.5 w-3.5" />
                Vamos Conversar
              </span>
              <h2
                id="contato-title"
                className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
              >
                Conte sua ideia — respondemos em{" "}
                <span className="text-blush-deep">até 24 horas</span>
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-graphite">
                Preencha o briefing inteligente abaixo. Quanto mais detalhes, mais preciso fica
                o nosso orçamento — e mais rápido começamos a execução.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-light/40 text-blush-deep">
                    <Icon name="whatsapp" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-graphite uppercase">
                      WhatsApp direto
                    </p>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-ink underline-offset-4 hover:text-blush-deep hover:underline"
                    >
                      {site.whatsappDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-light/40 text-blush-deep">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-graphite uppercase">
                      E-mail comercial
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm font-bold text-ink underline-offset-4 hover:text-blush-deep hover:underline"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-light/40 text-blush-deep">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-graphite uppercase">
                      Localização
                    </p>
                    <p className="text-sm font-bold text-ink">Atendimento em todo o Brasil — remoto</p>
                  </div>
                </li>
              </ul>

              <div className="relative mt-10 max-w-md rounded-3xl border border-blush/30 bg-rose-light/40 p-6">
                <Sparkle className="absolute -top-3 -right-3 h-5 w-5 text-blush-deep" />
                <p className="text-sm leading-relaxed text-graphite">
                  <strong className="font-semibold text-ink">Prefere ir direto ao ponto?</strong>{" "}
                  Chame no WhatsApp com a mensagem pré-preenchida e nossa equipe assume na hora.
                </p>
              </div>
            </div>

            {/* -------- Intelligent briefing form -------- */}
            <div className="lg:col-span-7">
              {status === "success" ? (
                <div
                  role="status"
                  className="animate-fade-up flex h-full flex-col items-start justify-center py-6"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-cream">
                    <Icon name="check" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold text-ink">
                    Briefing recebido, {values.name.split(" ")[0]}! ✦
                  </h3>
                  <p className="mt-3 leading-relaxed text-graphite">
                    Nossa equipe já foi notificada e retorna em até{" "}
                    <strong className="font-semibold text-ink">24 horas úteis</strong> com os
                    próximos passos — ou uma proposta inicial, se o escopo já estiver claro.
                  </p>

                  <div className="mt-7 w-full rounded-2xl border border-blush/30 bg-rose-light/40 p-5">
                    <p className="text-sm font-semibold text-ink">
                      Quer agilizar ainda mais?
                    </p>
                    <p className="mt-1 text-sm text-graphite">
                      Envie seus dados já preenchidos direto para o nosso WhatsApp.
                    </p>
                    <a
                      href={whatsappLink(acceleratedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track("click_whatsapp", { location: "contact_success" })}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-3.5 font-display text-sm font-semibold text-cream shadow-[0_10px_30px_-15px_rgba(33,37,41,0.8)] transition-colors hover:bg-blush-deep"
                    >
                      <Icon name="whatsapp" className="h-4 w-4" />
                      Acelerar no WhatsApp
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setValues(initialValues);
                      setTouched({});
                      setSubmitAttempted(false);
                      setStatus("idle");
                    }}
                    className="mt-6 text-sm font-semibold text-graphite underline underline-offset-4 hover:text-ink"
                  >
                    Enviar outro briefing
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-ink">Briefing inteligente</h3>
                    <span className="rounded-full border border-blush/30 bg-rose-light/40 px-3 py-1 font-display text-[11px] font-bold tracking-wide text-blush-deep uppercase">
                      2 min
                    </span>
                  </div>

                  <div className="mt-6 space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="mb-1.5 block text-xs font-bold text-graphite"
                      >
                        Seu nome completo <span className="text-blush-deep">*</span>
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(event) => update("name", event.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                        aria-invalid={Boolean(showError("name"))}
                        aria-describedby={showError("name") ? "lead-name-error" : undefined}
                        placeholder="Ex: Ana Silva"
                        className={inputClass(Boolean(showError("name")))}
                      />
                      {showError("name") && (
                        <p id="lead-name-error" role="alert" className="mt-1.5 pl-1 text-xs text-blush-deep">
                          {showError("name")}
                        </p>
                      )}
                    </div>

                    {/* Email + WhatsApp */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="lead-email"
                          className="mb-1.5 block text-xs font-bold text-graphite"
                        >
                          E-mail <span className="text-blush-deep">*</span>
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={(event) => update("email", event.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                          aria-invalid={Boolean(showError("email"))}
                          aria-describedby={showError("email") ? "lead-email-error" : undefined}
                          placeholder="ana@exemplo.com"
                          className={inputClass(Boolean(showError("email")))}
                        />
                        {showError("email") && (
                          <p id="lead-email-error" role="alert" className="mt-1.5 pl-1 text-xs text-blush-deep">
                            {showError("email")}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lead-whatsapp"
                          className="mb-1.5 block text-xs font-bold text-graphite"
                        >
                          WhatsApp <span className="text-blush-deep">*</span>
                        </label>
                        <input
                          id="lead-whatsapp"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel-national"
                          value={values.whatsapp}
                          onChange={(event) => update("whatsapp", maskPhone(event.target.value))}
                          onBlur={() => setTouched((t) => ({ ...t, whatsapp: true }))}
                          aria-invalid={Boolean(showError("whatsapp"))}
                          aria-describedby={showError("whatsapp") ? "lead-whatsapp-error" : undefined}
                          placeholder="(11) 99999-9999"
                          className={inputClass(Boolean(showError("whatsapp")))}
                        />
                        {showError("whatsapp") && (
                          <p id="lead-whatsapp-error" role="alert" className="mt-1.5 pl-1 text-xs text-blush-deep">
                            {showError("whatsapp")}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Services multi-select */}
                    <fieldset>
                      <legend className="mb-2 block text-xs font-bold text-graphite">
                        Serviços de interesse <span className="text-blush-deep">*</span>
                      </legend>
                      <div className="flex flex-wrap gap-2" role="group">
                        {serviceOptions.map((option) => {
                          const selected = values.services.includes(option.slug);
                          return (
                            <button
                              key={option.slug}
                              type="button"
                              onClick={() => toggleService(option.slug)}
                              aria-pressed={selected}
                              className={cn(
                                "rounded-full border px-4 py-2 text-xs font-medium transition-all duration-150 sm:text-sm",
                                selected
                                  ? "border-ink bg-ink text-cream"
                                  : "border-black/10 bg-white text-graphite hover:border-blush/60 hover:text-blush-deep"
                              )}
                            >
                              {selected && (
                                <Icon name="check" className="mr-1.5 inline h-3.5 w-3.5" />
                              )}
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                      {showError("services") && (
                        <p role="alert" className="mt-1.5 pl-1 text-xs text-blush-deep">
                          {showError("services")}
                        </p>
                      )}
                    </fieldset>

                    {/* Budget */}
                    <div>
                      <label htmlFor="lead-budget" className="mb-1.5 block text-xs font-bold text-graphite">
                        Faixa de investimento{" "}
                        <span className="font-normal text-graphite">(opcional)</span>
                      </label>
                      <div className="relative">
                        <select
                          id="lead-budget"
                          value={values.budget}
                          onChange={(event) => update("budget", event.target.value)}
                          className="w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-ink focus:border-blush-deep focus:outline-none"
                        >
                          <option value="">Quero uma recomendação</option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <Icon
                          name="chevron-down"
                          className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-graphite"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="lead-message" className="mb-1.5 block text-xs font-bold text-graphite">
                        Mensagem / resumo do projeto{" "}
                        <span className="text-blush-deep">*</span>
                      </label>
                      <textarea
                        id="lead-message"
                        rows={4}
                        value={values.message}
                        onChange={(event) => update("message", event.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                        aria-invalid={Boolean(showError("message"))}
                        aria-describedby={showError("message") ? "lead-message-error" : undefined}
                        placeholder="Conte um pouco sobre seu projeto: objetivo, prazo e referências."
                        className={cn(
                          inputClass(Boolean(showError("message"))),
                          "resize-y"
                        )}
                      />
                      {showError("message") && (
                        <p id="lead-message-error" role="alert" className="mt-1.5 pl-1 text-xs text-blush-deep">
                          {showError("message")}
                        </p>
                      )}
                    </div>

                    {/* Honeypot — anti-spam (Turnstile/reCAPTCHA can be added via env keys) */}
                    <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
                      <label htmlFor="lead-website">Não preencha este campo</label>
                      <input
                        id="lead-website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={values.website}
                        onChange={(event) => update("website", event.target.value)}
                      />
                    </div>

                    {/* Privacy consent */}
                    <div>
                      <label className="flex items-start gap-3 text-xs leading-relaxed text-graphite">
                        <input
                          type="checkbox"
                          checked={values.privacy}
                          onChange={(event) => update("privacy", event.target.checked)}
                          onBlur={() => setTouched((t) => ({ ...t, privacy: true }))}
                          className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-[#212529]"
                        />
                        <span>
                          Li e concordo com a{" "}
                          <Link
                            href="/privacidade"
                            className="font-medium text-blush-deep underline underline-offset-2"
                          >
                            Política de Privacidade
                          </Link>{" "}
                          e autorizo o contato da equipe Kippy sobre o meu projeto.{" "}
                          <span className="text-blush-deep">*</span>
                        </span>
                      </label>
                      {showError("privacy") && (
                        <p role="alert" className="mt-1.5 pl-1 text-xs text-blush-deep">
                          {showError("privacy")}
                        </p>
                      )}
                    </div>
                  </div>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="mt-5 rounded-2xl border border-blush/50 bg-rose-light/40 px-4 py-3 text-sm text-blush-deep"
                    >
                      Algo deu errado no envio. Tente novamente ou fale conosco pelo WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-display text-sm font-semibold text-cream shadow-[0_14px_34px_-18px_rgba(33,37,41,0.9)] transition-colors hover:bg-blush-deep disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />
                        Enviando briefing…
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Icon name="arrow-right" className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-graphite">
                    Resposta em até 24h úteis · Seus dados estão protegidos pela LGPD
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
