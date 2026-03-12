'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

export default function HeaderSearch() {
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false); // track focus
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');

    if (saved) {
      const parsed = JSON.parse(saved);
      setTimeout(() => setRecent(parsed), 0);
    }
  }, []);

  // Keyboard shortcut "/" focuses search bar
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsFocused(true);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Close recent dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    const updated = [trimmed, ...recent.filter((q) => q !== trimmed)].slice(
      0,
      5,
    );
    setRecent(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    router.push(`/search?q=${trimmed}`);
    setQuery('');
    setIsFocused(false);
  };

  const clearInput = () => {
    setQuery('');
  };

  const handleRecentClick = (item: string) => {
    setQuery(item);
    router.push(`/search?q=${item}`);
    setIsFocused(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xs">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services... (press /)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="border rounded-lg px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {query && (
            <button
              type="button"
              onClick={clearInput}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </form>

      {/* Dropdown shows only when focused and there are recent items */}
      {isFocused && recent.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <p className="text-xs text-gray-500 px-3 pt-2 pb-1">
            Recent searches
          </p>
          <div className="divide-y divide-gray-200">
            {recent.map((item, index) => (
              <div
                key={index}
                onClick={() => handleRecentClick(item)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
