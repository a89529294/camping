import qrCode from "@/assets/qr-code.png";
import { AttractionsSlider } from "@/components/attractions-slider";
import { ContactForm } from "@/components/contact-form";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
import { ReactNode } from "react";

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
            <div className="p-2.5">
              <span className="text-2xl font-bold">自行開車路線:</span>
              <p>
                國道6號下「愛蘭交流道」→往「日月潭」方向→行經「國立暨南大學」後全家便利商店右轉→往「妮娜巧克力夢想城堡」方向→行經「桑心咖啡網美餐廳」後右轉→岔路往右邊方向(上山路段開始皆有營區指示路牌)→行經「景上景民宿」後右轉→行經「草湳濕地農場」岔路右轉順行即可抵達「「愛聚時光露營區」」。
              </p>
            </div>
            <div className="p-2.5">
              <span className="text-2xl font-bold">
                大眾交通路線:《埔里免費接駁》
              </span>
              <p>
                台鐵&高鐵皆於「台中站」下車後→轉乘「南投客運6670台灣好行觀光巴士」→至「埔里遊客中心」或「埔里轉運站」等待即可。
              </p>
              <p className="italic">
                ＊如需接駁請務必於入住前與我們聯繫，避免讓您等待太久。
              </p>
            </div>
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
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:Ej1Oby4gMTUsIFpob25nZ3VhIFJkLCBQdWxpIFRvd25zaGlwLCBOYW50b3UgQ291bnR5LCBUYWl3YW4gNTQ1IjASLgoUChIJIwwPEhHYaDQRGX0MFrSaRykQDyoUChIJ3T0icgvYaDQRERtQwOqYWEI&key=${process.env.MAP_API_KEY}`}
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
