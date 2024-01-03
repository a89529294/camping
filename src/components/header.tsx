import { cn } from "@/utils";
import Image from "next/image";
import { ReactNode, Fragment } from "react";
import logo from "@/assets/logo.svg";
import star from "@/assets/star.svg";
import line from "@/assets/icons/line.svg";
import ig from "@/assets/icons/ig.svg";
import facebook from "@/assets/icons/Facebook.svg";
import youtube from "@/assets/icons/youtube.svg";

import Link from "next/link";

const leftSideLinks = [
  {
    label: "關於我們",
    path: "/about",
  },
  {
    label: "最新消息",
    path: "/news",
  },
  {
    label: "餐點介紹",
    path: "/meals",
  },
  {
    label: "親子設施",
    path: "/family-friendly-amenities",
  },
];

const rightSideLinks = [
  {
    label: "房型介紹",
    path: "/rooms",
  },
  {
    label: "聯絡我們",
    path: "/contact",
  },
];

const socialMedia = [
  {
    icon: line,
    path: "https://www.google.com",
  },
  {
    icon: ig,
    path: "https://www.google.com",
  },
  {
    icon: facebook,
    path: "https://www.google.com",
  },
  {
    icon: youtube,
    path: "https://www.google.com",
  },
];

export default function Header() {
  return (
    <nav className="h-16 bg-green-light relative isolate">
      <SerratedRectangle dark className="z-10 relative" />
      {/* 54 === height of nav - height of above SerratedRectangle */}
      <div className="flex relative z-0 items-start h-[54px]">
        <Navigation links={leftSideLinks} className="pr-12 justify-end" />
        <Image src={logo} alt="" className="-translate-y-2.5" />
        <Navigation links={rightSideLinks} className="pl-12" />

        <div className="flex absolute gap-6 right-10 top-1/2 -translate-y-1/2">
          {socialMedia.map((socialMedia, idx) => (
            <a key={idx} href={socialMedia.path} target="_blank">
              <Image alt="" src={socialMedia.icon} />
            </a>
          ))}
        </div>
      </div>
      <SerratedRectangle
        dark={false}
        className="absolute bottom-0 translate-y-1/2 w-full -z-10"
      />
    </nav>
  );
}

const numberOfTriangles = {
  default: 80,
  xl: 60,
  lg: 45,
  md: 36,
  sm: 20,
};

function SerratedRectangle({
  dark,
  className,
}: {
  dark: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid h-2.5 ", className)}>
      <div
        className={cn("h-[5px] w-full", dark ? "bg-green" : "bg-green-light")}
      />
      <div className="w-fit flex justify-self-center">
        {[...Array(numberOfTriangles.default)].map((_, idx) => (
          <UpsideDownTriangle key={idx} dark={dark} />
        ))}
        {[...Array(numberOfTriangles.xl)].map((_, idx) => (
          <UpsideDownTriangle key={idx} dark={dark} size="xl" />
        ))}
        {[...Array(numberOfTriangles.lg)].map((_, idx) => (
          <UpsideDownTriangle key={idx} dark={dark} size="lg" />
        ))}
        {[...Array(numberOfTriangles.md)].map((_, idx) => (
          <UpsideDownTriangle key={idx} dark={dark} size="md" />
        ))}
        {[...Array(numberOfTriangles.sm)].map((_, idx) => (
          <UpsideDownTriangle key={idx} dark={dark} size="sm" />
        ))}
      </div>
    </div>
  );
}

function UpsideDownTriangle({
  size = "default",
  dark,
}: {
  size?: keyof typeof numberOfTriangles;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "w-0 h-0 border-b-[5px] hidden  border-x-8 border-x-transparent rotate-180",
        size === "default" && "block xl:hidden",
        size === "xl" && "xl:block lg:hidden",
        size === "lg" && "lg:block md:hidden",
        size === "md" && "md:block sm:hidden",
        size === "sm" && "sm:block",
        dark ? "border-b-green" : "border-b-green-light"
      )}
    />
  );
}

function Navigation({
  links,
  className,
}: {
  links: { label: string; path: string }[];
  className?: string;
}) {
  return (
    <nav className={cn("flex flex-1 basis-0 h-full items-center", className)}>
      {links.map((link) => (
        <Fragment key={link.path}>
          <Link href={link.path} className="text-lg font-bold text-green">
            {link.label}
          </Link>
          <div className="px-5 last:hidden">
            <Image alt="" src={star} />
          </div>
        </Fragment>
      ))}
    </nav>
  );
}
