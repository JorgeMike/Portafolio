import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Portafolio Profesional - Miguel",
  description: "Soy Miguel Alvarado, desarrollador web especializado en JavaScript, TypeScript, Next.js, y Node.js. Explora mis proyectos, experiencia laboral y habilidades técnicas en este portafolio digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
