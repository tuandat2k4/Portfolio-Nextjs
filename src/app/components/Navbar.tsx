"use client";
import Link from "next/link";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="fixed w-full  dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors duration-100 font-medium${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <button onClick={toggleTheme} className="p-2 rounded-lg text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className={`block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      isActive ? "text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <button onClick={toggleTheme} className="p-2 rounded-lg text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                {theme === "dark" ? (
                  <>
                    <SunIcon className="h-5 w-5" />
                    <span className="sr-only">Light Mode</span>
                  </>
                ) : (
                  <>
                    <MoonIcon className="h-5 w-5" />
                    <span className="sr-only">Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
