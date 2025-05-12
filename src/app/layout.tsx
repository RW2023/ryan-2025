import './globals.css';
import { ThemeProvider } from 'next-themes';
import DarkModeToggle from '@/app/components/DarkModeToggle';

export const metadata = {
  title: 'My Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system">
          <div className="min-h-screen flex flex-col">
            <header className="p-4 flex justify-end">
              <DarkModeToggle />
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
