import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${alignClass} mb-10`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 mb-3 ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span
            className={`text-xs font-bold tracking-widest uppercase ${
              light ? "text-gold-400" : "text-brand-blue"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      {title && (
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight mb-3 ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
      )}
      <div
        className={`h-1 w-16 rounded bg-gradient-to-r from-brand-blue to-gold-500 ${
          align === "center" ? "mx-auto" : ""
        } mb-4`}
      />
      {description && (
        <p className={`text-base leading-relaxed ${light ? "text-white/75" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
