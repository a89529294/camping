import facebook from "@/assets/icons/Facebook.svg";
import facebookWhite from "@/assets/icons/Facebook-white.svg";
import line from "@/assets/icons/line.svg";
import lineWhite from "@/assets/icons/line-white.svg";
import ig from "@/assets/icons/ig.svg";
import igWhite from "@/assets/icons/ig-white.svg";
import youtube from "@/assets/icons/youtube.svg";
import youtubeWhite from "@/assets/icons/youtube-white.svg";

export const leftSideLinks = [
  {
    label: "關於我們",
    path: "/about",
  },
  {
    label: "最新消息",
    path: "/news",
  },
  {
    label: "房型介紹",
    path: "/rooms",
  },
  {
    label: "親子⁄公共設施",
    path: "/family-friendly-amenities",
  },
];

export const rightSideLinks = [
  {
    label: "餐點介紹",
    path: "/meals",
  },
  {
    label: "聯絡我們",
    path: "/contact",
  },
];

export const socialMedia = [
  {
    icon: line,
    iconWhite: lineWhite,
    path: "https://lin.ee/2qIRX8y",
  },
  {
    icon: ig,
    iconWhite: igWhite,
    path: "https://www.instagram.com/ig_time.camping.puli?igsh=MTVvMmM2OGJ3ajk4aQ==",
  },
  {
    icon: facebook,
    iconWhite: facebookWhite,
    path: "https://www.facebook.com/profile.php?id=61555263774686&mibextid=LQQJ4d",
  },
  // {
  //   icon: youtube,
  //   iconWhite: youtubeWhite,
  //   path: "https://www.google.com",
  // },
];
