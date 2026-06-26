import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroArtwork from "./HeroArtwork";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090B]">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1450px] items-center justify-between px-8 lg:px-20">
        <HeroContent />

        <HeroArtwork />
      </div>
    </section>
  );
}

export default Hero;