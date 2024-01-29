import { useEffect, useRef, useState } from "react";

import logo from "@/assets/logo.svg";
import star from "@/assets/star.svg";
import { cn } from "@/utils";
import Image from "next/image";
import { Fragment } from "react";

import { leftSideLinks, rightSideLinks, socialMedia } from "@/utils/routes";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { usePathname } from "next/navigation";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false);
  }, [pathname]);

  return (
    <nav className="relative z-30 h-16 bg-green-800 ">
      <SerratedRectangle dark className="relative z-10" />
      {/* 54 === height of nav - height of above SerratedRectangle */}
      <div className="relative z-0 flex h-[54px] items-start">
        <DesktopNavigation
          links={leftSideLinks}
          className="justify-end pr-12"
        />

        {/* huge center LOGO */}
        {!isVisible && (
          <Link
            href="/"
            className="-translate-y-2.5 sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          >
            <Image src={logo} alt="" className="sm:h-36 sm:w-32" />
          </Link>
        )}

        <DesktopNavigation links={rightSideLinks} className="pl-12" />

        {/* social medias */}
        <div className="absolute right-10 top-1/2 flex -translate-y-1/2 gap-6 xl:gap-4 lg:hidden">
          {socialMedia.map((socialMedia, idx) => (
            <a key={idx} href={socialMedia.path} target="_blank">
              <Image alt="" src={socialMedia.icon} />
            </a>
          ))}
        </div>

        <MobileMenu isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
      <SerratedRectangle
        dark={false}
        className="absolute bottom-0 -z-10 w-full translate-y-1/2"
      />
    </nav>
  );
}

const numberOfTriangles = {
  default: 80,
  xl: 60,
  lg: 45,
  md: 36,
  sm: 30,
};

// width of triangle is 16px
function SerratedRectangle({
  dark,
  className,
}: {
  dark: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid h-2.5 overflow-hidden", className)}>
      <div
        className={cn("h-[5px] w-full", dark ? "bg-green-200" : "bg-green-800")}
      />
      <div className="flex w-fit justify-self-center sm:overflow-hidden">
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
        "hidden h-0 w-0 rotate-180 border-x-8 border-b-[5px] border-x-transparent",
        size === "default" && "block xl:hidden",
        size === "xl" && "xl:block lg:hidden",
        size === "lg" && "lg:block md:hidden",
        size === "md" && "md:block sm:hidden",
        size === "sm" && "sm:block",
        dark ? "border-b-green-200" : "border-b-green-light-800",
      )}
    />
  );
}

function DesktopNavigation({
  links,
  className,
}: {
  links: { label: string; path: string }[];
  className?: string;
}) {
  return (
    <nav
      className={cn(
        "flex h-full flex-1 basis-0 items-center sm:hidden",
        className,
      )}
    >
      {links.map((link) => (
        <Fragment key={link.path}>
          <Link
            href={link.path}
            className={` text-lg font-black text-green-200`}
          >
            {link.label}
          </Link>
          <div className="px-5 last:hidden xl:px-2 lg:px-1">
            <Image alt="" src={star} className="lg:hidden" />
          </div>
        </Fragment>
      ))}
    </nav>
  );
}
