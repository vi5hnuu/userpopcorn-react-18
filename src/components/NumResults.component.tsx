export default function NumResults({ count, className }: { count: number; className?: string }) {
  return (
    <p className={`items-center text-end text-xl ${className}`}>
      Found <strong>{count}</strong> results
    </p>
  );
}
