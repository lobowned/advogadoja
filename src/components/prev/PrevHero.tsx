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
        </>
      }
      heroSubtitle="Conte sua situação pelo WhatsApp e eu te digo o caminho — sem juridiquês."
      quizKey="home"
      whatsappButtonText="Falar pelo WhatsApp agora"
      sectionClassName="pt-10 pb-14 lg:pt-24 lg:pb-28"
    />
  );
}
