// import { familyFriendlyAmenitiesList } from "@/app/family-friendly-amenities/temp-data";
import { AdaptiveGridItemDetails } from "@/components/adaptive-grid-item-details";
import { baseURL } from "@/utils";

export default async function AmenityDetailsPage({
  params: { amenityId },
}: {
  params: { amenityId: string };
}) {
  const response = await fetch(`${baseURL}/api/play-grounds?populate=images`);
  const data = await response.json();

  const familyFriendlyAmenitiesList = data.data.map((v: any) => ({
    id: v.id.toString(),
    title: v.attributes.title,
    content: v.attributes.content,
    images: v.attributes.images.data
      ? v.attributes.images.data.map((image: any) => image.attributes.url)
      : null,
  }));

  return (
    <AdaptiveGridItemDetails
      itemId={amenityId}
      items={familyFriendlyAmenitiesList}
      path="/family-friendly-amenities"
    />
  );
}

// export async function generateStaticParams() {
//   return familyFriendlyAmenitiesList.map((amenity) => ({
//     amenityId: amenity.id,
//   }));
// }

export const dynamic = "force-dynamic";
