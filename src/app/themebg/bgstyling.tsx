'use client';

export default function BackgroundAnimationSplash() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      <div className="
        absolute top-[-20%] left-[-10%]
        h-[420px] w-[420px]
        rounded-full
        bg-[#08011e]
        blur-3xl
        animate-splash
      " />

      <div className="
        absolute top-[30%] right-[-15%]
        h-[520px] w-[520px]
        rounded-full
        bg-[#050323]
        blur-3xl
        animate-splash-delay
      " />

      <div className="
        absolute bottom-[-20%] left-[20%]
        h-[480px] w-[480px]
        rounded-full
        bg-[#060114]
        blur-3xl
        animate-splash-slow
      " />

      <div className="
        absolute top-[15%] left-[40%]
        h-[300px] w-[300px]
        rounded-full
        bg-[#192b4c]
        blur-2xl
        animate-float
      " />

      <div className="
        absolute bottom-[10%] right-[30%]
        h-[260px] w-[260px]
        rounded-full
        bg-[#031a43]
        blur-2xl
        animate-float-slow
      " />

      <div className="
        absolute top-[45%] left-[10%]
        h-[220px] w-[220px]
        rounded-full
        bg-blue-400
        blur-xl
        animate-float-fast
        -z-10
      " />
    </div>
  );
}