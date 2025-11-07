export interface UploadResponse {
  message: string;
  url: string;
}

export interface InsightResponse {
  words: number;
  sentiment: string;
  summary: string;
  frequencies?: Record<string, number> | null;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

