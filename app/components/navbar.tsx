import { RiArrowRightLine } from "@remixicon/react";
import clsx from "clsx";
import { cva } from "cva";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { primaryButton } from "./button";

const navLink = cva(
  "text-ocean-950/50 group relative hover:text-ocean-1000 transition-colors text-sm font-sans font-medium",
  {
    variants: {
      variant: {
        mobile: "block px-3 py-2 rounded-md hover:bg-gray-800",
        desktop: "py-2 px-4",
      },
    },
  },
);

const navContainer = cva(
  "mx-auto transition-all duration-500 ring-1 ring-ocean-100/0 rounded-2xl px-6 md:px-4 ",
  {
    variants: {
      scrolled: {
        false:
          "w-full max-w-screen-2xl md:px-10 bg-ocean-25/4 backdrop-blur-[1px]",
        true: "bg-ocean-25/96 ring-ocean-900/5 max-w-screen-sm backdrop-blur-[4px]",
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  },
);

const navigationLinks = [
  { name: "About", to: "/about" },
  { name: "Team", to: "/team" },
  { name: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 128);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-8 right-0 left-0 z-50 px-4">
      <div className={navContainer({ scrolled: isScrolled })}>
        <div className="flex h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center py-2">
              <svg
                width={105}
                height={24}
                className="h-6 w-auto text-ocean-800 transition-colors hover:text-ocean-600"
              >
                <title>Bucode Logo</title>
                <use href="#bucode-logo" />
              </svg>
            </Link>
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <div className="flex items-center gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={navLink({ variant: "desktop" })}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 scale-y-50 rounded-md bg-ocean-900/5 opacity-0 ring-offset-2 transition-all duration-1000 ease-out-expo focus:ring-2 focus:ring-ocean-200 focus:ring-offset-ocean-100 group-hover:scale-y-100 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/register"
            className={primaryButton({
              size: "sm",
              className: "hidden md:flex",
            })}
          >
            <span>Register</span>
            <RiArrowRightLine className="-mr-1 h-4 w-4" />
          </Link>

          {/* Mobile menu button */}
          <div className="ml-auto md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={clsx("h-6 w-6", isOpen ? "hidden" : "block")}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={clsx("h-6 w-6", isOpen ? "block" : "hidden")}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-[-1px] left-0 h-[2px]">
          <div className="mx-auto h-full max-w-2xl bg-gradient-to-r from-transparent via-ocean-100 to-transparent" />
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="space-y-1 bg-ocean px-2 pt-2 pb-3 sm:px-3">
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={navLink({ variant: "mobile" })}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/register"
            className={primaryButton({
              size: "md",
            })}
          >
            <span>Register</span>
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z"
                fill="#020E16"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
