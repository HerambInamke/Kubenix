import type { InsightResponse } from "@/lib/types";

export function InsightCard({ data }: { data: InsightResponse }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-2">AI Insights</h2>
      <p>
        <strong>Word Count:</strong> {data.words}
      </p>
      <p>
        <strong>Sentiment:</strong> {data.sentiment}
      </p>
      <p className="mt-2 text-gray-600 italic">{data.summary}</p>
    </div>
  );
}

