import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import 'bootstrap-icons/font/bootstrap-icons.css';

import '@/styles/css/global.css';
import '@/styles/css/spheres.css';

import '@/styles/sass/custom.scss';

import Navbar from '@/components/navbar';
import ThemeToggle from '@/components/theme-toggle';

const roboto = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Mi Portafolio Profesional - Miguel',
    description:
        'Soy Miguel Alvarado, desarrollador web especializado en JavaScript, TypeScript, Next.js, y Node.js. Explora mis proyectos, experiencia laboral y habilidades técnicas en este portafolio digital.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' data-bs-theme='dark'>
            <body className={roboto.className}>
                <Navbar />
                {children}
                <ThemeToggle />
            </body>
        </html>
    );
}
