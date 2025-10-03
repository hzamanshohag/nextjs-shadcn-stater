// app/layout.tsx (Next 13+ / 15 compatible)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers"; // <- client-only stuff here

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "RadientUI - Beautiful UI Components",
    template: "%s | RadientUI",
  },
  description:
    "A comprehensive component library built with Tailwind CSS and Shadcn UI for React & Next.js",
  keywords: [
    "UI components",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Shadcn UI",
    "component library",
  ],
  authors: [{ name: "Hasanuzzaman" }],
  creator: "Hasanuzzaman",
  publisher: "RadientUI",
  metadataBase: new URL("https://radientui.com"),
  openGraph: {
    title: "RadientUI - Beautiful UI Components",
    description:
      "A comprehensive component library built with Tailwind CSS and Shadcn UI for React & Next.js",
    url: "https://radientui.com",
    siteName: "RadientUI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RadientUI - Beautiful UI Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RadientUI - Beautiful UI Components",
    description:
      "A comprehensive component library built with Tailwind CSS and Shadcn UI",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white min-h-screen`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
