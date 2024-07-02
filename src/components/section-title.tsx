import Image from "next/image";
import { ReactNode } from "react";
import star from "@/assets/icons/star.svg";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center justify-center gap-1.5 text-center text-xl font-semibold text-orange">
      <Image alt="" src={star} />
      {children}
      <Image alt="" src={star} />
    </h2>
  );
}
