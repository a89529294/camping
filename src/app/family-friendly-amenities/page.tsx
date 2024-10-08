// import { familyFriendlyAmenitiesList } from "@/app/family-friendly-amenities/temp-data";
import { AdaptiveGrid } from "@/components/adaptive-grid";
import { baseURL } from "@/utils";

export default async function FamilyFriendlyAmenitiesPage() {
  const response = await fetch(`${baseURL}/api/play-grounds?populate=images`);
  const data = await response.json();

  const dataData = data.data ?? [];
  const familyFriendlyAmenitiesList = dataData.map((v: any) => {
    return {
      id: v.id,
      title: v.attributes.title,
      content: v.attributes.content,
      images: v.attributes.images.data
        ? v.attributes.images.data.map((image: any) => image.attributes.url)
        : null,
    };
  });

  return (
    <AdaptiveGrid
      items={familyFriendlyAmenitiesList}
      path="family-friendly-amenities"
      showDetails
    />
  );
}

export const dynamic = "force-dynamic";
