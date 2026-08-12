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
    <nav>
      <div className="logo">HousePlant</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      <div className="btns">
        <button className="btn">Login</button>
      </div>
    </nav>
  );
}
