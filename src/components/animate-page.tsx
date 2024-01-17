"use client";

import { useRouteContext } from "@/components/contexts/route-context";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  const oldPathnameRef = useRef("");
  const pathname = usePathname();
  const lastPageRef = useRef<HTMLCollection | null>(null);
  const currentPageRef = useRef<HTMLDivElement>(null);
  const exitAnimationDivRef = useRef<HTMLDivElement>(null);
  const { dir } = useRouteContext();

  useLayoutEffect(() => {
    console.log("layout effect");
    console.log(oldPathnameRef.current, pathname);
    if (!currentPageRef.current) return;
    if (!lastPageRef.current)
      lastPageRef.current = currentPageRef.current.children;

    exitAnimationDivRef.current?.appendChild(
      lastPageRef.current?.[0]?.cloneNode(true),
    );
    lastPageRef.current = currentPageRef.current.children;

    return () => {
      oldPathnameRef.current = pathname;
      console.log("in return fn", oldPathnameRef.current);
    };
  }, [pathname]);

  const oldPathStartsWith =
    oldPathnameRef.current.startsWith("/news/") ||
    oldPathnameRef.current.startsWith("/news");
  const duration = 0.2;

  const enterInitial = (() => {
    if (oldPathStartsWith && pathname.startsWith("/news/"))
      return { x: dir === "rtl" ? "100%" : "-100%" };
    return {
      x: 0,
      opacity: 0,
    };
  })();

  const enterAnimation = (() => {
    if (oldPathStartsWith && pathname.startsWith("/news/")) return { x: 0 };
    return {
      opacity: 1,
      x: 0,
    };
  })();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        initial={enterInitial}
        animate={enterAnimation}
        transition={{ type: "linear", duration }}
      >
        <div ref={currentPageRef}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};
