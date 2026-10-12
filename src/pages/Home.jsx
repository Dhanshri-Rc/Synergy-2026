import { motion } from "framer-motion";
import {
  Calendar, MapPin, Laptop, Lightbulb, BarChart3, Target,
  Users, FileText, Globe2, Mic2, BrainCircuit, LineChart,
  Cloud, HeartPulse, Leaf, Cpu, ChevronLeft, ChevronRight,
  CheckCircle2, FileCheck2, BadgeCheck, ShieldCheck, Send,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import homeHero from "../assets/hero/ideax-2026-homepage-hero-banner.webp";
import { useState } from "react";
import profile from "../assets/hero/ideax-2026-conference-illustration.webp"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const STATS = [
  { icon: Users, value: "200+", label: "Participants", color: "text-[#2563EB]" },
  { icon: FileText, value: "150+", label: "Research Papers", color: "text-[#7C3AED]" },
  { icon: Globe2, value: "30+", label: "Countries", color: "text-[#12B8B3]" },
  { icon: Mic2, value: "5+", label: "Keynote Speakers", color: "text-[#FB923C]" },
];

const TRACKS = [
  {
    icon: BrainCircuit,
    color: "text-[#2563EB]",
    title: "Artificial Intelligence & Machine Learning",
    desc: "Advances in AI, ML, deep learning and intelligent systems.",
  },
  {
    icon: LineChart,
    color: "text-[#7C3AED]",
    title: "Decision Engineering & Analytics",
    desc: "Decision support systems, optimization, predictive analytics and simulation.",
  },
  {
    icon: Cloud,
    color: "text-[#12B8B3]",
    title: "Data Science & Big Data",
    desc: "Big data technologies, data mining, analytics and visualization.",
  },
  {
    icon: Cpu,
    color: "text-[#FB923C]",
    title: "Smart Systems & Emerging Tech",
    desc: "IoT, blockchain, cloud, edge computing and cyber-physical systems.",
  },
  {
    icon: HeartPulse,
    color: "text-[#EC4899]",
    title: "Intelligent Applications & Industry 4.0",
    desc: "AI in healthcare, finance, smart cities, robotics and automation.",
  },
  {
    icon: Leaf,
    color: "text-[#84CC16]",
    title: "Sustainability & Societal Impact",
    desc: "Sustainable innovation, green computing and ethical AI.",
  },
];

const SPEAKERS = [
  { name: "Prof. Yann LeCun", uni: "New York University", country: "USA", flag: "🇺🇸", img:profile },
  { name: "Prof. Fei-Fei Li", uni: "Stanford University", country: "USA", flag: "🇺🇸", img:profile },
  { name: "Prof. Amit P. Sheth", uni: "University of South Carolina", country: "USA", flag: "🇺🇸", img:profile },
  { name: "Prof. Virginia Dignum", uni: "Umeå University", country: "Sweden", flag: "🇸🇪", img:profile },
  { name: "Prof. Hiroaki Kitano", uni: "Sony Computer Science Labs", country: "Japan", flag: "🇯🇵", img:profile },
  { name: "Prof. Stuart Russell", uni: "UC Berkeley", country: "USA", flag: "🇺🇸", img:profile },
  { name: "Prof. Yoshua Bengio", uni: "Mila Institute", country: "Canada", flag: "🇨🇦", img:profile },
];

const DATES = [
  ["Paper Submission Deadline", "25 August, 2026"],
  ["Notification of Acceptance", "10 September, 2026"],
  ["Camera Ready Submission", "5 October, 2026"],
  ["Early Bird Registration", "18 October, 2026"],
  ["Conference Dates", "10 – 12 December, 2026"],
];




export default function Home() {


const [speakerIndex, setSpeakerIndex] = useState(0);

const visibleSpeakers = [
  ...SPEAKERS.slice(speakerIndex),
  ...SPEAKERS.slice(0, speakerIndex),
].slice(0, 5);

const nextSpeaker = () => {
  setSpeakerIndex((prev) => (prev + 1) % SPEAKERS.length);
};

const prevSpeaker = () => {
  setSpeakerIndex((prev) => (prev - 1 + SPEAKERS.length) % SPEAKERS.length);
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
              IDEAX <span className="text-[#FFC21A]">2026</span>
            </h1>

            <h2 className="mt-4 max-w-[540px] text-[21px] font-medium leading-tight text-white sm:text-[27px]">
              International Conference on Innovation, Decision Engineering and Artificial Intelligence
            </h2>

            <div className="mt-4 w-16 h-[3px] rounded-lg bg-[#FFC21A]"></div>

            <p className="mt-5 text-[14px] font-medium text-white/85">
              Innovating Intelligence. Engineering Decisions. Creating Impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white">
              {[
                [Calendar, "10 – 12 December, 2026"],
                [MapPin, "Singapore"],
                [Laptop, "Hybrid (In-person & Online)"],
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

       <motion.div
  initial={{ opacity: 0, x: 25 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="pointer-events-auto absolute right-[40px] top-[75px] hidden flex-col gap-[14px] lg:flex xl:right-[72px]"
>
  {[
    [Lightbulb, "INNOVATION"],
    [BrainCircuit, "INTELLIGENCE"],
    [BarChart3, "DECISIONS"],
    [Target, "IMPACT"],
  ].map(([Icon, label], index) => (
    <motion.div
      key={label}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ x: -6, scale: 1.03 }}
      className="flex items-center gap-4 text-white"
    >
      <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border hover:border-white/20 bg-white/10 backdrop-blur-md shadow-[0_0_18px_rgba(59,130,246,0.22)] transition-all duration-300 border-[#11A8FF] hover:bg-white/15">
        <Icon size={22} strokeWidth={2} className="text-white" />
      </span>

      <span className="min-w-[100px] text-[14px] font-bold tracking-wide text-white">
        {label}
      </span>
    </motion.div>
  ))}
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
        About IDEAX 2026
      </p>

      <h2 className="mt-3 max-w-[560px] text-[22px] font-[600] leading-[1.12] text-[#07113F] sm:text-[28px] lg:text-[30px]">
        Shaping the Future with{" "}
        <span className="text-[#2563EB]">Innovation</span> and Intelligence
      </h2>

      <p className="mt-5 max-w-[650px] text-[14px] font-medium leading-[1.75] text-[#1F2A44]/85">
        IDEAX 2026 brings together global researchers, industry leaders,
        practitioners and innovators to exchange ideas, present cutting-edge
        research and explore the transformative power of innovation, decision
        engineering and artificial intelligence.
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

      {/* TRACKS */}
    <section className="relative overflow-hidden bg-white px-5 py-3 sm:px-8 lg:px-16">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.06),transparent_35%)]" />

  <div className="relative mx-auto max-w-[1420px] text-center">
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="text-[12px] font-bold uppercase leading-none text-[#2563EB]"
    >
      Conference Tracks
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="mt-2 text-[24px] font-[600] leading-tight text-[#07113F] sm:text-[29px]"
    >
      Explore Key Themes
    </motion.h2>

    <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {TRACKS.map(({ icon: Icon, color, title, desc }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
          whileHover={{ y: -8, scale: 1.025 }}
          className="group flex min-h-[165px] flex-col items-center justify-start rounded-[10px] border border-[#E3E9F4] bg-white px-3 py-5 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#C7D8FF] hover:shadow-[0_18px_45px_rgba(37,99,235,0.14)]"
        >
          <Icon
            size={39}
            strokeWidth={2}
            className={`mb-4 ${color} transition-transform duration-300 group-hover:scale-110`}
          />

          <h3 className="max-w-[160px] text-[13px] font-[600] leading-[1.18] text-[#07113F]">
            {title}
          </h3>

          <p className="mt-3 max-w-[160px] text-[12px] font-medium leading-[1.45] text-[#1F2A44]/75">
            {desc}
          </p>
        </motion.div>
      ))}
    </div>

    <Link
      to="/tracks"
      className="mx-auto mt-5 inline-flex h-[34px] items-center gap-4 rounded-[6px] border border-[#2563EB] px-8 text-[12px] font-bold text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:text-white hover:shadow-[0_10px_25px_rgba(37,99,235,0.22)]"
    >
      View All Tracks <span className="text-[16px] leading-none">→</span>
    </Link>
  </div>
</section>

      {/* SPEAKERS */}
    <section className="relative overflow-hidden rounded-t-[8px] bg-[#050B35] px-5 py-7 sm:px-8 lg:px-16">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_85%,rgba(168,85,247,0.35),transparent_28%),radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.22),transparent_34%)]" />

  <div className="relative mx-auto max-w-[1420px]">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-[12px] font-bold uppercase leading-none text-[#FFC21A]">
          Keynote Speakers
        </p>

        <h2 className="mt-2 text-[22px] font-[600] leading-tight text-white sm:text-[25px]">
          Global Minds. Intelligent Ideas. Lasting Impact.
        </h2>
      </div>

      <Link
        to="/speakers"
        className="inline-flex h-[32px] items-center gap-3 rounded-[5px] border border-[#FFC21A]/70 px-5 text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFC21A] hover:text-[#07113F]"
      >
        View All Speakers <span className="text-[15px]">→</span>
      </Link>
    </div>

    <div className="relative px-0 md:px-8">
      <button
        type="button"
        onClick={prevSpeaker}
        className="absolute left-0 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white/20 md:flex"
      >
        <ChevronLeft size={17} />
      </button>

      <motion.div
        key={speakerIndex}
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        {visibleSpeakers.map((sp, index) => (
          <motion.div
            key={`${sp.name}-${speakerIndex}`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.025 }}
            className="group rounded-[8px] border border-white/10 bg-white/[0.09] px-4 py-5 text-center backdrop-blur transition-all duration-300 hover:border-[#11A8FF]/70 hover:bg-white/[0.13] hover:shadow-[0_18px_45px_rgba(17,168,255,0.15)]"
          >
            <div className="mx-auto mb-3 h-[86px] w-[86px] overflow-hidden rounded-full border-2 border-[#11A8FF] bg-slate-200 transition-transform duration-300 group-hover:scale-105">
              <img
                src={sp.img}
                alt={sp.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML = `<div class='flex h-full w-full items-center justify-center text-[28px] font-bold text-slate-700'>${sp.name.split(" ")[1]?.[0] || "S"}</div>`;
                }}
              />
            </div>

            <h3 className="text-[13px] font-semibold leading-tight text-white">
              {sp.name}
            </h3>

            <p className="mt-1 text-[11px] font-medium text-white/75">
              {sp.uni}
            </p>

            <p className="mt-2 text-[12px] font-semibold text-white/85">
               {sp.country}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <button
        type="button"
        onClick={nextSpeaker}
        className="absolute right-0 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white/20 md:flex"
      >
        <ChevronRight size={17} />
      </button>

      <div className="mt-5 flex justify-center gap-2 md:hidden">
        <button
          type="button"
          onClick={prevSpeaker}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white"
        >
          <ChevronLeft size={17} />
        </button>

        <button
          type="button"
          onClick={nextSpeaker}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  </div>
</section>

      {/* INFO */}
  <section className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 lg:px-16">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.05),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.05),transparent_30%)]" />

  <div className="relative mx-auto grid max-w-[1420px] grid-cols-1 gap-8 md:grid-cols-[1.15fr_1fr_1.15fr]">
    
    {/* Important Dates */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="md:border-r md:border-[#E5EAF3] md:pr-8"
    >
      <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-wide text-[#2563EB]">
        Important Dates
      </h3>

      <ul className="space-y-4">
        {DATES.map(([label, date], index) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="flex items-center gap-3 text-[13px]"
          >
            <span className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border border-[#2563EB] text-[#2563EB]">
              <Calendar size={11} strokeWidth={2.4} />
            </span>

            <span className="flex-1 font-semibold text-[#07113F]">
              {label}
            </span>

            <span className="whitespace-nowrap font-semibold text-[#1F2A44]">
              {date}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Why Attend */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="md:border-r md:border-[#E5EAF3] md:pr-8"
    >
      <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-wide text-[#2563EB]">
        Why Attend IDEAX 2026?
      </h3>

      <ul className="space-y-4">
        {[
          "Present your research to a global audience",
          "Learn from world-renowned experts",
          "Publish in reputed indexed proceedings",
          "Network with researchers and industry leaders",
          "Explore collaborations and innovations",
        ].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="flex items-start gap-3 text-[13px] font-medium leading-snug text-[#1F2A44]"
          >
            <span className="mt-[1px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white">
              <CheckCircle2 size={12} strokeWidth={3} />
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Publication */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.2 }}
    >
      <h3 className="mb-5 text-[12px] font-semibold uppercase tracking-wide text-[#2563EB]">
        Publication &amp; Indexing
      </h3>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          [FileCheck2, "Scopus Indexed Proceedings"],
          [BadgeCheck, "Scopus Indexed Journals"],
          [ShieldCheck, "DOI Assignment"],
          [FileText, "Open Access Proceedings"],
        ].map(([Icon, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -7, scale: 1.025 }}
            className="group flex min-h-[118px] flex-col items-center justify-center rounded-[10px] bg-white p-4 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(37,99,235,0.15)]"
          >
            <Icon
              size={34}
              strokeWidth={2.2}
              className="mb-3 text-[#2563EB] transition-transform duration-300 group-hover:scale-110"
            />

            <p className="text-[12px] font-semibold leading-tight text-[#07113F]">
              {label}
            </p>
          </motion.div>
        ))}
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
          Be a Part of IDEAX 2026
        </h3>
        <p className="mt-1 text-[11px] font-medium leading-snug text-white/90 sm:text-[12px]">
          Join us to innovate, engineer decisions and create a better tomorrow.
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