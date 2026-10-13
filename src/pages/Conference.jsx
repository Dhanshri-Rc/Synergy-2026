
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Scale,
  Settings,
  Lightbulb,
  Users,
  Leaf,
  Globe2,
  Send,
  Network,
  ChevronRight,
} from "lucide-react";

// Replace these with your SYNERGY 2026 image files.
import tracksBG from "../assets/img/conference.png";
import trackCtaBg from "../assets/hero/ideax-2026-conference-tracks-call-to-action.webp";

// --------------------------------------------------
// FRAMER MOTION VARIANTS
// --------------------------------------------------

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const hoverTransition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
};

// --------------------------------------------------
// THREE MAIN CONFERENCE STREAMS
// --------------------------------------------------

const streams = [
  {
    no: "01",
    icon: BarChart3,
    color: "#1655F5",
    gradient: "linear-gradient(135deg, #2C7BFF, #0635C8)",
    title: "Management, Business, Economics & Sustainability",
    items: [
      "Global Business Trends and Innovation",
      "Management Strategies and Leadership",
      "Economic Development and Policy",
      "Finance, Investment and Financial Markets",
      "Tourism, Hospitality and Creative Industries",
      "Sustainable Business and Inclusive Growth",
    ],
  },
  {
    no: "02",
    icon: Scale,
    color: "#8135E8",
    gradient: "linear-gradient(135deg, #A45AFF, #6721D2)",
    title:
      "Law, Criminal Justice, Humanities, Social Science, Arts & Education",
    items: [
      "Law and Legal Studies",
      "Criminal Justice and Justice Administration",
      "Humanities, Culture and the Arts",
      "Language, Literature and Communication",
      "Political Science and Public Administration",
      "Psychology, Sociology and Education",
    ],
  },
  {
    no: "03",
    icon: Settings,
    color: "#079C98",
    gradient: "linear-gradient(135deg, #17B8B0, #087D80)",
    title:
      "General Science, Food Technology, IT, Computing & Emerging Engineering",
    items: [
      "Agriculture and Food Science & Technology",
      "Applied Science and Natural Sciences",
      "Computer Science and Information Systems",
      "Communication Technology and Networks",
      "Emerging Engineering and Smart Technologies",
      "Environmental Science and Sustainability",
    ],
  },
];

// --------------------------------------------------
// KEY TOPICS
// --------------------------------------------------

const keyTopics = [
  {
    icon: Lightbulb,
    color: "#FFAA0A",
    gradient: "linear-gradient(135deg, #FFBB21, #FF9800)",
    title: "Innovations in Management",
    description:
      "New ideas and strategies for resilient and sustainable business, economies and industries.",
  },
  {
    icon: Users,
    color: "#8135E8",
    gradient: "linear-gradient(135deg, #A754FF, #7024D1)",
    title: "Humanities, Law and Social Development",
    description:
      "People, society and inclusive development through humanities, law, social sciences, arts and education.",
  },
  {
    icon: Leaf,
    color: "#4CAF50",
    gradient: "linear-gradient(135deg, #6BD46E, #329E40)",
    title: "Science and Technology Solutions",
    description:
      "Advancing science, computing and emerging engineering for real-world impact.",
  },
  {
    icon: Globe2,
    color: "#1655F5",
    gradient: "linear-gradient(135deg, #2E81FF, #0645D8)",
    title: "Interdisciplinary Global Collaboration",
    description:
      "Cross-disciplinary research and international partnerships for a more inclusive and sustainable future.",
  },
];

// --------------------------------------------------
// SECTION HEADING
// --------------------------------------------------

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center"
    >
      <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[3px] text-[#1655F5]">
        {eyebrow}
      </p>

      <div className="mx-auto mt-2 flex h-[3px] w-[55px] overflow-hidden rounded-full">
        <span className="w-[55%] bg-[#1655F5]" />
        <span className="w-[45%] bg-[#FFB51D]" />
      </div>

      <h2 className="mt-4 text-[24px] sm:text-[28px] lg:text-[32px] font-[600] leading-tight text-[#08184A]">
        {title}
      </h2>

      <p className="mx-auto mt-3 max-w-[780px] text-[13px] sm:text-[14px] leading-6 text-[#36466D]">
        {description}
      </p>
    </motion.div>
  );
}

// --------------------------------------------------
// MAIN CONFERENCE PAGE
// --------------------------------------------------

export default function TracksPage() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {
        hidden: { opacity: 1 },
        show: { opacity: 1 },
      }
    : fadeUp;

  const hoverCard = reduceMotion
    ? undefined
    : {
        y: -9,
        scale: 1.015,
      };

  return (
   <main className="min-h-screen w-full bg-white font-sans text-[#0a2b4f]">

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section
        className="relative min-h-[400px] bg-[#041631] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[440px] lg:bg-[length:100%_100%]"
        style={{
          backgroundImage: `
           url("${tracksBG}")`,
        }}
      >
        <div className="relative z-10 mx-auto max-w-[1420px] px-4 pt-6 sm:px-8 sm:pt-8 lg:px-16 lg:pt-16">

          <motion.div
            initial="hidden"
            animate="show"
            variants={reduceMotion ? reveal : fadeLeft}
            className="max-w-[520px]"
          >
            {/* Breadcrumb */}

            <div className="flex items-center gap-3 text-[13px] font-medium text-white/90">
              <Link
                to="/"
                className="transition-colors duration-300 hover:text-[#FFB51D]"
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <span>Conference</span>
            </div>

            {/* Hero Title */}

            <h1 className="mt-6 font-[600] leading-[1.05]">
              <span className="text-[36px] text-white font-[600] leading-[1.1] sm:text-[48px] lg:text-[50px]">
                Conference
              </span>

              <span className="block text-[36px] sm:text-[48px] lg:text-[52px] text-[#FFB51D]">
                Streams
              </span>
            </h1>

            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-2 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-white"
            >
              Explore. Collaborate. Innovate.
            </motion.h2>

            {/* Accent Line */}

            <div className="mt-2 flex h-[4px] w-[75px] overflow-hidden rounded-full">
              <span className="w-[55%] bg-[#03BFFF]" />
              <span className="w-[45%] bg-[#FFB51D]" />
            </div>

            {/* Hero Description */}

            <p className="mt-5 max-w-[430px] text-[13px] sm:text-[14px] lg:text-[15px] leading-6 sm:leading-7 text-white/95">
              SYNERGY 2026 covers diverse interdisciplinary areas and invites
              high-quality research contributions to advance knowledge, foster
              collaboration, and create a sustainable and digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          CONFERENCE STREAMS SECTION
      ======================================== */}

      <section className="relative z-10 -mt-4 rounded-t-[18px] bg-white px-4 pb-6 pt-6 sm:px-8 sm:pt-8 lg:px-16">

        <div className="mx-auto max-w-[1240px]">

          <SectionHeading
            eyebrow="Conference Streams"
            title="Three Main Streams"
            description="SYNERGY 2026 brings together a wide range of disciplines to address global challenges and create opportunities for a sustainable and digital future."
          />

          {/* Stream Cards */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {streams.map((stream) => {
              const Icon = stream.icon;

              return (
                <motion.article
                  key={stream.no}
                  variants={reveal}
                  whileHover={hoverCard}
                  transition={hoverTransition}
                  className="group flex h-full flex-col rounded-[14px] border border-[#E2E8F5] bg-white p-5 sm:p-6 shadow-[0_8px_25px_rgba(0,30,80,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,40,120,0.14)]"
                >
                  {/* Card Heading */}

                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { rotate: 6, scale: 1.08 }
                      }
                      transition={hoverTransition}
                      className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full shadow-[0_10px_20px_rgba(0,30,80,0.16)]"
                      style={{ background: stream.gradient }}
                    >
                      <Icon
                        size={34}
                        strokeWidth={1.8}
                        className="text-white"
                      />
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-[24px] font-[600] leading-none"
                        style={{ color: stream.color }}
                      >
                        {stream.no}
                      </h3>

                      <h4 className="mt-2 text-[14px] sm:text-[15px] font-semibold leading-snug text-[#07113F]">
                        {stream.title}
                      </h4>

                      <div
                        className="mt-3 h-[2px] w-[30px]"
                        style={{
                          backgroundColor: stream.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* Topics List */}

                  <ul className="mt-6 flex-1 space-y-3">
                    {stream.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[12px] sm:text-[13px] font-medium leading-5 text-[#253452]"
                      >
                        <span
                          className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full"
                          style={{
                            backgroundColor: stream.color,
                          }}
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================
          KEY TOPICS SECTION
      ======================================== */}

      <section className="bg-white px-4 pb-7 pt-2 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-[1240px]">

          <SectionHeading
            eyebrow="Topics of Interest"
            title="Key Topics"
            description="We welcome research and discussions on, but not limited to, the following topics:"
          />

          {/* Topic Cards */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {keyTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <motion.article
                  key={topic.title}
                  variants={reveal}
                  whileHover={hoverCard}
                  transition={hoverTransition}
                  className="group flex min-h-[230px] flex-col items-center rounded-xl border border-[#E5EBF6] bg-white px-5 py-5 text-center shadow-[0_6px_22px_rgba(0,30,80,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_35px_rgba(0,40,120,0.13)]"
                >
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { rotate: 8, scale: 1.1 }
                    }
                    transition={hoverTransition}
                    className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full shadow-[0_8px_20px_rgba(0,30,80,0.15)]"
                    style={{
                      background: topic.gradient,
                    }}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </motion.div>

                  <h3 className="max-w-[220px] text-[14px] font-semibold leading-5 text-[#07113F]">
                    {topic.title}
                  </h3>

                  <p className="mt-4 max-w-[230px] text-[12px] sm:text-[13px] leading-5 text-[#334466]">
                    {topic.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================
          SUBMISSION CTA SECTION
      ======================================== */}

      <section className="bg-white px-4 pb-5 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-[1240px]">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            whileHover={
              reduceMotion ? undefined : { y: -3 }
            }
            transition={hoverTransition}
            className="relative overflow-hidden rounded-[14px] border border-[#CBDCFB] bg-[#E8F0FF] shadow-[0_8px_25px_rgba(0,40,120,0.06)]"
            style={{
              backgroundImage: `linear-gradient(
                90deg,
                rgba(232,240,255,0.88),
                rgba(232,240,255,0.52)
              ), url("${trackCtaBg}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-between gap-5 px-5 py-5 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">

              <div className="flex flex-col items-center gap-5 sm:flex-row">

                {/* Send Icon */}

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.1,
                          rotate: -8,
                        }
                  }
                  transition={hoverTransition}
                  className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#236EFF] to-[#0736B8] shadow-[0_10px_25px_rgba(11,99,255,0.25)]"
                >
                  <Send
                    size={30}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                </motion.div>

                <div>
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-[#08184A]">
                    Don’t see your exact topic?
                  </h3>

                  <p className="mt-2 max-w-[620px] text-[13px] sm:text-[14px] leading-6 text-[#35466C]">
                    We welcome interdisciplinary submissions that create
                    impact across domains.
                  </p>
                </div>
              </div>

              {/* CTA Button */}

              <Link
                to="/submission"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#082D9D] px-6 py-4 text-[13px] font-semibold text-white shadow-[0_8px_22px_rgba(8,45,157,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1655F5] hover:shadow-[0_14px_30px_rgba(8,45,157,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1655F5]"
              >
                SUBMIT YOUR PAPER

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
