import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovecchio Law",
  description: "Lovecchio Law is a small local law firm dedicated to advocating and representing our clients in multiple areas of the law"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="blue">
          {children}
        </Theme>
      </body>
    </html>
  );
}
