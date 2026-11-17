import { MainNav } from "./main-nav";
import { TopBar } from "./top-bar";

/** Sticky site header: brand/contact bar + main navigation. */
export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <MainNav />
    </header>
  );
}
