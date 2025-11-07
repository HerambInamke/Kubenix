export function Loader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center space-x-2 text-sm text-brand">
      <span className="h-3 w-3 animate-ping rounded-full bg-brand" />
      <span className="h-3 w-3 animate-ping rounded-full bg-brand [animation-delay:0.1s]" />
      <span className="h-3 w-3 animate-ping rounded-full bg-brand [animation-delay:0.2s]" />
      <span className="font-medium">{label}</span>
    </div>
  );
}

