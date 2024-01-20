import { newsList } from "@/app/news/temp-data";
import greenArrowRight from "@/assets/icons/green-arrow-right.svg";
import { AdaptiveGrid } from "@/components/adaptive-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return <AdaptiveGrid items={newsList} path="news" />;
}
