import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D'Bolang - Resto & Coffee Shop — Cicurug, Sukabumi",
  description:
    "Nikmati sajian autentik dengan pemandangan Gunung Salak yang memukau. Dari bebek goreng hingga kopi hangat — semua ada di sini.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
