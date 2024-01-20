import { familyFriendlyAmenitiesList } from "@/app/family-friendly-amenities/temp-data";
import { AdaptiveGrid } from "@/components/adaptive-grid";

export default function FamilyFriendlyAmenitiesPage() {
  return (
    <AdaptiveGrid
      items={familyFriendlyAmenitiesList}
      path="family-friendly-amenities"
    />
  );
}
