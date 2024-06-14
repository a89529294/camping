import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ProgressBar,
  ProgressBarLink,
} from "@/components/contexts/progress-bar-context";

import { RouteContextProvider } from "@/components/contexts/route-context";
import { WeatherCell } from "@/components/weather-cell";
import { cn } from "@/utils";
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
        <ProgressBar className="fixed top-0 z-50 h-1 bg-[#d6edea]">
          <RouteContextProvider
            footer={<Footer weatherCell={<WeatherCell />} />}
          >
            {children}
          </RouteContextProvider>
        </ProgressBar>
      </body>
    </html>
  );
}
