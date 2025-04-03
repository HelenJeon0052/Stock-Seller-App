import type { Metadata } from "next";
import "./globals.css";


import { NextLayout, NextProvider } from "./providers";
import { geistSans } from "./utils/fonts";

export const metadata: Metadata = {
  title: "Stock Seller App",
  description: "이미지를 구매할 수 있어요",
  keywords: ['이미지','그래픽','디자인'],
  openGraph: {
    siteName: "Stock Seller App",
    locale: "ko_KR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <NextProvider>
          <NextLayout>
              {children}
          </NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}