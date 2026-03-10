'use client';

import Link from 'next/link';

type EmptyStateProps = {
  query?: string;
};

export default function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center text-center py-20 max-w-lg mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        No results found
      </h2>

      {/* Query message */}
      {query && (
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We couldn’t find any services matching{' '}
          <span className="font-medium">{query}</span>.
        </p>
      )}

      {/* Suggestions */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 w-full mb-6">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Try one of the following:
        </p>

        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Try different keywords</li>
          <li>• Check the spelling of your search</li>
          <li>• Browse available categories</li>
        </ul>
      </div>

      {/* Browse categories button */}
      <Link
        href="/categories"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg
                   hover:bg-blue-700 transition shadow hover:shadow-md"
      >
        Browse Categories
      </Link>
    </div>
  );
}
