"use client";

import img1 from "@/assets/temp/1.jpg";
import img2 from "@/assets/temp/2.jpg";
import img3 from "@/assets/temp/3.jpg";
import img4 from "@/assets/temp/4.jpg";
import img5 from "@/assets/temp/5.jpg";
import img6 from "@/assets/temp/6.jpg";
import img7 from "@/assets/temp/7.jpg";
import img8 from "@/assets/temp/8.jpg";
import greenArrowLeft from "@/assets/icons/green-arrow-left.svg";
import greenArrowRight from "@/assets/icons/green-arrow-right.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// 144 === 36rem === width of carousel items

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
export function NewsDetailsCarousel() {
  const [startX, setStartX] = useState<number | undefined>(undefined);
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onLeftArrowClick = () => {
    const scrollContainer = scrollContainerRef.current;
    if (mainImgIdx <= 0 || !scrollContainer) return;
    setMainImgIdx((idx) => --idx);

    const containerScrollLeft = scrollContainerRef.current.scrollLeft;
    const selectedCarouselItemOffsetLeft = (
      scrollContainerRef.current?.querySelector(
        `[data-idx='${mainImgIdx - 1}']`,
      ) as HTMLDivElement
    ).offsetLeft;

    if (selectedCarouselItemOffsetLeft < containerScrollLeft)
      scrollContainer.scrollLeft = selectedCarouselItemOffsetLeft;
  };

  return (
    <div className="space-y-2.5">
      <div className="relative aspect-[3/2] w-full ">
        <button
          onClick={onLeftArrowClick}
          className="border-green-200 absolute -left-4 top-1/2 grid h-7 w-7 -translate-x-full place-items-center border-[1.5px] bg-white"
        >
          <Image alt="" src={greenArrowLeft} />
        </button>
        <Image fill alt="" src={images[mainImgIdx]} className="object-cover" />
      </div>
      <div
        ref={scrollContainerRef}
        className="relative flex snap-x gap-2.5 overflow-x-auto scroll-smooth scrollbar-none"
        onMouseDown={(e) => setStartX(e.screenX)}
        onMouseUp={(e) => {
          const scrollContainer = scrollContainerRef.current;
          if (!startX || !scrollContainer) return;

          if (Math.abs(e.screenX - startX) < 10) {
            if (e.target instanceof HTMLImageElement)
              setMainImgIdx(+(e.target.dataset.idx ?? 0));
          } else if (e.screenX < startX)
            scrollContainer.scrollLeft +=
              144 * (Math.floor((startX - e.screenX) / 144) + 1);
          else
            scrollContainer.scrollLeft -=
              144 * (Math.floor((e.screenX - startX) / 144) + 1);
          setStartX(undefined);
        }}
      >
        {images.map((src, idx) => {
          return (
            <div
              key={idx}
              data-idx={idx}
              className="relative aspect-[7/5] w-36 shrink-0 snap-start last:mr-[calc(100%-144px)]"
            >
              <Image
                fill
                className="object-cover"
                src={src}
                alt=""
                draggable={false}
                data-idx={idx}
              />

              {mainImgIdx === idx && (
                <div className="pointer-events-none absolute inset-0 border-2 border-orange" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
