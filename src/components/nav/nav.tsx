"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();

  const navItems = session
    ? [...publicNavItems, ...authNavItems]
    : publicNavItems;

  return (
    <nav className="nav">
      <Link href="/"><Image src="/house-plant-logo.jpg" alt="Logo" width={40} height={100} /></Link>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.href} className="nav-item">
            <Link href={item.href} className="nav-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
