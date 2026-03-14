"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold">
            <span className="font-serif text-lg font-bold text-white">M</span>
          </div>
          <div>
            <h1
              className={`font-serif text-lg font-bold leading-tight transition-colors ${
                scrolled ? "text-maroon" : "text-white"
              }`}
            >
              Mangalya
            </h1>
            <p
              className={`-mt-1 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                scrolled ? "text-gold" : "text-gold-light"
              }`}
            >
              Events
            </p>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium uppercase tracking-wider transition-colors ${
                scrolled
                  ? pathname === link.href
                    ? "text-gold"
                    : "text-gray-700 hover:text-gold"
                  : pathname === link.href
                    ? "text-gold"
                    : "text-white/90 hover:text-gold"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`h-0.5 w-6 rounded-full transition-colors ${
              isOpen || scrolled ? "bg-maroon" : "bg-white"
            }`}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`h-0.5 w-6 rounded-full transition-colors ${
              isOpen || scrolled ? "bg-maroon" : "bg-white"
            }`}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`h-0.5 w-6 rounded-full transition-colors ${
              isOpen || scrolled ? "bg-maroon" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white shadow-xl lg:hidden"
          >
            <div className="container-custom mx-auto flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                      pathname === link.href
                        ? "bg-gold/10 text-gold"
                        : "text-gray-700 hover:bg-beige-dark hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
