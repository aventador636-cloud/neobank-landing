import PhoneMockup from "@/components/PhoneMockup";
import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ScrollPhone from "@/components/ScrollPhone";
import HeroCard from "@/components/HeroCard";
import StoreButtons from "@/components/StoreButtons";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Soft ambient background */}
      <div className="mesh-bg" />

      <Navbar />

      {/* Hero */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 pt-8 lg:pt-24 pb-10 lg:pb-24 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {/* Left — text content */}
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
            Банк, который
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-300">
              работает на тебя
            </span>
          </h1>

          <p className="text-slate-300 text-xl md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
            Открой счёт за 2 минуты. Виртуальная карта сразу. Полный контроль
            над деньгами — в одном приложении.
          </p>

          {/* Floating card — mobile only */}
          <HeroCard />

          {/* Mobile: store buttons, Desktop: "Узнать больше" */}
          <StoreButtons className="lg:hidden" />
          <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-start">
            <button aria-label="Узнать больше о NeoBank" className="glass text-slate-300 hover:text-foreground px-8 py-3.5 rounded-full text-base transition-all hover:bg-white/[0.06] font-medium">
              Узнать больше
            </button>
          </div>

        </div>

        {/* Right — phone mockup (desktop only) */}
        <div className="relative flex-shrink-0 hidden lg:flex justify-center lg:block">
          {/* Soft glow behind phone */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] scale-150" />

          <ScrollPhone>
            <div className="relative phone-scaler">
              <PhoneMockup />
            </div>
          </ScrollPhone>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-8 md:px-16 lg:px-24 py-12 lg:py-24 max-w-7xl mx-auto">
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
            <AnimateOnScroll className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full border border-accent/20 animate-spin-slow" />
              <div className="w-10 h-10 rounded-full bg-accent/8 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-accent to-indigo-300 animate-spin-slow-reverse" />
              </div>
              <div className="absolute w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(79,110,247,0.4)] animate-orbit" />
              <div className="absolute w-10 h-10 rounded-full border border-accent/10 animate-ping-soft" />
            </AnimateOnScroll>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Карта за секунды</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Виртуальная карта сразу после регистрации. Платежи онлайн и оффлайн — без ожидания и визита в отделение.
            </p>
          </div>

          {/* Card — Контроль */}
          <div className="glass glass-shine rounded-3xl p-8 group hover:bg-white/[0.06] transition-all duration-300">
            <AnimateOnScroll className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full border border-violet-400/20 animate-spin-slow" />
              <div className="absolute w-11 h-11 rounded-full border border-violet-400/25 animate-spin-slow-reverse" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 shadow-[0_0_16px_rgba(139,92,246,0.25)] animate-pulse-glow" />
              <div className="absolute w-16 h-[1px] bg-gradient-to-r from-transparent via-violet-400/20 to-transparent animate-spin-slow" />
              <div className="absolute h-16 w-[1px] bg-gradient-to-b from-transparent via-violet-400/20 to-transparent animate-spin-slow" />
            </AnimateOnScroll>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Прозрачные траты</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Каждая операция с категорией, мерчантом и статусом. Установи лимиты одним тапом — никаких сюрпризов.
            </p>
          </div>

          {/* Card — Переводы */}
          <div className="glass glass-shine rounded-3xl p-8 group hover:bg-white/[0.06] transition-all duration-300">
            <AnimateOnScroll className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <div className="absolute w-10 h-10 rounded-full border border-emerald-400/30 -left-0 top-3 animate-spin-slow" />
              <div className="absolute w-10 h-10 rounded-full border border-teal-400/30 right-0 top-3 animate-spin-slow-reverse" />
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-400/30 to-teal-400/15 mt-1 animate-morph" />
              <div className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)] animate-orbit" style={{ animationDuration: "6s" }} />
              <div className="absolute w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.4)] animate-orbit" style={{ animationDuration: "6s", animationDelay: "3s" }} />
            </AnimateOnScroll>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Переводы без барьеров</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Между пользователями мгновенно. Банковские переводы без скрытых комиссий — просто и понятно.
            </p>
          </div>

          {/* Card — Безопасность */}
          <div className="glass glass-shine rounded-3xl p-8 group hover:bg-white/[0.06] transition-all duration-300">
            <AnimateOnScroll className="w-16 h-16 mb-6 relative flex items-center justify-center">
              <div className="absolute w-11 h-11 rounded-lg border border-amber-400/20 animate-spin-slow" />
              <div className="absolute w-8 h-8 bg-gradient-to-br from-amber-400/10 to-orange-400/5 animate-morph" />
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 shadow-[0_0_12px_rgba(251,191,36,0.3)] animate-pulse-glow" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/70 animate-orbit" style={{ animationDuration: "7s" }} />
              <div className="absolute w-8 h-8 rounded-full border border-amber-400/10 animate-ping-soft" style={{ animationDelay: "1s" }} />
            </AnimateOnScroll>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Всё под контролем</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Заморозка карты, настройка лимитов, push-уведомление по каждой операции. Безопасность без компромиссов.
            </p>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative z-10 py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Скачай{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-300">
              NeoBank
            </span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-light">
            Доступно бесплатно на iOS и Android. Открой счёт за пару минут.
          </p>
          <StoreButtons />
        </div>
      </section>

      {/* Trust bar — partners & licenses */}
      <section className="relative z-10 py-10">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <p className="text-center text-xs text-slate-400/60 uppercase tracking-widest mb-8">
            Лицензия Банка России №XXXX · Соответствие стандартам
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {/* ЦБ РФ — стилизованный герб с двуглавым орлом */}
            <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Щит */}
                <path d="M13 1L2 6v8c0 7.2 4.7 13.9 11 16 6.3-2.1 11-8.8 11-16V6L13 1z" stroke="#94a3b8" strokeWidth="1.2" fill="none" strokeOpacity="0.7"/>
                {/* Двуглавый орёл — стилизация */}
                <path d="M8 11c-1-2 0-4 2-5M18 11c1-2 0-4-2-5" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7"/>
                <path d="M10 8.5c1-0.5 2-0.5 3 0s2 0.5 3 0" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.7"/>
                <circle cx="10" cy="10" r="0.8" fill="#94a3b8" fillOpacity="0.7"/>
                <circle cx="16" cy="10" r="0.8" fill="#94a3b8" fillOpacity="0.7"/>
                {/* Крылья */}
                <path d="M6 13c-1.5-1-2-3-1.5-4.5M20 13c1.5-1 2-3 1.5-4.5" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.6"/>
                <path d="M7 14l-2-1M19 14l2-1" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.5"/>
                {/* Центральный щит */}
                <rect x="11" y="11" width="4" height="5" rx="0.5" stroke="#94a3b8" strokeWidth="0.8" fill="none" strokeOpacity="0.7"/>
                <path d="M13 13v2M12 14.5h2" stroke="#94a3b8" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.6"/>
                {/* Хвост */}
                <path d="M11 17l2 3 2-3" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6"/>
              </svg>
              <span className="text-sm font-medium text-slate-400/70">Банк России</span>
            </div>

            {/* Visa — classic blue wordmark */}
            <div className="hover:opacity-90 transition-opacity">
              <svg width="60" height="20" viewBox="0 0 1000 324" xmlns="http://www.w3.org/2000/svg">
                <path d="M431.3 1.5L353.6 322.2H278.1L355.8 1.5H431.3ZM745.5 208.3L783.3 104.5L805.1 208.3H745.5ZM825.7 322.2H893.9L834 1.5H769.8C755.3 1.5 743.1 9.8 737.7 22.7L620.3 322.2H697.4L712.7 280H806.2L825.7 322.2ZM640 215.6C640.3 126.3 516.3 121.4 517.1 81.4C517.4 69.5 528.8 56.8 553.6 53.6C565.9 52.1 600.5 51 639.8 69.1L655.5 2.7C634.8-5.5 608.2-13 575.3-13C502.7-13 451.4 25.4 451 81.9C450.5 124.1 488.8 147.5 518 161.6C548.2 176.1 558.5 185.7 558.3 199C558 219.4 533.8 228.5 511.2 228.9C468.1 229.4 443.4 217.6 423.5 208.7L407.3 277.5C427.4 286.3 465.1 294.1 504.2 294.5C581.3 294.5 639.8 256.5 640 215.6ZM384.7 1.5L268.4 322.2H190.8L133.5 54.4C130.2 41.1 127.3 36.3 117 30.7C100.6 21.8 73.8 13.5 50.4 8.4L52.2 1.5H178.6C194.3 1.5 208.2 11.8 211.7 29.7L242.8 196.9L319.5 1.5H384.7Z" fill="#1A1F71"/>
              </svg>
            </div>

            {/* Mastercard — metal premium */}
            <div className="hover:opacity-90 transition-opacity flex flex-col items-center gap-0.5">
              <svg width="42" height="26" viewBox="0 0 999 618" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mc-left" x1="73" y1="0" x2="691" y2="618" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#b0b0b0"/>
                    <stop offset="40%" stopColor="#8a8a8a"/>
                    <stop offset="60%" stopColor="#d4d4d4"/>
                    <stop offset="100%" stopColor="#9a9a9a"/>
                  </linearGradient>
                  <linearGradient id="mc-right" x1="308" y1="0" x2="926" y2="618" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#c9c9c9"/>
                    <stop offset="35%" stopColor="#a0a0a0"/>
                    <stop offset="65%" stopColor="#e0e0e0"/>
                    <stop offset="100%" stopColor="#a8a8a8"/>
                  </linearGradient>
                  <linearGradient id="mc-mid" x1="382" y1="66" x2="618" y2="552" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d6d6d6"/>
                    <stop offset="50%" stopColor="#b8b8b8"/>
                    <stop offset="100%" stopColor="#e8e8e8"/>
                  </linearGradient>
                </defs>
                <circle cx="382" cy="309" r="309" fill="url(#mc-left)" opacity="0.7"/>
                <circle cx="617" cy="309" r="309" fill="url(#mc-right)" opacity="0.6"/>
                <path d="M499.6 552.1c71.2-56.7 117.6-144.2 117.6-242.9S570.8 122.9 499.6 66.1C428.3 122.9 382 210.4 382 309.2s46.4 186.3 117.6 242.9z" fill="url(#mc-mid)" opacity="0.8"/>
              </svg>
            </div>

            {/* МИР — official logo */}
            <div className="hover:opacity-80 transition-opacity">
              <svg width="60" height="18" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="mir-grad" x1="370" x2="290" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1F5CD7"/>
                  <stop stopColor="#02AEFF" offset="1"/>
                </linearGradient>
                <path d="m31 13h33c3 0 12-1 16 13 3 9 7 23 13 44h2c6-22 11-37 13-44 4-14 14-13 18-13h31v96h-32v-57h-2l-17 57h-24l-17-57h-3v57h-31m139-96h32v57h3l21-47c4-9 13-10 13-10h30v96h-32v-57h-2l-21 47c-4 9-14 10-14 10h-30m142-29v29h-30v-50h98c-4 12-18 21-34 21" fill="#0f754e"/>
                <path d="m382 53c4-18-8-40-34-40h-68c2 21 20 40 39 40" fill="url(#mir-grad)"/>
              </svg>
            </div>

            {/* PCI DSS — shield with checkmark */}
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Щит */}
                <path d="M12 1L2 5.5v6.5c0 6.8 4.3 13.2 10 15 5.7-1.8 10-8.2 10-15V5.5L12 1z" stroke="#94a3b8" strokeWidth="1.3" fill="none" strokeOpacity="0.7"/>
                {/* Внутренний щит */}
                <path d="M12 4L5 7.5v4.5c0 5 3.2 9.8 7 11 3.8-1.2 7-6 7-11V7.5L12 4z" stroke="#94a3b8" strokeWidth="0.6" fill="none" strokeOpacity="0.35"/>
                {/* Галочка */}
                <path d="M8 13l3 3 5-6" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-400/70 leading-tight">PCI DSS</span>
                <span className="text-[9px] text-slate-400/40 leading-tight">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-16 pb-8 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="footerLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4f6ef7" />
                      <stop offset="100%" stopColor="#3b5de6" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#footerLogoBg)" />
                  <path d="M35 72V32h6l18 28V32h6v40h-6L41 44v28h-6z" fill="white" />
                </svg>
                <span className="font-bold text-base text-white">NeoBank</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
                Современный цифровой банк для тех, кто ценит скорость, прозрачность и удобство.
              </p>
            </div>

            {/* Продукт */}
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Продукт</p>
              <ul className="flex flex-col gap-2.5">
                {["Дебетовая карта", "Переводы", "Вклады", "Кэшбэк", "Подписка Premium"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Компания */}
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Компания</p>
              <ul className="flex flex-col gap-2.5">
                {["О нас", "Карьера", "Блог", "Пресс-центр", "Контакты"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Правовая информация */}
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Документы</p>
              <ul className="flex flex-col gap-2.5">
                {["Пользовательское соглашение", "Политика конфиденциальности", "Тарифы", "Раскрытие информации", "Лицензии"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 pb-[env(safe-area-inset-bottom)] flex items-center justify-center">
            <p className="text-slate-400/50 text-xs">
              © 2026 NeoBank. Все права защищены. Лицензия Банка России №XXXX
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
