import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await api.post("/upload/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getInsights = async (text: string) => {
  const { data } = await api.get("/insights/insights", {
    params: { text },
  });
  return data;
};

