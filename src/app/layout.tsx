import type { Metadata } from "next";

import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/sass/bootstrap.scss";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
