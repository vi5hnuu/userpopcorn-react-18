export default function ErrorMessage({ message, className }: { message: string; className?: string }) {
  return <p className={`text-red-dark line-clamp-3 overflow-hidden text-sm pt-8 px-16 ${className}`}>{message}</p>;
}
