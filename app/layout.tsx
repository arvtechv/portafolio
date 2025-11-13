import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | Carlos del Ángel Ramírez",
  description: "Ingeniero en Sistemas y Desarrollador Full Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-background text-white">{children}</body>
    </html>
  );
}
