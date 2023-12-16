import Logo from "./Logo.component";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="grid grid-cols-[1.5fr_3fr_1.5fr] gap-2 items-center h-[4.2rem] px-[3.2rem] py-2 bg-primary rounded-md shadow-sm">
      <Logo />
      {children}
    </nav>
  );
}
