import Image from "next/image";
import greenArrowLeft from "@/assets/icons/green-arrow-left.svg";
import greenArrowRight from "@/assets/icons/green-arrow-right.svg";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  dir: "left" | "right";
};

export function ChevronButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={twMerge(
        "border-green-200 grid h-7 w-7 shrink-0 place-items-center border-[1.5px] bg-white",
        props.disabled && "cursor-not-allowed opacity-50",
        props.className,
      )}
    >
      <Image
        alt=""
        src={props.dir === "left" ? greenArrowLeft : greenArrowRight}
      />
    </button>
  );
}
