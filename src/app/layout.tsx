import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/app/providres";

import siteMetadata from "../conf/site-metadata";
import "./globals.css";

export const metadata: Metadata = {
    title: { default: siteMetadata.name, template: `%s | ${siteMetadata.name}` },
    applicationName: siteMetadata.name,
    description: siteMetadata.description,
    authors: [siteMetadata.authors],
    icons: [{ url: siteMetadata.app_icon.src, sizes: siteMetadata.app_icon.sizes }],
};

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <Providers>
                <body className={inter.className}>{children}</body>
            </Providers>
        </html>
    );
}
