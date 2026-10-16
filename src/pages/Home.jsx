import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, MapPin, Laptop, Lightbulb, BarChart3, Target,
  Users, FileText, Globe2, Mic2, BrainCircuit, LineChart,
  Cloud, HeartPulse, Leaf, Cpu, ChevronLeft, ChevronRight,
  CheckCircle2, FileCheck2, BadgeCheck, ShieldCheck, Send,
  ArrowRight ,   ChartNoAxesColumnIncreasing, BookOpen, Database , Award, CalendarDays , Check ,
  Scale,
  Settings,
  

  Network,

} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import homeHero from "../assets/img/synergy-2026-home-hero-banner.webp";
import { useState , useEffect } from "react";
// import profile from "../assets/img/IDEAX-2026-conference-illustration.webp"
import batangasLogo from "../assets/img/batangasUniversityLogo.webp";
import perpetualLogo from "../assets/img/university-of-Perpetual-logo.webp";
import himalayanLogo from "../assets/img/himalayan-University-logo.webp";
import globalResearchLogo from "../assets/img/global-research-collaboration-logo.webp";
import researcherConnectLogo from "../assets/img/researcher-connect-publication-partner-logo.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const STATS = [
  { icon: Users, value: "50+", label: "Global Participants", color: "text-[#2563EB]" },
  { icon: FileText, value: "10+", label: "Research Streams", color: "text-[#7C3AED]" },
  { icon: Globe2, value: "10+", label: "Countries Represented", color: "text-[#12B8B3]" },
  { icon: Mic2, value: "10+", label: "Industry Experts & Speakers", color: "text-[#FB923C]" },
];

const TRACKS = [
  {
    icon: ChartNoAxesColumnIncreasing,
    color: "text-[#2563EB]",
    title: "Management, Business, Economics & Sustainability",
    desc: "Innovative strategies for resilient and sustainable growth.",
  },
  {
    icon: Scale,
    color: "text-[#6945FF]",
    title:
      "Law, Criminal Justice, Humanities, Social Science, Arts & Education",
    desc: "People, society and inclusive development through interdisciplinary collaboration.",
  },
  {
    icon: Settings,
    color: "text-[#0DA99A]",
    title:
      "General Science, Food Technology, IT, Computing & Emerging Engineering",
    desc: "Advancing science, technology and emerging solutions for real-world impact.",
  },
  {
    icon: Leaf,
    color: "text-[#65B933]",
    title: "Sustainable Development",
    desc: "Interdisciplinary solutions for a greener, healthier and more inclusive future.",
  },
  {
    icon: Lightbulb,
    color: "text-[#FF9800]",
    title: "Innovation & Technology",
    desc: "Transforming ideas into solutions for societal and industrial advancement.",
  },
  {
    icon: Network,
    color: "text-[#2563EB]",
    title: "Global Collaboration",
    desc: "Building partnerships for knowledge exchange and a better global tomorrow.",
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
    name: "University of Perpetual Help System DALTA",
    subtitle: "",
    location: "",
    country: "Philippines",
    flag: "🇵🇭",
    img: perpetualLogo,
  },
    {
    id: 3,
    name: "Research Connect",
    subtitle: "Publication Partner",
    location: "",
    country: "International",
    flag: "🌐",
    img: researcherConnectLogo,
  },
  {
    id: 4,
    name: "Himalayan University",
    subtitle: "",
    location: "",
    country: "India",
    flag: "🇮🇳",
    img: himalayanLogo,
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
];


const DATES = [
  ["Abstract Submission Deadline", "15 July, 2026"],
  ["Full Paper Submission Deadline", "15 August, 2026"],
  ["Notification of Acceptance", "15 September, 2026"],
  ["Early Bird Registration", "30 September, 2026"],
  ["Regular Registration", "15 November, 2026"],
  ["Conference Dates", "4 – 5 December, 2026"],
];

const WHY_ATTEND = [
  "Engage with global experts and thought leaders",
  "Present your research to a diverse audience",
  "Explore interdisciplinary collaboration",
  "Gain new insights and professional networks",
  "Be part of solutions for a sustainable and digital future",
  "Experience the culture and beauty of the Philippines",
];

const PUBLICATION_HIGHLIGHTS = [
  {
    icon: FileText,
    title: "Peer Reviewed Proceedings",
    color: "text-[#2563EB]",
  },
  {
    icon: BookOpen,
    title: "Publication Opportunities",
    color: "text-[#2563EB]",
  },
  {
    icon: Database,
    title: "Indexed in Major Databases",
    color: "text-[#2563EB]",
  },
  {
    icon: Award,
    title: "Quality Research Exposure",
    color: "text-[#FF9200]",
  },
];




export default function Home() {




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

    setPartnerIndex((prev) =>
      (prev - 1 + PARTNERS.length) % PARTNERS.length
    );
  };

  const nextPartner = () => {
    setDirection(1);

    setPartnerIndex((prev) =>
      (prev + 1) % PARTNERS.length
    );
  };

  const visiblePartners = Array.from(
    { length: Math.min(visibleCount, PARTNERS.length) },
    (_, index) =>
      PARTNERS[(partnerIndex + index) % PARTNERS.length]
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

  return (
    <main className="w-full overflow-hidden bg-white text-[#07113F]">

      {/* HERO */}
      <section
        className="relative min-h-[420px] bg-[#020b22] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_410px] lg:px-16 lg:py-12">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p className="text-[15px] font-medium text-[#FFC21A]">Welcome to</p>

            <h1 className="mt-1 text-[40px] font-semibold leading-none text-white sm:text-[50px] lg:text-[56px]">
              SYNERGY <span className="text-[#FFC21A]">2026</span>
            </h1>

            <h2 className="mt-4 max-w-[540px] text-[21px] font-medium leading-tight text-white sm:text-[27px]">
              International Conference on Innovation $ Interdisciplinary Integration for a Sustainable & Digital Future.
            </h2>

            <div className="mt-4 w-16 h-[3px] rounded-lg bg-[#FFC21A]"></div>

            <p className="mt-5 text-[14px] font-medium text-white/85 max-w-[470px]">
             Connecting acedemicians, researchers, professionals, industry experts, and students for global collaboration and knowledge sharing.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white">
              {[
                [Calendar, "4 – 5 December, 2026"],
                [MapPin, "University of Batangas Lipa Campus, Batangas, Philippines"],
                
              ].map(([Icon, text]) => (
                <span key={text} className="flex items-center gap-2">
                  <Icon size={16} className="text-[#FFC21A]" /> {text}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button as={Link} to="/contact" variant="gold">Submit Paper</Button>
              <Button as={Link} to="/registration" variant="navyOutline">Register Now</Button>
            </div>
          </motion.div>

    
        </div>
      </section>

      {/* ABOUT */}
   <section className="relative -mt-4 overflow-hidden rounded-t-[22px] bg-[#F6FAFF]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.08),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.10),transparent_35%)]" />

  <div className="relative mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(540px,660px)] lg:px-16">
    
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="text-left"
    >
      <p className="text-[12px] font-bold uppercase tracking-wide text-[#2563EB]">
        About SYNERGY 2026
      </p>

      <h2 className="mt-3 max-w-[360px] text-[22px] font-[600] leading-[1.12] text-[#07113F] sm:text-[28px] lg:text-[30px]">
       Bringing Disciplines{" "}
        <span className="text-[#2563EB] mt-1">Shaping Future</span>  
      </h2>

      <p className="mt-5 max-w-[650px] text-[14px] font-medium leading-[1.75] text-[#1F2A44]/85">
        SYNERGY 2026 is a globle platform that brings together diverse disciplines to explore innovation solutions, foster interdisciplinary intergartin and advance a sustainable and digital future for communities worldwide.
      </p>

      <Link
        to="/about"
        className="mt-6 inline-flex h-[34px] items-center gap-3 rounded-[6px] border border-[#2563EB] px-5 text-[12px] font-bold text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:text-white hover:shadow-[0_10px_25px_rgba(37,99,235,0.22)]"
      >
        Learn More <span className="text-[16px] leading-none">→</span>
      </Link>
    </motion.div>

    {/* Stats Cards */}
    <div className="grid grid-cols-2 gap-3 sm:gap-2 xl:grid-cols-4">
      {STATS.map(({ icon: Icon, value, label, color }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
          whileHover={{ y: -8, scale: 1.025 }}
          className="group flex min-h-[155px] flex-col items-center justify-center rounded-[10px] border border-[#E5ECF7] bg-white p-4 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-[#C7D8FF] hover:shadow-[0_18px_45px_rgba(37,99,235,0.16)]"
        >
          <Icon
            size={37}
            strokeWidth={2.1}
            className={`mb-4 ${color} transition-transform duration-300 group-hover:scale-110`}
          />

          <h3 className="text-[22px] font-semibold leading-none text-[#07113F] sm:text-[26px]">
            {value}
          </h3>

          <p className="mt-3 text-[14px] font-medium text-[#1F2A44]">
            {label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

   
 
{/* CONFERENCE THEMES SECTION */}
<section className="relative isolate overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-12 2xl:px-16">
  {/* Subtle background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.045),transparent_50%)]"
  />

  <div className="relative z-10 mx-auto w-full max-w-[1450px] text-center">
    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-5 sm:mb-6"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.03em] text-[#2563EB] sm:text-[12px]">
        CONFERENCE THEMES
      </p>

      <h2 className="mt-1.5 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#07113F] sm:text-[28px] lg:text-[30px]">
        Explore Key Streams
      </h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 49 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.2 }}
        className="mx-auto mt-2 h-[2px] rounded-full bg-[#2563EB]"
      />
    </motion.div>

    {/* Theme cards */}
    <div className="grid grid-cols-1 items-stretch gap-3 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-2">
      {TRACKS.map(({ icon: Icon, color, title, desc }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: index * 0.055,
            ease: "easeOut",
          }}
          whileHover={{
            y: -7,
            scale: 1.015,
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
          className="group relative flex h-full min-h-[220px] flex-col items-center rounded-[9px] border border-[#E4EAF5] bg-white px-3 py-5 text-center shadow-[0_2px_12px_rgba(15,23,42,0.025)] transition-[border-color,box-shadow,background-color] duration-300 ease-out hover:z-10 hover:border-[#BFD2FF] hover:bg-[#FCFDFF] hover:shadow-[0_15px_35px_rgba(37,99,235,0.12)] sm:min-h-[235px] md:min-h-[245px] xl:min-h-[228px] 2xl:min-h-[235px]"
        >
          {/* Icon */}
          <motion.div
            whileHover={{
              rotate: [0, -5, 5, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.4 }}
            className="mb-3 flex h-[48px] w-[48px] shrink-0 items-center justify-center"
          >
            <Icon
              size={43}
              strokeWidth={1.7}
              className={`${color} transition-transform duration-300 ease-out group-hover:scale-110`}
              aria-hidden="true"
            />
          </motion.div>

          {/* Title */}
          <h3 className="mx-auto w-full max-w-[205px] text-[13px] font-semibold leading-[1.35] text-[#07113F] transition-colors duration-300 group-hover:text-[#2563EB] sm:text-[13px] lg:text-[13.5px]">
            {title}
          </h3>

          {/* Description */}
          <p className="mx-auto mt-4 w-full max-w-[195px] text-[12px] font-normal leading-[1.5] text-[#46516B] transition-colors duration-300 group-hover:text-[#263858]">
            {desc}
          </p>

          {/* Hover accent */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#2563EB] transition-[width] duration-300 ease-out group-hover:w-[65%]"
          />
        </motion.div>
      ))}
    </div>

    {/* View all button */}
    {/* <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mt-5 flex justify-center sm:mt-6"
    >
      <Link
        to="/tracks"
        className="group/btn inline-flex min-h-[36px] items-center justify-center gap-5 rounded-[5px] border border-[#2563EB] bg-white px-6 py-2 text-[12px] font-semibold text-[#2563EB] shadow-[0_2px_5px_rgba(37,99,235,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#2563EB] hover:text-white hover:shadow-[0_10px_25px_rgba(37,99,235,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:px-7"
      >
        View All Themes

        <ArrowRight
          size={17}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover/btn:translate-x-1.5"
        />
      </Link>
    </motion.div> */}
  </div>
</section>


      {/* SPEAKERS */}
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
            <p className="text-[12px] font-bold uppercase tracking-[0.02em] text-[#FFC21A]">
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
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={direction}
            >
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

      {/* INFO */}

{/* IMPORTANT DATES, WHY ATTEND & PUBLICATION */}
<section className="relative isolate overflow-hidden bg-white px-4 py-7 sm:px-6 sm:py-9 lg:px-10 xl:px-12 2xl:px-16">

  {/* Soft background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.035),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.035),transparent_35%)]"
  />

  <div className="relative mx-auto grid w-full max-w-[1450px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.05fr] lg:gap-5 xl:gap-6">

    {/* ================= IMPORTANT DATES ================= */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="min-w-0 border-b border-[#E5EAF3] pb-6 md:border-r md:border-b-0 md:pr-5 md:pb-0 lg:pr-5 xl:pr-6"
    >
      <h3 className="mb-4 text-[15px] font-semibold uppercase tracking-[0.01em] text-[#2563EB]">
        Important Dates
      </h3>

      <ul className="relative space-y-3">

        {/* Vertical timeline line */}
        <div
          aria-hidden="true"
          className="absolute bottom-[10px] left-[7px] top-[9px] w-px bg-[#D7E5FF]"
        />

        {DATES.map(([label, date], index) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.055,
              ease: "easeOut",
            }}
            whileHover={{ x: 4 }}
            className="group relative flex min-w-0 items-start gap-3"
          >
            {/* Timeline icon */}
            <span className="relative z-10 mt-[2px] flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#2563EB] bg-white text-[#2563EB] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white">
              <CalendarDays size={9} strokeWidth={2.3} />
            </span>

            {/* Label and date */}
            <div className="flex min-w-0 flex-1 flex-col gap-1 min-[450px]:flex-row min-[450px]:items-start min-[450px]:justify-between min-[450px]:gap-3 lg:flex-col xl:flex-row">
              <span className="min-w-0 text-[11.5px] font-semibold leading-[1.45] text-[#07113F] transition-colors duration-300 group-hover:text-[#2563EB]">
                {label}
              </span>

              <span className="shrink-0 whitespace-nowrap text-[11.5px] font-medium leading-[1.45] text-[#263452]">
                {date}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* ================= WHY ATTEND ================= */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="min-w-0 border-b border-[#E5EAF3] pb-6 md:border-b-0 lg:border-r lg:pr-5 lg:pb-0 xl:pr-6"
    >
      <h3 className="mb-4 text-[15px] font-semibold uppercase tracking-[0.01em] text-[#2563EB]">
        Why Attend SYNERGY 2026?
      </h3>

      <ul className="space-y-3">
        {WHY_ATTEND.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.055,
            }}
            whileHover={{ x: 4 }}
            className="group flex items-start gap-3"
          >
            {/* Blue check icon */}
            <span className="mt-[1px] flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1746C7]">
              <Check size={10} strokeWidth={3} />
            </span>

            <span className="text-[11.5px] font-medium leading-[1.45] text-[#1F2A44] transition-colors duration-300 group-hover:text-[#2563EB]">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* ================= PUBLICATION HIGHLIGHTS ================= */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: 0.2 }}
      className="min-w-0 md:col-span-2 lg:col-span-1"
    >
      <h3 className="mb-4 text-[15px] font-semibold uppercase tracking-[0.01em] text-[#2563EB]">
        Publication &amp; Submission Highlights
      </h3>

      <div className="grid grid-cols-2 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {PUBLICATION_HIGHLIGHTS.map(
          ({ icon: Icon, title, color }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.025,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative flex min-h-[132px] min-w-0 flex-col items-center justify-center overflow-hidden rounded-[8px] border border-[#E8EEF7] bg-white px-2 py-4 text-center shadow-[0_4px_15px_rgba(15,23,42,0.035)] transition-[border-color,box-shadow,background-color] duration-300 hover:z-10 hover:border-[#BFD2FF] hover:bg-[#FCFDFF] hover:shadow-[0_12px_30px_rgba(37,99,235,0.13)]"
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.35 }}
                className="mb-3 flex h-[42px] w-[42px] items-center justify-center"
              >
                <Icon
                  size={35}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className={`${color} transition-transform duration-300 group-hover:scale-110`}
                />
              </motion.div>

              {/* Highlight title */}
              <p className="w-full text-[10.5px] font-medium leading-[1.35] text-[#07113F] transition-colors duration-300 group-hover:text-[#2563EB]">
                {title}
              </p>

              {/* Bottom hover indicator */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#2563EB] transition-[width] duration-300 group-hover:w-[65%]"
              />
            </motion.div>
          )
        )}
      </div>
    </motion.div>

  </div>
</section>


      {/* CTA */}
     <section className="bg-white px-5 pb-6 sm:px-8 lg:px-16">
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className="relative mx-auto flex max-w-[1420px] flex-col items-center justify-between gap-5 overflow-hidden rounded-[10px] px-7 py-6 text-white sm:flex-row sm:px-16"
  >
    {/* exact dark blue bg gradient */}
    <div className="absolute inset-0 bg-[linear-gradient(100deg,#071263_0%,#020B54_38%,#050A78_68%,#0A012D_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(59,130,246,0.45),transparent_18%),radial-gradient(circle_at_92%_20%,rgba(37,99,235,0.35),transparent_28%),radial-gradient(circle_at_72%_85%,rgba(168,85,247,0.25),transparent_25%)]" />

    <div className="relative z-10 flex w-full items-center gap-4 sm:w-auto">
      <motion.span
        whileHover={{ scale: 1.12, rotate: -8 }}
        className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1D4ED8,#6366F1)] shadow-[0_8px_22px_rgba(59,130,246,0.35)]"
      >
        <Send size={22} className="text-white" fill="currentColor" />
      </motion.span>

      <div>
        <h3 className="text-[14px] font-semibold leading-tight text-[#FFC21A] sm:text-[18px]">
          Be a Part of SYNERGY 2026
        </h3>
        <p className="mt-1 text-[11px] font-medium leading-snug text-white/90 sm:text-[12px]">
          Join s global community to exchange knowledge, build collaborations, and shape a sustainable future.
        </p>
      </div>
    </div>

  <Link
  to="/registration"
  className="
    relative z-10 inline-flex items-center justify-center gap-2
    h-[38px]
    px-10
    md:h-[34px]
    md:px-4
    text-[12px]
    md:text-[12px]
    lg:h-[38px]
    lg:px-10
    lg:text-[13px]
    rounded-[5px]
    bg-[#FFC21A]
    font-semibold text-[#07113F]
    shadow-[0_8px_20px_rgba(255,194,26,0.28)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-[#FFD34D]
  "
>
  Register
  <ArrowRight size={16} className="md:w-4 md:h-4 lg:w-[18px] lg:h-[18px]" />
</Link>
  </motion.div>
</section>
    </main>
  );
}

function Info({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-bold uppercase text-blue-600">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}