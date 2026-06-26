import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto flex h-24 w-full items-center justify-between px-8 lg:px-16 bg-black/30 backdrop-blur-md border-b border-white/10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/50 bg-violet-600/20">
            <span className="text-xl">⚔️</span>
          </div>

          <span className="text-3xl font-bold tracking-wide text-white">
            <span className="text-violet-400">Code</span>Quest
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-12">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-lg font-medium transition ${
                isActive
                  ? "text-violet-400"
                  : "text-gray-300 hover:text-white"
              }`
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

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <Link
            to="/login"
            className="rounded-xl border border-violet-500/40 px-7 py-3 text-lg font-semibold text-white transition duration-300 hover:border-violet-400 hover:bg-violet-500/10"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-violet-700/40 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/60"
          >
            ✨ Start Quest
          </Link>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;