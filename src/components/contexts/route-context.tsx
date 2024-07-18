"use client";
import { cn } from "@/utils";
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

import { Header } from "@/components/header";
import Image from "next/image";
import greenChevronDown from "@/assets/icons/green-chevron-down.svg";
import bg from "@/assets/background-carousel/bg.jpg";
import bg1 from "@/assets/background-carousel/bg1.jpg";
import bg2 from "@/assets/background-carousel/bg2.jpg";
import bg3 from "@/assets/background-carousel/bg3.jpg";
import bg4 from "@/assets/background-carousel/bg4.jpg";
import bg5 from "@/assets/background-carousel/bg5.jpg";
import bg6 from "@/assets/background-carousel/bg6.jpg";

import { PageCloseButton } from "@/components/page-close-button";

type Visibility = "hidden" | "showButton" | "visible";
type Dir = "ltr" | "rtl";

type ContextValue = {
  visibility: Visibility;
  setVisibility: Dispatch<SetStateAction<Visibility>>;
  dir: Dir;
  setDir: Dispatch<SetStateAction<Dir>>;
};

const routeContext = createContext<ContextValue>({} as ContextValue);

const backgroundCarouselImages = [bg1, bg2, bg3, bg4, bg5, bg6];

export function RouteContextProvider({
  children,
  footer,
}: {
  children: ReactNode;
  footer: ReactNode;
}) {
  const [backgroundOneVisibility, setBackgroundOneVisibility] =
    useState("opacity-100");
  const [backgroundTwoVisibility, setBackgroundTwoVisibility] =
    useState("opacity-0");
  const [backgroundOneIndex, setBackgroundOneIndex] = useState(0);
  const [backgroundTwoIndex, setBackgroundTwoIndex] = useState(1);
  const [visibility, setVisibility] = useState<Visibility>("hidden");
  const [dir, setDir] = useState<Dir>("rtl");
  const pathname = usePathname();
  const isIndex = pathname === "/";
  const showMobileBg = pathname !== "/" && pathname !== "/contact";

  useEffect(() => {
    if (pathname === "/") setVisibility("hidden");
    else setVisibility("visible");
  }, [pathname]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundOneVisibility((pv) =>
        pv === "opacity-100" ? "opacity-0" : "opacity-100",
      );
      setBackgroundTwoVisibility((pv) =>
        pv === "opacity-100" ? "opacity-0" : "opacity-100",
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <routeContext.Provider value={{ visibility, setVisibility, dir, setDir }}>
      <div
        id="mobile-page-container"
        className={cn(
          "flex h-full flex-col overflow-hidden",
          isIndex ? "" : "sm:min-h-full sm:overflow-auto",
        )}
      >
        <Header />

        {/* background image on desktop and mobile index */}
        <div className={cn("fixed inset-0 -z-20")}>
          <Image
            alt=""
            src={backgroundCarouselImages[backgroundOneIndex]}
            className={cn(
              "object-cover object-bottom transition-opacity duration-1000 sm:hidden",
              backgroundOneVisibility,
            )}
            fill
            onTransitionEnd={(e) => {
              if (e.currentTarget.classList.contains("opacity-0"))
                setBackgroundOneIndex(
                  (pv) => (pv + 2) % backgroundCarouselImages.length,
                );
            }}
          />
          <Image
            alt=""
            src={backgroundCarouselImages[backgroundTwoIndex]}
            className={cn(
              "object-cover object-bottom transition-opacity duration-1000 sm:hidden",
              backgroundTwoVisibility,
            )}
            fill
            onTransitionEnd={(e) => {
              if (e.currentTarget.classList.contains("opacity-0"))
                setBackgroundTwoIndex(
                  (pv) => (pv + 2) % backgroundCarouselImages.length,
                );
            }}
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
          className="fixed inset-x-36 bottom-0 h-[calc(100%-176px)] translate-y-0 bg-green-800/[0.93] pt-16 transition has-[button[data-visibility='hidden']]:translate-y-full has-[button[data-visibility='showButton']]:translate-y-[calc(100%-75px)] xl:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-65px)] lg:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-55px)] md:has-[button[data-visibility='showButton']]:translate-y-[calc(100%-45px)] sm:hidden"
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
        {footer}
      </div>
    </routeContext.Provider>
  );
}

export const useRouteContext = () => useContext(routeContext);
