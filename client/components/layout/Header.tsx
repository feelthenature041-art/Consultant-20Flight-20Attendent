import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/mentors", label: "Mentors" },
  { to: "/how-it-works", label: "How it Works" },
  { to: "/pricing", label: "Balance" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact/Book" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-[96%] md:max-w-[80%] flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="Guided home"
          >
            <div className="size-8 rounded-md bg-primary text-primary-foreground grid place-items-center font-bold shadow-sm">
              G
            </div>
            <span className="font-semibold text-lg tracking-tight">Guided</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(
                  "text-sm text-muted-foreground hover:text-foreground transition-colors",
                  isActive && "text-foreground",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild>
            <Link to="/contact">Book a Session</Link>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto max-w-[96%] md:max-w-[80%] py-2 grid">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-2 text-sm text-muted-foreground hover:text-foreground",
                    isActive && "text-foreground",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex gap-2 py-2">
              <Button asChild className="flex-1">
                <Link to="/contact">Book a Session</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
