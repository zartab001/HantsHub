"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-primary">
          HantsHub
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="#" className="hover:text-primary transition">
            Services
          </Link>
          <Link href="#" className="hover:text-primary transition">
            About
          </Link>
        </nav>

        {/* Language Selector Stub */}
        <div className="text-sm">
          <button className="border px-3 py-1 rounded-md hover:bg-gray-100">
            EN
          </button>
        </div>
      </div>
    </header>
  );
}