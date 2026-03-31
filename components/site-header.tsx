"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems, siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const normalizePath = (value: string) =>
    value !== "/" && value.endsWith("/") ? value.slice(0, -1) : value;

  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <Link className="brandBlock" href="/">
          <span className="brandCopy">
            <strong>{siteConfig.brand.primaryNameZh}</strong>
          </span>
        </Link>

        <nav className="desktopNav" aria-label="主导航">
          {navigationItems.map((item) => {
            const isActive = normalizePath(pathname) === normalizePath(item.href);

            return (
              <Link
                key={item.href}
                className={isActive ? "navLink active" : "navLink"}
                href={item.href}
              >
                {item.titleZh}
              </Link>
            );
          })}
        </nav>
        <details className="mobileMenu">
          <summary>导航</summary>
          <div className="mobileMenuPanel">
            {navigationItems.map((item) => {
              const isActive = normalizePath(pathname) === normalizePath(item.href);

              return (
                <Link
                  key={item.href}
                  className={isActive ? "mobileNavLink active" : "mobileNavLink"}
                  href={item.href}
                >
                  <span>{item.titleZh}</span>
                  <small>{item.descriptionZh}</small>
                </Link>
              );
            })}
          </div>
        </details>
      </div>
    </header>
  );
}
