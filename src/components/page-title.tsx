import Image from "next/image";
import { ReactNode } from "react";
import star from "@/assets/icons/star.svg";

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-orange flex items-center justify-center gap-1.5 text-center text-xl font-semibold">
      <Image alt="" src={star} />
      {children}
      <Image alt="" src={star} />
    </h1>
  );
}
