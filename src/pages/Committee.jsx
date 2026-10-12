import { Users2, UserCog, ChevronRight, UserPlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import committeeHero from "../assets/hero/ideax-2026-committee-banner.webp";
import cta from "../assets/hero/ideax-2026-committee-call-to-action-banner.webp";
import profile from "../assets/hero/ideax-2026-conference-illustration.webp"
import { useState } from "react";

const STEERING = [
  { name: "Prof. David\nTan", role: "Chair", org: "National University of\nSingapore, Singapore" },
  { name: "Prof. Elena\nKovacs", role: "Co-Chair", org: "Technical University\nof Munich, Germany" },
  { name: "Prof. Amit\nSharma", role: "Co-Chair", org: "Indian Institute of\nTechnology, India" },
  { name: "Prof. Marco\nRossi", role: "Co-Chair", org: "Politecnico di Milano,\nItaly" },
  { name: "Prof. Mei\nLin", role: "Co-Chair", org: "Tsinghua University,\nChina" },
];

const TECHNICAL = [
  { name: "Prof. John\nDoe", org: "University of\nCalifornia, USA" },
  { name: "Prof. Satoshi\nNakamura", org: "The University of\nTokyo, Japan" },
  { name: "Prof. Priya\nNair", org: "IIT Bombay,\nIndia" },
];

const ORGANIZING = [
  { name: "Dr. Wei\nHuang", org: "Conference\nDirector" },
  { name: "Dr. Anita\nVerma", org: "Program\nCoordinator" },
  { name: "Mr. Ryan\nLee", org: "Operations\nManager" },
];





export default function Committee() {

  const [technicalIndex, setTechnicalIndex] = useState(0);
const [organizingIndex, setOrganizingIndex] = useState(0);
  return (
    <main className="overflow-hidden bg-white text-[#07113F]">
      {/* HERO */}
      
<section
  className="relative min-h-[360px] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[500px] lg:bg-[length:100%_100%]"
  style={{
    backgroundImage: `url(${committeeHero})`,
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
      <div className="mb-8 sm:-mt-28 flex items-center gap-2 text-[13px] font-semibold text-black/80">
        <Link to="/" className="transition hover:text-[#13B5FF]">
          Home
        </Link>
        <span className="text-black">›</span>
        <Link to="/committee" className="font-semibold text-[#13B5FF] text-[13px]">
          Committee
        </Link>
      </div>

      <h1 className="text-[40px] font-[600] leading-none text-black sm:text-[46px] lg:text-[50px]">
        Our{" "} <br />
        <span className="bg-gradient-to-r from-[#2cb2ef] to-[#493af3] bg-clip-text text-transparent">
          Committee
        </span>
      </h1>
      <div className="mt-4 flex h-[4px] w-[70px] overflow-hidden rounded-full">
        <span className="w-[55%] bg-[#13B5FF]" />
        <span className="w-[45%] bg-[#FFC21A]" />
      </div>

      <p className="mt-7 max-w-[350px] text-[15px] font-medium leading-[1.75] text-black/90">
       A dedicated team of experts and professionals working together to
              make IDEAX 2026 a remarkable success.
      </p>
    </motion.div>
  </div>


</section>


      {/* STEERING */}
    <section className="bg-white px-5 py-8 sm:px-8 lg:px-16">
  <div className="mx-auto max-w-[1340px] text-center">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-[15px] font-semibold uppercase tracking-wide text-[#2563EB]">
        Steering Committee
      </p>

      <div className="mx-auto mt-3 flex h-[4px] w-[110px] items-center justify-between">
        <span className="h-[7px] w-[7px] rounded-full bg-[#2563EB]" />
        <span className="h-[3px] w-[36px] bg-[#C7D8FF]" />
        <span className="h-[3px] w-[24px] bg-[#2563EB]" />
        <span className="h-[3px] w-[24px] bg-[#FFC21A]" />
        <span className="h-[3px] w-[36px] bg-[#C7D8FF]" />

        <span className="h-[7px] w-[7px] rounded-full bg-[#2563EB]" />
      </div>

      <h2 className="mt-6 text-[28px] font-semibold leading-tight text-[#07113F] sm:text-[34px]">
        Guiding Vision. Driving Impact.
      </h2>

      <p className="mx-auto mt-4 max-w-[690px] text-[15px] font-medium leading-[1.6] text-[#1F2A44]/75">
        Our Steering Committee provides strategic direction and vision
        <br className="hidden sm:block" />
        to ensure the highest quality and impact of the conference.
      </p>
    </motion.div>

    <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {STEERING.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          whileHover={{ y: -8, scale: 1.015 }}
          className="group flex min-h-[200px] flex-col items-start rounded-[12px] border border-[#E1E9F6] bg-white p-4 text-left shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#C7D8FF] hover:shadow-[0_22px_50px_rgba(37,99,235,0.14)]"
        >
          <div className="flex items-center gap-3">
            <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full bg-[#E8EDF5] ring-4 ring-[#F3F6FA] transition-transform duration-300 group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center text-[28px] font-semibold text-slate-600">
                
                <img src={profile} alt="" />
              </div>
            </div>

            <div>
              <h3 className=" text-[15px] font-semibold leading-[1.25] text-[#07113F]">
                {m.name}
              </h3>
              <div className="mt-3 h-[3px] w-[28px] rounded-full bg-[#2563EB]" />
            </div>
          </div>

          <p className="mt-6 text-[15px] font-semibold text-[#2563EB]">
            {m.role}
          </p>

          <p className="mt-2 whitespace-pre-line text-[13px] font-medium leading-[1.65] text-[#1F2A44]/75">
            {m.org}
          </p>
        </motion.div>
      ))}
    </div>

    {/* <Link
      to="/committee"
      className="mt-10 inline-flex h-[50px] items-center justify-center gap-5 rounded-[6px] border-2 border-[#2563EB] px-9 text-[15px] font-bold uppercase text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:text-white hover:shadow-[0_12px_30px_rgba(37,99,235,0.22)]"
    >
      View Full Steering Committee <span className="text-[22px] leading-none">→</span>
    </Link> */}
  </div>
</section>

      {/* TECHNICAL */}
     <section className="bg-white px-5 pb-8 sm:px-8 lg:px-16">
  <div className="mx-auto max-w-[1340px] space-y-7">
    <CommitteeRow
      icon={Users2}
      title="Technical Program Committee"
      desc="Responsible for the review of submissions and curating a high-quality technical program."
      color="#2563EB"
      bg="bg-[#EEF4FF]"
      members={TECHNICAL}
      activeIndex={technicalIndex}
      setActiveIndex={setTechnicalIndex}
    />

    <CommitteeRow
      icon={UserCog}
      title="Organizing Committee"
      desc="Managing the planning, coordination and execution of IDEAX 2026."
      color="#FF8A00"
      bg="bg-[#FFF4E8]"
      members={ORGANIZING}
      activeIndex={organizingIndex}
      setActiveIndex={setOrganizingIndex}
      orange
    />
  </div>
</section>

      {/* CTA */}
     <section className="bg-white px-5 pb-7 sm:px-8 lg:px-16">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="relative mx-auto flex max-w-[1340px] flex-col items-start justify-between gap-5 overflow-hidden rounded-[10px] px-6 py-6 text-white shadow-[0_14px_35px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:px-10"
  >
    <img
      src={cta}
      alt="CTA Background"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div className="relative z-10 flex w-full items-center gap-4 sm:w-auto sm:gap-5">
      <motion.span
        whileHover={{ scale: 1.1 }}
        className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#101B7A] sm:h-[66px] sm:w-[66px]"
      >
        <UserPlus size={28} className="text-white sm:h-[34px] sm:w-[34px]" />
      </motion.span>

      <div>
        <h3 className="text-[20px] font-semibold leading-tight sm:text-[22px]">
          Be Part of the Team
        </h3>

        <p className="mt-2 max-w-[560px] text-[12px] font-medium leading-relaxed text-white/85 sm:text-[13px]">
          We are always looking for enthusiastic volunteers
          <br className="hidden sm:block" />
          to help make IDEAX 2026 a success.
        </p>
      </div>
    </div>

    <Link
      to="/registration"
      className="relative z-10 inline-flex h-[40px] w-full items-center justify-center gap-3 rounded-[6px] bg-white px-8 text-[12px] font-bold uppercase text-[#2563EB] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFC21A] hover:text-[#07113F] sm:w-auto sm:px-6"
    >
      Join as Volunteer
      <ArrowRight size={18}/>
    </Link>
  </motion.div>
</section>
    </main>
  );
}

function CommitteeRow({
  icon: Icon,
  title,
  desc,
  color,
  bg,
  members,
  activeIndex,
  setActiveIndex,
  orange,
}) {
  const visibleMembers = [
    ...members.slice(activeIndex),
    ...members.slice(0, activeIndex),
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % members.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`rounded-[12px] ${bg} px-5 py-6 sm:px-7 lg:px-8`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-4 sm:flex-row lg:w-[365px] lg:shrink-0">
          <span className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[12px] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <Icon size={40} strokeWidth={2} style={{ color }} />
          </span>

          <div className="text-left">
            <h3
              className="text-[14px] font-semibold uppercase leading-tight"
              style={{ color }}
            >
              {title}
            </h3>

            <p className="mt-3 max-w-[260px] text-[12px] font-medium leading-[1.7] text-[#1F2A44]/75">
              {desc}
            </p>

            {/* <Link
              to="/committee"
              className="mt-4 inline-flex h-[34px] items-center gap-3 rounded-[5px] border px-4 text-[10px] font-bold uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              style={{ borderColor: color, color }}
            >
              View All Members <span className="text-[15px]">→</span>
            </Link> */}
          </div>
        </div>

        <div className="relative flex-1">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
          >
            {visibleMembers.slice(0, 3).map((m, index) => (
              <motion.div
                key={`${m.name}-${activeIndex}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="flex min-h-[118px] items-center gap-5 rounded-[8px] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]"
              >
                <div className="h-[82px] w-[82px] shrink-0 overflow-hidden rounded-full bg-[#E8EDF5] ring-4 ring-[#F3F6FA]">
                  <div className="flex h-full w-full items-center justify-center text-[24px] font-bold text-slate-600">
                    <img src={profile} alt="" />
                  </div>
                </div>

                <div>
                  <h4 className="whitespace-pre-line text-[13px] font-semibold leading-tight text-[#07113F]">
                    {m.name}
                  </h4>
                  <p className="mt-3 whitespace-pre-line text-[11px] font-medium leading-[1.5] text-[#1F2A44]/70">
                    {m.org}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute -right-5 top-1/2 hidden h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(15,23,42,0.12)] transition-all duration-300 hover:scale-110 sm:flex"
          >
            <ChevronRight size={18} style={{ color }} />
          </button>

          <div className="mt-5 flex justify-center gap-1.5">
            {members.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-4" : "w-2 opacity-30"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}