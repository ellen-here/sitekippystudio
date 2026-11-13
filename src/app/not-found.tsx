import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { btnPrimary } from "@/components/ui/buttons";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-blush-deep">
        <Icon name="sparkle" className="h-8 w-8" />
      </span>
      <p className="mt-6 font-display text-sm font-semibold tracking-widest text-blush-deep uppercase">
        Erro 404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
        Essa página saiu para tomar um café ☕
      </h1>
      <p className="mt-4 max-w-md text-graphite">
        O endereço que você acessou não existe. Volte para a página inicial ou fale com a
        gente — temos muitos projetos para mostrar.
      </p>
      <Link href="/" className={btnPrimary}>
        Voltar ao início
        <Icon name="arrow-right" className="h-4 w-4" />
      </Link>
    </section>
  );
}
