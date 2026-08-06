"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/development/spring/main-component", label: "Main Component" },
  { href: "/development/spring/module",          label: "Spring Module"  },
  { href: "/development/spring/transaction",     label: "Transaction"    },
  { href: "/development/spring/architecture",    label: "Architecture"   },
];

const SpringNav = () => {
  const pathname = usePathname();
  const isKnown  = menuItems.some(item => item.href === pathname);
  const defaultHref = menuItems[0]?.href;

  return (
    <div className="d-flex gap-2 mb-4 flex-wrap">
      {menuItems.map(item => {
        const isActive = isKnown ? pathname === item.href : item.href === defaultHref;
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.35rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              borderRadius: 9999,
              textDecoration: 'none',
              border: '1.5px solid',
              transition: 'background 0.15s ease, color 0.15s ease',
              background: isActive ? '#2563eb' : 'transparent',
              color:      isActive ? '#ffffff' : '#2563eb',
              borderColor: '#2563eb',
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default SpringNav;
