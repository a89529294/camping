import { PlaceholderImage } from "@/components/placeholder-image";
import { StaticImageData } from "next/image";

export function AttractionsSlider({
  attractions,
}: {
  attractions: {
    id: string;
    name: string;
    travelTime: number;
    imageSrc: StaticImageData;
  }[];
}) {
  return (
    <div className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-200 sm:flex-col">
      {attractions.map((attraction) => (
        <div
          className="w-44 shrink-0 snap-start space-y-2.5 pb-2.5 last:mr-[calc(100%-180px)] sm:w-full sm:last:mr-0"
          key={attraction.id}
        >
          <PlaceholderImage imageSrc={attraction.imageSrc} />
          <div>
            <h2 className="font-semibold text-green-200">{attraction.name}</h2>
            <h3 className="text-sm text-gray-500">
              路程 : {attraction.travelTime} 分鐘
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
