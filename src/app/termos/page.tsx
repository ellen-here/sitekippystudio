import type { Metadata } from "next";
import LegalShell from "@/components/layout/LegalShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site da Kippy Studio: regras de uso, propriedade intelectual, orçamentos e responsabilidades.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell title="Termos de Uso" lastUpdated="13 de novembro de 2026">
      <p>
        Bem-vindo ao site da <strong>{site.legalName}</strong> ("Kippy Studio"). Ao
        navegar neste site ou enviar um briefing, você concorda com os termos abaixo.
        Caso não concorde, pedimos que não utilize o site.
      </p>

      <h2>1. Uso do site</h2>
      <p>
        O conteúdo deste site tem finalidade informativa e de captação de oportunidades
        comerciais. Você se compromete a utilizá-lo de forma lícita, sem que qualquer
        ação viole direitos de terceiros ou a legislação aplicável.
      </p>

      <h2>2. Propostas e orçamentos</h2>
      <ul>
        <li>
          Os valores apresentados em orçamentos têm validade de 15 dias corridos, salvo
          indicação em contrário;
        </li>
        <li>
          Escopos, prazos e condições de pagamento passam a valer apenas após aprovação
          formal e assinatura de proposta ou contrato;
        </li>
        <li>
          O envio de briefing pelo site não gera vínculo contratual automático.
        </li>
      </ul>

      <h2>3. Propriedade intelectual</h2>
      <p>
        Marca, textos, layout, código, artes e materiais deste site pertencem à Kippy
        Studio ou a seus licenciantes. É proibida a reprodução total ou parcial sem
        autorização prévia por escrito. Os projetos exibidos no portfólio pertencem aos
        respectivos clientes e são apresentados para fins de portfólio, respeitados os
        acordos de confidencialidade.
      </p>

      <h2>4. Conteúdo de terceiros e links externos</h2>
      <p>
        Este site pode conter links para páginas de terceiros. A Kippy Studio não se
        responsabiliza pelo conteúdo, políticas ou práticas desses sites.
      </p>

      <h2>5. Isenção de garantias</h2>
      <p>
        O site é disponibilizado "como está", sem garantias de disponibilidade
        ininterrupta ou isento de erros. Empregamos esforços razoáveis para manter o
        conteúdo correto e atualizado.
      </p>

      <h2>6. Limitação de responsabilidade</h2>
      <p>
        Em nenhuma hipótese a Kippy Studio responderá por danos indiretos decorrentes do
        uso ou da impossibilidade de uso deste site. Resultados comerciais citados em
        cases dependem de fatores específicos de cada negócio e não constituem garantia
        de resultados futuros.
      </p>

      <h2>7. Lei aplicável e foro</h2>
      <p>
        Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito
        o foro da Comarca de São Paulo/SP para dirimir eventuais controvérsias, sem
        prejuízo do foro do domicílio do consumidor.
      </p>

      <h2>8. Contato</h2>
      <p>
        Dúvidas sobre estes termos:{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-blush-deep underline underline-offset-4"
        >
          {site.email}
        </a>{" "}
        ou pelo WhatsApp {site.whatsappDisplay}.
      </p>
    </LegalShell>
  );
}
