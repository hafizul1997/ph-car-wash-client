
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems, site } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="text-foreground/70"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent side="right" className="w-72">
          <SheetHeader>
            <SheetTitle>{site.name}</SheetTitle>
            <SheetDescription>{site.tagline}</SheetDescription>
          </SheetHeader>

          <nav aria-label="Main" className="flex flex-col gap-1 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                <item.icon className="size-4 text-navy-700" />
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-4">
            <Link
              href="/booking"
              onClick={close}
              className={buttonVariants({
                size: "lg",
                className:
                  "w-full bg-amber-400 text-navy-950 hover:bg-amber-300",
              })}
            >
              Book Now
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
