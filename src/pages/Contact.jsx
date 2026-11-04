import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Laptop,
  Mail,
  Phone,
  Globe2,
  Share2,
  ChevronDown,
  Send,
  Navigation,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "../components/SocialIcons";
import contactHero from "../assets/img/synergy-2026-contact-us-banner.webp";
import cta from "../assets/img/synergy-2026-conference-tracks-call-to-action.webp";
import batangasLogo from "../assets/img/batangasUniversityLogo.webp";
import perpetualLogo from "../assets/img/university-of-Perpetual-logo.webp";
import himalayanLogo from "../assets/img/himalayan-University-logo.webp";
import globalResearchLogo from "../assets/img/global-research-collaboration-logo.webp";
import researcherConnectLogo from "../assets/img/researcher-connect-publication-partner-logo.webp";
import siareLogo from "../assets/img/society-of-integrated-academic-research-and-education-logo.webp";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    title: "Email",
    color: "#0861FF",
    bg: "#EAF1FF",
    items: [
      {
        text: "globalresearchconference@gmail.com",
        href: "mailto:globalresearchconference@gmail.com",
      },
    ],
  },
  {
    icon: Globe2,
    title: "Websites",
    color: "#0861FF",
    bg: "#EAF1FF",
    items: [
      { text: "grcf.net", href: "https://grcf.net" },
      {
        text: "globalresearchconference.com",
        href: "https://globalresearchconference.com",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Venue",
    color: "#FF9900",
    bg: "#FFF5E6",
    items: [
      {
        text: "University of Batangas Lipa Campus, Feliciano Leviste Road, Marawoy, Lipa City, Batangas, Philippines",
      },
    ],
  },
  {
    icon: Building2,
    title: "Managed by",
    color: "#7545FF",
    bg: "#F1EDFF",
    items: [
      {
        text: "Infinite Global Research Conference Pvt. Ltd.",
      },
      {
        text: "Plot No. RL-32 Shrifal Building, G Block Sambhaji Nagar, Chinchwad MIDC, Pune – 411019",
      },
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    color: "#00B979",
    bg: "#E9FBF4",
    items: [
      { text: "+91 9423573130", href: "tel:+919423573130" },
      { text: "+91 9545553130", href: "tel:+919545553130" },
    ],
  },
];

const PARTNERS = [
  {
    id: 1,
    name: "University of Batangas",
    subtitle: "Lipa Campus",
    location: "Batangas, Philippines",
    country: "Philippines",
    flag: "🇵🇭",
    img: batangasLogo,
  },
  {
    id: 2,
    name: "Society of Integrated Academic Research and Education",
    subtitle: "",
    location: "",
    country: "International",
    flag: "🌐",
    img: siareLogo,
  },
  {
    id: 3,
    name: "Researcher Connect",
    subtitle: "Publication Partner",
    location: "",
    country: "International",
    flag: "🌐",
    img: researcherConnectLogo,
  },
  {
    id: 4,
    name: "University of Perpetual Help System DALTA",
    subtitle: "",
    location: "",
    country: "Philippines",
    flag: "🇵🇭",
    img: perpetualLogo,
  },
  {
    id: 5,
    name: "Global Research Conference Forum",
    subtitle: "",
    location: "",
    country: "International",
    flag: "🌐",
    img: globalResearchLogo,
  },
  {
    id: 6,
    name: "Himalayan University",
    subtitle: "",
    location: "",
    country: "India",
    flag: "🇮🇳",
    img: himalayanLogo,
  },
];
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState(null);

  const [partnerIndex, setPartnerIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [direction, setDirection] = useState(1);

  // Responsive number of visible cards
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setVisibleCount(1);
      } else if (width < 640) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateCount();

    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const prevPartner = () => {
    setDirection(-1);

    setPartnerIndex((prev) => (prev - 1 + PARTNERS.length) % PARTNERS.length);
  };

  const nextPartner = () => {
    setDirection(1);

    setPartnerIndex((prev) => (prev + 1) % PARTNERS.length);
  };

  const visiblePartners = Array.from(
    { length: Math.min(visibleCount, PARTNERS.length) },
    (_, index) => PARTNERS[(partnerIndex + index) % PARTNERS.length],
  );

  const carouselVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 35 : -35,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -35 : 35,
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = form;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setFeedback({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    const emailBody = `
Full Name: ${name}
Email Address: ${email}
Phone Number: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}
  `.trim();

    const mailtoLink =
      `mailto:globalresearchconference@gmail.com` +
      `?subject=${encodeURIComponent(`SYNERGY 2026 Inquiry - ${subject}`)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="overflow-hidden bg-white text-[#07113F]">
      <section
        className="relative min-h-[480px] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[470px] lg:bg-[length:100%_100%]"
        style={{
          backgroundImage: `url(${contactHero})`,
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[1420px] items-center px-5 py-6 sm:min-h-[460px] sm:px-8 lg:min-h-[470px] lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-[560px]"
          >
            {/* Breadcrumb */}
            <div className="mb-8 sm:-mt-10 flex items-center gap-2 text-[13px] font-semibold text-white">
              <Link to="/" className="transition hover:text-[#13B5FF]">
                Home
              </Link>
              <span className="text-white">›</span>
              <Link
                to="/contact"
                className="font-semibold text-[#13B5FF] text-[13px]"
              >
                Contact Us
              </Link>
            </div>

            <h1 className="text-[40px] font-[600] leading-[1.02] text-white sm:text-[46px] lg:text-[47px]">
              We’re Here <br />
              <span className="bg-gradient-to-r from-[#2cb2ef] to-[#493af3] bg-clip-text text-transparent">
                to Help You
              </span>
            </h1>
            <div className="mt-4 flex h-[4px] w-[70px] overflow-hidden rounded-full">
              <span className="w-[55%] bg-[#13B5FF]" />
              <span className="w-[45%] bg-[#FFC21A]" />
            </div>

            <p className="mt-7 max-w-[390px] text-[15px] font-medium leading-[1.75] text-white/90">
              Have a question or need assistance? Reach out to our team and
              we'll get back to you as soon as possible.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white">
              {[
                [Calendar, "4 – 5 December, 2026"],
                [
                  MapPin,
                  "University of Batangas Lipa Campus, Batangas, Philippines",
                ],
              ].map(([Icon, text]) => (
                <span key={text} className="flex items-center gap-2">
                  <Icon size={16} className="text-[#FFC21A]" /> {text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
    GET IN TOUCH - CONTACT INFORMATION ONLY
============================================ */}

      <section className="relative overflow-hidden bg-[#F8FBFF] px-3 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-14">
        <div className="mx-auto w-full max-w-[1450px]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
            className="
        min-w-0
        rounded-[12px]
        border
        border-[#E2EAF6]
        bg-white
        px-5
        py-7
        shadow-[0_5px_22px_rgba(15,23,42,0.035)]
        sm:px-8
        sm:py-9
        lg:px-10
      "
          >
            {/* Section Heading */}
            <div className="max-w-[760px]">
              <p className="text-[11px] font-semibold uppercase text-[#0861FF]">
                GET IN TOUCH
              </p>

              <h2 className="mt-1 text-[23px] font-semibold leading-tight text-[#07113F] sm:text-[26px]">
                Contact <span className="text-[#0861FF]">Information</span>
              </h2>

              <p className="mt-2 max-w-[650px] text-[12px] font-medium leading-[1.7] text-[#354265] sm:text-[13px]">
                We are here to assist you. Reach out to us through any of the
                following channels for inquiries, support, or collaboration
                opportunities related to SYNERGY 2026.
              </p>
            </div>

            {/* Contact Details */}
            <div
              className="
          mt-7
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          lg:grid-cols-3
        "
            >
              {CONTACT_DETAILS.map(
                ({ icon: Icon, title, color, bg, items }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="
                group
                flex
                min-w-0
                items-start
                gap-4
                rounded-[12px]
                border
                border-[#E7EDF7]
                bg-[#FAFCFF]
                px-4
                py-5
                transition-all
                duration-300
                hover:border-[#C6D9FF]
                hover:bg-white
                hover:shadow-[0_12px_30px_rgba(10,50,110,0.09)]
                sm:px-5
              "
                  >
                    {/* Icon */}
                    <div
                      className="
                  flex
                  h-[48px]
                  w-[48px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[10px]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                      style={{ backgroundColor: bg }}
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.9}
                        style={{ color }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Contact Information */}
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 text-[12px] font-semibold text-[#07113F] sm:text-[13px]">
                        {title}
                      </h3>

                      <div className="space-y-1">
                        {items.map((item) =>
                          item.href ? (
                            <a
                              key={item.text}
                              href={item.href}
                              target={
                                item.href.startsWith("https://")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.href.startsWith("https://")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="
                          block
                          break-words
                          text-[11px]
                          font-medium
                          leading-[1.6]
                          text-[#0861FF]
                          transition-colors
                          duration-300
                          hover:text-[#003DBA]
                          hover:underline
                          sm:text-[12px]
                        "
                            >
                              {item.text}
                            </a>
                          ) : (
                            <p
                              key={item.text}
                              className="
                          text-[11px]
                          font-medium
                          leading-[1.6]
                          text-[#334266]
                          sm:text-[12px]
                        "
                            >
                              {item.text}
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="organizing-partners"
        className="relative isolate overflow-hidden rounded-t-[12px] bg-[#050C35] px-4 py-5 sm:px-6 sm:py-6 lg:px-10 xl:px-12 2xl:px-16"
      >
        {/* Background gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_95%_90%,rgba(115,34,194,0.28),transparent_25%),radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.17),transparent_40%)]"
        />

        {/* Decorative bottom glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-24 h-[260px] w-[260px] rounded-full bg-purple-600/10 blur-[85px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1450px]">
          {/* Section heading */}
          <div className="mb-3 flex flex-col items-start justify-between gap-3 sm:mb-4 sm:flex-row sm:items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.02em] text-[#FFC21A]">
                ORGANIZING PARTNERS
              </p>

              <h2 className="mt-1.5 text-[21px] font-semibold leading-[1.2] tracking-[-0.015em] text-white sm:text-[24px] lg:text-[25px]">
                Leading Institutions. Stronger Together.
              </h2>
            </motion.div>

            {/* <Link
            to="/partners"
            className="group/btn inline-flex min-h-[36px] shrink-0 items-center justify-center gap-6 rounded-[5px] border border-[#D99B18] bg-transparent px-5 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFC21A] hover:text-[#07113F] hover:shadow-[0_8px_20px_rgba(255,194,26,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC21A]"
          >
            View All Partners
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link> */}
          </div>

          {/* Carousel area */}
          <div className="relative px-0 min-[480px]:px-9 lg:px-10">
            {/* Previous arrow */}
            <button
              type="button"
              onClick={prevPartner}
              aria-label="Previous organizing partner"
              className="absolute left-0 top-1/2 z-20 hidden h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-white transition-all duration-300 hover:scale-110 hover:border-[#FFC21A] hover:bg-[#FFC21A] hover:text-[#07113F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFC21A] min-[480px]:flex"
            >
              <ChevronLeft size={19} strokeWidth={1.8} />
            </button>

            {/* Animated partner cards */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={`${partnerIndex}-${visibleCount}`}
                  custom={direction}
                  variants={carouselVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3"
                >
                  {visiblePartners.map((partner, index) => (
                    <motion.article
                      key={partner.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.015,
                        transition: {
                          duration: 0.22,
                          ease: "easeOut",
                        },
                      }}
                      className="group relative flex min-h-[194px] min-w-0 flex-col items-center overflow-hidden rounded-[7px] border border-white/[0.04] bg-white/[0.085] px-2.5 py-3 text-center shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-[background-color,border-color,box-shadow] duration-300 hover:z-10 hover:border-[#4779D6]/60 hover:bg-white/[0.13] hover:shadow-[0_16px_35px_rgba(23,80,184,0.18)] sm:min-h-[200px] lg:min-h-[194px]"
                    >
                      {/* Logo */}
                      <div className="mb-2 flex h-[85px] w-[85px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-[0_2px_10px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={partner.img}
                          alt={`${partner.name} logo`}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Partner name */}
                      <h3 className="w-full text-[13px] font-semibold leading-[1.2] text-white sm:text-[13.5px]">
                        {partner.name}
                      </h3>

                      {/* Partner subtitle */}
                      {partner.subtitle && (
                        <p className="mt-1 text-[11px] leading-[1.25] text-white/80">
                          {partner.subtitle}
                        </p>
                      )}

                      {/* Location */}
                      {partner.location && (
                        <p className="mt-0.5 text-[10.5px] leading-[1.25] text-white/70">
                          {partner.location}
                        </p>
                      )}

                      {/* Country */}
                      <div className="mt-auto flex items-center justify-center gap-2 pt-2 text-[12px] font-medium text-white/85">
                        {partner.country === "International" ? (
                          <Globe2
                            size={20}
                            strokeWidth={1.7}
                            className="shrink-0 text-[#66C3FF]"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="text-[22px] leading-none"
                          >
                            {partner.flag}
                          </span>
                        )}

                        <span>{partner.country}</span>
                      </div>

                      {/* Hover accent */}
                      <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#FFC21A] transition-[width] duration-300 group-hover:w-[65%]"
                      />
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next arrow */}
            <button
              type="button"
              onClick={nextPartner}
              aria-label="Next organizing partner"
              className="absolute right-0 top-1/2 z-20 hidden h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-white transition-all duration-300 hover:scale-110 hover:border-[#FFC21A] hover:bg-[#FFC21A] hover:text-[#07113F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFC21A] min-[480px]:flex"
            >
              <ChevronRight size={19} strokeWidth={1.8} />
            </button>
          </div>

          {/* Mobile navigation */}
          <div className="mt-4 flex items-center justify-center gap-4 min-[480px]:hidden">
            <button
              type="button"
              onClick={prevPartner}
              aria-label="Previous partner"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-300 hover:bg-[#FFC21A] hover:text-[#07113F]"
            >
              <ChevronLeft size={19} />
            </button>

            <span className="text-[12px] font-medium text-white/70">
              {partnerIndex + 1} / {PARTNERS.length}
            </span>

            <button
              type="button"
              onClick={nextPartner}
              aria-label="Next partner"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-300 hover:bg-[#FFC21A] hover:text-[#07113F]"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTACT PAGE CTA ================= */}
      <section className="w-full bg-white px-4 pb-6 pt-3 sm:px-6 sm:pb-8 lg:px-10 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="relative isolate mx-auto w-full max-w-[1340px] overflow-hidden rounded-[11px] border border-[#263C91] bg-[#06124B] text-white shadow-[0_8px_25px_rgba(0,25,100,0.12)]"
        >
          {/* Background image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cta})` }}
          />

          {/* Dark navy overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(2,13,64,0.89)_0%,rgba(4,20,103,0.84)_55%,rgba(16,9,111,0.85)_100%)]"
          />

          {/* Subtle decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(30,90,255,0.16),transparent_48%)]"
          />

          {/* CTA Content */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-5 px-4 py-5 sm:px-7 md:flex-row md:gap-6 md:px-8 md:py-4 lg:px-9 lg:py-3">
            {/* Left content */}
            <div className="flex min-w-0 flex-col items-center gap-4 text-center min-[480px]:flex-row min-[480px]:text-left">
              {/* Circular send icon */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: -10,
                  transition: { duration: 0.3 },
                }}
                className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#087CFF_0%,#315BFF_55%,#6644FF_100%)] shadow-[0_5px_18px_rgba(31,99,255,0.35)] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(31,99,255,0.55)]"
              >
                <Send
                  size={29}
                  strokeWidth={2.2}
                  className="text-white"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Heading & Description */}
              <div className="min-w-0">
                <h2 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.015em] text-white sm:text-[20px] lg:text-[21px]">
                  Let's Connect for{" "}
                  <span className="text-[#FFC21A]">SYNERGY 2026</span>
                </h2>

                <p className="mt-1 max-w-[610px] text-[11px] font-medium leading-[1.5] text-white/90 sm:text-[12px] lg:text-[13px]">
                  We look forward to hearing from you. Join our global community
                  and be part of a sustainable and digital future.
                </p>
              </div>
            </div>

            {/* Register button */}
            <Link
              to="/registration"
              aria-label="Register Now for SYNERGY 2026"
              className="group inline-flex min-h-[40px] w-full shrink-0 items-center justify-center gap-5 rounded-[6px] bg-[#FFC21A] px-6 py-2.5 text-[13px] font-semibold text-[#07113F] shadow-[0_7px_20px_rgba(255,194,26,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#FFD443] hover:shadow-[0_12px_28px_rgba(255,194,26,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[160px] lg:min-w-[170px]"
            >
              Register Now
              <ArrowRight
                size={19}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function Field({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#07113F]">
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-[46px] w-full rounded-[6px] border border-[#D9E3F2] bg-white px-4 text-[12px] font-medium outline-none transition focus:border-[#2563EB]"
      />
    </div>
  );
}
