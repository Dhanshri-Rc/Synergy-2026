import React from "react";

import { Link } from "react-router-dom";

import { motion, useReducedMotion } from "framer-motion";

import {
  Users,
  Lightbulb,
  Network,
  ChartNoAxesCombined,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

// Replace these paths with the corresponding assets from your project.

const ASSETS = {
  hero: "/src/assets/img/synergy-2026-about-conference-banner.webp",

  campus: "/src/assets/img/university-of-Batangas.webp",

  batangasLogo: "/src/assets/img/batangasUniversityLogo.webp",

  daltaLogo: "/src/assets/img/university-of-Perpetual-logo.webp",

  himalayanLogo: "/src/assets/img/himalayan-University-logo.webp",

  grcfLogo: "/src/assets/img/global-research-collaboration-logo.webp",

  researcherLogo: "/src/assets/img/researcher-connect-publication-partner-logo.webp ",

  batangasBg: "/src/assets/img/university-of-batangas-background.webp",

  daltaBg: "/src/assets/img/perpetual-university-background.webp",

  himalayanBg: "/src/assets/img/himalayan-university-background.webp",

  grcfBg: "/src/assets/img/global-research-collaboration-background.webp",

  partnerBg: "/src/assets/img/synergy-2026-about-call-to-action.webp",
};

const reveal = {
  hidden: { opacity: 0, y: 22 },

  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const hoverTransition = { type: "spring", stiffness: 260, damping: 23 };

const vision = [
  {
    icon: Users,

    title: "Global Collaboration",

    description:
      "Connect with researchers and experts from diverse disciplines worldwide",
  },

  {
    icon: Lightbulb,

    title: "Knowledge Sharing",

    description: "Exchange ideas and innovations for real-world impact",
  },

  {
    icon: Network,

    title: "Interdisciplinary Approach",

    description: "Explore solutions to complex global challenges",
  },

  {
    icon: ChartNoAxesCombined,

    title: "Sustainable Future",

    description: "Drive innovation for a more sustainable and digital world",
  },
];

const institutions = [
  {
    name: "University of Batangas",

    location: "Lipa City, Feliciano Leviste Road, Lipa City, Philippines",

    logo: ASSETS.batangasLogo,
  },

  {
    name: "University of Perpetual Help System DALTA",

    location: "Calamba, Laguna, Philippines",

    logo: ASSETS.daltaLogo,
  },

  {
    name: "Himalayan University",

    location: "Itanagar, Arunachal Pradesh, India",

    logo: ASSETS.himalayanLogo,
  },

  {
    name: "GLOBAL RESEARCH CONFERENCE FORUM",

    location: "International Academic Platform",

    logo: ASSETS.grcfLogo,
  },
];

const descriptions = [
  {
    title: "University of Batangas",

    bg: ASSETS.batangasBg,

    dark: true,

    text: "The University of Batangas, located along Governor Feliciano Leviste Road in Lipa City, Philippines, is a premier private institution of higher education known for its commitment to academic excellence, ethical leadership, and community service. With a proud legacy spanning decades, the university offers a wide range of undergraduate and graduate programs across diverse disciplines including Business, Engineering, Education, Law, Information Technology, and more.",

    url: "https://ub.edu.ph/",

    button: "Visit University",
  },

  {
    title: "University of Perpetual Help System DALTA",

    bg: ASSETS.daltaBg,

    text: "The University of Perpetual Help System DALTA is a distinguished private higher education institution committed to academic excellence, research, and community development. With campuses serving students in the Philippines, the university provides quality education across diverse fields and encourages graduates to become globally competitive, responsible, and service-oriented professionals.",

    url: "https://perpetualdalta.edu.ph/",

    button: "Visit University",
  },

  {
    title: "Himalayan University",

    bg: ASSETS.himalayanBg,

    text: "The Himalayan University is a leading multidisciplinary institution of higher education located in Itanagar, Arunachal Pradesh, India. Established with a vision to promote quality education, research, innovation, and community engagement, the University offers a wide range of undergraduate, postgraduate, diploma, and doctoral programs across diverse disciplines. Recognized by statutory bodies including UGC and other professional councils, Himalayan University is committed to fostering academic excellence, skill development, entrepreneurship, and holistic development of the North-Eastern region and the nation.",

    url: "https://www.himalayanuniversity.com/",

    button: "Visit University",
  },

  {
    title: "Global Research Conference Forum (GRCF)",

    bg: ASSETS.grcfBg,

    text: "The Global Research Conference Forum (GRCF) is an international academic platform committed to advancing multidisciplinary research, fostering global academic collaboration, and promoting innovation through high-impact conferences, workshops, and publications. Headquartered in India, GRCF has collaborated with esteemed universities and organizing events that bring together scholars, professionals, and students from diverse domains.",

    url: null,

    button: "Learn More",
  },
];

function Eyebrow({ children }) {
  return (
    <div className="mb-2 flex items-center gap-2 text-[11px] sm:text-[12px] font-[600] tracking-wide text-[#244668] uppercase">
      <span className="h-[3px] w-6 bg-[#ffb51d]" />

      {children}

      <span className="h-px w-6 bg-[#f1c46a]" />
    </div>
  );
}

function Heading({ children }) {
  return (
    <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[600] leading-tight tracking-tight text-[#082c53]">
      {children}
    </h2>
  );
}

function Gold({ children }) {
  return <span className="text-[#ffb21b]">{children}</span>;
}

export default function AboutSynergy2026() {
  const reduceMotion = useReducedMotion();

  const motionReveal = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : reveal;

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#0a2b4f]">
      {/* Hero: original page height and width preserved */}

      <section
        className="relative min-h-[360px] sm:min-h-[430px] lg:min-h-[470px] bg-[#061b39] bg-cover bg-center bg-no-repeat lg:bg-[length:100%_100%]"
        style={{
          backgroundImage: `url('${ASSETS.hero}')`,
        }}
      >
        <div className="relative mx-auto max-w-[1420px] px-4 pt-10 sm:px-6 sm:pt-14 lg:px-16 lg:pt-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={motionReveal}
            className="max-w-[520px] text-white"
          >
            <div className="mb-4 text-[13px] sm:text-[14px]">
              <Link to="/" className="hover:text-[#ffb51d]">
                Home
              </Link>
              <span className="mx-2">›</span>About
            </div>

            <h1 className="text-[36px] font-[600] leading-[1.1] sm:text-[42px] lg:text-[46px]">
              About <br /> SYNERGY <Gold>2026</Gold>
            </h1>

            <div className="mt-2 h-[4px] w-[70px] bg-[#ffb51d]" />

            <p className="mt-6 max-w-[400px] text-[13px] font-medium leading-6 text-white/95 sm:text-[14px] lg:text-[15px]">
              Bringing together global minds to drive interdisciplinary
              innovation for a sustainable and digital future.
            </p>
          </motion.div>
        </div>
      </section>

      <main>
        {/* Conference overview */}

        <section className="mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-8 px-4 py-7 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-9">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={motionReveal}
          >
            <Eyebrow>Conference Overview</Eyebrow>

            <Heading>
              About SYNERGY <Gold>2026</Gold>
            </Heading>

            <p className="mt-5 text-[13px] leading-6 sm:text-[14px]">
              SYNERGY 2026 brings together academicians, researchers,
              professionals, industry experts, and students from multiple
              disciplines to engage in meaningful dialogue and collaboration.
              The event focuses on interdisciplinary integration as a pathway to
              solve complex global challenges and drive sustainable innovation
              across sectors.
            </p>

            <p className="mt-4 text-[13px] leading-6 sm:text-[14px]">
              This two-day event fosters global collaboration,
              knowledge-sharing, and networking across Business, Humanities,
              Law, Criminal Justice, Science, Engineering, and Communication
              Technology.
            </p>

            <Link
              to="/conference"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ffb51d] px-6 py-3 text-[13px] font-[550] text-[#082c53] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffc74f] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#082c53]"
            >
              Learn More About the Conference <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={motionReveal}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={hoverTransition}
            className="group relative rounded-xl  p-0 sm:p-0 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(10,50,90,.12)]"
          >
            <img
              src={ASSETS.campus}
              alt="University of Batangas campus"
              className="h-[250px] w-full rounded-lg object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025] sm:h-[320px] lg:h-[350px]"
            />
          </motion.div>
        </section>

        {/* Why Synergy */}

        <section className="bg-[#eff8fe] py-4 lg:py-6">
          <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={motionReveal}
            >
              <Eyebrow>Our Vision</Eyebrow>

              <Heading>
                Why SYNERGY <Gold>2026?</Gold>
              </Heading>
            </motion.div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {vision.map(({ icon: Icon, title, description }, i) => (
                <motion.article
                  key={title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={motionReveal}
                  whileHover={
                    reduceMotion ? undefined : { y: -7, scale: 1.015 }
                  }
                  transition={hoverTransition}
                  className="group rounded-xl bg-white px-5 py-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-[0_14px_32px_rgba(10,50,90,.13)]"
                >
                  <div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-white ${i % 2 ? "bg-[#ffb51d]" : "bg-[#063761]"}`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="text-[14px] font-[600]">{title}</h3>

                  <p className="mt-2 text-[13px] leading-5">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Organizers */}

        <section className="mx-auto max-w-[1420px] px-4 py-4 sm:px-6 lg:px-16 lg:py-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={motionReveal}
          >
            <Eyebrow>Organizers</Eyebrow>

            <Heading>
              Our Organizing <Gold>Institutions</Gold>
            </Heading>
          </motion.div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutions.map((org) => (
              <motion.article
                key={org.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                variants={motionReveal}
                whileHover={reduceMotion ? undefined : { y: -7, scale: 1.012 }}
                transition={hoverTransition}
                className="group flex min-h-[225px] flex-col items-center rounded-xl border border-slate-100 bg-white p-5 text-center shadow-[0_5px_22px_rgba(10,50,90,.08)] transition-[box-shadow,border-color] duration-300 hover:border-[#ffb51d]/50 hover:shadow-[0_15px_35px_rgba(10,50,90,.15)]"
              >
                <img
                  src={org.logo}
                  alt={`${org.name} logo`}
                  className="mb-4 h-[85px] w-[95px] object-contain transition-transform duration-500 motion-safe:group-hover:scale-110"
                />

                <h3 className="text-[13px] font-[600] leading-5">{org.name}</h3>

                <p className="mt-2 text-[12px] leading-5 text-slate-600">
                  {org.location}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {descriptions.map((org) => (
              <motion.article
                key={org.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                variants={motionReveal}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={hoverTransition}
                className={`group relative isolate flex min-h-[300px] flex-col items-start overflow-hidden rounded-xl p-6 sm:p-8 ${org.dark ? "bg-[#052b4c] text-white" : "bg-[#eef6fc] text-[#082c53]"}`}
              >
                <div
                  className="absolute inset-0 -z-10 bg-cover bg-right bg-no-repeat opacity-30 transition-transform duration-700 motion-safe:group-hover:scale-105"
                  style={{ backgroundImage: `url('${org.bg}')` }}
                />

                <div
                  className={`absolute inset-0 -z-10 ${org.dark ? "bg-gradient-to-r from-[#052b4c] via-[#052b4c]/90 to-transparent" : "bg-gradient-to-r from-[#f5f9fc] via-[#f5f9fc]/90 to-transparent"}`}
                />

                <div className="mb-2 flex items-center gap-2 text-[11px] font-[600] uppercase">
                  <span className="h-[3px] w-6 bg-[#ffb51d]" />
                  About
                </div>

                <h3 className="max-w-[340px] text-[19px] font-[600] leading-tight sm:text-[21px]">
                  {org.title}
                </h3>

                <p className="mt-3 max-w-[490px] text-[12px] leading-[1.6] sm:text-[13px]">
                  {org.text}
                </p>

                {org.url ? (
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-[550] transition hover:scale-105 ${org.dark ? "bg-white text-[#052b4c]" : "bg-[#053b66] text-white"}`}
                  >
                    {org.button}

                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center gap-2 rounded-full bg-[#053b66] px-5 py-2 text-[12px] font-[550] text-white transition duration-300 hover:scale-105 hover:bg-[#07518a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb51d]"
                  >
                    {org.button}

                    <ArrowRight size={14} />
                  </Link>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* =====================================
    PUBLICATION PARTNER SECTION
===================================== */}

        <section className="bg-white py-6 sm:py-8">
          {/* Same alignment as other About page sections */}
          <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={motionReveal}
              className="
        relative
        flex
        w-full
        flex-col
        items-start
        gap-6
        overflow-hidden
        rounded-[14px]
        bg-[#eef8ff]
        bg-cover
        bg-center
        bg-no-repeat
        px-5
        py-6
        shadow-[0_8px_25px_rgba(10,40,90,0.08)]
        sm:px-8
        md:flex-row
        md:items-center
        lg:px-10
      "
              style={{
                backgroundImage: `url('${ASSETS.partnerBg}')`,
              }}
            >
              {/* Researcher Connect Logo */}
              <img
                src={ASSETS.researcherLogo}
                alt="Researcher Connect"
                className="
          h-24
          w-32
          shrink-0
          object-contain
          transition-transform
          duration-500
          motion-safe:hover:scale-105
        "
              />

              {/* Publication Partner Content */}
              <div className="relative z-10 min-w-0">
                <Eyebrow>Publication Partner</Eyebrow>

                <h2 className="text-[23px] font-[600] text-[#082c53]">
                  Researcher Connect
                </h2>

                <p className="mt-2 max-w-[860px] text-[13px] leading-5">
                  Researcher Connect Innovation and Impact Private Limited (RCI
                  Pvt. Ltd.) is a global organization committed to advancing
                  research, innovation, and academic excellence. Through
                  conferences, publications, training programs, and
                  international collaborations, RCI connects researchers,
                  academicians, industry professionals, and students to foster
                  knowledge sharing and create meaningful societal impact.
                </p>

                <Link
                  to="/contact"
                  className="
            mt-3
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#ffb51d]
            px-5
            py-2
            text-[12px]
            font-[550]
            text-[#082c53]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#ffc74f]
            hover:shadow-lg
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#082c53]
          "
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
