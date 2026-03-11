'use client';

import { Mic, X } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');

  // Load recent searches safely from localStorage
  const [recent, setRecent] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];

    try {
      const stored = localStorage.getItem('recentSearches');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const saveRecentSearch = (value: string) => {
    if (!value.trim()) return;

    let updated = [value, ...recent.filter((item) => item !== value)];
    updated = updated.slice(0, 5);

    setRecent(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Search:', query);
    saveRecentSearch(query);
  };

  const clearInput = () => {
    setQuery('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for services..."
            className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Clear button */}
          {query && (
            <button
              type="button"
              onClick={clearInput}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Search button */}
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          Search
        </button>

        {/* Voice placeholder */}
        <button
          type="button"
          aria-label="Voice search"
          className="border px-3 py-2 rounded-md hover:bg-gray-100 flex items-center justify-center"
        >
          <Mic size={18} />
        </button>
      </form>

      {/* Recent Searches */}
      {recent.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-gray-500 mb-2">Recent searches</p>

          <div className="flex flex-wrap gap-2">
            {recent.map((item, index) => (
              <button
                key={index}
                onClick={() => setQuery(item)}
                className="text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
