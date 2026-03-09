import { services } from "@/lib/mock-data";
import ResultsList from "@/components/search/ResultsList";
import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {

  const params = await searchParams;
  const query = params.q?.toLowerCase().trim() || "";

  const filteredServices = query
    ? services.filter((service) => {
        const searchableText = `
          ${service.title}
          ${service.description}
          ${service.category.name}
          ${service.location}
        `.toLowerCase();

        return searchableText.includes(query);
      })
    : [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen">

      {query && (
        <div className="flex items-center justify-between mb-6">

          <h1 className="text-2xl font-bold">
            {filteredServices.length} {filteredServices.length === 1 ? "result" : "results"} for &quot;{query}&quot;
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