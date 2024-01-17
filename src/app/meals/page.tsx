import { meals } from "@/app/meals/temp-meal-data";
import { MainImageWithCarousel } from "@/components/main-image-with-carousel";
import { MealsContent } from "@/components/meals-content";
import PageTitle from "@/components/page-title";

export default async function MealsPage() {
  return <MealsContent meals={meals} />;
}
