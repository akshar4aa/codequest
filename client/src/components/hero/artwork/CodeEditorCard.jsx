import { Play } from "lucide-react";

function CodeEditorCard() {
  return (
    <div
      className="
        absolute
        right-10
        top-32
        w-[520px]
        rounded-3xl
        border border-white/10
        bg-[#101624]/80
        backdrop-blur-3xl
        shadow-[0_40px_100px_rgba(0,0,0,.55)]
        overflow-hidden
        z-30
      "
    >
      {/* Top Bar */}
      <div className="flex items-center  border-b border-white/10 px-5 py-4">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <p className="text-base font-medium text-gray-400">
          quest.py
        </p>

        <Play
          size={18}
          className="text-cyan-400"
        />

      </div>

      {/* Code */}

      <div className="space-y-3 p-8 font-mono text-base">

        <p>
          <span className="text-pink-400">def</span>{" "}
          <span className="text-cyan-300">startQuest</span>()
        </p>

        <p className="pl-6">
          <span className="text-violet-400">xp</span>{" "}
          =
          <span className="text-orange-300"> 150</span>
        </p>

        <p className="pl-6">
          <span className="text-violet-400">coins</span>{" "}
          =
          <span className="text-orange-300"> 50</span>
        </p>

        <p className="pl-6">
          print(
          <span className="text-green-400">
            "Quest Completed!"
          </span>
          )
        </p>

      </div>

      {/* Output */}

      <div className="border-t border-white/10 bg-black/30 px-6 py-4">

        <p className="text-base text-cyan-300">
          ▶ Quest Completed Successfully
        </p>

        <p className="mt-2 text-xs text-gray-400">
          +150 XP • +50 Coins
        </p>

      </div>

    </div>
  );
}

export default CodeEditorCard;