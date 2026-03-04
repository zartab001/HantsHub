import { services } from "@/lib/mock-data";
import { Category } from "@/types/service";
import CategoryGrid from "@/components/categories/CategoryGrid";

export default function CategoriesPage() {
  // Extract unique top-level categories from services
  const uniqueCategories: Category[] = Array.from(
    new Map(
      services.map((service) => [
        service.category.slug,
        service.category,
      ])
    ).values()
  );

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Browse Support Categories
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore available medical and social support services by category.
          Find the right help based on your needs and your region.
        </p>
      </section>

      <CategoryGrid categories={uniqueCategories} />
    </main>
  );
}