import { familyFriendlyAmenitiesList } from "@/app/family-friendly-amenities/temp-data";
import { AdaptiveGridItemDetails } from "@/components/adaptive-grid-item-details";

export default function AmenityDetailsPage({
  params: { amenityId },
}: {
  params: { amenityId: string };
}) {
  return (
    <AdaptiveGridItemDetails
      itemId={amenityId}
      items={familyFriendlyAmenitiesList}
      path="/family-friendly-amenities"
    />
  );
}

export async function generateStaticParams() {
  return familyFriendlyAmenitiesList.map((amenity) => ({
    amenityId: amenity.id,
  }));
}
