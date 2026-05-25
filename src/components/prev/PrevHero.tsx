import PrevHeroSplit from "./PrevHeroSplit";

/**
 * Hero da home /prev — Editorial Trust Split.
 */
export default function PrevHero() {
  return (
    <PrevHeroSplit
      breadcrumb="Advogado Especialista em INSS"
      heroTitle={
        <>
          INSS <span className="italic text-prev-gold">sem mistério</span>.
          <br />
          Do primeiro pedido à concessão.
        </>
      }
      heroSubtitle="Você ainda não pediu, pediu e foi negado, ou está em curso — conta sua situação que eu analiso seu caso e te indico o caminho. Sem juridiquês, sem promessa furada."
      quizKey="home"
      whatsappButtonText="Falar pelo WhatsApp agora"
      sectionClassName="pt-10 pb-14 lg:pt-24 lg:pb-28"
    />
  );
}
