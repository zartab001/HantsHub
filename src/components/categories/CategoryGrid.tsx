import { Category } from '@/types/service';
import Link from 'next/link';

type CategoryGridProps = {
  categories: Category[];
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 
                     rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm
                     hover:shadow-lg hover:-translate-y-1 transition transform
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          {/* Icon Placeholder */}
          <div className="mb-2 w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-700 rounded-full">
            {/* Replace with actual icon later */}
            <span className="text-blue-600 dark:text-blue-100 font-bold text-lg">
              {category.name.charAt(0)}
            </span>
          </div>

          {/* Category Name */}
          <span className="text-gray-900 dark:text-gray-100 font-medium text-sm text-center">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
