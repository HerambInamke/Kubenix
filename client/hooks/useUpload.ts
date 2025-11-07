"use client";

import { useState } from "react";

import { uploadFile } from "@/lib/api";
import type { UploadResponse } from "@/lib/types";

export function useUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<UploadResponse | null>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const response = await uploadFile(file);
      setResult(response);
      return response;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed";
      setError(message);
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return { upload, uploading, error, result };
}

