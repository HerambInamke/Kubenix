"use client";

import { useState } from "react";

import { uploadFile } from "@/lib/api";

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
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        {uploading ? "Uploading..." : "Upload File"}
      </button>
      {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
    </div>
  );
}

