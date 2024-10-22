import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Kouer Login Mockup",
  description: "/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
