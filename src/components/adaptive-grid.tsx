import greenArrowRight from "@/assets/icons/green-arrow-right.svg";
import { ProgressBarLink } from "@/components/contexts/progress-bar-context";
import { PlaceholderImage } from "@/components/placeholder-image";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export function AdaptiveGrid({
  items,
  path,
}: {
  items: { id: string; title: string; images: (string | StaticImageData)[] }[];
  path: string;
}) {
  return (
    <div className="mx-16 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-7 pt-2.5 sm:mx-0 sm:bg-green-800 sm:px-12 sm:pb-10 sm:pt-8">
      {items.map((item) => (
        <div key={item.id} className="">
          <PlaceholderImage
            imageSrc={
              item.images === null || !item.images[0]
                ? ""
                : typeof item.images[0] === "object"
                  ? item.images[0].src
                  : item.images[0].toString()
            }
          />

          <div className="bg-slate-100 px-6 py-4">
            <div className="font-medium text-green-100">2023-01-01</div>
            <div className="truncate text-lg font-bold text-orange">
              {item.title}
            </div>
            <div className="mt-2 flex justify-end">
              <ProgressBarLink
                href={`/${path}/${item.id}`}
                className="flex w-fit items-center gap-1 border-[1.5px] border-green-200  px-2 py-0.5 text-sm text-green-200 hover:bg-green-800/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-800"
              >
                詳細資訊
                <Image alt="" src={greenArrowRight} />
              </ProgressBarLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
