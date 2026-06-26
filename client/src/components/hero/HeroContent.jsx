import { ChevronRight } from "lucide-react";

function HeroContent() {
  return (
    <div className="w-full max-w-[620px] lg:ml-16 xl:ml-24 text-white">

      {/* Badge */}
      <div className="mb-15">
        <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-7 py-3 text-lg font-semibold uppercase tracking-[0.35em] text-violet-300 backdrop-blur-xl">
          YOUR ADVENTURE STARTS HERE
        </span>
      </div> <br></br>

      {/* Heading */}
      <h1 className="text-7xl font-black leading-[0.92] tracking-[-3px] lg:text-[92px]">

        Level Up

        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">
          Your Coding.
        </span> 

      </h1> <br></br>

      {/* Description */}
      <p className="mt-10 max-w-[500px] text-lg leading-9 text-slate-400">

        Learn programming through quests,
        AI mentors, boss battles and real-world projects.

      </p> <br></br>

      {/* Buttons */}
<div className="mt-16 flex flex-wrap gap-8">

  <button
    className="
      group
      flex items-center justify-center
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      via-fuchsia-500
      to-cyan-500
      px-12
      py-6
      min-w-[250px]
      text-xl
      font-bold
      text-white
      shadow-[0_25px_80px_rgba(139,92,246,0.45)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-[0_30px_90px_rgba(139,92,246,0.6)]
    "
  >
    Begin Adventure

    <ChevronRight
      size={24}
      className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
    />
  </button>

  <button
    className="
      flex items-center justify-center
      rounded-2xl
      border
      border-white/15
      bg-white/5
      px-12
      py-6
      min-w-[250px]
      text-xl
      font-semibold
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-violet-500
      hover:bg-white/10
      hover:-translate-y-1
    "
  >
    Explore World
  </button>

</div>

    </div>
  );
}

export default HeroContent;