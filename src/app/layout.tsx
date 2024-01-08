import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Image from "next/image";
// import bg from "@/assets/bg-hd.png";
import bg from "@/assets/bg.jpg";
import { cn } from "@/utils";
import Footer from "@/components/footer";

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
      <body
        className={cn(
          "relative flex h-screen flex-col overflow-hidden",
          inter.className,
        )}
      >
        {/* background image */}
        <div className="fixed inset-0 -z-20">
          <Image alt="" src={bg} className="object-cover object-bottom" fill />
        </div>
        <Header />
        <main className="absolute mt-44 h-[calc(100%-176px)]  px-36">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
