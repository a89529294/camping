import daySunny from "@/assets/icons/weather/day/sunny.svg";
import nightSunny from "@/assets/icons/weather/night/sunny.svg";
import daySunnyCloudy from "@/assets/icons/weather/day/sunny-cloudy.svg";
import nightSunnyCloudy from "@/assets/icons/weather/night/sunny-cloudy.svg";
import cloudy from "@/assets/icons/weather/cloudy.svg";
import showers from "@/assets/icons/weather/showers.svg";
import rainy from "@/assets/icons/weather/rainy.svg";
import thunderStorm from "@/assets/icons/weather/thunder-storm.svg";
import misty from "@/assets/icons/weather/misty.svg";

export const dayWeatherIconMap = new Map([
  [["晴", "雲"], daySunnyCloudy],
  [["晴"], daySunny],
  [["暫", "雨"], showers],
  [["雷"], thunderStorm],
  [["雨"], rainy],
  [["雲"], cloudy],
  [["霧"], misty],
]);
export const nightWeatherIconMap = new Map([
  [["晴", "雲"], nightSunnyCloudy],
  [["晴"], nightSunny],
  [["短暫雨", "短暫陣雨"], showers],
  [["雷"], thunderStorm],
  [["雨"], rainy],
  [["雲"], cloudy],
  [["霧"], misty],
]);
