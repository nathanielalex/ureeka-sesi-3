"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-bold text-xl md:text-2xl">
            NA
          </Link>
          <nav className="hidden md:flex space-x-8">
            <ThemeToggle />
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 relative py-2 px-1 ${
                  pathname === link.path
                    ? "text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black dark:after:bg-white"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Button
            className="md:hidden"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden space-y-4 py-5">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block text-lg font-medium py-2 px-4 ${
                  pathname === link.path
                    ? "text-black dark:text-white bg-gray-200 dark:bg-gray-800"
                    : "text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
