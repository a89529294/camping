// import { meals } from "@/app/meals/temp-meal-data";
import { NewVerticalSlidingWrapper } from "@/components/new-vertical-sliding-wrapper";
import { VerticalSlidingWrapper } from "@/components/vertical-sliding-wrapper";
import { baseURL } from "@/utils";

export default async function MealsPage() {
  const response = await fetch(
    `${baseURL}/api/food-stories?populate[details][populate][0]=images`,
  );
  const meals = await response.json();

  const mealsData = meals.data ?? [];

  const transformedMeals = mealsData.map((meal: any) => {
    const mealAttributesDetails = meal.attributes.details ?? [];

    return {
      id: meal.id,
      name: meal.attributes.name,
      sections: mealAttributesDetails.map((detail: any) => {
        const detailImagesData = detail.images.data ?? [];

        return {
          id: detail.id,
          title: detail.title,
          content: detail.content,
          images: detail.images.data
            ? detailImagesData.map((image: any) => image.attributes.url)
            : null,
        };
      }),
    };
  });

  return <NewVerticalSlidingWrapper items={transformedMeals} />;
}

export const dynamic = "force-dynamic";
