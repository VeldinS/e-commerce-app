import { Inter } from "next/font/google";
import { Audiowide } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const audiowide = Audiowide({ subsets: ['latin'] });

export const metadata = {
  title: "EV Goods",
  description: "Next generation goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
