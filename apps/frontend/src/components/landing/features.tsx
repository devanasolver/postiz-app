export function Features() {
  return (
    <section className="px-4 md:px-10 lg:px-40 py-24 bg-white dark:bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-primary text-sm font-black uppercase tracking-widest">Efficiency first</h2>
          <h1 className="text-[#0d0d1b] dark:text-white tracking-tight text-4xl md:text-5xl font-black max-w-[720px]">
            Smarter scheduling for modern teams
          </h1>
          <p className="text-[#4c4c9a] dark:text-gray-400 text-lg font-medium max-w-[720px]">Everything you need to grow your social presence without the manual grind.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group flex flex-col gap-4 rounded-2xl border border-[#cfcfe7] dark:border-white/10 bg-[#f8f8fc] dark:bg-white/5 p-8 hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d0d1b] dark:text-white text-xl font-bold">AI Content Gen</h3>
              <p className="text-[#4c4c9a] dark:text-gray-400 text-sm font-medium leading-relaxed">Generate engaging captions and posts in seconds using our proprietary LLMs.</p>
            </div>
          </div>
          <div className="group flex flex-col gap-4 rounded-2xl border border-[#cfcfe7] dark:border-white/10 bg-[#f8f8fc] dark:bg-white/5 p-8 hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d0d1b] dark:text-white text-xl font-bold">Optimal Timing</h3>
              <p className="text-[#4c4c9a] dark:text-gray-400 text-sm font-medium leading-relaxed">Reach your audience when they are most active with data-driven scheduling.</p>
            </div>
          </div>
          <div className="group flex flex-col gap-4 rounded-2xl border border-[#cfcfe7] dark:border-white/10 bg-[#f8f8fc] dark:bg-white/5 p-8 hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">bar_chart</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d0d1b] dark:text-white text-xl font-bold">Unified Analytics</h3>
              <p className="text-[#4c4c9a] dark:text-gray-400 text-sm font-medium leading-relaxed">A unified view of your performance across LinkedIn, Twitter, and Instagram.</p>
            </div>
          </div>
          <div className="group flex flex-col gap-4 rounded-2xl border border-[#cfcfe7] dark:border-white/10 bg-[#f8f8fc] dark:bg-white/5 p-8 hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined">calendar_today</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d0d1b] dark:text-white text-xl font-bold">Visual Planner</h3>
              <p className="text-[#4c4c9a] dark:text-gray-400 text-sm font-medium leading-relaxed">Drag-and-drop your way to a perfect social feed with our intuitive planner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
