import Logo from "./Logo.component";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="grid lg:grid-cols-[1.5fr_3fr_1.5fr] lg:grid-rows-1  gap-2 items-center h-auto grid-cols-[3fr_4fr] grid-rows-2 lg:h-[4.2rem] md:grid-cols-[3fr_1.5fr] px-6 lg:px-[3.2rem] py-2 bg-primary rounded-md shadow-sm">
      <Logo className="row-span-2 col-span-1 lg:row-span-1 lg:col-span-1" />
      {children}
    </nav>
  );
}
