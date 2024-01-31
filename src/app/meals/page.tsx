import { meals } from "@/app/meals/temp-meal-data";
import { VerticalSlidingWrapper } from "@/components/vertical-sliding-wrapper";
import { baseURL } from "@/utils";

export default async function MealsPage() {
  // const response = await fetch(`${baseURL}/api/food-stories?populate=details`);
  // const meals = await response.json();
  // console.log(meals.data[0].attributes);

  // return null;

  return <VerticalSlidingWrapper items={meals} />;
}
