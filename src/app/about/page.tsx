import aboutCampMap from "@/assets/about-camp-map.jpg";
import PageTitle from "@/components/page-title";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-60  space-y-2.5 bg-white/70 px-7 pt-2.5">
      <PageTitle>關於我們</PageTitle>
      <div>
        <div className="bg-white p-2.5">
          內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
        </div>
        <Image alt="" src={aboutCampMap} className="w-full" />
      </div>
    </div>
  );
}
