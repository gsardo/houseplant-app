import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { SessionProvider } from "@/components/auth/session-provider";
import { SignInButton } from "@/components/auth/sign-in-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HousePlant",
  description: "Help for a greener home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <div className="pattern" />
          <div className="wrapper">
            <div className="flex justify-between items-center mb-4">
              <SignInButton />
            </div>
            <Nav />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
