import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "int_ma1n",
  description: "Великий сайт int_ma1n",
  openGraph: {
    title: "int_ma1n",
    description: "Великий сайт int_ma1n",
    url: "https://intma1n.xyz",
    siteName: "int_ma1n",
    images: [
      {
        url: "https://i.pinimg.com/736x/89/00/ab/8900ab03924161378bf8473802809b02.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "int_ma1n",
    description: "Великий сайт int_ma1n",
    images: [
      "https://i.pinimg.com/736x/89/00/ab/8900ab03924161378bf8473802809b02.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Analytics />
      <SpeedInsights />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
