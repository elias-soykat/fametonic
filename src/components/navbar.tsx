import Link from "next/link";
import Logo from "./icons/logo";
import MenubarIcon from "./icons/menubar-icon";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems?: NavItem[];
  className?: string;
};

/**
 * Default navigation items
 */
const defaultNavItems: NavItem[] = [
  { label: "About us", href: "#" },
  { label: "Contact", href: "##" },
];

/**
 * Main navigation component for the application
 */
export default function Navbar({
  navItems = defaultNavItems,
  className = "",
}: NavbarProps) {
  return (
    <header className={`z-40 w-full py-4 ${className}`}>
      <div className="container flex h-16 items-center justify-between md:mt-6 md:h-24 md:items-start">
        {/* Spacer for mobile layout balance */}
        <div className="block w-10 md:hidden" aria-hidden="true" />

        {/* Brand logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center" aria-label="Home page">
            <Logo />
          </Link>
        </div>

        {/* Primary navigation - desktop only */}
        <nav
          className="hidden items-center space-x-6 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray text-[18px] font-medium transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle - mobile only */}
        <div className="block md:hidden">
          <button
            className="p-2 text-white"
            aria-label="Toggle main navigation menu"
            aria-expanded="false"
          >
            <MenubarIcon />
            <span className="sr-only">Toggle main navigation menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
