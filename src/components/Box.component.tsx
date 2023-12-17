import { useState } from "react";

export default function Box({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative bg-slate-200 rounded-md shadow-3xl p-4 overflow-scroll">
      <button
        className="sticky top-2 left-full h-8 aspect-square transition-all rounded-full flex items-center justify-center border-none bg-gray-900 hover:bg-gray-600 text-xl font-bold cursor-pointer z-10"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
