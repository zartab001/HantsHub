// src/app/categories/page.tsx
import { services } from "@/lib/mock-data";
import { Category } from "@/types/service";
import CategoryGrid from "@/components/categories/CategoryGrid";

export default function CategoriesPage() {
  const uniqueCategories: Category[] = Array.from(
    new Map(services.map((s) => [s.category.slug, s.category])).values()
  );

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Browse Support Categories
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore available support services by category.
        </p>
      </section>

      <CategoryGrid categories={uniqueCategories} />
    </main>
  );
}