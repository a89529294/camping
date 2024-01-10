"use client";

import { useRouteContext } from "@/components/route-context";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

// TODO fix direction, right now it only works on news details page
// might want to disable for other pages

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
      lastPageRef.current![0].cloneNode(true),
    );
    lastPageRef.current = currentPageRef.current.children;

    return () => {
      oldPathnameRef.current = pathname;
    };
  }, [pathname]);

  return (
    <AnimatePresence initial={false}>
      <div>
        <motion.div
          key={pathname + "exit-animation"}
          style={{
            position: "absolute",
          }}
          initial={{ x: 0 }}
          animate={{
            x: dir === "rtl" ? "-100%" : "100%",
            opacity: 0,
          }}
          transition={{
            type: "linear",
            duration: 0.2,
          }}
        >
          <div ref={exitAnimationDivRef} />
        </motion.div>

        <motion.div
          key={pathname}
          initial={{ x: dir === "rtl" ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "linear", duration: 0.2 }}
        >
          <div ref={currentPageRef}>{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
