import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Carlos del Ángel Ramírez | Desarrollador Full Stack",
  description: "Ingeniero en Sistemas, desarrollador web y creador de experiencias digitales. Especializado en Next.js, React, Flutter y Blender 3D.",
  keywords: ["desarrollador", "full stack", "Next.js", "React", "Flutter", "portafolio"],
  authors: [{ name: "Carlos del Ángel Ramírez" }],
  openGraph: {
    title: "Carlos del Ángel Ramírez | Desarrollador Full Stack",
    description: "Ingeniero en Sistemas y Desarrollador Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
