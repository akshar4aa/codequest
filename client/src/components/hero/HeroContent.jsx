import { ChevronRight, Sparkles } from "lucide-react";

function HeroContent() {
  return (
    <div className="w-full lg:w-[48%] text-white">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-md">

        <Sparkles size={16} />

        YOUR ADVENTURE STARTS HERE

      </div>

      {/* Heading */}

      <h1 className="mt-10 text-5xl lg:text-7xl font-black leading-[1.15] tracking-tight">

       Become the <br />

<span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
  Hero
</span>{" "}
of Your <br />

Coding Adventure

      </h1>

      {/* Description */}
<p className="mt-10 max-w-lg text-lg leading-9 text-slate-400">

        Learn programming through immersive quests, exciting boss battles,
        achievements, and AI-powered guidance. Every lesson earns XP and
        brings you one step closer to your dream career.

      </p>

      {/* Buttons */}

      <div className="mt-12 flex gap-5">

        <button className="group rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold shadow-xl transition hover:scale-105">

          Start Quest

          <ChevronRight
            size={20}
            className="ml-2 inline transition group-hover:translate-x-1"
          />

        </button>

        <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-violet-500">

          Explore Roadmap

        </button>

      </div>

      {/* Stats */}

      <div className="mt-20 flex gap-12">

        <div>
          <h2 className="text-3xl font-bold text-cyan-400">50K+</h2>
          <p className="text-slate-400">Students</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-violet-400">10K+</h2>
          <p className="text-slate-400">Challenges</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-pink-400">1M+</h2>
          <p className="text-slate-400">XP Earned</p>
        </div>

      </div>

    </div>
  );
}

export default HeroContent;