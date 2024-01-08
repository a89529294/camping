"use client";

import Image from "next/image";
import close from "@/assets/icons/x.svg";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";

export function PageCloseButton() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <button
      data-open={isOpen}
      className="bg-orange absolute right-0 top-0 grid h-11 w-[60px] -translate-y-full place-items-center"
      onClick={() => setIsOpen((v) => !v)}
    >
      <Image alt="x" src={close} />
    </button>
  );
}
