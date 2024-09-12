import { AdaptiveGrid } from "@/components/adaptive-grid";
import { NewVerticalSlidingWrapper } from "@/components/new-vertical-sliding-wrapper";
import { baseURL } from "@/utils";

export default async function RoomsPage() {
  const response = await fetch(
    `${baseURL}/api/room-collections?populate=images`,
  );

  const rooms = await response.json();

  const transformedRooms = (rooms.data ?? []).map((room: any) => ({
    id: room.id,
    title: room.attributes.name,
    images: room.attributes?.images?.data
      ? room.attributes.images.data.map((image: any) => image.attributes.url)
      : null,
  }));

  // return <NewVerticalSlidingWrapper items={transformedRooms} />;
  return <AdaptiveGrid items={transformedRooms} path="rooms" />;
}

export const dynamic = "force-dynamic";
