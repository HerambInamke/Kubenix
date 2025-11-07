import type {
  HTMLAttributes,
  TableHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type TableProps = TableHTMLAttributes<HTMLTableElement>;

export function Table({ className, children, ...props }: TableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className={cn("w-full border-collapse bg-white text-sm", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function THead(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className="bg-gray-50 uppercase tracking-wide text-gray-500" {...props} />;
}

export function TBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className="divide-y divide-gray-200" {...props} />;
}

export function TR({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("hover:bg-gray-50", className)} {...props} />;
}

export function TH({ className, ...props }: ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  return (
    <th
      className={cn("px-4 py-3 text-left text-xs font-semibold text-gray-500", className)}
      {...props}
    />
  );
}

export function TD({ className, ...props }: TdHTMLAttributes<HTMLTableDataCellElement>) {
  return <td className={cn("px-4 py-3 text-sm text-gray-700", className)} {...props} />;
}

