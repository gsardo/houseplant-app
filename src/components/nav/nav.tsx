"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const publicNavItems = [
  { href: "/plant-matcher", label: "Plant Matcher" },
  { href: "/plant-care", label: "Plant Care" },
  { href: "/articles", label: "Articles" },
];

const authNavItems = [
  { href: "/favorites", label: "Favourites" },
  { href: "/gallery", label: "Gallery" },
  { href: "/profile", label: "Profile" },
];

export function Nav() {

  const navItems = publicNavItems;

  return (
    <nav className="nav">
      <Link href="/"><Image src="/hero-logo.jpg" alt="Logo" width={100} height={100} /></Link>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.href} className="nav-item">
            <Link href={item.href} className="nav-link">
              {item.label}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <Link href="/sign-in" className="nav-link">
            <User size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
