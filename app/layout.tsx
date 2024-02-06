import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./layout/Header/Header";
import VerticalLayout from "./layout/VerticalHeader/VerticalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=
      {inter.className}>
        {/* <Header/> */}
        <VerticalLayout/>
        {children}
        </body>
    </html>
  );
}