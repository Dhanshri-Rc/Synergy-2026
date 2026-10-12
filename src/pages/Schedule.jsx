import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Monitor,
  Clock3,
  Users,
  Send,
  Mic,
  Network,
  BarChart3,
  Bell,
  Download,
  ChevronDown,
  ArrowRight,
  UserCheck,
  Flag,
  UtensilsCrossed,
  Presentation,
  PlayCircle,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";


import scheduleHero from "../assets/hero/ideax-2026-contact-page-banner.webp";
import scheduleCta from "../assets/hero/ideax-2026-conference-tracks-call-to-action.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const scheduleItemsDay1 = [
  {
    time: "09:00 AM",
    icon: UserCheck,
    title: "Registration",
    desc: "Delegate Registration & Badge Collection",
    tag: "Registration",
    color: "#14B8A6", // Teal
  },
  {
    time: "10:00 AM",
    icon: Flag,
    title: "Inaugural Ceremony",
    desc: "Welcome Address, Lighting of Lamp & Conference Opening",
    tag: "Opening",
    color: "#2563EB", // Blue
  },
  {
    time: "11:00 AM",
    icon: Mic,
    title: "Keynote Speech",
    desc: "Emerging Trends in Artificial Intelligence and Decision Engineering",
  
    tag: "Keynote",
    color: "#7C3AED", // Purple
  },
  {
    time: "01:00 PM",
    icon: UtensilsCrossed,
    title: "Lunch Break",
    desc: "Networking Lunch for Delegates and Speakers",
    tag: "Break",
    color: "#F59E0B", // Amber
  },
  {
    time: "02:00 PM",
    icon: Presentation,
    title: "Technical Sessions",
    desc: "Parallel Paper Presentation Sessions Across Conference Tracks",
    tag: "Technical",
    color: "#10B981", // Green
  },
];

const scheduleItemsDay2 = [
  {
    time: "09:00 AM",
    icon: UserCheck,
    title: "Registration",
    desc: "Delegate Registration & Attendance Confirmation",
    tag: "Registration",
    color: "#14B8A6", // Teal
  },
  {
    time: "10:00 AM",
    icon: PlayCircle,
    title: "Technical Sessions",
    desc: "Parallel Paper Presentation Sessions Across Conference Tracks",
    tag: "Session",
    color: "#2563EB", // Blue
  },
  {
    time: "01:00 PM",
    icon: UtensilsCrossed,
    title: "Lunch Break",
    desc: "Networking Lunch for Delegates, Speakers and Guests",
    tag: "Break",
    color: "#F59E0B", // Orange
  },
  {
    time: "02:00 PM",
    icon: Presentation,
    title: "Technical Sessions Continue",
    desc: "Research Paper Presentations, Discussions and Q&A Sessions",
    tag: "Presentation",
    color: "#10B981", // Green
  },
  {
    time: "04:00 PM",
    icon: Award,
    title: "Valedictory Ceremony",
    desc: "Closing Remarks, Certificate Distribution and Vote of Thanks",
    tag: "Closing",
    color: "#DC2626", // Red
  },
];

const scheduleByDay = {
  day1: {
    label: "Day 1",
    
    items: scheduleItemsDay1,
  },
  day2: {
    label: "Day 2",
  
    items: scheduleItemsDay2,
  },
};

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState("day1");
  const activeSchedule = scheduleByDay[activeDay];
  return (
    <main className="min-h-screen bg-white text-[#07113F] overflow-hidden">
      {/* Hero */}
      <section
        className="
   relative min-h-[360px] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[500px] lg:bg-[length:100%_100%]
  "
        style={{ backgroundImage: `url(${scheduleHero})` }}
      >
        <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-8 lg:px-16 pt-8 sm:pt-12 lg:pt-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-[480px]"
          >
            <div className=" flex items-center gap-2 text-[13px] font-semibold text-black/80">
              <Link to="/" className="hover:text-[#0B63FF]">
                Home
              </Link>
              <span>›</span>
              <span className="text-[#0B63FF]">Schedule</span>
            </div>

            <h1 className="mt-6 font-[600] leading-[1.1]">
              <span className="block text-[#07113F] text-[36px] sm:text-[38px] lg:text-[42px]">
                Conference
              </span>
              <span className="block text-[36px] sm:text-[48px] lg:text-[50px] font-[600] bg-gradient-to-r from-[#0B63FF] via-[#13B5FF] to-[#00D4FF] bg-clip-text text-transparent">
                Schedule
              </span>
            </h1>

            <div className="mt-4 flex h-[4px] w-[70px] overflow-hidden rounded-full">
              <span className="w-[55%] bg-[#13B5FF]" />
              <span className="w-[45%] bg-[#FFC21A]" />
            </div>

            <p className="mt-7 max-w-[300px] text-[#07113F] text-[14px] sm:text-[15px] leading-6 lg:leading-8">
              Explore the full program of IDEAX 2026. Plan your experience and
              make the most of every session.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-8 lg:px-16 pb-10 -mt-4">
        <div className="max-w-[1240px] mx-auto">
          {/* Info Strip */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-1 bg-white rounded-[12px] px-6 py-5 shadow-[0_8px_28px_rgba(0,30,100,0.12)] border border-[#E5ECF7]"
          >
            {[
              [CalendarDays, "10 – 12", "December, 2026", "#0B63FF"],
              [MapPin, "Singapore,", "Asia", "#FF9900"],
              [Monitor, "Hybrid", "(In-person & Online)", "#14B8A6"],
              [Clock3, "3 Days", "of Inspiring Sessions", "#7C3AED"],
            ].map(([Icon, title, desc, color], i) => (
              <motion.div
                key={title}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`flex items-center gap-4 ${i !== 3 ? "lg:border-r lg:border-[#D8E2F1]" : ""}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#0637C8]">
                    {title}
                  </h4>
                  <p className="text-[12px] font-medium">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center pt-8"
          >
            <div className="flex flex-col items-center">
              <p className="uppercase text-[#0B63FF] text-[14px] font-[600]">
                Conference Program
              </p>

              <div className="mt-4 flex h-[3px] w-[60px] overflow-hidden rounded-full">
                <span className="w-[55%] bg-[#13B5FF]" />
                <span className="w-[45%] bg-[#FFC21A]" />
              </div>
            </div>
            <h2 className="mt-4 text-[20px] sm:text-[24px] font-[600] text-[#07113F]">
              Two Days of Insight, Innovation & Impact
            </h2>
            {/* <p className="mt-3 max-w-[480px] mx-auto text-[14px] text-[#4B5579] leading-6">
              A carefully curated program featuring keynote speeches, technical
              sessions, panel discussions, workshops and networking
              opportunities.
            </p> */}
          </motion.div>

          {/* Filters */}
       {/* Filters */}
<div className="mt-8 flex justify-center">
  <div className="inline-flex w-full max-w-[420px] rounded-full bg-[#EEF4FF] p-1 border border-[#D8E2F1]">
    {[
      { key: "day1", title: "Day 1" },
      { key: "day2", title: "Day 2" },
    ].map((day) => (
      <motion.button
        key={day.key}
        whileTap={{ scale: 0.96 }}
        onClick={() => setActiveDay(day.key)}
        className={`w-1/2 rounded-full px-5 py-3 text-center text-[14px] font-semibold transition-all duration-300 ${
          activeDay === day.key
            ? "bg-[#0B63FF] text-white shadow-[0_8px_20px_rgba(11,99,255,0.28)]"
            : "text-[#07113F] hover:text-[#0B63FF]"
        }`}
      >
        <CalendarDays className="inline w-4 h-4 mr-2" />
        {day.title}
      </motion.button>
    ))}
  </div>
</div>

{/* Schedule Table */}
<motion.div
  key={activeDay}
  variants={stagger}
  initial="hidden"
  animate="show"
  className="mt-7 rounded-[16px] overflow-hidden border border-[#E1E9F6] bg-white shadow-[0_12px_35px_rgba(0,30,100,0.08)]"
>
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-[#F4F8FF] to-white px-5 py-4 text-[13px] font-semibold text-[#0637C8]">
    <span className="flex items-center gap-2">
      <CalendarDays className="w-4 h-4" />
      {activeSchedule.label} <span>•</span> {activeSchedule.date}
    </span>

    <span className="text-[#4B5579] text-[12px] font-medium">
      All times are in SGT (GMT+8)
    </span>
  </div>

  <div className="bg-white">
    {activeSchedule.items.map((item) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.title}
          variants={fadeUp}
          
          transition={{ duration: 0.25 }}
          className="relative grid grid-cols-1 sm:grid-cols-[120px_60px_1fr] lg:grid-cols-[150px_80px_1fr_120px_30px] gap-4 px-4 sm:px-6 py-5 border-b border-[#E7EDF7] items-center last:border-b-0"
        >
          <div className="sm:border-r sm:border-[#DDE6F4]">
            <p className="text-[14px] font-semibold text-[#003BCB]">
              {item.time}
            </p>
            <p className="text-[12px] text-[#4B5579]">{item.duration}</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.08, rotate: 6 }}
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <Icon className="w-7 h-7" style={{ color: item.color }} />
          </motion.div>

          <div>
            <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#07113F]">
              {item.title}
            </h4>
            <p className="mt-1 text-[12px] sm:text-[13px] font-medium text-[#1F2A44]">
              {item.desc}
            </p>

            {item.speaker && (
              <p className="mt-1 text-[12px] text-[#0B63FF] font-medium">
                {item.speaker}
              </p>
            )}
          </div>

          <span
            className="w-fit rounded-full px-4 py-1.5 text-[12px] font-semibold"
            style={{
              color: item.color,
              backgroundColor: `${item.color}16`,
            }}
          >
            {item.tag}
          </span>

        
        </motion.div>
      );
    })}
  </div>
</motion.div>

          {/* Bottom CTA Cards */}
          <div className="grid grid-cols-1  gap-5 mt-6">
            {[
            
              [
                Bell,
                "Don’t Miss a Session",
                "Add sessions to your calendar and get timely reminders.",
                "ADD TO CALENDAR",
                "#FF9900",
              ],
            ].map(([Icon, title, desc, btn, color]) => (
              <motion.div
                key={title}
                whileHover={{ y: -7, scale: 1.01 }}
                className="rounded-[12px] p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left shadow-[0_8px_24px_rgba(0,30,100,0.08)] border transition-all duration-500 h-full"
                style={{
                  backgroundColor: `${color}12`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${color}12` }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>

                <div className="flex flex-col h-full flex-1">
                  <h3 className="text-[17px] font-semibold text-[#07113F]">
                    {title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#4B5579] flex-1">
                    {desc}
                  </p>

                </div>
                <Link to="/contact">
                  <button
                    className="mt-5 self-center sm:self-start inline-flex items-center gap-3 px-5 py-3 rounded-[6px] border text-[12px] font-medium hover:scale-105 transition-all duration-300"
                    style={{ color, borderColor: color }}
                  >
                    {btn}
                    <ArrowRight className="w-4 h-4" />
                  </button></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
