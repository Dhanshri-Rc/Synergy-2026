import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import hlogo from "../assets/hero/ideax-2026-white-logo.webp"

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Tracks", to: "/tracks" },
  { label: "Speakers", to: "/speakers" },
  { label: "Schedule", to: "/schedule" },
  { label: "Committee", to: "/committee" },
  { label: "Registration", to: "/registration" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_25px_rgba(15,23,42,0.08)]" : ""
      }`}
    >
      <nav className="relative mx-auto flex h-[68px] max-w-[1420px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
      <img
  src={hlogo}
  alt="logo"
  className="w-[145px] sm:w-[165px] md:w-[175px] lg:w-[190px]"
/>
        
        </Link>

        {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-[14px] font-semibold  text-[#07113F] transition-all duration-300 hover:text-[#2563EB]
                after:absolute after:-bottom-1 after:rounded-full after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#2563EB] after:transition-transform after:duration-300 hover:after:scale-x-100
                ${isActive ? " after:scale-x-100" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#07113F] transition-all duration-300 hover:bg-[#F4F7FF] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu - not full width */}
      <AnimatePresence>
  {open && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] lg:hidden"
      />

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 26,
        }}
        className="fixed right-0 top-0 z-50 flex h-screen w-[220px] flex-col bg-white shadow-[0_20px_60px_rgba(15,23,42,0.25)] sm:w-[220px] lg:hidden"
      >
        {/* Header */}
        <div className="flex h-[72px] items-center justify-between border-b border-slate-200 px-5">
          <img
            src={hlogo}
            alt="logo"
            className="w-[135px]"
          />

          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 hover:bg-[#F4F7FF]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-3">
          <div className="flex flex-col gap-2">
            {LINKS.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center rounded-xl px-8 py-2 text-[14px] font-bold transition-all duration-300 ${
                      isActive
                        ? " text-blue-500 "
                        : "text-[#07113F]  hover:text-[#2563EB]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>

       
      </motion.aside>
    </>
  )}
</AnimatePresence>
      </nav>
    </header>
  );
}