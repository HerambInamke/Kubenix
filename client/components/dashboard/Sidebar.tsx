"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 flex-shrink-0 flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:flex">
      <div>
        <p className="text-sm font-semibold uppercase text-gray-500">Navigation</p>
        <nav className="mt-4 space-y-2 text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-xl px-4 py-2 transition",
                  isActive ? "bg-brand text-white shadow-subtle" : "hover:bg-brand/10",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="rounded-xl bg-brand/10 p-4 text-sm text-brand">
        <p className="font-semibold">Need help?</p>
        <p className="mt-1 text-brand/80">Contact support@insightforge.ai</p>
      </div>
    </aside>
  );
}

