import Logo from "./Logo.component";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="grid lg:grid-cols-[1.5fr_3fr_1.5fr] lg:grid-rows-1   gap-2 items-center sm:h-auto md:h-auto lg:h-[4.2rem] md:grid-cols-[3fr_1.5fr] md:grid-rows-2 sm:grid-cols-[3fr_1.5fr] sm:grid-rows-2 px-[3.2rem] py-2 bg-primary rounded-md shadow-sm">
      <Logo />
      {children}
    </nav>
  );
}
