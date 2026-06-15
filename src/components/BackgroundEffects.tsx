const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse-soft" />
      <div className="absolute top-1/3 -right-48 w-[400px] h-[400px] rounded-full bg-violet-glow/15 blur-[100px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
    </div>
  );
};

export default BackgroundEffects;
