export function CTA() {
  return (
    <section className="px-4 md:px-10 lg:px-40 py-24 mb-20">
      <div className="max-w-[1000px] mx-auto bg-primary rounded-3xl p-12 text-center flex flex-col items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight leading-tight z-10">
          Ready to automate your <br />social growth?
        </h2>
        <p className="text-white/80 text-lg font-medium max-w-[600px] z-10">
          Join 10,000+ creators and brands who are using Schedly AI to save 20+ hours every month.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <button className="bg-white text-primary px-8 h-14 rounded-xl text-lg font-bold shadow-xl hover:scale-105 transition-all">
            Get started for free
          </button>
          <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 h-14 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">
            Talk to an expert
          </button>
        </div>
      </div>
    </section>
  );
}
