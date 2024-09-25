"use client";

import greenArc from "@/assets/footer.png";
import mapPin from "@/assets/icons/map-pin.svg";
import phone from "@/assets/icons/phone.svg";
import leftTree from "@/assets/left-tree.png";
import middleTree from "@/assets/middle-tree.png";
import mobileGreenArc from "@/assets/mobile-footer.png";
import rightTree from "@/assets/right-tree.png";
import whiteMountain from "@/assets/white-mountain-opaque.png";
import { SocialMediaLinks } from "@/components/social-media-links";
import { cn } from "@/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../assets/Stamp.ttf",
  display: "swap",
});

console.log(myFont.className);

export function Footer({ weatherCell }: { weatherCell: ReactNode }) {
  const pathname = usePathname();

  return (
    <footer
      className={cn(
        "pointer-events-none relative mt-auto w-full",
        pathname !== "/" && "sm:hidden",
      )}
    >
      <Image
        alt=""
        src={whiteMountain}
        className="absolute bottom-8 -z-10 h-52 xl:bottom-4 lg:bottom-0 sm:bottom-28"
      />
      <Image
        alt=""
        src={greenArc}
        className="relative aspect-[1440/100] w-full sm:hidden"
      />
      <Image
        alt=""
        src={mobileGreenArc}
        className="relative  hidden sm:block sm:aspect-[620/143] sm:w-[720px] sm:max-w-[720px]"
      />
      <Trees />

      <div className="absolute inset-0 flex items-end justify-between px-9 pb-3">
        {weatherCell}
        <p
          className={cn(
            "absolute bottom-7 left-[20%] text-xl text-purple-700 sm:bottom-12 sm:left-[50%]",
            myFont.className,
          )}
        >
          有愛環境, 幸福延續
        </p>
        <p
          className={cn(
            "absolute bottom-1 left-[22%] text-xl text-red-700 sm:bottom-6 sm:left-[55%] sm:text-base",
            myFont.className,
          )}
        >
          讓世界看見台灣森露之美
        </p>

        <div className="flex gap-8 text-white sm:hidden">
          <div className="flex gap-1">
            <Image alt="" src={mapPin} />
            南投縣埔里鎮種瓜路15-1號 0912-175-370
          </div>
          {/* <SocialMediaLinks whiteStroke /> */}
        </div>
      </div>
    </footer>
  );
}

function Trees() {
  return (
    <>
      <Image
        alt=""
        src={leftTree}
        className="absolute left-4 top-0 -translate-y-16"
      />
      <Image
        alt=""
        src={middleTree}
        className="absolute left-16 top-0 -translate-y-16"
      />
      <Image
        alt=""
        src={rightTree}
        className="absolute left-[154px] top-0 -translate-y-3.5"
      />
    </>
  );
}
