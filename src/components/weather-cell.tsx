import Image from "next/image";
import downArrow from "@/assets/icons/down-arrow.svg";

import {
  dayWeatherIconMap,
  nightWeatherIconMap,
} from "@/utils/weather-icon-map";

export async function WeatherCell() {
  const response = await fetch(
    `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-023?Authorization=${process.env.OPENDATA_API_KEY}&locationName=${encodeURIComponent(
      "埔里鎮",
    )}&elementName=Wx&elementName=T&timeFrom=${encodeURIComponent(
      new Date(Date.now() + 0 * 60 * 60 * 1000).toISOString().slice(0, -5),
    )}&timeTo=${encodeURIComponent(
      new Date(Date.now() + 16 * 60 * 60 * 1000).toISOString().slice(0, -5),
    )}`,
    { next: { revalidate: 3600 } },
  );
  const data = await response.json();
  let temperature = 20;
  let wx = "多雲";
  let isDay = true;
  try {
    temperature =
      data.records.locations[0].location[0].weatherElement[0].time[0]
        .elementValue[0].value;
    wx =
      data.records.locations[0].location[0].weatherElement[1].time[0]
        .elementValue[0].value;
    isDay =
      new Date(
        data.records.locations[0].location[0].weatherElement[0].time[0].startTime,
      ).getHours() < 18;
  } catch (e) {
    console.log(e);
  }

  const iconSource = (() => {
    if (isDay) {
      for (let [key, value] of dayWeatherIconMap.entries()) {
        const match = key.every((k) => wx.search(k) !== -1);
        if (match) return value;
      }
    } else {
      for (let [key, value] of nightWeatherIconMap.entries()) {
        const match = key.every((k) => wx.search(k) !== -1);
        if (match) return value;
      }
    }

    return dayWeatherIconMap.values().next().value;
  })();

  return (
    <div className=" grid w-fit grid-cols-[auto_auto] lg:flex lg:items-end lg:gap-2 sm:grid">
      <div className="pt-2 text-4xl text-white">
        {temperature}
        <sup className="top-0 align-top text-base">℃</sup>
      </div>
      <div className="relative pt-2 lg:py-0">
        <Image alt="" src={iconSource} className="h-12 w-12 object-contain" />
      </div>
      <div className="col-span-2 flex gap-1.5 text-white">
        <Image alt="" src={downArrow} />
        南投縣, 埔里鎮
      </div>
    </div>
  );
}
