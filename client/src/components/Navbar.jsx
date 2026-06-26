import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex h-24 w-[96%] items-center rounded-3xl border border-white/10 bg-black/30 px-12 backdrop-blur-xl">
        {/* Logo */}
        <div className="w-[360px]">
          <Link to="/" className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/40 bg-violet-600/20 shadow-lg shadow-violet-700/20">
              <span className="text-xl">⚔️</span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white">
              <span className="text-violet-400">Code</span>Quest
            </h1>

          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 hidden justify-center px-12 lg:flex">

          <div className="flex items-center gap-16">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-violet-400"
                  : "text-lg font-medium text-gray-300 transition hover:text-white"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/languages"
              className="text-lg font-medium text-gray-300 hover:text-white transition"
            >
              Languages
            </NavLink>

            <NavLink
              to="/"
              className="text-lg font-medium text-gray-300 hover:text-white transition"
            >
              Roadmap
            </NavLink>

            <NavLink
              to="/"
              className="text-lg font-medium text-gray-300 hover:text-white transition"
            >
              Challenges
            </NavLink>

            <NavLink
              to="/"
              className="text-lg font-medium text-gray-300 hover:text-white transition"
            >
              About
            </NavLink>

          </div>

        </div>

        {/* Right Buttons */}
        <div className="w-[300px] flex items-center justify-end gap-4">

          <Link
            to="/login"
            className="rounded-2xl border border-violet-500/30 px-8 py-3 text-lg font-semibold text-white transition hover:border-violet-400 hover:bg-violet-500/10"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-3 text-lg font-semibold text-white shadow-[0_15px_50px_rgba(139,92,246,.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            ✨ Start Quest  
          </Link>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;