import { services } from '@/lib/mock-data';
import ResultsList from '@/components/search/ResultsList';
import Link from 'next/link';

type SearchPageProps = {
  searchParams: Promise<{ q?: string; location?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const query = params.q?.toLowerCase().trim() || '';
  const location = params.location?.toLowerCase().trim() || '';

  const filteredServices = services.filter((service) => {
      const searchableText = `
        ${service.title}
        ${service.description}
        ${service.category.name}
      `.toLowerCase();

      const matchesQuery = query
        ? searchableText.includes(query)
        : true;

      const matchesLocation =
        location && location !== "All Hampshire"
          ? service.location.toLowerCase().includes(location.toLowerCase())
          : true;

      return matchesQuery && matchesLocation;
    });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen">
      {(query || location) && (
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            {filteredServices.length} results
            {query && ` for "${query}"`}
            {location && ` in ${location}`}
          </h1>

          <Link
            href="/services"
            className="text-sm text-purple-600 hover:underline"
          >
            Clear search
          </Link>
        </div>
      )}

      <ResultsList services={filteredServices} />
    </div>
  );
}