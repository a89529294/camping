"use client";

import Image from "next/image";
import close from "@/assets/icons/x.svg";

import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useRouteContext } from "@/components/route-context";

export function PageCloseButton() {
  const { visibility, setVisibility } = useRouteContext();

  return (
    <button
      data-visibility={visibility}
      className="group absolute right-0 top-0 h-11 w-[60px] -translate-y-full bg-orange"
      onClick={() =>
        setVisibility((v) => (v === "showButton" ? "visible" : "showButton"))
      }
    >
      <Image
        alt="x"
        src={close}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity group-data-[visibility='showButton']:opacity-0"
      />
      <ChevronUp
        size={36}
        stroke="white"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity group-data-[visibility='visible']:opacity-0"
      />
    </button>
  );
}
