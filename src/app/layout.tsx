import { Providers } from "@/providers/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clipboard Manager for Mac",
  description:
    "A lightweight and professional clipboard management app for macOS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
