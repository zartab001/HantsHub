import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hants Hub',
  description: 'Hants Hub Service Marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
