import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VARIANTS = {
  gold: "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-[0_4px_14px_rgba(245,174,19,0.35)]",
  navyOutline:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/5",
  navy: "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_4px_14px_rgba(0,14,40,0.35)]",
  blue: "bg-brand-blue text-white hover:bg-brand-blueDark shadow-[0_4px_14px_rgba(20,80,224,0.35)]",
  blueOutline:
    "bg-transparent text-brand-blue border border-brand-blue/50 hover:bg-brand-blue/5",
  white: "bg-white text-brand-blue hover:bg-surface-muted",
  orange:
    "bg-orange-500 text-white hover:bg-orange-600 shadow-[0_4px_14px_rgba(249,115,22,0.35)]",
};

/**
 * Polymorphic animated button.
 * - Default renders a <button>.
 * - Pass `as="a"` with `href` for a plain anchor.
 * - Pass `as={Link}` (react-router) with `to` for client-side navigation.
 */
export default function Button({
  children,
  variant = "gold",
  icon = true,
  className = "",
  as: Component = "button",
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
    VARIANTS[variant] || VARIANTS.gold
  } ${className}`;

  const MotionComponent = motion.create ? motion.create(Component) : motion(Component);

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  const extra = Component === "button" ? { type } : {};

  return (
    <MotionComponent className={classes} {...extra} {...motionProps} {...props}>
      {children}
      {icon && <ArrowRight size={16} />}
    </MotionComponent>
  );
}
