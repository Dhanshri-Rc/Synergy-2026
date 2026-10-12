import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Settings,
  Cloud,
  Cpu,
  Users,
  ArrowRight,
  Send,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import tracksBG from "../assets/hero/ideax-2026-conference-tracks-banner.webp";
import trackCtaBg from "../assets/hero/ideax-2026-conference-tracks-call-to-action.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const tracks = [
  {
    no: "01",
    icon: Brain,
    color: "#E91E8F",
    title: "Artificial Intelligence & Machine Learning",
    items: [
      "Deep Learning",
      "Machine Learning Algorithms",
      "Generative AI",
      "Explainable AI",
      "Neural Networks & Architectures",
      "AI Applications",
    ],
  },
  {
    no: "02",
    icon: BarChart3,
    color: "#0B63FF",
    title: "Data Science & Decision Analytics",
    items: [
      "Predictive Analytics",
      "Data Mining",
      "Big Data Engineering",
      "Business Intelligence",
      "Data Visualization",
      "Decision Support Systems",
    ],
  },
  {
    no: "03",
    icon: Settings,
    color: "#0E8F54",
    title: "Optimization & Decision Engineering",
    items: [
      "Operations Research",
      "Optimization Algorithms",
      "Multi-criteria Decision Making",
      "Simulation & Modeling",
      "Heuristic & Metaheuristic Methods",
      "Decision Support Systems",
    ],
  },
  {
    no: "04",
    icon: Cloud,
    color: "#6938D3",
    title: "Emerging Computing Technologies",
    items: [
      "Cloud & Edge Computing",
      "Internet of Things (IoT)",
      "Blockchain Technology",
      "Cybersecurity",
      "Quantum Computing",
      "Digital Twins",
    ],
  },
  {
    no: "05",
    icon: Cpu,
    color: "#FF7417",
    title: "Intelligent Systems Applications",
    items: [
      "Healthcare AI",
      "Smart Cities",
      "Finance & FinTech",
      "Smart Manufacturing",
      "Industry 4.0 / 5.0",
      "Agriculture Intelligence",
    ],
  },
  {
    no: "06",
    icon: Users,
    color: "#0988A8",
    title: "Socio-Technical & Human-Centric AI",
    items: [
      "Human-AI Interaction",
      "Ethics & Responsible AI",
      "Policy & Governance",
      "Education & Training",
      "Sustainable Development",
      "Social Impact Computing",
    ],
  },
];

export default function TracksPage() {
  return (
    <main className="min-h-screen bg-white text-[#07113F] overflow-hidden">
      {/* Hero */}
      <section
        className="
    relative min-h-[360px] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[500px] lg:bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${tracksBG})` }}
      >
        <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-8 lg:px-16 pt-6 sm:pt-8 lg:pt-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-[520px]"
          >
            <div className="flex items-center gap-3 text-white/80 text-[13px] font-semibold">
              <Link to="/" className="hover:text-[#12A8FF]">
                Home
              </Link>
              <span>›</span>
              <span className="text-[#12A8FF]">Tracks</span>
            </div>

            <h1 className="mt-8 font-[600] leading-none">
              <span className="block text-white text-[36px] sm:text-[38px] lg:text-[42px]">
                Conference
              </span>
              <span className="block text-[36px] sm:text-[48px] lg:text-[52px] font-semibold bg-gradient-to-r from-[#0B63FF] via-[#13B5FF] to-[#00D4FF] bg-clip-text text-transparent">
                Tracks
              </span>
            </h1>

             <div className="mt-4 flex h-[4px] w-[70px] overflow-hidden rounded-full">
        <span className="w-[55%] bg-[#13B5FF]" />
        <span className="w-[45%] bg-[#FFC21A]" />
      </div>

            <p className="mt-7 max-w-[430px] text-white text-[14px] sm:text-[15px] leading-8">
              IDEAX 2026 invites high-quality research papers across a wide
              range of cutting-edge topics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracks Overview */}
      <section className="relative z-10 bg-white px-4 sm:px-8 lg:px-16 -mt-14 sm:-mt-16 lg:-mt-6">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center pt-10"
          >
            <p className="uppercase tracking-[3px] text-[#1247E5] text-[14px] font-[600]">
              Tracks Overview
            </p>

            <div className="mx-auto mt-3 w-[55px] h-[3px] bg-gradient-to-r from-[#1247E5] to-[#F6A200]" />

            <h2 className="mt-5 text-[16px] sm:text-[18px] lg:text-[24px] font-[700] text-[#08184A] leading-tight">
              Explore. Innovate. Impact.
            </h2>

            <p className="mt-4 max-w-[600px] mx-auto text-[#4B5579] text-[14px] sm:text-[14px] leading-7">
              IDEAX 2026 covers a wide spectrum of themes in Innovation,
              Decision Engineering and Artificial Intelligence to foster
              collaboration and drive meaningful impact.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
          >
            {tracks.map((track) => {
              const Icon = track.icon;

              return (
                <motion.div
                  key={track.no}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.015 }}
                  className="group bg-white rounded-[14px] p-7 border border-[#E2E8F5] shadow-[0_10px_30px_rgba(0,20,80,0.08)] hover:shadow-[0_20px_45px_rgba(18,71,229,0.15)] transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className="w-[58px] h-[58px] shrink-0 rounded-full flex items-center justify-center shadow-[0_15px_28px_rgba(0,0,0,0.18)] group-hover:scale-110 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${track.color}, ${track.color}cc)`,
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3
                        className="text-[24px] font-[600] leading-none"
                        style={{ color: track.color }}
                      >
                        {track.no}
                      </h3>

                      <h4 className="mt-2 text-[14px] sm:text-[16px] font-semibold leading-snug text-[#07113F]">
                        {track.title}
                      </h4>

                      <div
                        className="mt-4 w-[34px] h-[2px]"
                        style={{ backgroundColor: track.color }}
                      />
                    </div>
                  </div>

                  <ul className="mt-7 space-y-3">
                    {track.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] text-[#1F2A44] font-medium"
                      >
                        <span
                          className="mt-[8px] w-[5px] h-[5px] rounded-full shrink-0"
                          style={{ backgroundColor: track.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* <button
                    className="mt-8 flex items-center gap-3 text-[13px] font-semibold group-hover:gap-5 transition-all duration-300"
                    style={{ color: track.color }}
                  >
                    View Track Details <ArrowRight className="w-4 h-4" />
                  </button> */}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 mb-8 rounded-[14px] overflow-hidden bg-cover bg-center shadow-[0_10px_30px_rgba(0,20,80,0.08)]"
            style={{ backgroundImage: `url(${trackCtaBg})` }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-5 sm:px-8 lg:px-10 py-4 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -8 }}
                  className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#0B63FF] to-[#123FD8] flex items-center justify-center shadow-[0_15px_30px_rgba(11,99,255,0.35)]"
                >
                  <Send className="w-7 h-7 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-[18px] sm:text-[22px] font-[600] text-[#08184A]">
                    Don’t see your topic?
                  </h3>

                  <p className="mt-2 max-w-[620px] text-[#4B5579] text-[14px] sm:text-[14px] leading-6">
                    We welcome interdisciplinary submissions that drive
                    innovation and create impact across domains.
                  </p>
                </div>
              </div>
<Link to="/contact">
              <button className="shrink-0 bg-[#123FD8] text-white px-4 py-3 rounded-lg text-[13px] font-medium flex items-center gap-3 hover:scale-105 hover:bg-[#0B2FB3] transition-all duration-300 shadow-[0_12px_30px_rgba(18,63,216,0.3)]">
                SUBMIT YOUR PAPER <ArrowRight className="w-5 h-5" />
              </button></Link>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
