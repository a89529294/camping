"use client";

// import { Meal, Meals } from "@/app/meals/temp-meal-data";

import { MainImageWithCarousel } from "@/components/main-image-with-carousel";
import { SectionTitle } from "@/components/section-title";
import { cn } from "@/utils";
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

type Meal = {
  id: number;
  name: string;
  sections: {
    id: number;
    title: string;
    content: string;
    images: null | string[];
  }[];
};

type Room = {
  id: number;
  name: string;
  intro: string;
  images: string[] | null;
  equipment: string | null;
  notice: string;
  holidayJudgment: string;
};

export function NewVerticalSlidingWrapper({
  items,
  className,
}: {
  items: Meal[] | Room[];
  className?: string;
}) {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [animateDir, setAnimateDir] = useState<"up" | "down">("up");

  if (!selectedItem) return null;

  return (
    <div
      className={cn(
        "relative mx-auto max-w-xl bg-white/70 pt-4.5 sm:pt-4",
        className,
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          className="flex flex-col gap-10 sm:gap-6 sm:pb-10"
          key={selectedItem.id}
          initial={{ y: animateDir === "up" ? "100%" : "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: animateDir === "up" ? "100%" : "-100%", opacity: 0 }}
          transition={{
            duration: 1,
          }}
        >
          {"sections" in selectedItem ? (
            selectedItem.sections.map((section) => (
              <ImageSection
                key={section.title}
                title={section.title}
                images={section.images ?? []}
                description={section.content}
              />
            ))
          ) : (
            <>
              <ImageSection
                title={selectedItem.name}
                images={selectedItem.images ?? []}
                description={selectedItem.intro}
              />
              <div className="space-y-10 px-7">
                {[
                  // { title: "帳內設備", content: selectedItem.equipment },
                  { title: "住宿須知", content: selectedItem.notice },
                  {
                    title: "平/假日判定",
                    content: selectedItem.holidayJudgment,
                  },
                ].map((paragraph) => (
                  <div key={paragraph.title} className="space-y-2.5">
                    <SectionTitle>{paragraph.title}</SectionTitle>
                    <div
                      className="bg-white p-2.5"
                      dangerouslySetInnerHTML={{
                        __html: paragraph.content || "無",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute right-7 top-5 sm:static sm:mx-auto sm:mb-4 sm:w-fit">
        <Select
          aria-label="?"
          selectedKey={selectedItem.id}
          onSelectionChange={(id) => {
            const prevItemIndex = items.findIndex(
              (item) => item.id === selectedItem.id,
            );
            const nextMealIndex = items.findIndex((item) => item.id === id);

            if (nextMealIndex > prevItemIndex) setAnimateDir("down");
            else setAnimateDir("up");
            setSelectedItem(items.find((item) => item.id === id)!);
          }}
        >
          <Button className="flex h-7 items-center gap-1 border-[1.5px] border-green-200 bg-white/70 px-2 text-sm font-bold text-green-200">
            <SelectValue className="" />
            <span aria-hidden="true">▼</span>
          </Button>
          <Popover offset={0} placement="bottom right">
            <ListBox>
              {items.map((item) => (
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
  images: string[];
  description: string;
}) {
  return (
    <section className="flex flex-col gap-4 px-7 sm:px-0">
      <SectionTitle>{title}</SectionTitle>
      <div>
        <MainImageWithCarousel images={images} />
        <div className="pt-4 sm:px-13">{description}</div>
      </div>
    </section>
  );
}
