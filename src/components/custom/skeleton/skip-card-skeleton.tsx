import { cn } from "@/lib/utils";

export default function SkipCardSkeleton() {
  return (
    <div
      className={cn(
        "cursor-pointer rounded-xl border p-4 shadow-card bg-white relative transition hover:shadow-md border-border animate-pulse"
      )}
    >
      {/* Image Skeleton */}
      <div className="w-full h-full max-h-44 md:h-50 relative mb-4">
        <div className="absolute bottom-2 left-2 h-6 w-20 bg-gray-200 rounded-full z-10" />
        <div className="w-full h-44 md:h-50 bg-gray-200 rounded-md" />
      </div>

      {/* Title & Price Skeleton */}
      <div className="flex row flex-nowrap items-center justify-between mb-1">
        <div className="h-6 w-32 bg-gray-200 rounded" />
        <div className="h-6 w-24 bg-gray-200 rounded-full" />
      </div>

      <div className="h-4 w-24 bg-gray-200 rounded mb-3" />
      <div className="h-8 w-20 bg-gray-200 rounded mb-4" />

      {/* Button Skeleton */}
      <div className="h-10 w-full bg-gray-200 rounded" />
    </div>
  );
}