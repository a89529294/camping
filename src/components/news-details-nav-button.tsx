"use client";

import { ChevronButton } from "@/components/chevron-button";
import { useRouteContext } from "@/components/route-context";
import Link from "next/link";

export function NewsDetailsNavButton({
  newsId,
  dir,
}: {
  newsId: string;
  dir: "left" | "right";
}) {
  const { setDir } = useRouteContext();

  return (
    <Link
      href={`/news/${newsId}`}
      onClick={() => setDir(dir === "left" ? "ltr" : "rtl")}
    >
      <ChevronButton dir={dir} className="bg-transparent " />
    </Link>
  );
}
