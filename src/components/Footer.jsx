import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Youtube } from "./SocialIcons";
import Logo from "../assets/hero/ideax-2026-official-logo.webp";

const QUICK_LINKS = [
  
  { label: "About", to: "/about" },
  { label: "Tracks", to: "/tracks" },
  { label: "Speakers", to: "/speakers" },
  { label: "Schedule", to: "/schedule" },
  { label: "Committee", to: "/committee" },
  { label: "Registration", to: "/registration" },
  { label: "Contact", to: "/contact" },
];

const SOCIALS = [
  { Icon: Linkedin, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020B2D] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(100deg,#020B2D_0%,#061B4F_48%,#031341_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(37,99,235,0.22),transparent_28%),radial-gradient(circle_at_88%_25%,rgba(59,130,246,0.16),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto grid max-w-[1420px] grid-cols-1 gap-8 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.35fr_0.75fr_1fr_1.25fr] lg:px-16"
      >
        {/* Brand */}
        <div>
          <div className="mb-3 flex items-center gap-2">
          <img src={Logo} alt="footer logo" className="w-[210px]"  />
            {/* <Logo size={38} />
            <div>
              <h3 className="text-[28px] font-[600] leading-none tracking-wide">
                IDEAX <span className="text-[#FFC21A]">2026</span>
              </h3>
              <p className="mt-1 text-[7.5px] font-[600] uppercase tracking-[0.16em] text-[#f0efeb]">
                Innovate • Decide • Transform
              </p>
            </div> */}
          </div>

          <p className="max-w-[260px] text-[13px] font-medium leading-[1.7] text-white/80">
            International Conference on Innovation, Decision Engineering and
            Artificial Intelligence.
          </p>

          <div className="mt-4 flex items-center gap-3">
            {SOCIALS.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ y: -4, scale: 1.08 }}
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-[#2563EB] hover:bg-[#1a4fc1]"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-1 text-[12px] font-[600] uppercase tracking-wide text-white">
            Quick Links
          </h4>
<div className="w-6 h-[2px] rounded-lg bg-[#123CFF] mb-3"></div>
          <ul className="space-y-[6px] text-[12px] font-medium leading-tight text-white/78">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-all duration-300 hover:pl-1 hover:text-[#FFC21A]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-1 text-[12px] font-[600] uppercase tracking-wide text-white">
            Contact Us
          </h4>
<div className="w-6 h-[2px] rounded-lg bg-[#123CFF] mb-3"></div>
          <ul className="space-y-4 text-[12px] font-medium text-white/78">
            <li className="flex items-center gap-3">
              <MapPin size={15} className="text-white/80" />
              Singapore
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-white/80" />
              submit@innovationconference.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-white/80" />
              +91-9890917528
            </li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h4 className="mb-1 text-[12px] font-[600] uppercase tracking-wide text-white">
            Stay Updated
          </h4>
<div className="w-6 h-[2px] rounded-lg bg-[#123CFF] mb-3"></div>
          <p className="mb-4 max-w-[310px] text-[12px] font-medium leading-[1.7] text-white/78">
            Subscribe to get the latest updates and announcements.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex h-[48px] max-w-[360px] overflow-hidden rounded-[5px] border border-white/15 bg-white/[0.04]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-4 text-[12px] font-medium text-white outline-none placeholder:text-white/42"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="flex w-[52px] items-center justify-center bg-[#123CFF] text-white transition-all duration-300 hover:bg-[#FFC21A] hover:text-[#07113F]"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      </motion.div>
    </footer>
  );
}