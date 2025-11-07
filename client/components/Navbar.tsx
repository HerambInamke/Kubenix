"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <Link href="/" className="text-xl font-semibold text-blue-600">
          InsightForge
        </Link>
        <div className="space-x-6">
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/uploads" className="hover:text-blue-600">
            Upload
          </Link>
          <Link href="/insights" className="hover:text-blue-600">
            Insights
          </Link>
        </div>
      </div>
    </nav>
  );
}

