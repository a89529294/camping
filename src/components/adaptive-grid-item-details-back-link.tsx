"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function AdaptiveGridItemDetailsBackLink({ path }: { path: string }) {
  const [containerEle, setContainerEle] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const pageContainerEle = document.getElementById("page-container");

    if (pageContainerEle) setContainerEle(pageContainerEle);
  }, []);

  return containerEle
    ? createPortal(
        <Link
          href={path}
          className="absolute left-8 top-8 -translate-y-1/2 border-[1.5px] border-green-200 px-2 py-0.5 text-sm font-bold text-green-200 hover:opacity-80"
        >
          回到列表
        </Link>,
        containerEle,
      )
    : null;
}
