import Link from "next/link";
import { CarFront } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** Brand mark — circular car-wash badge with wordmark, links home. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 shadow-lg shadow-navy-950/40">
        <CarFront className="size-5 text-amber-300" strokeWidth={2.25} />
        {/* soap bubbles */}
        <span className="absolute top-1.5 right-2 size-1 rounded-full bg-white/70" />
        <span className="absolute top-2.5 right-3.5 size-1.5 rounded-full bg-white/40" />
        <span className="absolute bottom-2 left-2.5 size-1 rounded-full bg-white/50" />
      </span>
      <span className="font-heading hidden text-lg font-bold tracking-tight text-white sm:block">
        PH&nbsp;<span className="text-amber-400">Car Wash</span>
      </span>
    </Link>
  );
}
