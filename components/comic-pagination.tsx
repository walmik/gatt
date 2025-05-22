"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  slug: string;
}

export function Pagination({ currentPage, totalPages, slug }: PaginationProps) {
  const router = useRouter();

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Calculate range around current page
    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis if needed before range
    if (rangeStart > 2) {
      pages.push(-1); // -1 represents ellipsis
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Add ellipsis if needed after range
    if (rangeEnd < totalPages - 1) {
      pages.push(-2); // -2 represents ellipsis
    }

    // Always show last page if not already included
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-1">
      {pageNumbers.map((pageNum, index) => {
        // Render ellipsis
        if (pageNum < 0) {
          return (
            <div key={`ellipsis-${index}`} className="px-2 text-blue-400">
              ...
            </div>
          );
        }

        // Render page button
        return (
          <Button
            key={`page-${pageNum}`}
            variant={currentPage === pageNum ? "default" : "outline"}
            size="sm"
            className={cn(
              "w-9 h-9 font-orbitron text-xs",
              currentPage === pageNum
                ? "bg-blue-600 hover:bg-blue-700 pointer-events-none"
                : "border-blue-700 text-blue-400 hover:bg-blue-950"
            )}
            onClick={() => router.push(`/${slug}/${pageNum}`)}
          >
            {pageNum}
          </Button>
        );
      })}
    </div>
  );
}
