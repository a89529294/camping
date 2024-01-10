import Image from "next/image";
import imagePlaceholder from "@/assets/image-placeholder.svg";
import { twMerge } from "tailwind-merge";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function PlaceholderImage(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const { className, ...rest } = props;

  return (
    <div
      className={twMerge(
        "grid aspect-[3/2] w-full place-items-center bg-gray-100",
        props.className,
      )}
      {...rest}
    >
      <Image alt="" src={imagePlaceholder} draggable={false} />
    </div>
  );
}
