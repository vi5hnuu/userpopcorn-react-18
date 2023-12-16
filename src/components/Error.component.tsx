export default function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="text-center text-3xl p-20">
      <span>⛔️</span> {message}
    </p>
  );
}
