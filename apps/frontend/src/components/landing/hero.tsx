export function Hero() {
  return (
    <section className="px-4 md:px-10 lg:px-40 pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm">rocket_launch</span>
          v2.0 is now live
        </div>
        <h1 className="text-[#0d0d1b] dark:text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight max-w-[900px]">
          Social Media Management, <span className="text-primary italic">Reimagined</span> by AI.
        </h1>
        <p className="text-[#4c4c9a] dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-[700px]">
          Schedule, analyze, and automate your social presence across all platforms with Schedly’s intelligent engine. Grow 10x faster with less effort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex min-w-[180px] items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-2xl shadow-primary/30 hover:translate-y-[-2px] transition-all">
            Start for free
          </button>
          <button className="flex min-w-[180px] items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-white/5 border border-[#cfcfe7] dark:border-white/10 text-[#0d0d1b] dark:text-white text-lg font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
            Book a demo
          </button>
        </div>
        <div className="mt-12 w-full max-w-[1000px] aspect-[16/9] relative rounded-2xl border border-white/20 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)]" data-alt="Abstract interface of an AI dashboard with dark blue and purple gradients">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1111d4] via-[#4c4c9a] to-[#0d0d1b] opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[85%] h-[85%] bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="size-3 rounded-full bg-red-400"></div>
                <div className="size-3 rounded-full bg-yellow-400"></div>
                <div className="size-3 rounded-full bg-green-400"></div>
              </div>
              <div className="grid grid-cols-12 gap-4 h-full">
                <div className="col-span-3 border-r border-white/10 pr-4">
                  <div className="h-4 w-24 bg-white/20 rounded mb-4"></div>
                  <div className="flex flex-col gap-2">
                    <div className="h-8 w-full bg-white/10 rounded"></div>
                    <div className="h-8 w-full bg-white/10 rounded"></div>
                    <div className="h-8 w-full bg-primary rounded"></div>
                    <div className="h-8 w-full bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="col-span-9 flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                  </div>
                  <div className="h-48 bg-white/5 rounded-lg border border-dashed border-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
