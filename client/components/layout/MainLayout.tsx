import type { ReactNode } from "react";

import { DashboardNavbar } from "@/components/dashboard/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <DashboardNavbar />
      <div className="mx-auto flex max-w-6xl gap-6 px-6 py-8">
        <Sidebar />
        <section className="flex-1 space-y-6">{children}</section>
      </div>
    </div>
  );
}

