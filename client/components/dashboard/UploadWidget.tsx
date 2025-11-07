"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Loader } from "@/components/ui/Loader";
import { useUpload } from "@/hooks/useUpload";

export function UploadWidget() {
  const [file, setFile] = useState<File | null>(null);
  const { upload, uploading, error, result } = useUpload();

  const onUpload = async () => {
    if (!file) return;
    await upload(file);
  };

  return (
    <Card className="bg-gradient-to-br from-white to-blue-50">
      <div className="flex flex-col gap-4">
        <header>
          <h2 className="text-lg font-semibold text-gray-900">Quick Upload</h2>
          <p className="mt-1 text-sm text-gray-500">Send a file to generate insights instantly.</p>
        </header>
        <input
          type="file"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          className="rounded-lg border border-dashed border-brand/40 bg-white px-3 py-4 text-sm"
        />
        <Button onClick={onUpload} disabled={!file || uploading} className="self-start">
          {uploading ? "Uploading..." : "Upload"}
        </Button>
        {uploading && <Loader label="Uploading to InsightForge" />}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {result && (
          <p className="rounded-lg bg-white/60 p-3 text-sm text-green-600">
            ✅ Uploaded successfully&nbsp;
            <a href={result.url} className="font-medium underline" target="_blank" rel="noreferrer">
              View file
            </a>
          </p>
        )}
      </div>
    </Card>
  );
}

