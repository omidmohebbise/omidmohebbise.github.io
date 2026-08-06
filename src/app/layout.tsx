import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "@/components/nav-bar/NavBar";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omid Mohebbi — Senior Software Engineer",
  description: "Senior Software Engineer & Solution Architect specializing in Java, Spring, Cloud, and event-driven microservices. Based in Amsterdam, Netherlands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
