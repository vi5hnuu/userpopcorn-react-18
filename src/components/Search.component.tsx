import { useRef } from "react";
import { useKey } from "./../hooks/useKey";

export default function Search({ query, setQuery }: { query: string; setQuery: (query: string) => void }) {
  const inputEl = useRef<HTMLInputElement>(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
  });

  return (
    <input
      className="self-center border-none py-2 px-4 placeholder:text-sky-dark focus:outline-none focus:shadow-sm text-2xl rounded-md w-full transition-all duration-300 text-sky bg-primary-light"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
