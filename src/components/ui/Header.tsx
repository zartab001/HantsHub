'use client';

import HeaderSearch from '@/components/search/HeaderSearch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-primary">
          HantsHub
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="#" className="hover:text-primary transition">
            Services
          </Link>
          <Link href="#" className="hover:text-primary transition">
            About
          </Link>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-4">

          {/* Show navbar search ONLY if not on homepage */}
          {pathname !== '/' && (
            <div className="w-48 md:w-80">
              <HeaderSearch />
            </div>
          )}

          {/* Language button */}
          <div className="text-sm">
            <button className="border px-3 py-1 rounded-md hover:bg-gray-100">
              EN
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}