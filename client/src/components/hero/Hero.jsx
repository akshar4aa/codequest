import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroArtwork from "./HeroArtwork";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1700px] items-center px-8 pt-36 pb-24 sm:px-12 lg:px-20 xl:px-28">

        {/* Left Side */}
        <div className="flex w-1/2 justify-center">
          <HeroContent />
        </div>

        {/* Right Side */}
        <div className="flex w-1/2 justify-center">
          <HeroArtwork />
        </div>

      </div>
    </section>
  );
}

export default Hero;