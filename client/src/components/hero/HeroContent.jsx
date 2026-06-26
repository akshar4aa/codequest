import { ChevronRight } from "lucide-react";

function HeroContent() {
  return (
    <div className="w-full lg:w-[48%] text-white">

      {/* Big Tag */}
      <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 mb-10">
  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
    YOUR ADVENTURE STARTS HERE
  </p>
</div>

      {/* Main Heading */}
      <h1 className="text-5xl  sm:text-6xl font-black leading-[0.95] tracking-tight">

        Become the

        <br />

        <span className="bg-linear-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
          Hero
        </span>

        {" "}of Your

        <br />

        Coding Adventure

      </h1>

      {/* Subtitle */}
      <p className="mt-10 max-w-lg text-lg leading-8 text-gray-400">

        Learn programming through immersive quests, exciting boss battles,
        achievements and AI-powered guidance.

        <br />

        Level up with every lesson and unlock your dream career.

      </p>

      {/* Buttons */}
      <div className="mt-14 flex items-center gap-8">

        <button className="rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-12 py-5 text-lg font-semibold shadow-[0_20px_60px_rgba(124,58,237,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105">

          Start Quest

          <ChevronRight className="ml-3 inline" size={22} />

        </button>

        <button className="rounded-2xl border border-white/20 bg-white/5 px-12 py-5 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:bg-white/10">

          Explore Roadmap

        </button>

      </div>

      {/* Stats */}
      <div className="mt-20 flex gap-20">

        <div>
          <h2 className="text-5xl font-black text-cyan-400">
            50K+
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Students
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-violet-400">
            10K+
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Challenges
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-pink-400">
            1M+
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            XP Earned
          </p>
        </div>

      </div>

    </div>
  );
}

export default HeroContent;