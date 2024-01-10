import Image from "next/image";
import imagePlaceholder from "@/assets/image-placeholder.svg";
import greenArrowRight from "@/assets/icons/green-arrow-right.svg";
import Link from "next/link";
import { PlaceholderImage } from "@/components/placeholder-image";
import { newsList } from "@/app/news/temp-data";

export default function NewsPage() {
  return (
    <div className="mx-16 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-7 pt-2.5">
      {newsList.map((news) => (
        <div key={news.id} className="">
          <PlaceholderImage />
          <div className="bg-slate-100 px-6 py-4">
            <div className="text-green-100 font-medium">2023-01-01</div>
            <div className="truncate text-lg font-bold text-orange">
              {news.title}
            </div>
            <div className="mt-2 flex justify-end">
              <Link
                href="/news/1"
                className="text-green-200 hover:bg-green-800/30 border-green-200 focus-visible:ring-green-800 flex w-fit  items-center gap-1 border-[1.5px] px-2 py-0.5 text-sm focus-visible:outline-none focus-visible:ring-4"
              >
                詳細資訊
                <Image alt="" src={greenArrowRight} />
              </Link>
            </div>
            IP
          </div>
        </div>
      ))}
    </div>
  );
}
