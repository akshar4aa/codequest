function BackgroundGlow() {
  return (
    <>
      {/* Purple Glow */}
      <div className="absolute -top-24 left-20 h-80 w-80 rounded-full bg-violet-600/30 blur-[120px]" />

      {/* Cyan Glow */}
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Pink Glow */}
      <div className="absolute top-52 right-32 h-95 w-95 rounded-full bg-pink-500/20 blur-[100px]" />
    </>
  );
}

export default BackgroundGlow;