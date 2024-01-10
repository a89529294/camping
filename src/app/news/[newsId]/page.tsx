import { newsList } from "@/app/news/temp-data";
import { ChevronButton } from "@/components/chevron-button";
import { NewsDetailsCarousel } from "@/components/news-details-carousel";
import { NewsDetailsNavButton } from "@/components/news-details-nav-button";
import Link from "next/link";

export default function NewsDetailsPage({
  params: { newsId },
}: {
  params: { newsId: string };
}) {
  const newsIdx = newsList.findIndex((news) => news.id === newsId);

  const prevNews = newsIdx === 0 ? newsList.at(-1) : newsList[newsIdx - 1];
  const nextNews =
    newsIdx === newsList.length - 1 ? newsList[0] : newsList[newsIdx + 1];
  return (
    <div className="flex items-start gap-14 pr-2">
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <NewsDetailsNavButton
          newsId={prevNews?.id ?? newsList[0].id}
          dir="left"
        />
        <div className="truncate font-medium text-orange">
          {prevNews?.title}N
        </div>
      </div>
      <div className="max-w-[560px] bg-white p-7 ">
        <NewsDetailsCarousel images={newsList[newsIdx].images} />
        <h1 className="mt-3 text-xl font-medium text-orange">
          {newsList[newsIdx].title}
        </h1>
        <h2 className="text-green-100">2023-01-01</h2>
        <p className="mt-5 text-gray-500">{newsList[newsIdx].content}</p>
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="truncate font-medium text-orange">
          {nextNews?.title}
        </div>
        <NewsDetailsNavButton newsId={nextNews.id} dir="right" />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return newsList.map((news) => ({
    newsId: news.id,
  }));
}
