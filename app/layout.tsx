import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "402CAT Base Mint",
  description: "Mint 402CAT BASE, share the purr-fect meme, and unlock exclusive social perks right from Farcaster!",
  openGraph: {
    title: "402CAT Base Mint",
    description: "Mint 402CAT BASE tokens on Base network",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
