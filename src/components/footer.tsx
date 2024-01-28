"use client";

import greenArc from "@/assets/footer.png";
import mapPin from "@/assets/icons/map-pin.svg";
import phone from "@/assets/icons/phone.svg";
import leftTree from "@/assets/left-tree.png";
import middleTree from "@/assets/middle-tree.png";
import mobileGreenArc from "@/assets/mobile-footer.png";
import rightTree from "@/assets/right-tree.png";
import whiteMountain from "@/assets/white-mountain-opaque.png";
import { cn } from "@/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

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
        className="absolute bottom-12 -z-10 xl:bottom-4 lg:bottom-0 sm:bottom-28"
      />
      <Image
        alt=""
        src={greenArc}
        className="relative aspect-[1440/140] w-full sm:hidden"
      />
      <Image
        alt=""
        src={mobileGreenArc}
        className="relative  hidden sm:block sm:aspect-[620/143] sm:w-[720px] sm:max-w-[720px]"
      />
      <Trees />

      <div className="absolute inset-0 flex  items-end justify-between px-9 pb-3">
        {weatherCell}

        <div className="flex gap-8 text-white sm:hidden">
          <div className="flex gap-1 font-biaukai">
            <Image alt="" src={mapPin} />
            南投縣埔里鎮桃米里種瓜路15-1號
          </div>
          <div className="flex gap-1">
            <Image alt="" src={phone} />
            0912-175-370
          </div>
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
