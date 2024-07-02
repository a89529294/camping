import { socialMedia } from "@/utils/routes";
import Image from "next/image";

export function SocialMediaLinks({
  className,
  whiteStroke,
}: {
  className?: string;
  whiteStroke?: boolean;
}) {
  return (
    <div className={`flex gap-6 xl:gap-4 lg:hidden ${className}`}>
      {socialMedia.map((socialMedia, idx) => (
        <a key={idx} href={socialMedia.path} target="_blank">
          <Image
            alt=""
            src={
              whiteStroke && socialMedia.iconWhite
                ? socialMedia.iconWhite
                : socialMedia.icon
            }
          />
        </a>
      ))}
    </div>
  );
}
