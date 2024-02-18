import { AttractionsSlider } from "@/components/attractions-slider";
import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
import { ReactNode } from "react";
import qrCode from "@/assets/qr-code.png";
import { ContactForm } from "@/components/contact-form";

const attractions = [
  {
    id: "1",
    name: "台北101",
    travelTime: 30,
  },
  {
    id: "2",
    name: "太魯閣",
    travelTime: 60,
  },
  {
    id: "3",
    name: "日月潭",
    travelTime: 45,
  },
  {
    id: "4",
    name: "阿里山",
    travelTime: 100,
  },
];

export default function ContactPage() {
  return (
    <div className="grid grid-cols-2 gap-5 bg-white/70 p-7 sm:flex sm:flex-col sm:bg-[#F4FAF9] sm:px-2.5 sm:pb-10 sm:pt-2.5">
      <div className="space-y-10 sm:space-y-6 sm:px-10">
        <Section title="交通方式">
          <div className="p-2.5">
            內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
          </div>
        </Section>
        <Section title="周邊景點">
          <div className="p-2.5">
            <AttractionsSlider attractions={attractions} />
          </div>
        </Section>
        <Section title="聯絡我們">
          <div className="flex justify-center space-y-2.5 py-4.5">
            <div className="flex gap-5 sm:flex-col sm:items-center">
              <Image alt="" src={qrCode} height="90" width="90" />
              <div className="flex flex-col justify-between text-gray-500 sm:gap-2">
                <p>
                  <span className="mr-2 font-semibold text-green-200">
                    地址
                  </span>
                  南投縣埔里鎮種瓜路15-1號
                </p>
                <p>
                  <span className="mr-2 font-semibold text-green-200">
                    電話
                  </span>
                  0912-175-370
                </p>
                <div className="border-b-green-2 border-b" />
                <div className="flex justify-between">
                  <div>
                    <span className="mr-2 font-semibold text-orange">
                      Check In
                    </span>
                    15:30
                  </div>
                  <div>
                    <span className="mr-2 font-semibold text-orange">
                      Check Out
                    </span>
                    12:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section title="主動聯繫">
          <div className="mx-auto w-fit pb-5 pt-4 sm:p-4">
            <p className="mb-4 text-nowrap text-green-200 sm:text-wrap">
              請留下您的聯絡資訊，我們將會儘快與您聯繫。
            </p>
            <ContactForm />
          </div>
        </Section>
      </div>

      <iframe
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:Ej1Oby4gMTUsIFpob25nZ3VhIFJkLCBQdWxpIFRvd25zaGlwLCBOYW50b3UgQ291bnR5LCBUYWl3YW4gNTQ1IjASLgoUChIJIwwPEhHYaDQRGX0MFrSaRykQDyoUChIJ3T0icgvYaDQRERtQwOqYWEI&key=AIzaSyDFAmA8lVDx7ahmx6DeiDXa9heDqBDPPHE"
        className="aspect-[480/572] w-full border-none sm:-order-1 sm:aspect-[373/393]"
      ></iframe>
    </div>
  );
}

function Section({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="space-y-2.5 ">
      <SectionTitle>{title}</SectionTitle>
      <div className="bg-white">{children}</div>
    </div>
  );
}
