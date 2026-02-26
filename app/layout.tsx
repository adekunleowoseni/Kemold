import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OpticVision | Premium Eye Care & Eyewear",
  description: "Precision eye care and curated eyewear for every generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-[family-name:var(--font-display)] antialiased bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
