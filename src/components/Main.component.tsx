import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative mt-[2.4rem] gap-6 grid lg:grid-cols-[4fr_2fr] md:grid-cols-[4fr_2fr] sm:grid-rows-2 p-4 flex-1">
      <div className="bg-primary-light opacity-25 absolute w-full h-full top-0 left-0 rounded-md overflow-hidden -z-10"></div>
      {children}
    </main>
  );
}
