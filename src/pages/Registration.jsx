import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Monitor,
  GraduationCap,
   CircleAlert,
  Check,
  Headset,
 Send, ArrowRight ,
  Calendar,
  Users,
  Mail,
  Phone,
  CheckCircle2,
  Globe2,
    ContactRound,
  ShoppingBag,
  UsersRound,
  FileBadge2,
  FileText,
  Coffee,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import registrationHero from "../assets/img/synergy-2026-registration-banner.webp";
import ctaBg from "../assets/img//synergy-2026-conference-tracks-call-to-action.webp";
// import noteImg from "../assets/img/ideax-2026-registration-guidelines.webp";
// import questionImg from "../assets/img/ideax-2026-registration-faq.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};



const REGISTRATION_FEES = [
  {
    id: 1,
    category: "International Delegates",
    subtitle: "",
    icon: Globe2,
    color: "#005BFF",
    background: "#E5EFFF",
    earlyBird: "USD $300",
    normalRate: "USD $400",
    atDesk: "USD $450",
  },
  {
    id: 2,
    category: "International Students",
    subtitle: "(Proof of student card is required)",
    icon: GraduationCap,
    color: "#7000FF",
    background: "#F0E5FF",
    earlyBird: "USD $250",
    normalRate: "USD $300",
    atDesk: "USD $350",
  },
  {
    id: 3,
    category: "Participant / Listeners",
    subtitle: "(Without paper)",
    icon: Users,
    color: "#FF8900",
    background: "#FFF0DE",
    earlyBird: "USD $200",
    normalRate: "USD $250",
    atDesk: "USD $300",
  },
];


const included = [
  {
    icon: ContactRound,
    title: "Printed Name Card",
    color: "#005BFF",
  },
  {
    icon: ShoppingBag,
    title: "Conference Kit + Bag",
    color: "#7C3AED",
  },
  {
    icon: UsersRound,
    title: "Participation in the technical program",
    color: "#00AD8B",
  },
  {
    icon: FileBadge2,
    title: "Attendance Certificate",
    color: "#7C3AED",
  },
  {
    icon: FileText,
    title: "E-Proceedings",
    color: "#005BFF",
  },
  {
    icon: Coffee,
    title: "2 × coffee breaks",
    subtitle: "(morning & afternoon)",
    color: "#FF8900",
  },
  {
    icon: Utensils,
    title: "Lunch",
    subtitle: "(Presentation Day)",
    color: "#00AD8B",
  },
];
const IMPORTANT_NOTES = [
  "In case of multiple authors at least one author must register.",
  "Only the registered author will receive the certificate.",
  "Certificate will be issued to all the authors of the paper only against the registration by all the authors.",
  "If an author submits two papers, both papers must be registered separately.",
  "Travel reimbursement and accommodation are not provided.",
  "Presentation in absentia is not encouraged.",
];





export default function RegistrationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#07113F]">
      {/* Hero */}
      <section
        className="relative min-h-[360px] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[470px] lg:bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${registrationHero})` }}
      >
        <div className="relative z-10 mx-auto max-w-[1420px] px-4 pt-7 sm:px-8 sm:pt-10 lg:px-16 lg:pt-12">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-[520px]">
            <div className="flex items-center gap-3 text-[13px] font-semibold text-white/90">
              <Link to="/" className="hover:text-[#0B63FF]">
                Home
              </Link>
              <span>›</span>
              <span className="text-[#0B63FF]">Registration</span>
            </div>

            <h1 className="mt-7 font-semibold leading-[1.2]">
              <span className="block text-[#fafafa] text-[36px] sm:text-[38px] lg:text-[42px]">
                Register for
              </span>
              <span className="block text-[36px] sm:text-[48px] lg:text-[52px] font-semibold bg-gradient-to-r from-[#eea20b] via-[#f3c304] to-[#e6bc13] bg-clip-text text-transparent">
                SYNERGY 2026
</span>
            </h1>

            <p className="mt-5 max-w-[430px] text-[14px] font-medium leading-7 text-[#f4f4f5] sm:text-[15px]">
           Join the International Conference and be part of a global community advancing innovation, interdisciplinary integration, and a sustainable digital future.
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
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
        
{/* ========== REGISTRATION HEADING ========== */}
<motion.div
  initial={{ opacity: 0, y: 22 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.55,
    ease: "easeOut",
  }}
  className="pt-7 text-left sm:pt-9 lg:pt-10"
>
  <p className="text-[11px] font-bold uppercase tracking-[0.02em] text-[#005BFF] sm:text-[12.5px]">
    REGISTRATION
  </p>

  <h2 className="mt-1.5 text-[25px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#07113F] sm:text-[30px] lg:text-[34px]">
    Registration Categories &amp; Fees
  </h2>

  <p className="mt-2 text-[12px] font-medium leading-[1.5] text-[#36405F] sm:text-[14px]">
    Choose the registration type and category that best fits your participation.
  </p>

  <p className="text-[12px] font-medium leading-[1.5] text-[#36405F] sm:text-[14px]">
    All registrations include conference kit, certificate, and participation benefits.
  </p>
</motion.div>

{/* ========== REGISTRATION PRICING TABLE ========== */}
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    duration: 0.6,
    delay: 0.1,
    ease: "easeOut",
  }}
  className="mt-4 w-full min-w-0 rounded-[12px] border border-[#E1E9F7] bg-white p-[7px] shadow-[0_5px_24px_rgba(15,23,42,0.035)] sm:p-[9px]"
>
  {/* Only the table scrolls on narrow screens */}
  <div
    className="w-full overflow-x-auto overscroll-x-contain"
    role="region"
    aria-label="Registration fee comparison"
    tabIndex={0}
  >
    <table className="w-full min-w-[650px] table-fixed border-separate border-spacing-[3px] text-left sm:min-w-[720px]">
      <colgroup>
        <col style={{ width: "34%" }} />
        <col style={{ width: "22%" }} />
        <col style={{ width: "22%" }} />
        <col style={{ width: "22%" }} />
      </colgroup>

      {/* Table headings */}
      <thead>
        <tr>
          <th
            scope="col"
            className="rounded-[5px] bg-[#EDF3FF] px-4 py-3 text-[12px] font-semibold text-[#005BFF] sm:px-6 sm:text-[14px]"
          >
            Registration Category
          </th>

          <th
            scope="col"
            className="rounded-[5px] bg-[#E8F1FF] px-2 py-2.5 text-center"
          >
            <span className="block text-[13px] font-semibold text-[#005BFF] sm:text-[15px]">
              Early Bird
            </span>
            <span className="mt-0.5 block text-[10px] font-medium leading-[1.3] text-[#304579] sm:text-[11px]">
              (Until 15 September, 2026)
            </span>
          </th>

          <th
            scope="col"
            className="rounded-[5px] bg-[#F1EBFF] px-2 py-2.5 text-center"
          >
            <span className="block text-[13px] font-semibold text-[#7500E9] sm:text-[15px]">
              Normal Rate
            </span>
            <span className="mt-0.5 block text-[10px] font-medium leading-[1.3] text-[#4C357A] sm:text-[11px]">
              (16 September – 15 November, 2026)
            </span>
          </th>

          <th
            scope="col"
            className="rounded-[5px] bg-[#FFF1D6] px-2 py-2.5 text-center"
          >
            <span className="block text-[13px] font-semibold text-[#934600] sm:text-[15px]">
              At Desk
            </span>
            <span className="mt-0.5 block text-[10px] font-medium leading-[1.3] text-[#885313] sm:text-[11px]">
              (4 – 5 December, 2026)
            </span>
          </th>
        </tr>
      </thead>

      {/* Pricing rows */}
      <tbody>
        {REGISTRATION_FEES.map(
          (
            {
              id,
              category,
              subtitle,
              icon: Icon,
              color,
              background,
              earlyBird,
              normalRate,
              atDesk,
            },
            index
          ) => (
            <motion.tr
              key={id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.15 + index * 0.08,
              }}
              className="group"
            >
              {/* Registration category */}
              <td className="rounded-[5px] border border-[#E8EEF8] bg-white px-3 py-3 transition-[background-color,border-color,box-shadow] duration-300 group-hover:border-[#BDD3FF] group-hover:bg-[#F5F9FF] sm:px-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span
                    className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:scale-110 sm:h-[46px] sm:w-[46px]"
                    style={{ backgroundColor: background }}
                  >
                    <Icon
                      size={27}
                      strokeWidth={2}
                      style={{ color }}
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[12px] font-semibold leading-[1.3] text-[#07113F] transition-colors duration-300 group-hover:text-[#005BFF] sm:text-[14px]">
                      {category}
                    </h3>

                    {subtitle && (
                      <p className="mt-0.5 text-[10px] font-medium leading-[1.3] text-[#4B5579] sm:text-[11px]">
                        {subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </td>

              {/* Early bird */}
              <td className="rounded-[5px] border border-[#E8EEF8] bg-[#FCFDFF] px-2 py-3 text-center align-middle transition-[background-color,border-color] duration-300 group-hover:border-[#BDD3FF] group-hover:bg-[#EDF5FF]">
                <span className="inline-block text-[16px] font-semibold text-[#005BFF] transition-transform duration-300 group-hover:scale-105 sm:text-[17px]">
                  {earlyBird}
                </span>
              </td>

              {/* Normal rate */}
              <td className="rounded-[5px] border border-[#EAE5F6] bg-[#FDFCFF] px-2 py-3 text-center align-middle transition-[background-color,border-color] duration-300 group-hover:border-[#D7BFFF] group-hover:bg-[#F6F0FF]">
                <span className="inline-block text-[16px] font-semibold text-[#7800EC] transition-transform duration-300 group-hover:scale-105 sm:text-[17px]">
                  {normalRate}
                </span>
              </td>

              {/* At desk */}
              <td className="rounded-[5px] border border-[#F7EBD6] bg-[#FFFCF7] px-2 py-3 text-center align-middle transition-[background-color,border-color] duration-300 group-hover:border-[#F4D59C] group-hover:bg-[#FFF5E3]">
                <span className="inline-block text-[16px] font-semibold text-[#CE7200] transition-transform duration-300 group-hover:scale-105 sm:text-[17px]">
                  {atDesk}
                </span>
              </td>
            </motion.tr>
          )
        )}
      </tbody>
    </table>
  </div>
</motion.div>


       
{/* ========== WHAT'S INCLUDED SECTION ========== */}<motion.section
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    duration: 0.55,
    ease: "easeOut",
  }}
  className="mt-5 w-full min-w-0 rounded-[12px] border border-[#EEF2F9] bg-white px-3 py-4 shadow-[0_5px_22px_rgba(15,23,42,0.035)] sm:px-5 sm:py-5"
>
  {/* Section heading */}
  <div className="mb-3 text-left">
    <h2 className="text-[21px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#07113F] sm:text-[25px] lg:text-[28px]">
      What’s Included in Every Registration
    </h2>

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 43 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.2 }}
      className="mt-2 h-[3px] rounded-full bg-[#2563EB]"
    />
  </div>

  {/* Registration benefits */}
  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
    {included.map(
      ({ icon: Icon, title, subtitle, color }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.45,
            delay: index * 0.055,
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
          className="group relative flex min-h-[145px] min-w-0 flex-col items-center justify-center overflow-hidden rounded-[8px] border border-[#E4EAF5] bg-white px-2 py-4 text-center shadow-[0_3px_12px_rgba(15,23,42,0.025)] transition-[border-color,background-color,box-shadow] duration-300 hover:z-10 hover:border-[#C4D5FF] hover:bg-[#FCFDFF] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] sm:min-h-[150px]"
        >
          {/* Icon */}
          <div className="mb-3 flex h-[52px] w-[52px] shrink-0 items-center justify-center">
            {title === "Lunch" ? (
              <div
                className="flex h-[49px] w-[49px] items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: color }}
              >
                <Icon
                  size={28}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </div>
            ) : (
              <Icon
                size={44}
                strokeWidth={1.8}
                aria-hidden="true"
                style={{ color }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            )}
          </div>

          {/* Title */}
          <h3 className="mx-auto w-full max-w-[145px] text-[12px] font-semibold leading-[1.3] text-[#07113F] transition-colors duration-300 group-hover:text-[#2563EB] sm:text-[13px]">
            {title}
          </h3>

          {/* Subtitle */}
          {subtitle && (
            <p className="mx-auto mt-0.5 max-w-[145px] text-[11px] font-normal leading-[1.3] text-[#36415E]">
              {subtitle}
            </p>
          )}

          {/* Hover accent */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#2563EB] transition-[width] duration-300 group-hover:w-[65%]"
          />
        </motion.div>
      )
    )}
  </div>
</motion.section>


      
{/* ================= NOTES + QUESTION ================= */}
<div className="mt-5 grid w-full min-w-0 grid-cols-1 items-stretch gap-3 lg:grid-cols-2">

  {/* ================= IMPORTANT NOTES ================= */}
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: 0.55,
      ease: "easeOut",
    }}
    whileHover={{
      y: -4,
      transition: { duration: 0.25 },
    }}
    className="group min-w-0 rounded-[11px] border border-[#E2EAF6] bg-white px-4 py-4 shadow-[0_4px_18px_rgba(15,23,42,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#BED2FF] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] sm:px-5"
  >
    {/* Heading */}
    <div className="mb-3 flex items-center gap-3">
      <span className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-full bg-[#0861FF] text-white transition-transform duration-300 group-hover:scale-105">
        <CircleAlert
          size={25}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>

      <h2 className="text-[20px] font-semibold leading-tight text-[#07113F] sm:text-[23px]">
        Important Notes
      </h2>
    </div>

    {/* Notes list */}
    <ul className="space-y-2.5">
      {IMPORTANT_NOTES.map((note, index) => (
        <motion.li
          key={note}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.38,
            delay: index * 0.045,
          }}
          whileHover={{ x: 3 }}
          className="group/item flex items-start gap-3"
        >
          {/* Blue circular check */}
          <span className="mt-[1px] ml-2  flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0861FF] text-white transition-transform duration-300 group-hover/item:scale-110">
            <Check
              size={13}
              strokeWidth={3}
              aria-hidden="true"
            />
          </span>

          <span className="min-w-0 text-[12px] font-medium leading-[1.5] text-[#29365D] transition-colors duration-300 group-hover/item:text-[#005BFF] sm:text-[13px] ">
            {note}
          </span>
        </motion.li>
      ))}
    </ul>
  </motion.div>

  {/* ================= HAVE A QUESTION ================= */}
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: 0.55,
      delay: 0.1,
      ease: "easeOut",
    }}
    whileHover={{
      y: -4,
      transition: { duration: 0.25 },
    }}
    className="group min-w-0 rounded-[11px] border border-[#E2EAF6] bg-white px-4 py-4 shadow-[0_4px_18px_rgba(15,23,42,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#BED2FF] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] sm:px-5"
  >
    {/* Heading */}
    <div className="flex items-start gap-3">
      {/* Headset icon */}
      <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[#E5EEFF] text-[#0861FF] transition-transform duration-300 group-hover:scale-105">
        <Headset
          size={29}
          strokeWidth={2.1}
          aria-hidden="true"
        />
      </span>

      <div className="min-w-0 flex-1">
        <h2 className="text-[20px] font-semibold leading-tight text-[#07113F] sm:text-[23px]">
          Have a Question?
        </h2>

        <p className="mt-2 max-w-[440px] text-[12px] font-medium leading-[1.5] text-[#29365D] sm:text-[13px]">
          For registration inquiries and assistance, please contact
          us through the following channels:
        </p>
      </div>
    </div>

    {/* Contact table */}
    <div className="mt-4 overflow-hidden rounded-[8px] bg-[#F0F5FF]">

      {/* Email */}
      <a
        href="mailto:globalresearchconference@gmail.com"
        className="group/link grid min-w-0 grid-cols-[24px_minmax(0,1fr)] items-center gap-x-3 gap-y-1 border-b border-[#D6E2F5] px-3 py-3 transition-colors duration-300 hover:bg-[#E3EEFF] sm:grid-cols-[25px_85px_minmax(0,1fr)]"
      >
        <Mail
          size={24}
          strokeWidth={2}
          className="text-[#0861FF] transition-transform duration-300 group-hover/link:scale-110"
        />

        <span className="text-[12px] font-semibold text-[#07113F]">
          Email
        </span>

        <span className="col-start-2 min-w-0 break-all text-[12px] font-semibold text-[#005BFF] group-hover/link:underline sm:col-start-3">
          globalresearchconference@gmail.com
        </span>
      </a>

      {/* Website 1 */}
      <a
        href="https://grcf.net"
        target="_blank"
        rel="noopener noreferrer"
        className="group/link grid min-w-0 grid-cols-[24px_minmax(0,1fr)] items-center gap-x-3 gap-y-1 border-b border-[#D6E2F5] px-3 py-3 transition-colors duration-300 hover:bg-[#E3EEFF] sm:grid-cols-[25px_85px_minmax(0,1fr)]"
      >
        <Globe2
          size={25}
          strokeWidth={2}
          className="text-[#0861FF] transition-transform duration-300 group-hover/link:scale-110"
        />

        <span className="text-[12px] font-semibold text-[#07113F]">
          Website 1
        </span>

        <span className="col-start-2 min-w-0 break-all text-[12px] font-semibold text-[#005BFF] group-hover/link:underline sm:col-start-3">
          grcf.net
        </span>
      </a>

      {/* Website 2 */}
      <a
        href="https://globalresearchconference.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group/link grid min-w-0 grid-cols-[24px_minmax(0,1fr)] items-center gap-x-3 gap-y-1 px-3 py-3 transition-colors duration-300 hover:bg-[#E3EEFF] sm:grid-cols-[25px_85px_minmax(0,1fr)]"
      >
        <Globe2
          size={25}
          strokeWidth={2}
          className="text-[#0861FF] transition-transform duration-300 group-hover/link:scale-110"
        />

        <span className="text-[12px] font-semibold text-[#07113F]">
          Website 2
        </span>

        <span className="col-start-2 min-w-0 break-all text-[12px] font-semibold text-[#005BFF] group-hover/link:underline sm:col-start-3">
          globalresearchconference.com
        </span>
      </a>

    </div>
  </motion.div>

</div>


        
{/* ================= REGISTRATION CTA ================= */}
<motion.section
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  className="relative isolate mt-5 w-full min-w-0 overflow-hidden rounded-[11px] border border-[#233C99] bg-[#06124D] text-white shadow-[0_8px_25px_rgba(0,20,90,0.16)]"
>
  {/* Background image */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${ctaBg})` }}
  />

  {/* Navy blue overlay */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(2,14,67,0.95)_0%,rgba(4,22,105,0.88)_55%,rgba(21,10,109,0.88)_100%)]"
  />

  {/* Subtle blue glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(25,85,255,0.25),transparent_45%)]"
  />

  {/* CTA content */}
  <div className="relative z-10 mx-auto flex w-full flex-col items-center justify-between gap-5 px-4 py-5 sm:px-6 md:flex-row md:gap-6 md:px-8 md:py-4 lg:px-10 lg:py-5">

    {/* Left content */}
    <div className="flex min-w-0 flex-col items-center gap-4 text-center min-[480px]:flex-row min-[480px]:text-left">

      {/* Circular send icon */}
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: -12,
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

      {/* Heading and description */}
      <div className="min-w-0">
        <h2 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#FFC21A] sm:text-[20px] lg:text-[22px]">
          Secure Your Spot at SYNERGY 2026
        </h2>

        <p className="mt-1 max-w-[760px] text-[11px] font-medium leading-[1.5] text-white/90 sm:text-[12px] lg:text-[13px]">
          Be part of a global community to exchange knowledge,
          build collaborations, and shape a sustainable future.
        </p>
      </div>
    </div>

    {/* Register button */}
    <Link
      to="/contact"
      aria-label="Register Now for SYNERGY 2026"
      className="group inline-flex min-h-[40px] w-full shrink-0 items-center justify-center gap-5 rounded-[6px] bg-[#FFC21A] px-6 py-2.5 text-[13px] font-semibold text-[#07113F] shadow-[0_7px_20px_rgba(255,194,26,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#FFD443] hover:shadow-[0_12px_28px_rgba(255,194,26,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[170px] md:min-w-[155px] lg:min-w-[175px]"
    >
      Register Now

      <ArrowRight
        size={19}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover:translate-x-1.5"
      />
    </Link>
  </div>
</motion.section>

        </div>
      </section>
    </main>
  );
}

