import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative mt-[2.4rem] gap-6 grid grid-rows-2 md:grid-rows-1 md:grid-cols-[4fr_2fr] lg:grid-cols-[4fr_2fr] max-h-screen p-4 flex-1">
      <div className="bg-primary-light opacity-25 absolute w-full h-full top-0 left-0 rounded-md overflow-hidden -z-10"></div>
      {children}
    </main>
  );
}
