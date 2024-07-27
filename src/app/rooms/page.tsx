import { NewVerticalSlidingWrapper } from "@/components/new-vertical-sliding-wrapper";
import { baseURL } from "@/utils";

export default async function RoomsPage() {
  const response = await fetch(
    `${baseURL}/api/room-collections?populate=images`,
  );

  const rooms = await response.json();

  const transformedRooms = (rooms.data ?? []).map((room: any) => ({
    id: room.id,
    name: room.attributes.name,
    intro: room.attributes.intro,
    images: room.attributes?.images?.data
      ? room.attributes.images.data.map((image: any) => image.attributes.url)
      : null,
  }));

  // console.log(transformedRooms);

  return <NewVerticalSlidingWrapper items={transformedRooms} />;
}

export const dynamic = "force-dynamic";
