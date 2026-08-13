"use client";
import { useState } from "react";
import Link from "next/link";

const publicNavItems = [
  { href: "/", label: "Gallery"},
  { href: "/plant-matcher", label: "Plant Matcher" },
  { href: "/plant-care", label: "Plant Care" },
  { href: "/articles", label: "Articles" },
];



export function Nav() {
  const navItems = publicNavItems;
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="primary-header flex">
      <div className="logo">HousePlant</div>

      <button className="mobile-nav-toggle"
      aria-controls="primary-navigation" aria-expanded={isNavVisible}
      onClick={() => setIsNavVisible((visible) => !visible)}>
        <span className="sr-only">
          <img src="/burger-menu.svg"/>
        </span>
      </button>

      <nav>
        <ul id="primary-navigation" data-visible={isNavVisible} className="primary-navigation flex">
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
