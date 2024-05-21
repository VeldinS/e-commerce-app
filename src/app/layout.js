import { Audiowide } from "next/font/google";
import { Roboto } from "next/font/google"

import "./globals.css";

const audiowide = Audiowide({subsets: ['latin'], weight: ['400'], variable: '--font-audiowide'});
const roboto = Roboto({subsets: ['latin'],weight: ['400'], variable: '--font-roboto'});

export const metadata = {
  title: "EV Goods",
  description: "Next generation goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <body className={`${audiowide.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
