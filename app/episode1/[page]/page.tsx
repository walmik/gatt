"use client";
import ComicReader from "@/app/components/ComicReader";

export default function Gatt1Page() {
  return (
    <ComicReader
      comicId="episode1"
      totalPages={144}
      imagePath={(page) =>
        `/reference/${page}.png?height=1080&width=1920&text=GATT+${page}`
      }
      color="blue"
    />
  );
}
