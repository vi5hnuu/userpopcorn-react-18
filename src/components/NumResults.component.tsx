export default function NumResults({ count }: { count: number }) {
  return (
    <p className="items-center text-end text-xl">
      Found <strong>{count}</strong> results
    </p>
  );
}
