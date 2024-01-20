"use client";

import { ChevronButton } from "@/components/chevron-button";
import { useRouteContext } from "@/components/contexts/route-context";
import Link from "next/link";

export function AdaptiveGirdItemDetailsNavButton({
  itemId,
  dir,
  path,
}: {
  itemId: string;
  dir: "left" | "right";
  path: string;
}) {
  const { setDir } = useRouteContext();

  return (
    <Link
      href={`${path}/${itemId}`}
      onClick={() => setDir(dir === "left" ? "ltr" : "rtl")}
    >
      <ChevronButton dir={dir} className="bg-transparent" />
    </Link>
  );
}
