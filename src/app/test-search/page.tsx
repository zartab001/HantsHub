'use client';
import React, { useState } from 'react';
import { services } from '@/lib/mock-data';
import ResultsList from '@/components/search/ResultsList';
import { Service } from '@/types/service';

export default function TestSearchPage() {
  const [query, setQuery] = useState('');

  const filteredServices: Service[] = services.filter((service) =>
    service.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      {/* Search input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4">
        {query
          ? `Results for "${query}" (${filteredServices.length})`
          : 'All Services'}
      </h2>

      {/* Results List */}
      <ResultsList services={filteredServices} />
    </main>
  );
}
