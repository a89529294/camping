import Image from "next/image";
import { ComponentProps, ReactNode } from "react";
import star from "@/assets/icons/star.svg";
import { cn } from "@/utils";

export function SectionTitle({
  children,
  className,
  ...rest
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "flex items-center justify-center gap-1.5 text-center text-xl font-semibold text-orange",
        className,
      )}
      {...rest}
    >
      <Image alt="" src={star} />
      {children}
      <Image alt="" src={star} />
    </h2>
  );
}
