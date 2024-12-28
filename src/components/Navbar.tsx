import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="sticky z-[9999] bg-background text-foreground h-16 w-[calc(100%-4rem)] mx-auto border-b-2 flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16">
      <Link href="/" className="font-bold text-2xl select-none">
        CodeLit
      </Link>

      <ThemeSwitcher />
    </header>
  );
};

export default Navbar;
