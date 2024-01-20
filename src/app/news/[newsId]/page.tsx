import { newsList } from "@/app/news/temp-data";
import { AdaptiveGridItemDetails } from "@/components/adaptive-grid-item-details";

export default function NewsDetailsPage({
  params: { newsId },
}: {
  params: { newsId: string };
}) {
  return (
    <AdaptiveGridItemDetails itemId={newsId} items={newsList} path="/news" />
  );
}

export async function generateStaticParams() {
  return newsList.map((news) => ({
    newsId: news.id,
  }));
}
