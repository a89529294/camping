"use client";

import { ChevronButton } from "@/components/chevron-button";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

const itemWidth = 144; // 144 === 36rem === width of carousel items

export function MainImageWithCarousel({
  images,
}: {
  images: (string | StaticImageData)[];
}) {
  const [startX, setStartX] = useState<number | undefined>(undefined);
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onLeftArrowClick = () => {
    const scrollContainer = scrollContainerRef.current;
    if (mainImgIdx <= 0 || !scrollContainer) return;
    setMainImgIdx((idx) => --idx);

    const containerScrollLeft = scrollContainer.scrollLeft;
    const selectedCarouselItemOffsetLeft = (
      scrollContainer.querySelector(
        `[data-idx='${mainImgIdx - 1}']`,
      ) as HTMLDivElement
    ).offsetLeft;

    if (
      selectedCarouselItemOffsetLeft < containerScrollLeft ||
      selectedCarouselItemOffsetLeft >
        containerScrollLeft + scrollContainer.clientWidth - itemWidth
    )
      scrollContainer.scrollLeft = selectedCarouselItemOffsetLeft;
  };
  const onRightArrowClick = () => {
    const scrollContainer = scrollContainerRef.current;
    if (mainImgIdx >= images.length - 1 || !scrollContainer) return;
    setMainImgIdx((idx) => ++idx);

    const containerScrollLeft = scrollContainer.scrollLeft;
    const selectedCarouselItemOffsetLeft = (
      scrollContainer.querySelector(
        `[data-idx='${mainImgIdx + 1}']`,
      ) as HTMLDivElement
    ).offsetLeft;

    if (
      selectedCarouselItemOffsetLeft < containerScrollLeft ||
      selectedCarouselItemOffsetLeft >
        containerScrollLeft + scrollContainer.clientWidth - itemWidth
    )
      scrollContainer.scrollLeft = selectedCarouselItemOffsetLeft;
  };

  return (
    <div className="space-y-2.5">
      <div className="relative w-full sm:flex sm:items-center sm:px-3">
        {images.length > 1 && (
          <ChevronButton
            dir="left"
            onClick={onLeftArrowClick}
            className="absolute -left-4 top-1/2 -translate-x-full sm:hidden"
            disabled={mainImgIdx === 0}
          />
        )}
        {images.length > 1 ? (
          <ChevronButton
            dir="left"
            onClick={onLeftArrowClick}
            className="mr-3 hidden sm:grid"
            disabled={mainImgIdx === 0}
          />
        ) : (
          <div className="w-10" />
        )}

        <div className="relative aspect-[3/2] sm:min-w-0 sm:flex-1">
          <Image
            alt=""
            src={images[mainImgIdx]}
            className=" object-cover "
            fill
          />
        </div>

        {images.length > 1 ? (
          <ChevronButton
            dir="right"
            onClick={onRightArrowClick}
            disabled={mainImgIdx === images.length - 1}
            className="ml-3 hidden sm:grid"
          />
        ) : (
          <div className="w-10" />
        )}

        {images.length > 1 && (
          <ChevronButton
            dir="right"
            onClick={onRightArrowClick}
            disabled={mainImgIdx === images.length - 1}
            className="absolute -right-4 top-1/2 translate-x-full sm:hidden"
          />
        )}
      </div>
      {images.length > 1 && (
        <div
          ref={scrollContainerRef}
          className="relative flex snap-x gap-2.5 overflow-x-auto scroll-smooth scrollbar-none sm:mx-[52px]"
          onMouseDown={(e) => setStartX(e.screenX)}
          onMouseUp={(e) => {
            const scrollContainer = scrollContainerRef.current;
            if (!startX || !scrollContainer) return;

            if (Math.abs(e.screenX - startX) < 10) {
              if (e.target instanceof HTMLImageElement)
                setMainImgIdx(+(e.target.dataset.idx ?? 0));
            } else if (e.screenX < startX)
              scrollContainer.scrollLeft +=
                itemWidth * (Math.floor((startX - e.screenX) / itemWidth) + 1);
            else
              scrollContainer.scrollLeft -=
                itemWidth * (Math.floor((e.screenX - startX) / itemWidth) + 1);
            setStartX(undefined);
          }}
        >
          {images.map((src, idx) => {
            return (
              <div
                key={idx}
                data-idx={idx}
                className="sm:aspect[90/64] relative aspect-[7/5] w-36 shrink-0 snap-start last:mr-[calc(100%-144px)] sm:w-[90px]"
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
      )}
    </div>
  );
}
