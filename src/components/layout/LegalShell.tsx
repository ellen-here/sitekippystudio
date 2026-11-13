import Link from "next/link";
import Icon from "@/components/ui/Icon";

interface LegalShellProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

/** Shared layout for /privacidade and /termos (LGPD compliance pages). */
export default function LegalShell({ title, lastUpdated, children }: LegalShellProps) {
  return (
    <article>
      <header className="border-b border-ink/8 bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-graphite transition-colors hover:text-ink"
          >
            <Icon name="arrow-left" className="h-4 w-4" />
            Voltar para o site
          </Link>
          <h1 className="mt-6 text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-graphite">
            <Icon name="sparkle" className="h-3.5 w-3.5 text-blush-deep" />
            Última atualização: {lastUpdated}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-14 text-graphite sm:px-8">
        <div className="prose-kippy space-y-8 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:mt-2 [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed">
          {children}
        </div>
      </div>
    </article>
  );
}
