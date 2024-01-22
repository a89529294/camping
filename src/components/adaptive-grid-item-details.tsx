import { AdaptiveGridItemDetailsBackLink } from "@/components/adaptive-grid-item-details-back-link";
import { MainImageWithCarousel } from "@/components/main-image-with-carousel";
import { AdaptiveGirdItemDetailsNavButton } from "@/components/adaptive-grid-item-details-nav-button";
import { StaticImageData } from "next/image";
import Link from "next/link";

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
    <div className="flex items-start gap-14 pr-2 font-biaukai sm:block sm:gap-0 sm:pr-0">
      <AdaptiveGridItemDetailsBackLink path={path} />
      <DesktopNav
        path={path}
        itemId={prevItem?.id ?? items[0].id}
        title={{
          status: "prev",
          value: prevItem?.title ?? "",
        }}
      />
      <div className="hidden items-center justify-between bg-green-800 px-3 py-3.5 sm:flex">
        <AdaptiveGirdItemDetailsNavButton
          path={path}
          itemId={prevItem?.id ?? items[0].id}
          dir="left"
        />
        <Link
          href={path}
          className=" border-[1.5px] border-green-200 px-2 py-0.5 text-sm font-bold text-green-200 hover:opacity-80"
        >
          回到列表
        </Link>
        <AdaptiveGirdItemDetailsNavButton
          path={path}
          itemId={nextItem.id}
          dir="right"
        />
      </div>

      <div className="max-w-xl bg-white p-7 sm:max-w-full sm:px-0 sm:pt-5">
        <MainImageWithCarousel images={items[itemIndex].images} />
        <h1 className="mt-3 text-xl font-medium text-orange sm:px-[52px] sm:text-lg">
          {items[itemIndex].title}
        </h1>
        {items[itemIndex].date && (
          <h2 className="sm:px-13 text-green-100">{items[itemIndex].date}</h2>
        )}
        <p className="sm:px-13 mt-5 text-gray-500 sm:mt-2.5">
          {items[itemIndex].content}
        </p>
      </div>

      <DesktopNav
        path={path}
        itemId={nextItem.id}
        title={{
          status: "next",
          value: nextItem.title,
        }}
      />
    </div>
  );
}

function DesktopNav({
  path,
  itemId,
  title,
}: {
  path: string;
  itemId: string;
  title:
    | {
        status: "prev";
        value: string;
      }
    | {
        status: "next";
        value: string;
      };
}) {
  return (
    <div className=" flex min-w-0 flex-1 items-center justify-start gap-2 sm:hidden">
      {title.status === "next" && (
        <div className="truncate font-medium text-orange ">{title.value}</div>
      )}
      <AdaptiveGirdItemDetailsNavButton
        path={path}
        itemId={itemId}
        dir={title.status === "prev" ? "left" : "right"}
      />
      {title.status === "prev" && (
        <div className="truncate font-medium text-orange ">{title.value}</div>
      )}
    </div>
  );
}
