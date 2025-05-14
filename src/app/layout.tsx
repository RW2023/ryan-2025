// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { IBM_Plex_Sans, Sora, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata = {
  title: "Ryan Wilson – Portfolio",
  description: "Full-stack web developer and creative builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibm.variable} ${sora.variable} ${spaceMono.variable}`}>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="p-4 text-center text-sm text-text-muted">
              © {new Date().getFullYear()} Ryan Wilson
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
