interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {

  return (
    <section className="relative overflow-hidden min-h-screen w-full">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
          zIndex: -1
        }}
      />
    </section>
  );
};

export default HeroSection;
