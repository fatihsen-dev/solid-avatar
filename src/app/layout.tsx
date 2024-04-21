import StoreProvider from "@/context/store/Provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Solid Avatar",
   description: "Solid Avatar is a simple avatar generator.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <StoreProvider>{children}</StoreProvider>
         </body>
      </html>
   );
}
