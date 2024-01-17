"use client";

import { Meal } from "@/app/meals/temp-meal-data";
import { MainImageWithCarousel } from "@/components/main-image-with-carousel";
import PageTitle from "@/components/page-title";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

export function MealsContent({ meals }: { meals: Meal[] }) {
  const [selectedMeal, setSelectedMeal] = useState(meals[0]);
  const [animateDir, setAnimateDir] = useState<"up" | "down">("up");

  return (
    <div className="relative mx-auto max-w-xl bg-white pt-4.5">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          className="flex flex-col gap-10"
          key={selectedMeal.id}
          initial={{ y: animateDir === "up" ? "100%" : "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: animateDir === "up" ? "100%" : "-100%", opacity: 0 }}
          transition={{
            duration: 1,
          }}
        >
          <div className="flex flex-col gap-4 px-7">
            <PageTitle>主餐</PageTitle>
            <div>
              <MainImageWithCarousel
                images={selectedMeal.mainDish.images ?? []}
              />
              <div className="p-2.5">
                內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  px-7">
            <PageTitle>副餐</PageTitle>
            <div>
              <MainImageWithCarousel
                images={selectedMeal.secondaryDish.images ?? []}
              />
              <div className="p-2.5">
                內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute right-7 top-5">
        <Select
          aria-label="?"
          selectedKey={selectedMeal.id}
          onSelectionChange={(id) => {
            const prevMealIndex = meals.findIndex(
              (meal) => meal.id === selectedMeal.id,
            );
            const nextMealIndex = meals.findIndex((meal) => meal.id === id);

            if (nextMealIndex > prevMealIndex) setAnimateDir("down");
            else setAnimateDir("up");
            setSelectedMeal(meals.find((meal) => meal.id === id)!);
          }}
        >
          <Button className="flex h-7 items-center gap-1 border-[1.5px] border-green-200 bg-white/70 px-2 text-sm font-bold text-green-200">
            <SelectValue className="" />
            <span aria-hidden="true">▼</span>
          </Button>
          <Popover offset={0} placement="bottom right">
            <ListBox>
              {meals.map((meal) => (
                <ListBoxItem
                  className="flex h-10 cursor-pointer items-center justify-center border-b border-b-green-300 bg-white px-3 text-sm font-medium text-black focus:bg-green-200 focus:text-white focus:outline-none active:bg-white active:text-orange"
                  key={meal.id}
                  id={meal.id}
                >
                  {meal.name}
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
        </Select>
      </div>
    </div>
  );
}
