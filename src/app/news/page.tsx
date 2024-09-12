// import { newsList } from "@/app/news/temp-data";
import { AdaptiveGrid } from "@/components/adaptive-grid";
import { baseURL } from "@/utils";

export default async function NewsPage() {
  const response = await fetch(`${baseURL}/api/news?populate=images`);
  const data = await response.json();

  const dataData = data.data ?? [];
  const newsList = dataData.map((v: any) => ({
    id: v.id.toString(),
    title: v.attributes.title,
    images:
      v.attributes.images.data?.map((image: any) => image.attributes.url) ?? [],
    updatedAt: v.attributes.updatedAt,
  }));

  return <AdaptiveGrid items={newsList} path="news" />;
}

export const dynamic = "force-dynamic";
