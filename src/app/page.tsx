import PhoneMockup from "@/components/PhoneMockup";
import { LogoWordmark } from "@/components/Logo";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Soft ambient background */}
      <div className="mesh-bg" />

      {/* Navigation — liquid glass */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-5">
        <LogoWordmark iconSize={36} />
        <div className="hidden md:flex items-center gap-1">
          {["Возможности", "Как это работает", "О нас"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-slate-400 hover:text-foreground px-4 py-2 rounded-full hover:bg-white/5 transition-all"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="glass text-sm text-foreground px-5 py-2.5 rounded-full hover:bg-white/[0.06] transition-all">
          Войти
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-24 gap-16 lg:gap-8 max-w-7xl mx-auto">
        {/* Left — text content */}
        <div className="flex flex-col gap-7 max-w-xl text-center lg:text-left">
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-slate-400 w-fit mx-auto lg:mx-0">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Открыт ранний доступ
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
            Банк, который
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-300">
              работает на тебя
            </span>
          </h1>

          <p className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
            Открой счёт за 2 минуты. Виртуальная карта сразу. Полный контроль
            над деньгами — в одном приложении.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-glow bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all">
              Получить ранний доступ
            </button>
            <button className="glass text-slate-300 hover:text-foreground px-8 py-3.5 rounded-full text-base transition-all hover:bg-white/[0.06] font-medium">
              Узнать больше
            </button>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="relative flex-shrink-0">
          {/* Soft glow behind phone */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] scale-150" />

          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-8 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-base font-medium mb-4 tracking-wide uppercase">
            Возможности
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Всё что нужно.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-300">
              Ничего лишнего.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card — Карта */}
          <div className="glass glass-shine rounded-3xl p-8 group hover:bg-white/[0.06] transition-all duration-300">
            <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full border border-accent/20 animate-spin-slow" />
              <div className="w-10 h-10 rounded-full bg-accent/8 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-accent to-indigo-300 animate-spin-slow-reverse" />
              </div>
              <div className="absolute w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(79,110,247,0.4)] animate-orbit" />
              <div className="absolute w-10 h-10 rounded-full border border-accent/10 animate-ping-soft" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Карта за секунды</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Виртуальная карта сразу после регистрации. Платежи онлайн и оффлайн — без ожидания и визита в отделение.
            </p>
          </div>

          {/* Card — Контроль */}
          <div className="glass glass-shine rounded-3xl p-8 group hover:bg-white/[0.06] transition-all duration-300">
            <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full border border-violet-400/20 animate-spin-slow" />
              <div className="absolute w-11 h-11 rounded-full border border-violet-400/25 animate-spin-slow-reverse" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 shadow-[0_0_16px_rgba(139,92,246,0.25)] animate-pulse-glow" />
              <div className="absolute w-16 h-[1px] bg-gradient-to-r from-transparent via-violet-400/20 to-transparent animate-spin-slow" />
              <div className="absolute h-16 w-[1px] bg-gradient-to-b from-transparent via-violet-400/20 to-transparent animate-spin-slow" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Прозрачные траты</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Каждая операция с категорией, мерчантом и статусом. Установи лимиты одним тапом — никаких сюрпризов.
            </p>
          </div>

          {/* Card — Переводы */}
          <div className="glass glass-shine rounded-3xl p-8 group hover:bg-white/[0.06] transition-all duration-300">
            <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <div className="absolute w-10 h-10 rounded-full border border-emerald-400/30 -left-0 top-3 animate-spin-slow" />
              <div className="absolute w-10 h-10 rounded-full border border-teal-400/30 right-0 top-3 animate-spin-slow-reverse" />
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-400/30 to-teal-400/15 mt-1 animate-morph" />
              <div className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)] animate-orbit" style={{ animationDuration: "6s" }} />
              <div className="absolute w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.4)] animate-orbit" style={{ animationDuration: "6s", animationDelay: "3s" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Переводы без барьеров</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Между пользователями мгновенно. Банковские переводы без скрытых комиссий — просто и понятно.
            </p>
          </div>

          {/* Card — Безопасность */}
          <div className="glass glass-shine rounded-3xl p-8 group hover:bg-white/[0.06] transition-all duration-300">
            <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <div className="absolute w-11 h-11 rounded-lg border border-amber-400/20 animate-spin-slow" />
              <div className="absolute w-8 h-8 bg-gradient-to-br from-amber-400/10 to-orange-400/5 animate-morph" />
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 shadow-[0_0_12px_rgba(251,191,36,0.3)] animate-pulse-glow" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/70 animate-orbit" style={{ animationDuration: "7s" }} />
              <div className="absolute w-8 h-8 rounded-full border border-amber-400/10 animate-ping-soft" style={{ animationDelay: "1s" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Всё под контролем</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Заморозка карты, настройка лимитов, push-уведомление по каждой операции. Безопасность без компромиссов.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
