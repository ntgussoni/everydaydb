import { Database, DatabaseZapIcon } from "lucide-react";
import Link from "next/link";

export const Navbar = () => (
  <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 text-primary md:px-6">
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-900 bg-clip-text font-mono text-xl font-extrabold text-transparent"
      >
        <DatabaseZapIcon size={24} className="text-red-500" />
        <span>everydaydb</span>
      </Link>
    </nav>
  </header>
);
