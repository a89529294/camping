import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import bg from "@/assets/bg.jpg";
import mobileBg from "@/assets/mobile-bg.jpg";
import greenChevronDown from "@/assets/icons/green-chevron-down.svg";
import { PageCloseButton } from "@/components/page-close-button";
import { cn } from "@/utils";
import { RouteContextProvider } from "@/components/contexts/route-context";
import { AnimatePage } from "@/components/animate-page";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const biaukai = localFont({
  src: "../../public/biaukai.ttf",
  variable: "--font-biaukai",
});

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
    <html lang="en" className="h-full">
      <body className={cn("h-full", inter.className, biaukai.variable)}>
        <RouteContextProvider>
          {/* <Pathname>{children}</Pathname> */}
          {children}
        </RouteContextProvider>
      </body>
    </html>
  );
}
