import { ImageSection } from "@/components/image-section";
import { SectionTitle } from "@/components/section-title";
import { baseURL, cn } from "@/utils";

export default async function RoomDetails({
  params: { roomId },
}: {
  params: { roomId: string };
}) {
  const response = await fetch(
    `${baseURL}/api/room-collections/${roomId}?populate=images`,
  );

  const { data } = await response.json();

  if (!data) return null;

  const transformedRoom = {
    id: data.id,
    name: data.attributes.name,
    intro: data.attributes.intro,
    images: data.attributes?.images?.data
      ? data.attributes.images.data.map((image: any) => image.attributes.url)
      : null,
    notice: data.attributes.notice,
    holidayJudgment: data.attributes.holidayJudgment,
  };

  return (
    <div className={cn("relative mx-auto max-w-xl bg-white/70 pt-4.5 sm:pt-4")}>
      <div className="flex flex-col gap-10 sm:gap-6 sm:pb-10">
        <ImageSection
          title={transformedRoom.name}
          images={transformedRoom.images ?? []}
          description={transformedRoom.intro}
        />
        <div className="space-y-10 px-7">
          {[
            // { title: "帳內設備", content: selectedItem.equipment },
            { title: "住宿須知", content: transformedRoom.notice },
            {
              title: "平/假日判定",
              content: transformedRoom.holidayJudgment,
            },
          ].map((paragraph) => (
            <div key={paragraph.title} className="space-y-2.5">
              <SectionTitle>{paragraph.title}</SectionTitle>
              <div
                className="bg-white p-2.5"
                dangerouslySetInnerHTML={{
                  __html: paragraph.content || "無",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
