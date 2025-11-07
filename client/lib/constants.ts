import type { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/dashboard" },
  { label: "Uploads", href: "/uploads" },
  { label: "Insights", href: "/insights" },
  { label: "Settings", href: "/settings" },
];

export const FEATURE_CARDS = [
  {
    title: "AI Insights",
    description: "Summaries, sentiment analysis, and frequency breakdowns at a glance.",
  },
  {
    title: "Secure Uploads",
    description: "Upload files via AWS S3 or local fallback with environment-based config.",
  },
  {
    title: "Realtime Dashboard",
    description: "Responsive charts and tables to visualize your data quickly.",
  },
];

