import { leftSideLinks, rightSideLinks } from "@/utils/routes";
import { RemoveScroll } from "react-remove-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import star from "@/assets/star.svg";
import phone from "@/assets/icons/phone.svg";
import pin from "@/assets/icons/map-pin.svg";
import { usePathname } from "next/navigation";
import { ProgressBarLink } from "@/components/contexts/progress-bar-context";

const links = [...leftSideLinks, ...rightSideLinks];

export function MobileMenu({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const mobilePageContainer = useRef<HTMLDivElement>();

  useEffect(() => {
    const container = document.getElementById(
      "mobile-page-container",
    ) as HTMLDivElement;
    if (container) mobilePageContainer.current = container;
  }, []);

  return (
    <div className="absolute right-3.5 top-1/2 hidden -translate-y-1/2 items-center sm:flex">
      <button onClick={() => setIsVisible(!isVisible)}>
        <div className="flex w-7.5 flex-col gap-1">
          <div className="border-b-2 border-green-200" />
          <div className="border-b-2 border-green-200" />
          <div className="border-b-2 border-green-200" />
        </div>
      </button>

      {/* 64px is the height of the viewport - header */}
      {mobilePageContainer.current &&
        createPortal(
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="fixed inset-x-0 top-16 z-20"
                initial={{ opacity: 0, transform: "translateY(-100%)" }}
                animate={{ opacity: 1, transform: "translateY(0)" }}
                exit={{ opacity: 0, transform: "translateY(-100%)" }}
              >
                <RemoveScroll className="flex h-[calc(100dvh-64px)] flex-col items-center justify-between bg-green-200  pt-12">
                  <nav>
                    {links.map((link, idx) => (
                      <div key={idx} className="w-18">
                        <ProgressBarLink
                          className="text-lg font-medium text-white"
                          href={link.path}
                          onClick={() => {
                            pathname === link.path && setIsVisible(false);
                          }}
                        >
                          {link.label}
                        </ProgressBarLink>
                        {idx !== links.length - 1 && (
                          <div className="flex w-full justify-center py-5">
                            <Image alt="" src={star} />
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="flex flex-col items-center gap-3 pb-6">
                    <div className="flex gap-1 text-white">
                      <Image alt="" src={phone} />
                      0912-175-370
                    </div>
                    <div className="flex gap-1 text-white">
                      <Image alt="" src={pin} />
                      南投縣埔里鎮種瓜路15-1號
                    </div>
                  </div>
                </RemoveScroll>
              </motion.div>
            )}
          </AnimatePresence>,
          mobilePageContainer.current,
        )}
    </div>
  );
}
