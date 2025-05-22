import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-black">
      <div className="max-w-5xl w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-10 text-center futuristic-title">
          R1G Studios | GATT
        </h1>
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center">
          {/* Comic 1 */}
          <div className="relative w-full md:w-80 aspect-[2/3] group comic-page">
            <Image
              src="/reference/cover.png?height=1080&width=1920&text=GATT"
              alt="GATT Comic Cover"
              fill
              className="rounded-lg shadow-lg object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg z-20">
              <Link href="/episode1/1">
                <Button
                  size="lg"
                  className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  READ EPISODE 1 <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Comic 2 */}
          <div className="relative w-full md:w-80 aspect-[2/3] group comic-page">
            <Image
              src="/reference2/7.png?height=1080&width=1920&text=COMIC+2"
              alt="Comic 2 Cover"
              fill
              className="rounded-lg shadow-lg object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg z-20">
              <Link href="/episode2/1">
                <Button
                  size="lg"
                  className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  READ EPISODE 2 <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
