import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flowdash - Advanced Analytics to Grow Your Business",
  description: "Turn data into decisions with real-time insights, automated reporting, and seamless collaboration. Advanced analytics platform for growing businesses.",
  keywords: ["analytics", "business intelligence", "data insights", "reporting", "dashboard"],
  authors: [{ name: "Flowdash" }],
  creator: "Flowdash",
  publisher: "Flowdash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flowdash.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flowdash - Advanced Analytics to Grow Your Business",
    description: "Turn data into decisions with real-time insights, automated reporting, and seamless collaboration.",
    url: "https://flowdash.vercel.app",
    siteName: "Flowdash",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Flowdash - Advanced Analytics Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowdash - Advanced Analytics to Grow Your Business",
    description: "Turn data into decisions with real-time insights, automated reporting, and seamless collaboration.",
    images: ["/og.png"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
