"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function NewsDetailsBackLink() {
  const [containerEle, setContainerEle] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const pageContainerEle = document.getElementById("page-container");

    if (pageContainerEle) setContainerEle(pageContainerEle);
  }, []);

  return containerEle
    ? createPortal(
        <Link
          href="/news"
          className="text-green-200 border-green-200 absolute left-8 top-8 -translate-y-1/2 border-[1.5px] px-2 py-0.5 text-sm font-bold hover:opacity-80"
        >
          回到列表
        </Link>,
        containerEle,
      )
    : null;
}
