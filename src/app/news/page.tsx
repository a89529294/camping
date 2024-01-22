import { newsList } from "@/app/news/temp-data";
import { AdaptiveGrid } from "@/components/adaptive-grid";

export default function NewsPage() {
  return <AdaptiveGrid items={newsList} path="news" />;
}
