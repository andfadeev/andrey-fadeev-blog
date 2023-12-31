import Link from "next/link";
import "./globals.css";
import "./clojure.css";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { Footer } from "@/components/footer";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Andrey Fadeev | Home",
  description: "Andrey Fadeev | Home",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const linkClassName =
    "underline-offset-4 hover:underline outline-none hover:text-orange-600 dark:hover:text-yellow-600";
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${spaceGrotesk.className}`}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HX4Q1CYEE1"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HX4Q1CYEE1');`,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-4xl mx-auto py-10 px-4 h-full">
            <header>
              <div className="flex items-center justify-between">
                <nav className="mr-auto text-sm font-medium space-x-6">
                  <Link href="/" className={linkClassName}>
                    Home
                  </Link>
                  <Link href="/posts" className={linkClassName}>
                    Posts
                  </Link>
                  <Link className={linkClassName} href="/about">
                    About
                  </Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
