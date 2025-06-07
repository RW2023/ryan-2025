// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const robotoAccent = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Wilson – Portfolio",
  description: "Full-stack web developer and creative builder.",
  manifest: "/favicon/manifest.json",
  themeColor: "#ffffff",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [{ rel: "shortcut icon", url: "/favicon/favicon.ico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Wilson – Portfolio",
    description: "Full-stack web developer and creative builder.",
    images: ["/favicon/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${robotoAccent.variable}`}
    >
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="cupcake">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
