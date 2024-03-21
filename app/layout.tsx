import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ngrim",
  description: "Watch Your Favourite Movies & Tv Shows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
