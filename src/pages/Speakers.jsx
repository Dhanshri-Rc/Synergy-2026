import { Mic2, Users2, Globe2, Briefcase, UserPlus, ArrowRight } from "lucide-react";
import { Linkedin } from "../components/SocialIcons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import speakerHero from "../assets/hero/ideax-2026-speakers-hero-banner.webp";
import profile from "../assets/hero/ideax-2026-conference-illustration.webp"
import cta from "../assets/hero/ideax-2026-speakers-call-to-action-banner.webp"


const STATS = [
  {
    icon: Mic2,
    value: "5+",
    label: "Keynote Speakers",
    color: "text-[#005BFF]",
    bg: "bg-[#EEF4FF]",
  },
  {
    icon: Users2,
    value: "150+",
    label: "Expert Speakers",
    color: "text-[#6D39FF]",
    bg: "bg-[#F2ECFF]",
  },
  {
    icon: Globe2,
    value: "30+",
    label: "Countries Represented",
    color: "text-[#12B8B3]",
    bg: "bg-[#E9FCFF]",
  },
  {
    icon: Briefcase,
    value: "Diverse",
    label: "Industries & Domains",
    color: "text-[#FF8A00]",
    bg: "bg-[#FFF3E5]",
  },
];

const SPEAKERS = [
  {
    name: "Prof. Michael\nAnderson",
    uni: "Stanford University,\nUSA",
    tag: "KEYNOTE SPEAKER",
    tagColor: "bg-blue-50 text-blue-600",
    bar: "bg-blue-500",
  },
  {
    name: "Dr. Sofia\nMartinez",
    uni: "Massachusetts Institute\nof Technology, USA",
    tag: "KEYNOTE SPEAKER",
    tagColor: "bg-purple-50 text-purple-600",
    bar: "bg-purple-500",
  },
  {
    name: "Prof. Li\nWei",
    uni: "National University of\nSingapore, Singapore",
    tag: "KEYNOTE SPEAKER",
    tagColor: "bg-green-50 text-green-600",
    bar: "bg-green-500",
  },
  {
    name: "Dr. Arjun\nKumar",
    uni: "Microsoft Research,\nIndia",
    tag: "INVITED SPEAKER",
    tagColor: "bg-orange-50 text-orange-600",
    bar: "bg-orange-500",
  },
  {
    name: "Dr. Emma\nJohnson",
    uni: "University of Oxford,\nUnited Kingdom",
    tag: "INVITED SPEAKER",
    tagColor: "bg-teal-50 text-teal-600",
    bar: "bg-teal-500",
  },
  {
    name: "Dr. Marco\nRossi",
    uni: "Politecnico di Milano,\nItaly",
    tag: "INVITED SPEAKER",
    tagColor: "bg-rose-50 text-rose-600",
    bar: "bg-rose-500",
  },
];

export default function Speakers() {
  return (
    <main className="overflow-hidden bg-white text-[#07113F]">
      {/* HERO */}
    <section
  className="relative min-h-[360px] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[500px] lg:bg-[length:100%_100%]"
  style={{
    backgroundImage: `url(${speakerHero})`,
  }}
>
  <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[1420px] items-center px-5 py-6 sm:min-h-[460px] sm:px-8 lg:min-h-[500px] lg:px-16">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="max-w-[560px]"
    >
      {/* Breadcrumb */}
      <div className="mb-8 sm:-mt-28 flex items-center gap-2 text-[13px] font-semibold text-white">
        <Link to="/" className="transition hover:text-[#13B5FF]">
          Home
        </Link>
        <span className="text-white/65">›</span>
        <Link to="/speakers" className="font-semibold text-[#13B5FF] text-[13px]">
          Speakers
        </Link>
      </div>

      <h1 className="text-[40px] font-[600] leading-none text-white sm:text-[50px] lg:text-[55px]">
        Our{" "}
        <span className="bg-gradient-to-r from-[#47bef5] to-[#493af3] bg-clip-text text-transparent">
          Speakers
        </span>
      </h1>

      <div className="mt-4 flex h-[4px] w-[70px] overflow-hidden rounded-full">
        <span className="w-[55%] bg-[#13B5FF]" />
        <span className="w-[45%] bg-[#FFC21A]" />
      </div>

      <p className="mt-7 max-w-[450px] text-[15px] font-medium leading-[1.75] text-white/90">
        Learn from visionary leaders, renowned researchers and industry experts
        who are shaping the future of innovation, decision engineering and
        artificial intelligence.
      </p>
    </motion.div>
  </div>


</section>

      {/* STATS */}
     <section className="relative z-20 bg-white px-5 sm:px-8 lg:px-16 ">
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className="mx-auto  grid max-w-[1340px] grid-cols-1 overflow-hidden rounded-[14px] border border-[#DDE7F6] bg-white px-5 py-5 shadow-[0_12px_35px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4"
  >
    {STATS.map(({ icon: Icon, value, label, color, bg }, index) => (
      <motion.div
        key={label}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        whileHover={{ y: -5, scale: 1.015 }}
        className={`
          group flex items-center gap-5 px-3 py-3 transition-all duration-300
          ${index !== 0 ? "lg:border-l lg:border-[#DDE7F6]" : ""}
          ${index % 2 !== 0 ? "sm:border-l sm:border-[#DDE7F6] lg:border-l" : ""}
          ${index > 1 ? "sm:border-t sm:border-[#DDE7F6] lg:border-t-0" : ""}
        `}
      >
        <span
          className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full ${bg} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={34} strokeWidth={2.1} className={color} />
        </span>

        <div>
          <h3 className={`text-[26px] font-semibold leading-none ${color}`}>
            {value}
          </h3>

          <p className="mt-2 text-[13px] font-semibold leading-tight text-[#07113F]">
            {label}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* FEATURED SPEAKERS */}
    <section className="bg-white px-5 py-8 sm:px-8 lg:px-16">
  <div className="mx-auto max-w-[1340px]">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-[13px] font-semibold uppercase text-[#2563EB]">
        Featured Speakers
      </p>

      <div className="mx-auto mt-1 flex h-[3px] w-[50px] overflow-hidden rounded-full">
        <span className="w-1/2 bg-[#2563EB]" />
        <span className="w-1/2 bg-[#FFC21A]" />
      </div>

      <h2 className="mt-4 text-[29px] font-[600] leading-tight text-[#07113F] sm:text-[32px]">
        Meet Our Distinguished Speakers
      </h2>

      <p className="mx-auto mt-4 max-w-[650px] text-[14px] font-medium leading-[1.7] text-[#1F2A44]/75">
        A distinguished lineup of thought leaders and innovators from academia,
        industry and government who will share their insights and experiences.
      </p>
    </motion.div>

    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {SPEAKERS.map((sp, index) => (
        <motion.div
          key={sp.name}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          whileHover={{ y: -8, scale: 1.015 }}
          className="group flex min-h-[152px] items-start gap-5 rounded-[10px] border border-[#E1E9F6] bg-white p-5 shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#C7D8FF] hover:shadow-[0_20px_45px_rgba(37,99,235,0.13)]"
        >
          <div className="h-[94px] w-[94px] shrink-0 overflow-hidden rounded-full bg-[#E8EDF5] ring-4 ring-[#F3F6FA] transition-transform duration-300 group-hover:scale-105">
            {profile ? (
              <img
                src={profile}
                alt={sp.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[24px] font-semibold text-slate-600">
                {sp.name.split(" ")[1]?.[0]}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <span
              className={`inline-flex rounded-[4px] px-3 py-1 text-[9px] font-bold uppercase ${sp.tagColor}`}
            >
              {sp.tag}
            </span>
      

            <h3 className="mt-3 max-w-[170px]  whitespace-pre-line text-[17px] font-semibold leading-tight text-[#07113F]">
              {sp.name}
            </h3>

            <div className={`my-2 h-[2px] w-[28px] rounded-full ${sp.bar}`} />

            <p className="max-w-[185px] text-[12px] whitespace-pre-line font-medium leading-[1.55] text-[#1F2A44]/70">
              {sp.uni}
            </p>
          </div>

          <a
            href="#"
            className="mt-auto flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[4px] border border-[#D6E0EE] text-[#07113F]/70 transition-all duration-300 hover:bg-[#2563EB] hover:text-white"
          >
            <Linkedin size={12} />
          </a>
        </motion.div>
      ))}
    </div>

    {/* <div className="mt-9 flex justify-center">
      <Link
        to="/speakers"
        className="inline-flex h-[38px] items-center gap-4 rounded-[6px] border border-[#2563EB] px-9 text-[12px] font-bold uppercase text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:text-white hover:shadow-[0_12px_28px_rgba(37,99,235,0.22)]"
      >
        View All Speakers <span className="text-[16px] leading-none">→</span>
      </Link>
    </div> */}
  </div>
</section>

      {/* CTA */}
<section className="px-5 pb-6 sm:px-8 lg:px-16">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="relative mx-auto flex max-w-[1340px] flex-col items-start justify-between gap-5 overflow-hidden rounded-[10px] px-5 py-6 text-white shadow-[0_14px_35px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:px-6 sm:py-7 lg:px-10"
  >
    <img
      src={cta}
      alt="CTA Background"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div className="relative z-10 flex max-w-full items-center gap-4 sm:gap-5">
      <motion.span
        whileHover={{ scale: 1.1 }}
        className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#101B7A] sm:h-[66px] sm:w-[66px]"
      >
        <UserPlus size={30} className="text-white" />
      </motion.span>

      <div className="min-w-0">
        <h3 className="text-[17px] font-semibold leading-tight sm:text-[20px] lg:text-[22px]">
          Be Inspired. Gain Insights. Shape the Future.
        </h3>

        <p className="mt-2 max-w-[430px] text-[12px] font-medium leading-[1.6] text-white/80 sm:text-[13px] lg:text-[14px]">
          Join us to hear from global experts and innovators who are driving
          change and creating impact.
        </p>
      </div>
    </div>

    <Link
      to="/registration"
      className="relative z-10 inline-flex h-[40px] ml-[68px] sm:ml-0 items-center justify-center gap-2 rounded-[8px] bg-white px-6 text-[12px] font-semibold uppercase text-[#2563EB] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFC21A] hover:text-[#07113F] sm:mr-0  sm:text-[13px] lg:mr-48"
    >
      Register
      <ArrowRight size={18} />
    </Link>
  </motion.div>
</section>
    </main>
  );
}