import Image from "next/image";
import whiteMountain from "@/assets/white-mountain-opaque.png";
import greenArc from "@/assets/footer.png";
import leftTree from "@/assets/left-tree.png";
import middleTree from "@/assets/middle-tree.png";
import rightTree from "@/assets/right-tree.png";
import WeatherCell from "@/components/weather-cell";
import mapPin from "@/assets/icons/map-pin.svg";
import phone from "@/assets/icons/phone.svg";
// import { twMerge } from "tailwind-merge";

export default function Footer() {
  return (
    <footer className="pointer-events-none relative mt-auto w-full">
      <Image alt="" src={whiteMountain} className="absolute bottom-20 -z-10" />
      <Image alt="" src={greenArc} className="relative w-full" />
      <Trees />

      <div className="absolute inset-0 flex  items-end justify-between px-9 pb-6">
        <WeatherCell />

        <div className="flex gap-8 text-white">
          <div className="flex gap-1">
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
        className="absolute left-4 top-0 -translate-y-14 "
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
