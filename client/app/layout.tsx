import type { ReactNode } from "react";

import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "InsightForge",
  description: "AI-powered analytics and insights platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

