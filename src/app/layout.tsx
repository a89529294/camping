import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import bg from "@/assets/bg.jpg";
import greenChevronDown from "@/assets/icons/green-chevron-down.svg";
import Footer from "@/components/footer";
import { PageCloseButton } from "@/components/page-close-button";
import { cn } from "@/utils";
import { RouteContextProvider } from "@/components/route-context";

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
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={cn("flex h-full flex-col overflow-hidden", inter.className)}
      >
        <RouteContextProvider>
          {/* background image */}
          <div className="fixed inset-0 -z-20">
            <Image
              alt=""
              src={bg}
              className="object-cover object-bottom"
              fill
            />
          </div>
          <Header />
          <main className="fixed bottom-0 h-[calc(100%-176px)] translate-y-0 px-36 transition  has-[button[data-visibility='hidden']]:translate-y-full has-[button[data-visibility='showButton']]:translate-y-[calc(100%-90px)] xl:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-80px)] lg:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-60px)] md:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-45px)]">
            <div className="bg-green-800/[0.93] relative h-full pt-16 ">
              <PageCloseButton />

              {/* green downward chevrons row */}
              <div className="mx-8 flex overflow-hidden">
                {[...Array(100)].fill("").map((_, idx) => (
                  <Image key={idx} alt="" src={greenChevronDown} />
                ))}
              </div>
              <div className="scrollbar-thumb-green-200 relative ml-6 mr-4 h-[calc(100%-5px)] overflow-y-auto pb-40 pt-5 scrollbar-thin">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </RouteContextProvider>
      </body>
    </html>
  );
}
