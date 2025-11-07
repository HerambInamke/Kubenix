interface LineChartProps {
  data: number[];
  labels?: string[];
  height?: number;
}

export function LineChart({ data, labels, height = 120 }: LineChartProps) {
  if (!data.length) {
    return <p className="text-sm text-gray-500">No data available</p>;
  }

  const maxValue = Math.max(...data);
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1 || 1)) * 100;
      const y = maxValue === 0 ? 100 : 100 - (value / maxValue) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div>
      <svg viewBox="0 0 100 100" className="w-full" style={{ height }} preserveAspectRatio="none">
        <polyline
          fill="none"
          strokeWidth={2.5}
          stroke="url(#line-gradient)"
          points={points}
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="line-gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
      {labels && labels.length === data.length && (
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      )}
    </div>
  );
}

