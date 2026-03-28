export default function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 justify-center flex-wrap ${className}`}>
      {/* App Store */}
      <a
        href="#"
        aria-label="Скачать в App Store"
        className="inline-flex items-center gap-2.5 bg-white text-black rounded-xl px-5 py-3 hover:bg-white/90 transition-colors"
      >
        <svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-27.1-46.9-42.2-83.7-45.3-35.3-3-73.7 20.8-87.7 20.8-14.7 0-48.5-19.6-72.6-19.6C78.3 140.5 32 179.5 32 266c0 26.2 4.8 53.3 14.4 81.2 12.8 36.8 59 126.8 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-84.4zM262.5 87.8c28-33.7 24.3-64.6 23.4-75.8-23.3 1.4-50.5 16-66.3 34.4-17.3 20-27.3 44.4-25 72.2 25.5 2 48.8-13.3 67.9-30.8z" />
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-[10px] leading-tight opacity-70">Загрузите в</span>
          <span className="text-sm font-semibold leading-tight">App Store</span>
        </div>
      </a>
      {/* Google Play */}
      <a
        href="#"
        aria-label="Скачать в Google Play"
        className="inline-flex items-center gap-2.5 bg-white text-black rounded-xl px-5 py-3 hover:bg-white/90 transition-colors"
      >
        <svg width="20" height="24" viewBox="0 0 512 512" fill="none">
          <path d="M48 59.5V452.5C48 464.5 56 474 66.5 476L291 256L66.5 36C56 38 48 47.5 48 59.5Z" fill="#4285F4" />
          <path d="M291 256L66.5 476C72 478 78 478 84 475L336 331L291 256Z" fill="#34A853" />
          <path d="M445 244L380 207L336 331L445 268C456 262 456 250 445 244Z" fill="#FBBC04" />
          <path d="M84 37C78 34 72 34 66.5 36L291 256L336 181L84 37Z" fill="#EA4335" />
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-[10px] leading-tight opacity-70">Доступно в</span>
          <span className="text-sm font-semibold leading-tight">Google Play</span>
        </div>
      </a>
    </div>
  );
}
