import { ArrowRightLeft, Info, LayoutGrid, type LucideIcon } from "lucide-react";

export const site = {
  name: "PH Car Wash",
  tagline: "Book your wash in minutes",
  phone: "+880170678-5160",
  phoneHref: "tel:+8801706785160",
  whatsapp: "https://wa.me/8801706785160",
} as const;

export type NavItem = {
  /** Text shown in the nav. */
  title: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { title: "Services", href: "/services", icon: LayoutGrid },
  { title: "Compare", href: "/compare", icon: ArrowRightLeft },
  { title: "About Us", href: "/about", icon: Info },
];
