import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Monitor,
  GraduationCap,
  UserRound,
  BriefcaseBusiness,
  Check,
  Gift,
  FileBadge,
  ClipboardCheck,
  BookOpenCheck,
  Network,
  Users,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import registrationHero from "../assets/hero/ideax-2026-registration-banner.webp";
import ctaBg from "../assets/hero/ideax-2026-about-call-to-action-banner.webp";
import noteImg from "../assets/hero/ideax-2026-registration-guidelines.webp";
import questionImg from "../assets/hero/ideax-2026-registration-faq.webp";

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

const virtualCards = [
  {
    icon: GraduationCap,
    title: "Student Registration",
    price: "50 USD",
    color: "#0B63FF",
  },
  {
    icon: UserRound,
    title: "Faculty / Academician",
    price: "150 USD",
    color: "#0E8F54",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Professionals",
    price: "200 USD",
    color: "#6938D3",
  },
];

const offlineCards = [
  {
    icon: GraduationCap,
    title: "Student Registration",
    price: "150 USD",
    color: "#FF7A00",
  },
  {
    icon: UserRound,
    title: "Faculty / Academician",
    price: "300 USD",
    color: "#FF7A00",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Professionals",
    price: "400 USD",
    color: "#F04B12",
  },
];

const virtualFeatures = [
  "Online Virtual Presentation",
  "Conference Kit (Digital)",
  "Participation Certificate",
  "Peer Review & Publication",
  "Access to All Sessions",
  "E-Program Book",
];

const offlineFeatures = [
  "Offline Presentation",
  "Conference Kit (Physical)",
  "Peer Review & Publication",
  "Access to All Sessions",
  "Lunch & Refreshments",
  "E-Program Book",
];

const included = [
  [Gift, "Conference Kit", "Exclusive conference kit with essential materials and souvenirs."],
  [FileBadge, "Certificate", "E-certificate of participation for all registered delegates."],
  [ClipboardCheck, "Peer Review", "All accepted papers will go through a rigorous peer review."],
  [BookOpenCheck, "Publication", "Accepted & presented papers will be published in Scopus Indexed Proceedings and Journals additionals APC required to be paid by authors."],
 
  [Users, "Networking", "Connect with global experts and fellow participants."],
];


function PricingCard({ card, features }) {
  const Icon = card.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-[12px] border border-[#E1E9F6] bg-white p-2 shadow-[0_8px_24px_rgba(0,30,100,0.06)] transition-all duration-300"
    >
      <div
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full shadow-md"
        style={{ backgroundColor: card.color }}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>

      <h3 className="mt-5 text-center text-[16px] font-[550] leading-tight text-[#07113F]">
        {card.title}
      </h3>

      <h4 className="mt-4 text-center text-[18px] font-semibold" style={{ color: card.color }}>
        {card.price}
      </h4>

      <ul className="mt-3 space-y-2">
        {features.map((item) => (
         <li key={item} className="flex items-start gap-2 text-[11px] font-medium text-[#1F2A44]">
  <CheckCircle2
    className="mt-[2px] h-3 w-3 shrink-0"
    style={{ color: card.color }}
  />
  <span>{item}</span>
</li>

        ))}
      </ul>

      {/* <button
        className="mt-6 h-[40px] w-full rounded-[6px] border text-[12px] font-semibold transition-all duration-300 hover:text-white"
        style={{
          color: card.color,
          borderColor: card.color,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = card.color;
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = card.color;
        }}
      >
        REGISTER NOW
      </button> */}
    </motion.div>
  );
}



export default function RegistrationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#07113F]">
      {/* Hero */}
      <section
        className="relative min-h-[360px] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[500px] lg:bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${registrationHero})` }}
      >
        <div className="relative z-10 mx-auto max-w-[1420px] px-4 pt-7 sm:px-8 sm:pt-10 lg:px-16 lg:pt-12">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-[520px]">
            <div className="flex items-center gap-3 text-[13px] font-semibold text-[#07113F]/80">
              <Link to="/" className="hover:text-[#0B63FF]">
                Home
              </Link>
              <span>›</span>
              <span className="text-[#0B63FF]">Registration</span>
            </div>

            <h1 className="mt-7 font-semibold leading-[1.2]">
              <span className="block text-[#07113F] text-[36px] sm:text-[38px] lg:text-[42px]">
                Register for
              </span>
              <span className="block text-[36px] sm:text-[48px] lg:text-[52px] font-semibold bg-gradient-to-r from-[#0B63FF] via-[#13B5FF] to-[#00D4FF] bg-clip-text text-transparent">
  IDEAX 2026
</span>
            </h1>

            <p className="mt-5 max-w-[430px] text-[14px] font-medium leading-7 text-[#07113F] sm:text-[15px]">
              Be a part of the global platform bringing together innovators,
              researchers and industry leaders to shape the future of AI and
              Decision Engineering.
            </p>

            <div className="mt-7 grid max-w-[500px] grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                [CalendarDays, "10 – 12", "December, 2026", "#0B63FF"],
                [MapPin, "Singapore,", "Asia", "#FF9900"],
                [Monitor, "Hybrid", "(In-person & Online)", "#14B8A6"],
              ].map(([Icon, title, desc, color], i) => (
                <div
                  key={title}
                  className={`flex items-center gap-3 ${i !== 2 ? "sm:border-r sm:border-[#C8D6EC]" : ""}`}
                >
                  <Icon className="h-7 w-7 shrink-0" style={{ color }} />
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#07113F]">{title}</h4>
                    <p className="text-[11px] font-medium text-[#07113F]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="pt-8 text-center"
          >
            <p className="text-[13px] font-semibold uppercase text-[#0B63FF]">
              Choose Your Registration Type
            </p>

            <div className="mx-auto mt-3 flex h-[3px] w-[70px] overflow-hidden rounded-full">
              <span className="w-[55%] bg-[#13B5FF]" />
              <span className="w-[45%] bg-[#FFC21A]" />
            </div>

            <h2 className="mt-4 text-[22px] font-[600] text-[#07113F] sm:text-[24px]">
              Registration Categories & Fees
            </h2>

            <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-6 text-[#4B5579]">
              Choose the registration type and category that best fits your
              participation. All registrations include conference kit, certificate
              and peer-reviewed publication.
            </p>
          </motion.div>

          {/* Pricing Groups */}
          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Online */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[12px] border border-[#CFE0FF] bg-white shadow-[0_10px_30px_rgba(0,30,100,0.09)]"
            >
              <div className="flex flex-col gap-3 bg-gradient-to-r from-[#0048FF] to-[#235DFF] px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Monitor className="h-6 w-6" />
                  <h3 className="text-[14px] font-semibold uppercase">
                    Online Virtual Presentation
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#0B63FF]">
                  Access from Anywhere
                </span>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {virtualCards.map((card) => (
                  <PricingCard key={card.title} card={card} features={virtualFeatures} />
                ))}
              </motion.div>
            </motion.div>

            {/* Offline */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[12px] border border-[#FFE0BF] bg-white shadow-[0_10px_30px_rgba(0,30,100,0.09)]"
            >
              <div className="flex flex-col gap-3 bg-gradient-to-r from-[#FF7417] to-[#FF9900] px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6" />
                  <h3 className="text-[14px] font-semibold uppercase">
                    Offline Virtual Presentation
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#FF7417]">
                  On-site Participation
                </span>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {offlineCards.map((card) => (
                  <PricingCard key={card.title} card={card} features={offlineFeatures} />
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Included */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-6 rounded-[12px] border border-[#DCE8FA] bg-white p-5 shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
          >
            <h3 className="text-center text-[14px] font-semibold uppercase text-[#0B63FF]">
              What’s Included in Every Registration
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {included.map(([Icon, title, desc]) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -6 }}
                  className="text-center sm:text-left"
                >
                  <Icon className="mx-auto h-9 w-9 text-[#0B63FF] sm:mx-0" />
                  <h4 className="mt-3 text-[13px] font-semibold text-[#07113F]">
                    {title}
                  </h4>
                  <p className="mt-2 text-[11px] font-medium leading-5 text-[#4B5579]">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Notes + Question */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -6 }}
              className="flex flex-col gap-5 rounded-[12px] border border-[#DCE8FA] bg-white p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)] sm:flex-row sm:items-center"
            >
              <img src={noteImg} alt="" className="mx-auto w-[95px] shrink-0 object-contain sm:mx-0" />

              <div>
                <h3 className="text-center text-[15px] font-semibold uppercase text-[#0B63FF] sm:text-left">
                  Important Notes
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[12px] font-medium leading-5 text-[#1F2A44]">
                  <li>Registration is mandatory for paper presentation.</li>
                  <li>Registration once made is non-transferable Also no refund will be provided for cancellations.</li>
                  
                  <li>Extended manuscript of the conference will be forwaded to scopus indexed proceedings and journals for possible publications.</li>
                  <li>Article process chnages for extened scopus publications needs to be paid by authors separetely </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="flex flex-col gap-5 rounded-[12px] border border-[#DCE8FA] bg-white p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)] sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-center text-[15px] font-semibold uppercase text-[#0B63FF] sm:text-left">
                  Have a Question?
                </h3>
                <p className="mt-3 max-w-[420px] text-center text-[12px] font-medium leading-6 text-[#1F2A44] sm:text-left">
                  Our team is here to help. Reach out to us for any registration
                  related queries.
                </p>

                <div className="mt-4 space-y-3 text-[13px] font-medium text-[#07113F]">
                  <p className="flex items-center justify-center gap-3 sm:justify-start">
                    <Mail className="h-4 w-4 text-[#0B63FF]" />
                    registration@ideax-conference.org
                  </p>
                  <p className="flex items-center justify-center gap-3 sm:justify-start">
                    <Phone className="h-4 w-4 text-[#0B63FF]" />
                    +65 9123 4567
                  </p>
                </div>
              </div>

              <img src={questionImg} alt="" className="mx-auto w-[115px] shrink-0 object-contain sm:mx-0" />
            </motion.div>
          </div>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 overflow-hidden rounded-[12px] bg-cover bg-center text-white shadow-[0_10px_30px_rgba(0,30,100,0.16)]"
            style={{ backgroundImage: `url(${ctaBg})` }}
          >
            <div className="flex flex-col items-center justify-between gap-6 px-5 py-6 text-center sm:px-8 lg:flex-row lg:px-12 lg:text-left">
              <div className="flex flex-col items-center gap-5 sm:flex-row lg:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0B63FF] shadow-[0_0_25px_rgba(11,99,255,0.45)]">
                  <CalendarDays className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="text-[20px] font-semibold">Secure Your Spot Today!</h3>
                  <p className="mt-2 max-w-[620px] text-[14px] leading-6 text-white/90">
                    Don’t miss this opportunity to showcase your research, learn
                    from experts and expand your network.
                  </p>
                </div>
              </div>
<Link to="/contact">
              <button className="inline-flex items-center gap-3 rounded-[8px] bg-[#FFC21A] px-4 py-3 text-[14px] font-semibold text-[#07113F] shadow-[0_12px_28px_rgba(255,194,26,0.35)] transition-all duration-300 hover:scale-105 hover:bg-[#FFB400]">
                REGISTER NOW <ArrowRight className="h-5 w-5" />
              </button></Link>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}

