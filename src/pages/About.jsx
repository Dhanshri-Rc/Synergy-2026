import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  hero: "/src/assets/img/aboutBg.png",
  campus: "/src/assets/img/universityBatangas.png",
  batangasLogo: "/src/assets/img/batangasUniversityLogo.png",
  daltaLogo: "/src/assets/img/universityofPerpetual.png",
  himalayanLogo: "/src/assets/img/himalayanUniversity.png",
  grcfLogo: "/src/assets/img/globalResearch.png",
  researcherLogo: "/src/assets/img/researcherConnectLogo.png",
  batangasBg: "/src/assets/img/batangas-building.webp",
  daltaBg: "/src/assets/img/perpetual-help-building.webp",
  himalayanBg: "/src/assets/img/himalayan-university-building.webp",
  grcfBg: "/src/assets/img/grcf-network.webp",
  partnerBg: "/src/assets/img/researcher-connect-banner.webp",
};

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
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
    <div className="mb-2 flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-wide text-[#244668] uppercase">
      <span className="h-[3px] w-6 bg-[#ffb51d]" />
      {children}
      <span className="h-px w-6 bg-[#f1c46a]" />
    </div>
  );
}
function Heading({ children }) {
  return (
    <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-tight tracking-tight text-[#082c53]">
      {children}
    </h2>
  );
}
function Gold({ children }) {
  return <span className="text-[#ffb21b]">{children}</span>;
}

export default function AboutSynergy2026() {
  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-[#0a2b4f]">
      {/* Hero: original page height and width preserved */}
      <section
        className="relative min-h-[450px] sm:min-h-[450px] lg:min-h-[570px] bg-[#061b39] bg-cover bg-center bg-no-repeat lg:bg-[length:100%_100%]"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(1,17,44,.76),rgba(1,17,44,.15)),url('${ASSETS.hero}')`,
        }}
      >
        <div className="relative mx-auto max-w-[1420px] px-4 pt-10 sm:px-6 sm:pt-14 lg:px-16 lg:pt-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            className="max-w-[520px] text-white"
          >
            <div className="mb-4 text-[13px] sm:text-[14px]">
              <Link to="/" className="hover:text-[#ffb51d]">
                Home
              </Link>
              <span className="mx-2">›</span>About
            </div>
            <h1 className="text-[36px] font-bold leading-[1.1] sm:text-[48px] lg:text-[50px]">
              About SYNERGY <Gold>2026</Gold>
            </h1>
            <div className="mt-5 h-[4px] w-[70px] bg-[#ffb51d]" />
            <p className="mt-6 max-w-[460px] text-[13px] font-medium leading-6 text-white/95 sm:text-[14px] lg:text-[15px]">
              Bringing together global minds to drive interdisciplinary
              innovation for a sustainable and digital future.
            </p>
          </motion.div>
        </div>
      </section>

      <main>
        {/* Conference overview */}
        <section className="mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
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
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ffb51d] px-6 py-3 text-[13px] font-bold text-[#082c53] transition hover:-translate-y-1 hover:bg-[#ffc74f]"
            >
              Learn More About the Conference <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="relative rounded-xl bg-[#fff7eb] p-3 sm:p-5"
          >
            <img
              src={ASSETS.campus}
              alt="University of Batangas campus"
              className="h-[250px] w-full rounded-lg object-cover sm:h-[320px] lg:h-[350px]"
            />
          </motion.div>
        </section>

        {/* Why Synergy */}
        <section className="bg-[#eff8fe] py-12 lg:py-16">
          <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-16">
            <Eyebrow>Our Vision</Eyebrow>
            <Heading>
              Why SYNERGY <Gold>2026?</Gold>
            </Heading>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {vision.map(({ icon: Icon, title, description }, i) => (
                <motion.article
                  key={title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                  className="rounded-xl bg-white px-5 py-7 text-center shadow-sm"
                >
                  <div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-white ${i % 2 ? "bg-[#ffb51d]" : "bg-[#063761]"}`}
                  >
                    <Icon size={30} />
                  </div>
                  <h3 className="text-[14px] font-bold">{title}</h3>
                  <p className="mt-2 text-[13px] leading-5">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Organizers */}
        <section className="mx-auto max-w-[1420px] px-4 py-12 sm:px-6 lg:px-16 lg:py-16">
          <Eyebrow>Organizers</Eyebrow>
          <Heading>
            Our Organizing <Gold>Institutions</Gold>
          </Heading>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutions.map((org) => (
              <motion.article
                key={org.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={reveal}
                whileHover={{ y: -5 }}
                className="flex min-h-[225px] flex-col items-center rounded-xl border border-slate-100 bg-white p-5 text-center shadow-[0_5px_22px_rgba(10,50,90,.08)]"
              >
                <img
                  src={org.logo}
                  alt={`${org.name} logo`}
                  className="mb-4 h-[85px] w-[95px] object-contain"
                />
                <h3 className="text-[13px] font-bold leading-5">{org.name}</h3>
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
                viewport={{ once: true }}
                variants={reveal}
                className={`relative isolate flex min-h-[300px] flex-col items-start overflow-hidden rounded-xl p-6 sm:p-8 ${org.dark ? "bg-[#052b4c] text-white" : "bg-[#eef6fc] text-[#082c53]"}`}
              >
                <div
                  className="absolute inset-0 -z-10 bg-cover bg-right bg-no-repeat opacity-30"
                  style={{ backgroundImage: `url('${org.bg}')` }}
                />
                <div
                  className={`absolute inset-0 -z-10 ${org.dark ? "bg-gradient-to-r from-[#052b4c] via-[#052b4c]/90 to-transparent" : "bg-gradient-to-r from-[#f5f9fc] via-[#f5f9fc]/90 to-transparent"}`}
                />
                <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase">
                  <span className="h-[3px] w-6 bg-[#ffb51d]" />
                  About
                </div>
                <h3 className="max-w-[340px] text-[19px] font-bold leading-tight sm:text-[21px]">
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
                    className={`mt-auto inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold transition hover:scale-105 ${org.dark ? "bg-white text-[#052b4c]" : "bg-[#053b66] text-white"}`}
                  >
                    {org.button}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center gap-2 rounded-full bg-[#053b66] px-5 py-2 text-[12px] font-bold text-white transition hover:scale-105"
                  >
                    {org.button}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* Publication partner */}
        <section
          className="bg-[#eef8ff] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(238,248,255,.98),rgba(238,248,255,.7)),url('${ASSETS.partnerBg}')`,
          }}
        >
          <div className="mx-auto flex max-w-[1420px] flex-col items-start gap-6 px-4 py-9 sm:px-6 md:flex-row md:items-center lg:px-16">
            <img
              src={ASSETS.researcherLogo}
              alt="Researcher Connect"
              className="h-24 w-32 shrink-0 object-contain"
            />
            <div>
              <Eyebrow>Publication Partner</Eyebrow>
              <h2 className="text-[23px] font-bold text-[#082c53]">
                Researcher Connect
              </h2>
              <p className="mt-2 max-w-[860px] text-[13px] leading-5">
                Researcher Connect Innovation and Impact Private Limited (RCI
                Pvt. Ltd.) is a global organization committed to advancing
                research, innovation, and academic excellence. Through
                conferences, publications, training programs, and international
                collaborations, RCI connects researchers, academicians, industry
                professionals, and students to foster knowledge sharing and
                create meaningful societal impact.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ffb51d] px-5 py-2 text-[12px] font-bold text-[#082c53] hover:bg-[#ffc74f]"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
