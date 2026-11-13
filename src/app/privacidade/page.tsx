import type { Metadata } from "next";
import LegalShell from "@/components/layout/LegalShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Kippy Studio: como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Política de Privacidade" lastUpdated="13 de novembro de 2026">
      <p>
        Esta Política de Privacidade descreve como a <strong>{site.legalName}</strong>{" "}
        ("Kippy Studio", "nós") coleta, usa, armazena e protege dados pessoais de
        visitantes e clientes deste site, em conformidade com a Lei Geral de Proteção de
        Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2>1. Dados que coletamos</h2>
      <p>Coletamos apenas os dados necessários para prestar nossos serviços:</p>
      <ul>
        <li>
          <strong>Formulário de contato/briefing:</strong> nome completo, e-mail, número de
          WhatsApp, serviços de interesse, faixa de investimento e descrição do projeto;
        </li>
        <li>
          <strong>Newsletter:</strong> endereço de e-mail;
        </li>
        <li>
          <strong>Dados de navegação:</strong> páginas visitadas, dispositivo e origem do
          tráfego — apenas após o seu consentimento via cookies.
        </li>
      </ul>

      <h2>2. Finalidade e base legal</h2>
      <p>Utilizamos seus dados para:</p>
      <ul>
        <li>Responder a solicitações de orçamento e prestar os serviços contratados
          (execução de contrato ou pré-contratual — art. 7º, V, LGPD);</li>
        <li>Enviar conteúdos de marketing quando você assinar a newsletter
          (consentimento — art. 7º, I, LGPD);</li>
        <li>Melhorar a experiência do site e medir a performance das campanhas
          (consentimento via cookies — art. 7º, I, LGPD).</li>
      </ul>

      <h2>3. Compartilhamento</h2>
      <p>
        Não vendemos nem alugamos dados pessoais. Compartilhamos informações apenas com
        ferramentas essenciais à operação (hospedagem, e-mail, CRM e plataformas de
        anúncios, estas últimas somente após aceite de cookies), sempre mediante
        contratos de proteção de dados, ou quando exigido por autoridade competente.
      </p>

      <h2>4. Cookies e rastreamento</h2>
      <p>
        Este site exibe um banner de consentimento antes de carregar qualquer script de
        rastreamento (Google Tag Manager/GA4, Meta Pixel e Microsoft Clarity). Você pode
        recusar e continuar navegando normalmente — apenas o essencial para o
        funcionamento do site será utilizado. A escolha fica gravada no seu navegador e
        pode ser alterada limpando os dados do site.
      </p>

      <h2>5. Seus direitos (art. 18 da LGPD)</h2>
      <p>Você pode, a qualquer momento:</p>
      <ul>
        <li>Confirmar a existência de tratamento dos seus dados;</li>
        <li>Acessar, corrigir ou solicitar a anonimização/portabilidade;</li>
        <li>Solicitar a eliminação dos dados dispensados de conservação legal;</li>
        <li>Revogar o consentimento, sem que isso afete a licitude do tratamento anterior;</li>
        <li>Ser informado sobre compartilhamento com entidades públicas e privadas.</li>
      </ul>

      <h2>6. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger seus dados: conexão
        criptografada (HTTPS), acesso restrito à informação e contratos de
        confidencialidade com nossa equipe e parceiros.
      </p>

      <h2>7. Retenção</h2>
      <p>
        Os dados do formulário são mantidos enquanto necessários para o atendimento e o
        cumprimento de obrigações legais, sendo eliminados ou anonimizados após esse
        período.
      </p>

      <h2>8. Encarregado de dados (DPO)</h2>
      <p>
        Dúvidas sobre esta política ou sobre seus dados:{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-blush-deep underline underline-offset-4"
        >
          {site.email}
        </a>{" "}
        — respondemos em até 15 dias, conforme a LGPD.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças legais ou operacionais.
        A data da última atualização está indicada no topo desta página.
      </p>
    </LegalShell>
  );
}
