"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { InsightCard } from "@/components/InsightCard";
import { Loader } from "@/components/ui/Loader";
import { useFetch } from "@/hooks/useFetch";
import { getInsights } from "@/lib/api";
import type { InsightResponse } from "@/lib/types";

export default function InsightsPage() {
  const [text, setText] = useState("The product launch generated good feedback and strong sales.");
  const [prompt, setPrompt] = useState("");

  const { data, loading, error, execute } = useFetch<InsightResponse>(
    () => getInsights(prompt || text),
    { immediate: false },
  );

  const analyze = async () => {
    setPrompt(text);
    await execute();
  };

  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold">Generate Insights</h1>
          <p className="text-sm text-gray-600">
            Paste text or a summary to receive instant sentiment and keyword statistics.
          </p>
        </header>
        <textarea
          className="min-h-[160px] w-full rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter text to analyse..."
        />
        <div className="flex items-center gap-3">
          <Button onClick={analyze} disabled={!text.trim() || loading}>
            {loading ? "Analyzing..." : "Analyze"}
          </Button>
          {loading && <Loader label="Running AI pipeline" />}
          {error && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
      </Card>

      {data && <InsightCard data={data} />}
      {data?.frequencies && (
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Top Keywords</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {Object.entries(data.frequencies)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 6)
              .map(([token, count]) => (
                <li
                  key={token}
                  className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm"
                >
                  <span className="font-medium capitalize">{token}</span>
                  <span className="text-gray-500">{count}</span>
                </li>
              ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

