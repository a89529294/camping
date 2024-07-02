// import { familyFriendlyAmenitiesList } from "@/app/family-friendly-amenities/temp-data";
import { AdaptiveGrid } from "@/components/adaptive-grid";
import { baseURL } from "@/utils";

export default async function FamilyFriendlyAmenitiesPage() {
  const response = await fetch(`${baseURL}/api/play-grounds?populate=images`);
  const data = await response.json();

  const familyFriendlyAmenitiesList = data.data.map((v: any) => ({
    id: v.id,
    title: v.attributes.title,
    content: v.attributes.content,
    images: v.attributes.images.data
      ? v.attributes.images.data.map((image: any) => image.attributes.url)
      : null,
  }));

  return (
    <AdaptiveGrid
      items={familyFriendlyAmenitiesList}
      path="family-friendly-amenities"
    />
  );
}

export const dynamic = "force-dynamic";
