"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/development/spring/main-component", label: "Main Component" },
  { href: "/development/spring/module", label: "Spring Module" },
  { href: "/development/spring/transaction", label: "Transaction" },
  { href: "/development/spring/architecture", label: "Architecture" },
];

const SpringNav = () => {
  const pathname = usePathname();
  // If no menu item matches, default to the first tab
  const isKnown = menuItems.some((item) => item.href === pathname);
  const defaultHref = menuItems[0]?.href;
  return (
    <div className="d-flex gap-2 mb-4 flex-wrap">
      {menuItems.map((item) => {
        const isActive = isKnown
          ? pathname === item.href
          : item.href === defaultHref;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`badge rounded-pill px-3 py-2 fs-6 text-decoration-none ${
              isActive ? "bg-primary text-light" : "bg-secondary text-light"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default SpringNav; 