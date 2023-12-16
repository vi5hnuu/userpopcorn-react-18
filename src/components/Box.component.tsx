import { useState } from "react";

export default function Box({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      <button
        className="absolute top-0 right-4 h-8 aspect-square transition-all rounded-full flex items-center justify-center border-none bg-gray-900 text-xl font-bold cursor-pointer z-10"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
