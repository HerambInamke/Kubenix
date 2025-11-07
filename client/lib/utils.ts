import clsx from "clsx";

export function cn(...inputs: clsx.ClassValue[]): string {
  return clsx(inputs);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat().format(value);
}

export function truncate(text: string, length = 80): string {
  if (text.length <= length) {
    return text;
  }
  return `${text.slice(0, length).trim()}…`;
}

