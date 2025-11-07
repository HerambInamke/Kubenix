"use client";

import { useState } from "react";

import { InsightCard } from "@/components/InsightCard";
import { getInsights } from "@/lib/api";

export default function InsightsPage() {
  const [text, setText] = useState("");
  const [data, setData] = useState<any>(null);

  const analyze = async () => {
    if (!text.trim()) return;
    const res = await getInsights(text);
    setData(res);
  };

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center mb-6">Generate Insights</h1>
      <textarea
        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        rows={5}
        placeholder="Enter text or data to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={analyze}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Analyze
      </button>

      {data && <InsightCard data={data} />}
    </div>
  );
}

