import Link from "next/link";

export function Nav() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/plant-care", label: "Plant Care" },
    { href: "/articles", label: "Articles" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <nav className="nav">
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
