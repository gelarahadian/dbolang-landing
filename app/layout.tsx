import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warung Teh Ufu – Cicurug, Sukabumi",
  description:
    "Warung makan dengan mie ayam, bakso, sate ayam, dan karedok. Harga murah meriah, rasa mantul!",
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
