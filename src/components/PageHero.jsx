import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * variant: "light" (About) | "dark" (Tracks/Speakers/Schedule/Committee/Registration/Contact)
 */
export default function PageHero({
  variant = "dark",
  breadcrumb,
  title,
  titleAccent,
  description,
  image,
  meta = [],
}) {
  const isLight = variant === "light";

  return (
    <section
      className={`relative overflow-hidden ${
        isLight
          ? "bg-gradient-to-br from-[#eaf2ff] via-[#f3f7ff] to-white"
          : "bg-navy-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className={`flex items-center gap-1.5 text-xs font-medium mb-4 ${
              isLight ? "text-slate-500" : "text-white/50"
            }`}
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className={isLight ? "text-brand-blue" : "text-brand-sky"}>{breadcrumb}</span>
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold leading-tight mb-2 ${
              isLight ? "text-navy-900" : "text-white"
            }`}
          >
            {title}{" "}
            {titleAccent && (
              <span className="block bg-gradient-to-r from-brand-sky to-brand-blue bg-clip-text text-transparent">
                {titleAccent}
              </span>
            )}
          </h1>
          <div className="h-1 w-16 rounded bg-gradient-to-r from-brand-blue to-gold-500 my-4" />
          <p
            className={`text-base leading-relaxed max-w-md ${
              isLight ? "text-slate-600" : "text-white/70"
            }`}
          >
            {description}
          </p>

          {meta.length > 0 && (
            <div className="flex flex-wrap gap-5 mt-6">
              {meta.map((m, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      isLight ? "bg-white shadow-card" : "bg-white/10"
                    }`}
                  >
                    <m.icon size={16} className={isLight ? "text-brand-blue" : "text-brand-sky"} />
                  </span>
                  <div className={`text-xs leading-tight ${isLight ? "text-navy-900" : "text-white"}`}>
                    <div className="font-semibold">{m.title}</div>
                    <div className={isLight ? "text-slate-500" : "text-white/60"}>{m.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <img
            src={image}
            alt={title}
            className="w-full max-w-xl mx-auto rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </motion.div>
      </div>

      {/* bottom wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 60"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 C 360 60, 1080 0, 1440 30 L1440 60 L0 60 Z"
          fill={isLight ? "#ffffff" : "#000C24"}
        />
        <path
          d="M0 36 C 360 64, 1080 8, 1440 36"
          stroke="#F5AE13"
          strokeWidth="3"
          fill="none"
          opacity="0.8"
        />
      </svg>
    </section>
  );
}
