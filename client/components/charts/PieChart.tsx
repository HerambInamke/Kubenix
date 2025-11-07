interface PieSegment {
  label: string;
  value: number;
  color?: string;
}

interface PieChartProps {
  data: PieSegment[];
  size?: number;
}

const DEFAULT_COLORS = ["#2563eb", "#f97316", "#10b981", "#facc15", "#ef4444"];

export function PieChart({ data, size = 160 }: PieChartProps) {
  const total = data.reduce((sum, segment) => sum + segment.value, 0);
  if (!total) {
    return <p className="text-sm text-gray-500">No data available</p>;
  }

  let cumulative = 0;

  return (
    <figure className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 32 32" width={size} height={size} className="-rotate-90">
        {data.map((segment, index) => {
          const strokeDasharray = `${(segment.value / total) * 100} 100`;
          const strokeDashoffset = 25 - (cumulative / total) * 100;
          cumulative += segment.value;
          return (
            <circle
              key={segment.label}
              r="16"
              cx="16"
              cy="16"
              fill="transparent"
              strokeWidth="10"
              strokeLinecap="round"
              stroke={segment.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
            />
          );
        })}
      </svg>
      <figcaption className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
        {data.map((segment, index) => (
          <span key={segment.label} className="inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: segment.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length] }}
            />
            {segment.label} ({Math.round((segment.value / total) * 100)}%)
          </span>
        ))}
      </figcaption>
    </figure>
  );
}

