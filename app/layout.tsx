import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlosdelangel.com"), // Change this to your deployment URL
  title: {
    default: "Carlos del Ángel Ramírez | Desarrollador Full Stack",
    template: "%s | Carlos del Ángel Ramírez",
  },
  description: "Ingeniero en Sistemas, desarrollador web y creador de experiencias digitales. Especializado en Next.js, React, Flutter y Blender 3D.",
  keywords: ["desarrollador", "full stack", "Next.js", "React", "Flutter", "portafolio", "Carlos del Ángel Ramírez", "software engineer"],
  authors: [{ name: "Carlos del Ángel Ramírez", url: "https://carlosdelangel.com" }],
  creator: "Carlos del Ángel Ramírez",
  openGraph: {
    title: "Carlos del Ángel Ramírez | Desarrollador Full Stack",
    description: "Ingeniero en Sistemas y Desarrollador Full Stack. Transformo ideas en aplicaciones funcionales.",
    url: "https://carlosdelangel.com",
    siteName: "Carlos del Ángel Portfolio",
    images: [
      {
        url: "/inicial.webp",
        width: 1200,
        height: 630,
        alt: "Carlos del Ángel Ramírez Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos del Ángel Ramírez | Desarrollador Full Stack",
    description: "Ingeniero en Sistemas y Desarrollador Full Stack.",
    images: ["/inicial.webp"],
  },
  alternates: {
    canonical: "https://carlosdelangel.com",
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
        <ThemeProvider>
          {children}
          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Carlos del Ángel Ramírez",
                url: "https://carlosdelangel.com",
                image: "https://carlosdelangel.com/avatar.jpg",
                jobTitle: "Full Stack Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Freelance",
                },
                sameAs: [
                  "https://github.com/arvtechv",
                  "https://linkedin.com/in/carlosdelangel",
                  "https://twitter.com/tuusuario", // Add your real Twitter if you have one
                ],
                description: "Ingeniero en Sistemas y Desarrollador Full Stack especializado en React, Next.js y Flutter.",
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
