// This is the code that is bundled for the client-side:

import type {Metadata} from 'next';
import {Montserrat} from 'next/font/google';
import './globals.sass';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import HeaderComponent from "@/components/Header/header";
import FooterComponent from "@/components/Footer/footer";
import styles from "@/components/Main/main.module.sass";

const inter = Montserrat({subsets: ['cyrillic']});
export const metadata: Metadata = {
    title: 'SONX',
    description: 'Концерты для вас',
};
export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
        </body>
        </html>
    );
}
