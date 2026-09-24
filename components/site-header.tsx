"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ParentLockup } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const TABS = [
  { href: "/", label: "Simpl Solutions" },
  { href: "/gateway", label: "Simpl Gateway" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 border-b bg-surface print:hidden">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 md:px-0">
        <Link href="/" aria-label="Simpl Solutions brand guide, home" className="rounded-ctl no-underline">
          <ParentLockup size={20} wordmarkClassName="text-[18px]" />
        </Link>
        <div className="flex items-center gap-1">
          <nav aria-label="Brand guide sections" className="flex items-center gap-1">
            {TABS.map((t) => {
              const active = t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex h-11 items-center rounded-ctl px-3.5 text-[13.5px] no-underline transition-colors duration-(--sg-duration-fast) ease-brand",
                    active ? "bg-raised font-medium text-strong" : "text-muted-foreground hover:bg-raised hover:text-strong"
                  )}
                >
                  {t.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
