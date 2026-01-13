export function Pricing() {
  return (
    <section className="px-4 md:px-10 lg:px-40 py-24">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col gap-4 mb-16">
        <h1 className="text-[#0d0d1b] dark:text-white text-4xl md:text-5xl font-black tracking-tight">Simple, transparent pricing</h1>
        <p className="text-[#4c4c9a] dark:text-gray-400 text-lg font-medium">No hidden fees. Scale as you grow.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
        <div className="flex flex-1 flex-col gap-8 rounded-2xl border border-[#cfcfe7] dark:border-white/10 bg-white dark:bg-white/5 p-8 hover:shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#4c4c9a] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Starter</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-[#0d0d1b] dark:text-white text-5xl font-black tracking-tighter">$0</span>
              <span className="text-[#4c4c9a] dark:text-gray-400 text-lg font-bold">/mo</span>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl h-12 bg-[#e7e7f3] dark:bg-white/10 text-[#0d0d1b] dark:text-white text-base font-bold hover:bg-[#d6d6ec] dark:hover:bg-white/20 transition-all">
            Get Started
          </button>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              5 Social profiles
            </li>
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              AI draft suggestions
            </li>
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              Basic analytics
            </li>
          </ul>
        </div>
        <div className="relative flex flex-1 flex-col gap-8 rounded-2xl border-2 border-primary bg-white dark:bg-[#15152a] p-8 shadow-2xl shadow-primary/10 transform scale-105 z-10">
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            Most Popular
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-primary text-sm font-bold uppercase tracking-wider">Pro</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-[#0d0d1b] dark:text-white text-5xl font-black tracking-tighter">$29</span>
              <span className="text-[#4c4c9a] dark:text-gray-400 text-lg font-bold">/mo</span>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl h-12 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
            Start Free Trial
          </button>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              Unlimited profiles
            </li>
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              Full AI generation
            </li>
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              Advanced reporting
            </li>
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              Team collaboration
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-8 rounded-2xl border border-[#cfcfe7] dark:border-white/10 bg-white dark:bg-white/5 p-8 hover:shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#4c4c9a] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Enterprise</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-[#0d0d1b] dark:text-white text-5xl font-black tracking-tighter">Custom</span>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl h-12 bg-[#e7e7f3] dark:bg-white/10 text-[#0d0d1b] dark:text-white text-base font-bold hover:bg-[#d6d6ec] dark:hover:bg-white/20 transition-all">
            Contact Sales
          </button>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              Custom integrations
            </li>
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              Dedicated account manager
            </li>
            <li className="flex gap-3 text-sm font-medium text-[#0d0d1b] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              SLA support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
