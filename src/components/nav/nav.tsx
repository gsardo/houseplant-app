"use client";
import { useState } from "react";
import Link from "next/link";

const publicNavItems = [
  { href: "/", label: "Gallery"},
  { href: "/plant-matcher", label: "Plant Matcher" },
  { href: "/plant-care", label: "Plant Care" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About"},
];



export function Nav() {
  const navItems = publicNavItems;
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header id="primary-header">
      <img id="logo" src="/logo.png" alt="HousePlant"/>

      <button id="nav-toggle"
      aria-controls="primary-navigation" aria-expanded={isNavVisible}
      onClick={() => setIsNavVisible((visible) => !visible)}>
        <img src="/burger-menu.svg" alt="Menu"/>
      </button>

      <nav>
        <ul id="primary-navigation" data-visible={isNavVisible}>
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
