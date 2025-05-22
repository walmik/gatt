"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Pagination } from "@/components/comic-pagination";

interface ComicReaderProps {
  comicId: string;
  totalPages: number;
  imagePath: (page: number) => string;
  color?: string;
}

export default function ComicReader({
  comicId,
  totalPages,
  imagePath,
  color = "blue",
}: ComicReaderProps) {
  const router = useRouter();
  const params = useParams();
  const currentPage = Number.parseInt(params.page as string) || 1;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentPage < totalPages) {
        router.push(`/${comicId}/${currentPage + 1}`);
      } else if (e.key === "ArrowLeft" && currentPage > 1) {
        router.push(`/${comicId}/${currentPage - 1}`);
      } else if (e.key === "Home") {
        router.push("/");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, router, comicId, totalPages]);

  const borderColor =
    color === "green"
      ? "border-green-700 text-green-400 hover:bg-green-950"
      : "border-blue-700 text-blue-400 hover:bg-blue-950";
  const nextBtnColor =
    color === "green"
      ? "bg-green-600 hover:bg-green-700"
      : "bg-blue-600 hover:bg-blue-700";

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-black">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button variant="outline" size="icon" className={borderColor}>
              <Home className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="relative w-full aspect-[1/2] mb-6 rounded-md overflow-hidden">
          <div className="absolute rounded-lg z-10"></div>
          <div className="absolute inset-0 flex w-full h-full z-20">
            {/* Left half - go to previous page */}
            <div
              className="w-1/2 h-full cursor-w-resize"
              onClick={() =>
                currentPage > 1 &&
                router.push(`/${comicId}/${Math.max(1, currentPage - 1)}`)
              }
              title="Previous page"
            ></div>
            {/* Right half - go to next page */}
            <div
              className="w-1/2 h-full cursor-e-resize"
              onClick={() =>
                currentPage < totalPages &&
                router.push(
                  `/${comicId}/${Math.min(totalPages, currentPage + 1)}`
                )
              }
              title="Next page"
            ></div>
          </div>
          <Image
            src={imagePath(currentPage)}
            alt={`Comic page ${currentPage}`}
            fill
            priority
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="outline"
            onClick={() =>
              router.push(`/${comicId}/${Math.max(1, currentPage - 1)}`)
            }
            disabled={currentPage <= 1}
            className={`gap-2 ${borderColor} disabled:opacity-50`}
          >
            <ChevronLeft className="h-4 w-4" /> PREVIOUS
          </Button>
          <div className="text-xl font-semibold futuristic-title text-sm md:text-base">
            {currentPage}/{totalPages}
          </div>
          <Button
            onClick={() =>
              router.push(
                `/${comicId}/${Math.min(totalPages, currentPage + 1)}`
              )
            }
            disabled={currentPage >= totalPages}
            className={`gap-2 ${nextBtnColor} text-white disabled:opacity-50`}
          >
            NEXT <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          slug={comicId}
        />
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Use arrow keys to navigate: ← Previous | Next →</p>
        </div>
      </div>
    </main>
  );
}
