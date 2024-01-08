import aboutCampMap from "@/assets/about-camp-map.jpg";
import greenChevronDown from "@/assets/icons/green-chevron-down.svg";
import { PageCloseButton } from "@/components/page-close-button";
import PageTitle from "@/components/page-title";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative h-full bg-green-light/[0.93]  pt-16 transition has-[button[data-open='false']]:translate-y-[calc(100%-90px)]">
      <PageCloseButton />

      {/* green downward chevrons row */}
      <div className="mx-8 flex overflow-hidden">
        {[...Array(100)].fill("").map((_, idx) => (
          <Image key={idx} alt="" src={greenChevronDown} />
        ))}
      </div>

      <div className="scrollbar-thin scrollbar-thumb-green relative ml-6 mr-4 h-[calc(100%-5px)] overflow-y-auto pt-5">
        <div className="absolute inset-x-60 space-y-2.5 bg-white/70 px-7 pb-40 pt-2.5">
          <PageTitle>關於我們</PageTitle>
          <div>
            <div className="bg-white p-2.5">
              內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
            </div>
            <Image alt="" src={aboutCampMap} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
