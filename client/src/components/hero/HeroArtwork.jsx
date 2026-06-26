function HeroArtwork() {
  return (
    <div className="hidden lg:flex w-[58%] justify-center items-center">

      <div className="relative h-[650px] w-[650px]">

        {/* Main Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[150px]" />

        {/* Main Circle */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/30 bg-white/5 backdrop-blur-xl" />

        {/* Placeholder */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

          <div className="text-8xl">⚔️</div>

          <h2 className="mt-6 text-3xl font-bold text-white">

            Hero Illustration

          </h2>

        </div>

      </div>

    </div>
  );
}

export default HeroArtwork;