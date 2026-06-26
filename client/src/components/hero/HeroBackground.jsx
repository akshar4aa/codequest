function HeroBackground() {
  return (
    <>
      {/* Purple Glow */}
      <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[180px]" />

      {/* Cyan Glow */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Pink Glow */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[150px]" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-size-[45px_45px]" />
    </>
  );
}

export default HeroBackground;