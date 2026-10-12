import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Eye,
  Target,
  Network,
  Handshake,
  Globe2,
  BarChart3,
  Cpu,
  Settings,
  Cloud,
  Cross,
  Users,
  CalendarDays,
  Trophy,
  BookOpen,
  FileText,
  Award,
  ArrowRight,
  Presentation,
  FileCheck,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero/ideax-2026-about-conference-banner.webp";
import ctaBg from "../assets/hero/ideax-2026-about-call-to-action-banner.webp";
import whyBg from "../assets/hero/ideax-2026-about-conference-illustration.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const tracks = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    color: "#0B63FF",
    items: ["Deep Learning", "Generative AI", "Explainable AI", "Neural Computing"],
  },
  {
    icon: BarChart3,
    title: "Data Science & Decision Analytics",
    color: "#13BFD6",
    items: ["Predictive Analytics", "Data Mining", "Big Data Engineering", "Business Intelligence"],
  },
  {
    icon: Settings,
    title: "Optimization & Decision Engineering",
    color: "#7146FF",
    items: ["Operations Research", "Decision Support Systems", "Multi-criteria Decision Making", "Simulation & Modeling"],
  },
  {
    icon: Cloud,
    title: "Emerging Computing Technologies",
    color: "#FF9900",
    items: ["Cloud & Edge Computing", "Internet of Things (IoT)", "Blockchain", "Cybersecurity"],
  },
  {
    icon: Cross,
    title: "Intelligent Systems Applications",
    color: "#28B64B",
    items: ["Healthcare AI", "Finance & FinTech", "Smart Cities", "Industry 4.0/5.0"],
  },
  {
    icon: Users,
    title: "Socio-Technical & Human-Centric AI",
    color: "#236CFF",
    items: ["Human-AI Interaction", "Ethics & Responsible AI", "Policy & Governance", "Education & Training"],
  },
];

const focusAreas = [
  { icon: Brain, title: "Innovation", desc: "Encouraging novel ideas and creative solutions", color: "#0B63FF" },
  { icon: Network, title: "Decision Engineering", desc: "Modeling and optimizing decision processes", color: "#12AFC2" },
  { icon: Cpu, title: "Artificial Intelligence", desc: "Intelligent algorithms and adaptive systems", color: "#6F42FF" },
  { icon: Handshake, title: "Collaboration", desc: "Connecting academia, industry and institutions", color: "#FF9900" },
  { icon: Globe2, title: "Sustainability", desc: "Technology-enabled sustainable and ethical solutions", color: "#27B43E" },
];

const whyItems = [
  { text: "Present your research to a global audience", icon: Presentation, bg: "bg-[#0B63FF]" },
  { text: "Learn from world renowned experts", icon: BookOpen, bg: "bg-[#8B5CF6]" },
  { text: "Network with global research community", icon: Users, bg: "bg-[#14B8A6]" },
  { text: "Explore collaborations and partnerships", icon: Handshake, bg: "bg-[#F43F5E]" },
  { text: "Publish in reputed indexed proceedings", icon: FileCheck, bg: "bg-[#F59E0B]" },
  { text: "Drive innovation for societal impact", icon: Lightbulb, bg: "bg-[#22C55E]" },
];

const dates = [
  ["Paper Submission Deadline", "25 August, 2026"],
  ["Notification of Acceptance", "10 September, 2026"],
  ["Camera-Ready Submission", "5 October, 2026"],
  ["Early Bird Registration", "18 October, 2026"],
  ["Conference Dates", "10 – 12 December, 2026"],
];

export default function AboutIdeax2026() {
  return (
    <div className="min-h-screen bg-white text-[#07113F] font-sans overflow-hidden">
      {/* Hero */}
      <section
        className="relative min-h-[450px] bg-cover bg-center bg-no-repeat sm:min-h-[450px] lg:min-h-[570px] lg:bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-white/45 sm:bg-white/25 lg:bg-transparent" />

        <div className="relative max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pt-10 sm:pt-14 lg:pt-20">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-[520px]">
            <h2 className="font-semibold text-[#06134A] leading-[1.1]">
              <span className="block text-[26px] sm:text-[38px] lg:text-[42px]">About the</span>
              <span className="block text-[36px] sm:text-[48px] lg:text-[50px] font-[600] bg-gradient-to-r from-[#0B63FF] via-[#13B5FF] to-[#00D4FF] bg-clip-text text-transparent">
                IDEAX 2026
              </span>
            </h2>

            <h3 className="mt-5 text-[15px] sm:text-[16px] lg:text-[18px] font-semibold leading-snug">
              International Conference on{" "}
              <span className="text-[#0B63FF]">Innovation, Decision Engineering</span>{" "}
              and <span className="text-[#0B63FF]">Artificial Intelligence</span>
            </h3>

            <div className="mt-4 flex h-[4px] w-[70px] overflow-hidden rounded-full">
        <span className="w-[55%] bg-[#13B5FF]" />
        <span className="w-[45%] bg-[#FFC21A]" />
      </div>

            <p className="mt-6 sm:mt-6 max-w-[360px] text-[13px] sm:text-[14px] lg:text-[15px] leading-6 font-semibold text-[#07113F]/90">
              IDEAX 2026 is a premier international platform that brings together researchers,
              academicians, industry leaders and innovators to explore cutting-edge advancements in
              computing, intelligent systems and decision-making methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Mission Vision Focus */}
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[250px_250px_1fr] gap-4 -mt-12">
          {[
            {
              title: "OUR MISSION",
              icon: Target,
              desc: "To advance innovation and intelligent decision-making by fostering interdisciplinary research, collaboration and knowledge exchange for global impact.",
            },
            {
              title: "OUR VISION",
              icon: Eye,
              desc: "To become a leading global conference series that inspires innovation and shapes the future of intelligent decision systems.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 sm:p-5 text-center shadow-[0_8px_25px_rgba(0,40,120,0.12)] transition-all duration-300"
            >
              <h4 className="font-semibold text-[#07113F]">{card.title}</h4>
              <card.icon className="mx-auto my-4 sm:my-4 w-12 h-12 text-[#0B63FF]" />
              <p className="text-[13px] sm:text-[14px] leading-6 sm:leading-6 font-semibold text-[#07113F]/80">
                {card.desc}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="md:col-span-2 xl:col-span-1 bg-white rounded-2xl p-5 sm:p-5 shadow-[0_8px_25px_rgba(0,40,120,0.14)]"
          >
            <h4 className="text-center font-semibold text-[#0637C8] mb-5">CORE FOCUS AREAS</h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {focusAreas.map((f, index) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="text-center group"
                >
                  <div
                    className="mx-auto w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center border-2 rounded-[22px] sm:rounded-[28px] rotate-45 group-hover:scale-110 transition"
                    style={{ borderColor: f.color }}
                  >
                    <f.icon className="-rotate-45 w-8 h-8 sm:w-10 sm:h-10" style={{ color: f.color }} />
                  </div>

                  <h5 className="mt-5 sm:mt-6 font-semibold text-[13px] sm:text-[14px]" style={{ color: f.color }}>
                    {f.title}
                  </h5>

                  <p className="mt-2 text-[12px] leading-5 font-medium">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Tracks */}
        <section className="py-10 sm:py-12">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0637C8]"
          >
            CONFERENCE TRACKS
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-center mt-4 font-semibold text-[13px] sm:text-[14px] max-w-[850px] mx-auto"
          >
            IDEAX 2026 invites high-quality research papers across a wide range of topics, including but not limited to:
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-2 mt-8"
          >
            {tracks.map((t, i) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative text-center bg-white rounded-2xl p-5 min-h-[300px] xl:min-h-[300px] shadow-[0_8px_24px_rgba(0,40,120,0.12)] hover:shadow-[0_18px_35px_rgba(0,40,120,0.18)] transition duration-500"
              >
                <div className="flex justify-center mb-5">
                  <t.icon className="w-12 h-12 transition-transform duration-500 group-hover:scale-110" style={{ color: t.color }} />
                </div>

                <h4 className="font-semibold text-[13px] leading-5">{t.title}</h4>

                <ul className="mt-5 text-left space-y-2 text-[13px] font-semibold text-[#07113F]/80">
                  {t.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>

                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 font-black"
                  style={{ borderColor: t.color, color: t.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why + Stats */}
        <section className="grid grid-cols-1 xl:grid-cols-[480px_1fr] gap-6 py-5">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-6 sm:p-6 shadow-[0_8px_24px_rgba(0,40,120,0.12)]"
          >
            <h3 className="font-semibold mb-4">WHY PARTICIPATE?</h3>

            <div className="space-y-4">
              {whyItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-full ${item.bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <p className="text-[13px] sm:text-[14px] font-semibold text-[#07113F] leading-4">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl p-5 sm:p-8 lg:p-8 xl:p-8 bg-cover bg-center text-white shadow-xl overflow-hidden"
            style={{ backgroundImage: `url(${whyBg})` }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 h-full items-center text-center">
              {[
                ["500+", "Participants", Users],
                ["150+", "Research Papers", FileText],
                ["30+", "Countries", Globe2],
                ["50+", "Keynote Speakers", Award],
                ["20+", "University Participants", Network],
              ].map(([num, label, Icon], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative px-4 py-5 rounded-xl transition-all duration-500  hover:backdrop-blur-sm hover:shadow-[0_10px_30px_rgba(0,184,255,0.15)]"
                >
                  {index !== 4 && (
                    <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[90px] w-px bg-white/20" />
                  )}

                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="rounded-full p-3 transition-all duration-500 group-hover:bg-white/10 group-hover:shadow-[0_0_25px_rgba(0,184,255,0.45)]">
                      <Icon className="w-11 h-11 sm:w-11 sm:h-11 text-[#00B8FF] transition-all duration-500 " />
                    </div>
                  </div>

                  <h4 className="text-[24px] lg:text-[24px] font-semibold transition-all duration-500 ">
                    {num}
                  </h4>

                  <p className="mt-2 text-[13px] lg:text-[14px] text-white/90 transition-all duration-500 ">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Attend + Dates */}
        <section className="grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-8 py-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0637C8] mb-8"
            >
              WHO SHOULD ATTEND?
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {["Researchers & Academicians", "Industry Professionals", "Students & Scholars", "Policy Makers & Government", "Startups & Innovators"].map((x, i) => (
                <motion.div
                  key={x}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="text-center bg-white rounded-2xl p-4 shadow-md transition"
                >
                  <div className="w-20 h-20 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#EAF3FF] flex items-center justify-center">
                    {i === 0 ? <BookOpen /> : i === 1 ? <Users /> : i === 2 ? <Award /> : i === 3 ? <Globe2 /> : <Trophy />}
                  </div>

                  <p className="mt-4 text-[13px] font-semibold">{x}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,40,120,0.12)]"
          >
            <h3 className="text-center text-[20px] sm:text-[18px] font-semibold text-[#0637C8] mb-4">
              IMPORTANT DATES
            </h3>

            <div className="space-y-3">
              {dates.map(([name, date], index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 font-semibold text-[13px]"
                >
                  <div className="flex items-center gap-3">
                    <CalendarDays className="shrink-0 w-5 h-5 text-[#0B63FF]" />
                    <span>{name}</span>
                  </div>

                  <span className="text-[#0637C8] sm:text-right">{date}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Publication */}
        <section className="py-6">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0637C8] mb-7"
          >
            PUBLICATION & INDEXING
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 bg-white rounded-2xl p-5 sm:p-7 shadow-[0_8px_24px_rgba(0,40,120,0.12)]">
            {[
              ["Peer Reviewed", "All accepted papers are peer reviewed", FileText],
              ["Conference Proceedings", "Published with ISBN and DOI", BookOpen],
              ["Indexed & Abstracted", "Scopus, Google Scholar and other databases", Globe2],
              ["Selected Papers", "Opportunity for extended journal publication", Award],
            ].map(([title, desc, Icon], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="flex items-center gap-4"
              >
                <Icon className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 text-[#0B63FF]" />
                <div>
                  <h4 className="font-semibold text-[14px]">{title}</h4>
                  <p className="text-[13px] font-medium mt-1">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-2xl overflow-hidden bg-cover bg-center text-white p-5 sm:p-6 lg:p-6 shadow-xl"
          style={{ backgroundImage: `url(${ctaBg})` }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-5 lg:gap-6">
              <motion.div whileHover={{ scale: 1.12, rotate: -8 }}>
                <Trophy className="shrink-0 w-16 h-16  text-[#FFB000]" />
              </motion.div>

              <div className="max-w-[560px]">
                <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
                  Be Part of IDEAX 2026
                </h2>

                <p className="mt-1 text-[13px] sm:text-[14px] text-white/90 leading-6">
                  Join us in shaping the future of intelligent systems and data-driven decisions that create a better and smarter world.
                </p>
              </div>
            </div>
<Link to="/registration">
            <button className="shrink-0 bg-[#FFB000] text-[13px] text-[#07113F] px-5 py-3 rounded-lg font-semibold flex items-center gap-3 hover:scale-105 transition">
              REGISTER NOW <ArrowRight className="w-4 h-4" />
            </button></Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}