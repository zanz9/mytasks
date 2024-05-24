import {Inter} from "next/font/google";
import "./globals.css";
import './app.css'
import React from "react";
import {cn} from "@/lib/utils";
import {Metadata} from "next";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "MyTasks",
    authors: {
        name: "zAnz",
        url: "https://github.com/zanz9",
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={cn("min-h-screen _bg-background antialiased", inter.className)}>
        {children}
        </body>
        </html>
    );
}
