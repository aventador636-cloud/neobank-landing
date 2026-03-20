import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "NeoBank — Банк, который работает на тебя",
  description:
    "Открой счёт за 2 минуты. Виртуальная карта сразу. Полный контроль над деньгами.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
