import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { CustomCursor } from "../components/ui/cursor-ui/cursor-ui";
import { ShootingStars } from "@/components/ui/background-ui/shooting-stars";
import { StarsBackground } from "@/components/ui/background-ui/stars-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OWASP",
  description: "OWASP Society is a community-driven platform for security enthusiasts.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <CustomCursor /> */}
        <div className="absolute inset-0 z-10 bg-black">
          <StarsBackground />
          <ShootingStars />
        </div>
        {children}
      </body>
    </html>
  );
}
