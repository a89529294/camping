"use client";

import { PlaceholderImage } from "@/components/placeholder-image";
import { CSSProperties, useRef } from "react";

export function AttractionsSlider({
  attractions,
}: {
  attractions: { id: string; name: string; travelTime: number }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-200"
    >
      {attractions.map((attraction) => (
        <div
          style={
            {
              "--mr": containerRef.current
                ? `${containerRef.current.clientWidth - 180}px`
                : 0,
            } as CSSProperties
          }
          className="w-44 shrink-0 snap-start space-y-2.5 pb-2.5 last:mr-[--mr]"
          key={attraction.id}
        >
          <PlaceholderImage />
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
