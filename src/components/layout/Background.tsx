"use client";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left Glow */}

      <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[170px]" />

      {/* Right Glow */}

      <div className="absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full bg-violet-500/20 blur-[170px]" />

      {/* Center */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />

    </div>
  );
}