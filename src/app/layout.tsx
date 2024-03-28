import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from 'flowbite-react';
import "@shared/css/globals.css";
import "@shared/css/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppProviders from "@shared/providers/AppProviders";
import React from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "North Bridge - Looking into the future - BOLD",
  description: "North bridge is an online platform that connects you with the shops around you in your immediate vicinity. Shop with us and explore the possibilities of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      {/* className='dark' */}
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <AppProviders>
          <main>
            {children}
          </main>
        </AppProviders>
      </body>
    </html>
  );
}
