"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
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
    <div className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-7xl"
      >
        {/* Unified white rounded pill container */}
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 sm:py-3 ${
            scrolled
              ? "border border-gold/25 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl"
              : "border border-white/60 bg-white/88 shadow-[0_4px_24px_rgba(0,0,0,0.1)] backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="rounded-xl bg-white px-3 py-1.5 shadow-sm">
              <Image
                src="/images/Mangalyacolor.png"
                alt="Mangalya Events"
                width={800}
                height={213}
                priority
                className="h-auto w-24 object-contain sm:w-28 lg:w-32"
              />
            </div>
          </Link>

          {/* Separator */}
          <div className="mx-4 hidden h-5 w-px bg-gray-200 lg:block" />

          {/* Desktop nav links */}
          <div className="hidden flex-1 items-center justify-end gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-xl px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-gray-500 hover:text-maroon"
                }`}
              >
                {/* Active background pill */}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-xl bg-gold/10"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {/* Gold underline indicator */}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 bottom-1 mx-auto h-[2px] w-5 rounded-full bg-gold"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA button — desktop only */}
          <Link
            href="/contact"
            className="ml-3 hidden shrink-0 rounded-xl border border-gold/60 bg-gold/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold transition-all duration-200 hover:border-gold hover:bg-gold hover:text-white lg:block"
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-xl transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-px w-5 rounded-full bg-maroon transition-colors"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="h-px w-5 rounded-full bg-maroon transition-colors"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="h-px w-5 rounded-full bg-maroon transition-colors"
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-2 rounded-2xl border border-gray-200/80 bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-150 ${
                      pathname === link.href
                        ? "bg-gold/10 text-gold"
                        : "text-gray-500 hover:bg-gray-50 hover:text-maroon"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        pathname === link.href ? "bg-gold" : "bg-gray-300"
                      }`}
                    />
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mx-4 my-2 border-t border-gray-100" />
              <Link
                href="/contact"
                className="mx-2 mb-1 flex items-center justify-center rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-white"
              >
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
