export function Footer() {
  return (
    <footer className="px-4 md:px-10 lg:px-40 py-16 border-t border-[#e7e7f3] dark:border-white/10 bg-[#f8f8fc] dark:bg-background-dark/50">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary dark:text-white">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
            </div>
            <h2 className="text-[#0d0d1b] dark:text-white text-lg font-extrabold leading-tight tracking-tight">Schedly AI</h2>
          </div>
          <p className="text-[#4c4c9a] dark:text-gray-400 text-sm font-medium leading-relaxed max-w-[280px]">
            The intelligent social media platform built for modern creators and high-growth teams.
          </p>
          <div className="flex gap-4">
            <a className="text-[#4c4c9a] dark:text-gray-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-[#4c4c9a] dark:text-gray-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#0d0d1b] dark:text-white font-bold text-sm">Product</h4>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Scheduler</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">AI Writer</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Analytics</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#0d0d1b] dark:text-white font-bold text-sm">Company</h4>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">About</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Careers</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#0d0d1b] dark:text-white font-bold text-sm">Legal</h4>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Terms</a>
          <a className="text-[#4c4c9a] dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Cookies</a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-[#e7e7f3] dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#4c4c9a] dark:text-gray-500 text-xs">© 2024 Schedly AI. All rights reserved.</p>
        <div className="flex gap-6">
          <button className="flex items-center gap-2 text-[#4c4c9a] dark:text-gray-500 text-xs font-bold">
            <span className="material-symbols-outlined text-sm">language</span>
            English (US)
          </button>
          <button className="flex items-center gap-2 text-[#4c4c9a] dark:text-gray-500 text-xs font-bold">
            <span className="material-symbols-outlined text-sm">dark_mode</span>
            Dark Mode
          </button>
        </div>
      </div>
    </footer>
  );
}
