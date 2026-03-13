'use client';

import { Mic } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LocationSelector from './LocationSelector';
import { useSearchStore } from '@/store/searchStore';

export default function SearchBar() {
  const router = useRouter();

  const {
    query,
    location,
    setQuery,
    addRecentSearch,
    loadFromStorage,
  } = useSearchStore();

  const [input, setInput] = useState(query);

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) return;

    setQuery(trimmed);
    addRecentSearch(trimmed);

    router.push(
      `/search?q=${encodeURIComponent(trimmed)}&location=${encodeURIComponent(
        location
      )}`
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 bg-white border rounded-lg p-2 shadow-sm"
      >
        {/* Location */}
        <LocationSelector />

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search services... (press /)"
          className="flex-1 px-3 py-2 outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded-md hover:opacity-90"
        >
          Search
        </button>

        {/* Voice button */}
        <button
          type="button"
          className="border px-3 py-2 rounded-md hover:bg-gray-100"
        >
          <Mic size={18} />
        </button>
      </form>
    </div>
  );
}