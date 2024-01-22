"use client";

import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function Pathname({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isIndex = pathname === "/";

  return (
    <div
      className={cn(
        "flex flex-col ",
        isIndex ? "h-full overflow-hidden" : "h-full overflow-hidden",
      )}
    >
      {children}
    </div>
  );
}
