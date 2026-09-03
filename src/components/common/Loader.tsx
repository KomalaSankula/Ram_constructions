export default function Loader({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <div className="flex items-center justify-center p-8">
      <div
        className={`animate-spin rounded-full border-4 border-slate-200 border-t-[#1ea6dc] ${className}`}
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
