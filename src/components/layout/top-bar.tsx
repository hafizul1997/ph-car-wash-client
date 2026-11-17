import Link from "next/link";
import { LogIn, Phone, UserRound, UserRoundPlus } from "lucide-react";
import { site } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "./logo";

const iconButton =
  "grid size-9 place-items-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white";

/** Dark brand bar: logo on the left, contact + account actions on the right. */
export function TopBar() {
  return (
    <div className="bg-navy-900 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="flex items-center gap-1 sm:gap-1.5">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full py-1.5 pr-3 pl-1.5 text-sm transition-colors hover:bg-white/10 sm:flex"
          >
            <Phone className="size-4 text-amber-400" />
            <span className="hidden text-white/70 md:inline">Call us now:</span>
            <span className="font-semibold">{site.phone}</span>
          </a>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className={iconButton}
          >
            <WhatsAppIcon />
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Your account"
              className={iconButton}
            >
              <UserRound className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem render={<Link href="/login" />}>
                <LogIn /> Sign In
              </DropdownMenuItem>
              <DropdownMenuItem render={<Link href="/register" />}>
                <UserRoundPlus /> Register
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
