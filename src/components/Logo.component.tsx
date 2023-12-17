export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-4xl" role="img">
        🍿
      </span>
      <h1 className="text-2xl font-semibold text-white font-mono">usePopcorn</h1>
    </div>
  );
}
