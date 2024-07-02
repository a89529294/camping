// import { newsList } from "@/app/news/temp-data";
import { AdaptiveGridItemDetails } from "@/components/adaptive-grid-item-details";
import { baseURL } from "@/utils";

export default async function NewsDetailsPage({
  params: { newsId },
}: {
  params: { newsId: string };
}) {
  const response = await fetch(`${baseURL}/api/news?populate=images`);
  const data = await response.json();

  const dataData = data.data ?? [];
  const newsList = dataData.map((v: any) => {
    return {
      id: v.id.toString(),
      title: v.attributes.title,
      images:
        v.attributes.images.data?.map((image: any) => image.attributes.url) ??
        [],
      content: v.attributes.content,
      date: v.attributes.startDate,
    };
  });

  return (
    <AdaptiveGridItemDetails itemId={newsId} items={newsList} path="/news" />
  );
}

// re enable this later
// export async function generateStaticParams() {
//   return newsList.map((news) => ({
//     newsId: news.id,
//   }));
// }
