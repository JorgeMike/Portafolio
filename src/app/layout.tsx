import type { Metadata } from "next";

import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/sass/bootstrap.scss";
import { roboto } from "./fonts";
import BootstrapClient from "@/components/bootstrap-client";

export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Welcome to my portfolio! I am a web developer with experience in Next.js, Nest.js, and TypeScript.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <body className={`${roboto.className}`}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
