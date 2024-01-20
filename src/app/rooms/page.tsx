import { rooms } from "@/app/rooms/temp-room-data";
import { VerticalSlidingWrapper } from "@/components/vertical-sliding-wrapper";

export default async function MealsPage() {
  return <VerticalSlidingWrapper items={rooms} />;
}
