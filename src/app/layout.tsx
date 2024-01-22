import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import bg from "@/assets/bg.jpg";
import mobileBg from "@/assets/mobile-bg.jpg";
import greenChevronDown from "@/assets/icons/green-chevron-down.svg";
import Footer from "@/components/footer";
import { PageCloseButton } from "@/components/page-close-button";
import { cn } from "@/utils";
import { RouteContextProvider } from "@/components/contexts/route-context";
import { AnimatePage } from "@/components/animate-page";
import localFont from "next/font/local";
import { Pathname } from "@/components/pathname";

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
      <body className={cn(" h-full", inter.className, biaukai.variable)}>
        <RouteContextProvider>
          <Pathname>
            {/* background image */}
            <div className="fixed inset-0 -z-20">
              <Image
                alt=""
                src={bg}
                className="object-cover object-bottom sm:hidden"
                fill
              />
              <Image
                alt=""
                src={mobileBg}
                className="object-position-left-bottom hidden h-[calc(100dvh-90px)] w-full object-cover sm:block"
              />
            </div>
            <Header />
            <main
              id="page-container"
              className="fixed inset-x-36 bottom-0 h-[calc(100%-176px)] translate-y-0  bg-green-800/[0.93] pt-16 transition has-[button[data-visibility='hidden']]:translate-y-full has-[button[data-visibility='showButton']]:translate-y-[calc(100%-90px)] xl:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-80px)] lg:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-60px)] md:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-45px)]"
            >
              {/* <div className="bg-green-800/[0.93] relative h-full pt-16 "> */}
              <PageCloseButton />
              {/* green downward chevrons row */}
              <div className="mx-8 flex overflow-hidden">
                {[...Array(100)].fill("").map((_, idx) => (
                  <Image key={idx} alt="" src={greenChevronDown} />
                ))}
              </div>
              <div className="relative ml-8 mr-4 h-[calc(100%-5px)] overflow-y-auto pb-40 pt-5 scrollbar-thin scrollbar-thumb-green-200">
                <AnimatePage>{children}</AnimatePage>
              </div>
              {/* </div> */}
            </main>
            <Footer />
          </Pathname>
        </RouteContextProvider>
      </body>
    </html>
  );
}
