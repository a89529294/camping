import { meals } from "@/app/meals/temp-meal-data";
import { VerticalSlidingWrapper } from "@/components/vertical-sliding-wrapper";

export default async function MealsPage() {
  return <VerticalSlidingWrapper items={meals} />;
}
