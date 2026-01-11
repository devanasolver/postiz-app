export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7e7f3] dark:border-white/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-10 lg:px-40 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-2 text-primary dark:text-white">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">auto_awesome</span>
          </div>
          <h2 className="text-[#0d0d1b] dark:text-white text-xl font-extrabold leading-tight tracking-tight">Schedly AI</h2>
        </div>
        <nav className="hidden md:flex flex-1 justify-center gap-9">
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm font-semibold hover:text-primary dark:hover:text-white transition-colors" href="#">Features</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm font-semibold hover:text-primary dark:hover:text-white transition-colors" href="#">Pricing</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm font-semibold hover:text-primary dark:hover:text-white transition-colors" href="#">Customers</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm font-semibold hover:text-primary dark:hover:text-white transition-colors" href="#">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-transparent border border-[#cfcfe7] dark:border-white/10 text-[#0d0d1b] dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
            Log In
          </button>
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
