'use client';

import { useState } from 'react';
import SearchSkeleton from '@/components/search/SearchSkeleton';
import EmptyState from '@/components/search/EmptyState';
import ResultsList from '@/components/search/ResultsList';
import { services } from '@/lib/mock-data';

export default function TestSearchStates() {
  const [state, setState] = useState<'loading' | 'empty' | 'results'>(
    'loading',
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="grow max-w-6xl mx-auto px-6 py-16 w-full">
        {/* State Switch Buttons */}
        <div className="flex gap-4 mb-10 flex-wrap">
          <button
            onClick={() => setState('loading')}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white
                       hover:bg-blue-700 active:scale-95 transition
                       shadow hover:shadow-lg cursor-pointer"
          >
            Loading State
          </button>

          <button
            onClick={() => setState('empty')}
            className="px-5 py-2 rounded-lg bg-red-500 text-white
                       hover:bg-red-600 active:scale-95 transition
                       shadow hover:shadow-lg cursor-pointer"
          >
            Empty State
          </button>

          <button
            onClick={() => setState('results')}
            className="px-5 py-2 rounded-lg bg-green-600 text-white
                       hover:bg-green-700 active:scale-95 transition
                       shadow hover:shadow-lg cursor-pointer"
          >
            Results State
          </button>
        </div>

        {/* State Rendering */}
        {state === 'loading' && <SearchSkeleton />}

        {state === 'empty' && <EmptyState query="cleaning" />}

        {state === 'results' && <ResultsList services={services} />}
      </main>
    </div>
  );
}
