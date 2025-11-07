"use client";

import { useState } from "react";

import { uploadFile } from "@/lib/api";
import { Button } from "@/components/ui/Button";

export function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadFile(file);
      setMessage(`✅ Uploaded: ${res.url}`);
    } catch (err: any) {
      setMessage("❌ Upload failed: " + err.message);
    }
    setUploading(false);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 max-w-md mx-auto">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2 w-full mb-4 rounded-lg"
      />
      <Button className="w-full" onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? "Uploading..." : "Upload File"}
      </Button>
      {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
    </div>
  );
}

