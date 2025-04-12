import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Fametonic Application",
  description:
    "Fametonic is a platform that helps you grow your social media presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(
          figtree.variable,
          urbanist.variable,
          "min-h-screen overflow-x-hidden antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
