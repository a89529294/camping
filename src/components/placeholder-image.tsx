import Image, { StaticImageData } from "next/image";
import imagePlaceholder from "@/assets/image-placeholder.svg";
import { twMerge } from "tailwind-merge";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function PlaceholderImage(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    imageSrc?: StaticImageData | string;
  },
) {
  const { className, imageSrc, ...rest } = props;

  return (
    <div
      className={twMerge(
        "relative grid aspect-[3/2] w-full place-items-center bg-gray-300",
        props.className,
      )}
      {...rest}
    >
      <Image
        alt=""
        src={imageSrc || imagePlaceholder}
        draggable={false}
        fill
        className="object-cover"
      />
    </div>
  );
}
