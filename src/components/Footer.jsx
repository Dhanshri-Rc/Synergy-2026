import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Youtube } from "./SocialIcons";
import Logo from "../assets/img/synergy-2026-globe-logo.webp";


const QUICK_LINKS = [
  
  { label: "About", to: "/about" },
  { label: "Conference", to: "/conference " },
  // { label: "Speakers", to: "/speakers" },
  // { label: "Schedule", to: "/schedule" },
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

  
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState("");

const handleSubscribe = (e) => {
  e.preventDefault();

  const cleanEmail = email.trim().toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(cleanEmail)) {
    setMessage("Please enter a valid email address.");
    setMessageType("error");
    return;
  }

  // Get previously subscribed emails from browser storage
  let subscribers = [];

  try {
    subscribers = JSON.parse(
      localStorage.getItem("synergy2026_subscribers") || "[]"
    );

    if (!Array.isArray(subscribers)) {
      subscribers = [];
    }
  } catch {
    subscribers = [];
  }

  // Check if the email is already subscribed
  if (subscribers.includes(cleanEmail)) {
    setMessage("This email is already subscribed!");
    setMessageType("duplicate");
    return;
  }

  // Save the new subscriber
  subscribers.push(cleanEmail);

  try {
    localStorage.setItem(
      "synergy2026_subscribers",
      JSON.stringify(subscribers)
    );

    setMessage("Successfully subscribed to SYNERGY 2026 updates!");
    setMessageType("success");
    setEmail("");
  } catch {
    setMessage("Unable to save subscription. Please try again.");
    setMessageType("error");
  }
};


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
             Philippines
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-white/80" />
              globalresearchconference@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-white/80" />
             +91-9423573130
            </li>
          </ul>
        </div>

       
{/* Stay Updated */}
<div>
  <h4 className="mb-1 text-[12px] font-[600] uppercase tracking-wide text-white">
    Stay Updated
  </h4>

  <div className="mb-3 h-[2px] w-6 rounded-lg bg-[#123CFF]" />

  <p className="mb-4 max-w-[310px] text-[12px] font-medium leading-[1.7] text-white/78">
    Subscribe to get the latest updates and announcements.
  </p>

  <form
    onSubmit={handleSubscribe}
    className="
      flex
      h-[48px]
      max-w-[360px]
      overflow-hidden
      rounded-[5px]
      border
      border-white/15
      bg-white/[0.04]
      focus-within:border-[#FFB51D]
    "
  >
    <input
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        setMessage("");
      }}
      placeholder="Enter your email"
      aria-label="Enter your email to subscribe"
      required
      className="
        min-w-0
        flex-1
        bg-transparent
        px-4
        text-[12px]
        font-medium
        text-white
        outline-none
        placeholder:text-white/42
      "
    />

    <button
      type="submit"
      aria-label="Subscribe"
      className="
        flex
        w-[52px]
        items-center
        justify-center
        bg-[#123CFF]
        text-white
        transition-all
        duration-300
        hover:bg-[#FFC21A]
        hover:text-[#07113F]
      "
    >
      <Send size={17} />
    </button>
  </form>

  {/* Subscription Message */}
  {message && (
    <motion.p
      key={message}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      role="status"
      aria-live="polite"
      className={`
        mt-3
        max-w-[360px]
        rounded-md
        px-3
        py-2
        text-[12px]
        font-medium
        leading-5
        ${
          messageType === "success"
            ? "bg-green-500/10 text-green-300"
            : messageType === "duplicate"
            ? "bg-yellow-500/10 text-yellow-300"
            : "bg-red-500/10 text-red-300"
        }
      `}
    >
      {message}
    </motion.p>
  )}
</div>

      </motion.div>
    </footer>
  );
}