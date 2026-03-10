'use client';

export default function SearchSkeleton() {
  const skeletonItems = Array.from({ length: 6 });

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm animate-pulse"
        >
          {/* Category badge */}
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>

          {/* Title */}
          <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

          {/* Description lines */}
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mb-1"></div>
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>

          {/* Pills */}
          <div className="flex gap-2 mb-3">
            <div className="h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>

          {/* Price + location */}
          <div className="flex justify-between">
            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
