import { AdaptiveGridItemDetailsBackLink } from "@/components/adaptive-grid-item-details-back-link";
import { MainImageWithCarousel } from "@/components/main-image-with-carousel";
import { AdaptiveGirdItemDetailsNavButton } from "@/components/adaptive-grid-item-details-nav-button";
import { StaticImageData } from "next/image";

export function AdaptiveGridItemDetails({
  itemId,
  items,
  path,
}: {
  itemId: string;
  items: {
    id: string;
    images: StaticImageData[];
    title: string;
    date?: string;
    content: string;
  }[];
  path: string;
}) {
  const itemIndex = items.findIndex((news) => news.id === itemId);

  const prevItem = itemIndex === 0 ? items.at(-1) : items[itemIndex - 1];
  const nextItem =
    itemIndex === items.length - 1 ? items[0] : items[itemIndex + 1];
  return (
    <div className="font-biaukai flex items-start gap-14 pr-2">
      <AdaptiveGridItemDetailsBackLink path={path} />
      <div className="flex min-w-0 flex-1 items-center justify-start gap-2">
        <AdaptiveGirdItemDetailsNavButton
          path={path}
          itemId={prevItem?.id ?? items[0].id}
          dir="left"
        />
        <div className="truncate font-medium text-orange">
          {prevItem?.title}
        </div>
      </div>
      <div className="max-w-xl bg-white p-7 ">
        <MainImageWithCarousel images={items[itemIndex].images} />
        <h1 className="mt-3 text-xl font-medium text-orange">
          {items[itemIndex].title}
        </h1>
        {items[itemIndex].date && (
          <h2 className="text-green-100">{items[itemIndex].date}</h2>
        )}
        <p className="mt-5 text-gray-500">{items[itemIndex].content}</p>
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
        <div className="truncate font-medium text-orange">{nextItem.title}</div>
        <AdaptiveGirdItemDetailsNavButton
          path={path}
          itemId={nextItem.id}
          dir="right"
        />
      </div>
    </div>
  );
}
