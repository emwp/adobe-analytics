"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackButtonClick } from "@repo/analytics";

const Navigation = () => {
  const pathname = usePathname();

  const handleNavClick = (pageName: string) => {
    trackButtonClick({
      buttonName: `Nav: ${pageName}`,
      buttonType: "navigation",
      section: "header",
      value: pageName,
    });
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/demo", label: "Demo" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              href="/"
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
              }}
              onClick={() => handleNavClick("Home Logo")}
            >
              Adobe Analytics Demo
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                style={{
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  transition: "all 0.2s",
                  textDecoration: "none",
                  backgroundColor:
                    pathname === item.href ? "#1d4ed8" : "transparent",
                  color: pathname === item.href ? "white" : "#dbeafe",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.backgroundColor = "#3b82f6";
                    e.currentTarget.style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#dbeafe";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
