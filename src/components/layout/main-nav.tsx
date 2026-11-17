import Link from "next/link";
import { navItems } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

/** Light navigation bar: page links on the left, "Book Now" CTA on the right. */
export function MainNav() {
  return (
    <div className="border-b border-border/70 bg-background">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
            >
              <item.icon className="size-4 text-navy-700" />
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/booking"
            className={buttonVariants({
              size: "lg",
              className: "bg-amber-400 text-navy-950 hover:bg-amber-300 max-md:hidden",
            })}
          >
            Book Now
          </Link>
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
