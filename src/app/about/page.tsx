import aboutCampMap from "@/assets/about-camp-map.jpg";
import { SectionTitle } from "@/components/section-title";

import Image from "next/image";
import { ReactNode } from "react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-xl space-y-2.5 bg-white/70 px-7 pt-2.5 font-biaukai sm:pb-10">
      <SectionTitle>愛，聚時光森林露營區</SectionTitle>
      <div>
        <div className="bg-white p-2.5">
          <p>
            <StandoutText>隱身</StandoutText>綿延山峰中，鳥語鳴叫花木叢
          </p>
          <p>
            <StandoutText>高山</StandoutText>雲霧爬樹梢，翠綠森林高立聳
          </p>
          <p>
            <StandoutText>草綠</StandoutText>清脆竄大地，露水輕滑葉梢落
          </p>
          <p className="mb-5">
            <StandoutText>鳥鳴</StandoutText>響徹大山群，樹下靜夜露一宿
          </p>
          <p>
            <StandoutText2>愛</StandoutText2>
            ，聚時光森林露營區將於2024/01/01正式開放試營運！！
            於2023/10/01起接手「外寓露營區」，承蒙前外寓露營區營主用心維護大自然的森林環境，種植了近200棵台灣肖楠樹讓整個營區被大樹環抱著，使愛聚時光團隊可以將最自然的環境呈現給喜好露營的朋友們。
            新團隊接手後重新規劃豪華免搭山屋狩獵帳共10帳、綠地自搭帳20帳、車露營位5帳。
            許多朋友疑問營區取名由來，愛露營的這些朋友為何會聚在一起呢？團隊深思許久不就是因為愛露營以及因為愛大自然最重要的是因為愛家人愛朋友才會聚在一起不是嗎？
            所以因為<StandoutText2>愛</StandoutText2>才能讓大家
            <StandoutText2>聚</StandoutText2>在一起創造無限歡樂的美好回憶。
          </p>
        </div>
        <Image alt="" src={aboutCampMap} className="w-full" />
      </div>
    </div>
  );
}

function StandoutText({ children }: { children: ReactNode }) {
  return <em className="text-3xl not-italic leading-[30px]">{children}</em>;
}

function StandoutText2({ children }: { children: ReactNode }) {
  return <em className="text-4xl not-italic leading-8">{children}</em>;
}
