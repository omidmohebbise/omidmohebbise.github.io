import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "@/components/nav-bar/NavBar";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O.mohebbi",
  description: "My Portoflio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mt-0 pt-0">
          <Header/>
          <NavBar />
          <div>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
