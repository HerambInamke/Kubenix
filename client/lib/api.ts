import axios from "axios";

import type { InsightResponse, UploadResponse } from "./types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
});

export const uploadFile = async (file: File): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await api.post("/upload/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getInsights = async (text: string): Promise<InsightResponse> => {
  const { data } = await api.get("/insights/insights", {
    params: { text },
  });
  return data;
};

