import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Orbitron } from "next/font/google";
import type { Metadata, Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://owasptiet.com"),
  title: {
    default: "OWASP TIET",
    template: "%s | OWASP TIET",
  },
  description:
    "OWASP TIET is a community-driven chapter focused on app security, workshops, and student-led initiatives.",
  keywords: [
    "OWASP",
    "OWASP TIET",
    "Thapar",
    "application security",
    "cybersecurity",
    "student chapter",
    "workshops",
    "events",
  ],
  authors: [{ name: "OWASP TIET" }],
  creator: "OWASP TIET",
  publisher: "OWASP TIET",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://owasptiet.com",
    siteName: "OWASP TIET",
    title: "OWASP TIET",
    description:
      "OWASP TIET is a community-driven chapter focused on app security, workshops, and student-led initiatives.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWASP TIET",
    description:
      "OWASP TIET is a community-driven chapter focused on app security, workshops, and student-led initiatives.",
    creator: "@owasptiet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
