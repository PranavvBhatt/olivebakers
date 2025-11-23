import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olive Bakers® - The Home Kitchen | Theme Cakes Online | FSSAI Registered",
  description:
    "Olive Bakers® - The Home Kitchen Vasundhara. FSSAI Registered (Govt. of India). Theme cakes online, fresh baked goods, celebration cakes. B2-703, Olive County, Sector 5, Vasundhara, Ghaziabad, Uttar Pradesh 201012.",
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
        {children}
      </body>
    </html>
  );
}
