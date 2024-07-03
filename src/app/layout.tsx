import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Assistant",
  description: "AI-powered coding assistant for your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}