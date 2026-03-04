import { services } from '@/lib/mock-data';
import { Category } from '@/types/service';
import CategoryGrid from '@/components/categories/CategoryGrid';

export default function CategoriesPage() {
  // Get unique top-level categories from services
  const uniqueCategories: Category[] = Array.from(
    new Map(services.map((s) => [s.category.slug, s.category])).values(),
  );

  return (
    <main className="min-h-screen flex flex-col justify-between max-w-6xl mx-auto px-6 py-12">
      {/* Page content */}
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Browse Categories
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Explore services by category.
        </p>

        <CategoryGrid categories={uniqueCategories} />
      </div>

      {/* Footer */}
    </main>
  );
}
