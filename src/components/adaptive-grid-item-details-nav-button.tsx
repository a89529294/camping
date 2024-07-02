"use client";

import { ChevronButton } from "@/components/chevron-button";
import { ProgressBarLink } from "@/components/contexts/progress-bar-context";
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
    <ProgressBarLink
      href={`${path}/${itemId}`}
      onClick={() => setDir(dir === "left" ? "ltr" : "rtl")}
    >
      <ChevronButton dir={dir} className="bg-transparent" />
    </ProgressBarLink>
  );
}
