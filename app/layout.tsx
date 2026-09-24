import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./print.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], axes: ["opsz"] });

export const metadata: Metadata = {
  title: { default: "Brand guide · Simpl Solutions", template: "%s · Simpl Solutions brand" },
  description: "The brand system for Simpl Solutions and every product under it.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} bg-canvas antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-30 focus:rounded-ctl focus:bg-surface focus:px-4 focus:py-2.5 focus:text-[13.5px] focus:text-strong"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="brand-guide flex flex-col items-center gap-6 px-4 py-10 md:px-14 md:py-14">
            {children}
          </main>
          <footer className="px-4 pb-10 text-center font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase">
            © 2026 Simpl Solutions Ltd
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
