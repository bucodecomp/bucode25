import { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router";
import { cva } from "class-variance-authority";
import { primaryButton } from "./button";

const navLink = cva(
  "text-[#90A7B6] hover:text-white transition-colors text-sm font-sans",
  {
    variants: {
      variant: {
        mobile: "block px-3 py-2 rounded-md hover:bg-gray-800",
        desktop: "",
      },
    },
  }
);

const navContainer = cva(
  "max-w-7xl mx-auto px-4 transition-all duration-200 ring-1 ring-white/0 rounded-2xl",
  {
    variants: {
      scrolled: {
        true: "bg-white/[0.01] backdrop-blur-sm ring-white/5",
        false: "backdrop-blur-sm",
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  }
);

const navigationLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-4">
      <div className={navContainer({ scrolled: isScrolled })}>
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={navLink({ variant: "desktop" })}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

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
              className="-mr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z"
                fill="#020E16"
              />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white"
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
        <div className="absolute bottom-[-1px] left-0 right-0 h-[1px]">
          <div className="mx-auto max-w-2xl h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10" />
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-ocean">
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
