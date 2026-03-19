import PhoneMockup from "@/components/PhoneMockup";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background blobs */}
      <div className="blob-1" />
      <div className="blob-2" />
      <div className="blob-3" />

      {/* Decorative circles */}
      <div className="circle-decoration w-64 h-64 top-20 left-[-80px] opacity-30" />
      <div className="circle-decoration w-40 h-40 top-40 right-20 opacity-20" />
      <div className="circle-decoration w-96 h-96 bottom-[-100px] right-[-150px] opacity-10" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            NeoBank
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">
            Возможности
          </a>
          <a href="#how" className="hover:text-white transition-colors">
            Как это работает
          </a>
          <a href="#" className="hover:text-white transition-colors">
            О нас
          </a>
        </div>
        <button className="text-sm text-accent border border-accent/30 px-4 py-2 rounded-full hover:bg-accent/10 transition-colors">
          Войти
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-20 gap-12 lg:gap-8 max-w-7xl mx-auto">
        {/* Left — text content */}
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-full px-4 py-1.5 text-xs text-slate-300 w-fit mx-auto lg:mx-0">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Открыт ранний доступ
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Банк, который
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              работает на тебя
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
            Открой счёт за 2 минуты. Виртуальная карта сразу. Полный контроль
            над деньгами — в одном приложении.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-glow bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3.5 rounded-full text-base transition-all">
              Получить ранний доступ
            </button>
            <button className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 px-8 py-3.5 rounded-full text-base transition-all">
              Узнать больше
            </button>
          </div>

          {/* Social proof hint */}
          <div className="flex items-center gap-3 justify-center lg:justify-start pt-2">
            <div className="flex -space-x-2">
              {[
                "bg-blue-500",
                "bg-purple-500",
                "bg-green-500",
                "bg-orange-500",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 ${bg} rounded-full border-2 border-background`}
                />
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              <span className="text-white font-medium">2,400+</span> в списке
              ожидания
            </p>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="relative flex-shrink-0">
          {/* Glow behind phone */}
          <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-110" />
          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </section>
    </main>
  );
}
