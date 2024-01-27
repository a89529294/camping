"use client";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { cn } from "@/utils";

import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
// import bg from "@/assets/bg.jpg";
// import mobileBg from "@/assets/mobile-bg.jpg";
// import mobileNonIndexBg from "@/assets/mobile-non-index-bg.jpg";
import bg from "@/assets/new-bg.jpg";
import { AnimatePage } from "@/components/animate-page";
import { PageCloseButton } from "@/components/page-close-button";
import greenChevronDown from "@/assets/icons/green-chevron-down.svg";

type Visibility = "hidden" | "showButton" | "visible";
type Dir = "ltr" | "rtl";

type ContextValue = {
  visibility: Visibility;
  setVisibility: Dispatch<SetStateAction<Visibility>>;
  dir: Dir;
  setDir: Dispatch<SetStateAction<Dir>>;
};

const routeContext = createContext<ContextValue>({} as ContextValue);

// const visibility = "visible";
// const setVisibility = (() => {}) as any;
// const dir = "ltr";
// const setDir = (() => {}) as any;

export function RouteContextProvider({ children }: { children: ReactNode }) {
  const [visibility, setVisibility] = useState<Visibility>("hidden");
  const [dir, setDir] = useState<Dir>("rtl");
  const pathname = usePathname();
  const isIndex = pathname === "/";
  const showMobileBg = pathname !== "/" && pathname !== "/contact";

  useEffect(() => {
    if (pathname === "/") setVisibility("hidden");
    else setVisibility("visible");
  }, [pathname]);

  return (
    <routeContext.Provider value={{ visibility, setVisibility, dir, setDir }}>
      <div
        id="mobile-page-container"
        className={cn(
          "flex h-full flex-col overflow-hidden",
          isIndex ? "" : "sm:min-h-full sm:overflow-auto",
        )}
      >
        {/* background image on desktop and mobile index */}
        <div className={cn("fixed inset-0 -z-20")}>
          <Image
            alt=""
            src={bg}
            className="object-cover object-bottom sm:hidden"
            fill
          />
          {isIndex && (
            <Image
              alt=""
              // src={mobileBg}
              src={bg}
              className="hidden h-[calc(100dvh-90px)] w-full object-cover object-[-100px_bottom] sm:block"
            />
          )}
        </div>
        <Header />

        {/* background image on mobile routes other than index and contact */}
        {showMobileBg && (
          <Image
            alt=""
            // src={mobileNonIndexBg}
            src={bg}
            className="relative z-10 hidden aspect-[393/170] w-full object-cover object-bottom sm:block"
          />
        )}
        <main
          id="page-container"
          className="fixed inset-x-36 bottom-0 h-[calc(100%-176px)] translate-y-0 bg-green-800/[0.93] pt-16 transition has-[button[data-visibility='hidden']]:translate-y-full has-[button[data-visibility='showButton']]:translate-y-[calc(100%-80px)] xl:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-70px)] lg:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-60px)] md:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-45px)] sm:hidden"
        >
          <PageCloseButton />
          {/* green downward chevrons row */}
          <div className="mx-8 flex overflow-hidden">
            {[...Array(100)].fill("").map((_, idx) => (
              <Image key={idx} alt="" src={greenChevronDown} />
            ))}
          </div>
          <div className="relative ml-8 mr-4 h-[calc(100%-5px)] overflow-y-auto pb-40 pt-5 scrollbar-thin scrollbar-thumb-green-200">
            {/* <AnimatePage></AnimatePage> */}
            {children}
          </div>
        </main>

        <main className="hidden sm:block">{children}</main>
        <Footer hide={!isIndex} />
      </div>
    </routeContext.Provider>
  );
}

export const useRouteContext = () => useContext(routeContext);
