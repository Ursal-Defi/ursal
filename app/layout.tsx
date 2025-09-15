import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const basePath = process.env.NODE_ENV === 'production' ? '/ursal' : '';

export const metadata: Metadata = {
  title: "URSAL - Token de Unificação da América Latina",
  description: "Token virtual descentralizado que representa a integração e moeda fictícia da União das Repúblicas Socialistas da América Latina - URSAL. Disponível na rede Polygon.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
