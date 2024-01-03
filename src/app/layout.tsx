import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Image from "next/image";
import bg from "@/assets/bg.jpg";
import { cn } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "愛 聚時光",
  description: "愛 聚時光",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("h-screen relative", inter.className)}>
        <div className="fixed inset-0">
          <Image alt="" src={bg} className="object-cover object-bottom" fill />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
