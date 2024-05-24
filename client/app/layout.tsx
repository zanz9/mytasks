import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {cn} from "@/lib/utils";
import {Metadata} from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
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
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className) }>{children}</body>
    </html>
  );
}
