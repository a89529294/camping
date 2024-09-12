import { MainImageWithCarousel } from "@/components/main-image-with-carousel";
import { SectionTitle } from "@/components/section-title";
import Image, { StaticImageData } from "next/image";

export function ImageSection({
  title,
  images,
  description,
  displayAllImages,
}: {
  title: string;
  images: string[] | null;
  description: string;
  displayAllImages?: boolean;
}) {
  return (
    <section className="flex flex-col gap-4 px-7 sm:px-0">
      <SectionTitle>{title}</SectionTitle>
      <div>
        {displayAllImages ? (
          <div className="space-y-2">
            {images ? (
              images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[3/2] sm:min-w-0 sm:flex-1"
                >
                  <Image alt="" src={image} className=" object-cover " fill />
                </div>
              ))
            ) : (
              <div className="relative aspect-[3/2] sm:min-w-0 sm:flex-1" />
            )}
          </div>
        ) : (
          <MainImageWithCarousel images={images ?? []} />
        )}
        <div className="pb-4 pt-4 text-center sm:px-13">{description}</div>
      </div>
    </section>
  );
}
