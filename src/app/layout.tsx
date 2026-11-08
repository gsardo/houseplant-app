import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";

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
      <body>
        <Nav />
        <main id="page">{children}</main>
      </body>
    </html>
  );
}
