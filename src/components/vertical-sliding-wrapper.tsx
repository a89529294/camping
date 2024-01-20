"use client";

import { Meal, Meals } from "@/app/meals/temp-meal-data";
import { Rooms } from "@/app/rooms/temp-room-data";
import { MainImageWithCarousel } from "@/components/main-image-with-carousel";
import { SectionTitle } from "@/components/section-title";
import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

export function VerticalSlidingWrapper<T extends Rooms | Meals>({
  items,
  className,
}: {
  items: T;
  className?: string;
}) {
  const [selectedItem, setSelectedItem] = useState(items.data[0]);
  const [animateDir, setAnimateDir] = useState<"up" | "down">("up");
  const isMeals = (
    selectedItem: T["data"][number],
  ): selectedItem is Meals["data"][number] => items.type === "meals";

  return (
    <div
      className={cn(
        "font-biaukai relative mx-auto max-w-xl bg-white/70 pt-4.5",
        className,
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          className="flex flex-col gap-10"
          key={selectedItem.id}
          initial={{ y: animateDir === "up" ? "100%" : "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: animateDir === "up" ? "100%" : "-100%", opacity: 0 }}
          transition={{
            duration: 1,
          }}
        >
          {isMeals(selectedItem) ? (
            selectedItem.sections.map((section) => (
              <ImageSection
                key={section.title}
                title={section.title}
                images={section.images}
                description={section.description}
              />
            ))
          ) : (
            <>
              <ImageSection
                title={selectedItem.name}
                images={selectedItem.images}
                description={selectedItem.description}
              />
              <div className="space-y-10 px-7">
                {selectedItem.paragraphs.map((paragraph) => (
                  <div key={paragraph.title} className="space-y-2.5">
                    <SectionTitle>{paragraph.title}</SectionTitle>
                    <p className="bg-white p-2.5">{paragraph.content}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute right-7 top-5">
        <Select
          aria-label="?"
          selectedKey={selectedItem.id}
          onSelectionChange={(id) => {
            const prevItemIndex = items.data.findIndex(
              (item) => item.id === selectedItem.id,
            );
            const nextMealIndex = items.data.findIndex(
              (item) => item.id === id,
            );

            if (nextMealIndex > prevItemIndex) setAnimateDir("down");
            else setAnimateDir("up");
            setSelectedItem(items.data.find((item) => item.id === id)!);
          }}
        >
          <Button className="flex h-7 items-center gap-1 border-[1.5px] border-green-200 bg-white/70 px-2 text-sm font-bold text-green-200">
            <SelectValue className="" />
            <span aria-hidden="true">▼</span>
          </Button>
          <Popover offset={0} placement="bottom right">
            <ListBox>
              {items.data.map((item) => (
                <ListBoxItem
                  className="flex h-10 cursor-pointer items-center justify-center border-b border-b-green-300 bg-white px-3 text-sm font-medium text-black focus:bg-green-200 focus:text-white focus:outline-none active:bg-white active:text-orange"
                  key={item.id}
                  id={item.id}
                >
                  {item.name}
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
        </Select>
      </div>
    </div>
  );
}

function ImageSection({
  title,
  images,
  description,
}: {
  title: string;
  images: StaticImageData[];
  description: string;
}) {
  return (
    <section className="flex flex-col gap-4  px-7">
      <SectionTitle>{title}</SectionTitle>
      <div>
        <MainImageWithCarousel images={images} />
        <div className="pt-4">{description}</div>
      </div>
    </section>
  );
}
