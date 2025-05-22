"use client";
import ComicReader from "@/app/components/ComicReader";

export default function Gatt2Page() {
  return (
    <ComicReader
      comicId="episode2"
      totalPages={60}
      imagePath={(page) =>
        `/reference2/${page}.png?height=1080&width=1920&text=COMIC2+${page}`
      }
      color="blue"
    />
  );
}
