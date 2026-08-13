"use client";
import Link from "next/link";

const publicNavItems = [
  { href: "/", label: "Gallery"},
  { href: "/plant-matcher", label: "Plant Matcher" },
  { href: "/plant-care", label: "Plant Care" },
  { href: "/articles", label: "Articles" },
];



export function Nav() {
  const navItems = publicNavItems;

  return (
    <header className="primary-header flex">
      <div className="logo">HousePlant</div>
      <nav>
        <ul className="primary-navigation flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
