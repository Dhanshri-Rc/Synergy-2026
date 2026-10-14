import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { UserRound, ArrowRight, ChevronRight } from "lucide-react";

import committeeHero from "../assets/img/committeeBg.png";
import cta from "../assets/img/ideax-2026-committee-call-to-action-banner.webp";

// Committee profile images
import honLilyHernandezBohn from "../assets/img/Lily.png";
import joseTamayo from "../assets/img/joseAntony.png";
import prakashDivakaran from "../assets/img/prakash.png";

import auroraTolentino from "../assets/img/Aurora.png";
import pastorArguelles from "../assets/img/Pastor.png";
import marjorieGutierrezTangog from "../assets/img/Marjorie.png";
import ernestoRamirez from "../assets/img/Ernesto.png";

import michelleMalsi from "../assets/img/Michelle.png";
import jeffersonLitan from "../assets/img/jeffersonLitan.png";
import arunChainit from "../assets/img/arunChainit.png";
import chaiwatPhuakkhong from "../assets/img/chaiwatPhuakkhong.png";

import dharmeshDhabliya from "../assets/img/dharmeshDabliya.png";
import gireshKumar from "../assets/img/gireshKumar.png";
import jpBhosale from "../assets/img/jpBhosale.png";
import nKrishnakumar from "../assets/img/Krishnakumar.png";
import sureshMadhusudhanan from "../assets/img/sureshMadhusudhanan.png";
import arunTarofder from "../assets/img/arunTarofder.png";
import ferdousAzam from "../assets/img/ferdousAzam.png";
import shibuDharmarajan from "../assets/img/shibuDharmarajan.png";
// import juneDsouza from "../assets/committee/june_dsouza.png";
// import krishnaraj from "../assets/committee/krishnaraj.png";
// import muthukumar from "../assets/committee/muthukumar.png";
// import cholaraja from "../assets/committee/cholaraja.png";
// import kailashKarande from "../assets/committee/kailash_karande.png";
// import varunDev from "../assets/committee/varun_dev.png";
// import bhavanaRao from "../assets/committee/bhavana_rao.png";

// ==================================================
// COMMITTEE MEMBER DATA
// ==================================================

const committeeSections = [
  {
    title: "Chief Patrons",
    description:
      "Our Chief Patrons provide vision, guidance and support for SYNERGY 2026.",
    columns: 3,
    members: [
      {
        name: "Hon. Lily Marlene J. Hernandez-Bohn",
        role: "University President",
        organization: "University of Batangas",
        country: "Philippines",
        image: honLilyHernandezBohn,
      },
      {
        name: "Dr. Jose Antony M. Tamayo",
        role: "President",
        organization: "University of Perpetual Help System DALTA",
        country: "Philippines",
        image: joseTamayo,
      },
      {
        name: "Prof. Dr. Prakash Divakaran",
        role: "Vice-Chancellor",
        organization: "Himalayan University",
        country: "India",
        image: prakashDivakaran,
      },
    ],
  },
  {
    title: "Conference Chair",
    description:
      "The Conference Chair oversees the academic program and ensures the successful execution of SYNERGY 2026.",
    columns: 1,
    members: [
      {
        name: "Dr. N. Krishnakumar",
        role: "Conference Chairman",
        organization: "Kerala Legislative Assembly",
        country: "India",
        image: nKrishnakumar,
      },
    ],
  },
  {
    title: "Co-Chairs",
    description:
      "Our Co-Chairs support the Conference Chair in academic and organizational responsibilities.",
    columns: 3,
    members: [
      {
        name: "Dr. Ernesto Arlene V. Ramirez",
        role: "Co-Chair, SYNERGY 2026",
        organization:
          "University of Perpetual Help System DALTA, Calamba Campus",
        country: "Philippines",
        image: ernestoRamirez,
      },
    ],
  },
  {
    title: "Organizing Committee",
    description:
      "The Organizing Committee manages the overall planning, coordination and smooth conduct of the conference.",
    columns: 4,
    members: [
      {
        name: "Dr. Pastor R. Arguelles Jr.",
        role: "Chairperson; Director, Research and Publication Office",
        organization: "University of Batangas",
        country: "Philippines",
        image: pastorArguelles,
      },
      {
        name: "Dr. Aurora P. Tolentino",
        role: "Vice President for Academic Affairs",
        organization: "University of Batangas",
        country: "Philippines",
        image: auroraTolentino,
      },
      {
        name: "Dr. Marjorie Gutierrez-Tangog",
        role: "Executive Vice President",
        organization: "University of Perpetual Help System DALTA",
        country: "Philippines",
        image: marjorieGutierrezTangog,
      },
      {
        name: "Mrs. Michelle M. Malsi",
        role: "Assistant to the Chair, Research and Publication Office",
        organization: "University of Batangas",
        country: "Philippines",
        image: michelleMalsi,
      },
      {
        name: "Mr. Jefferson M. Litan",
        role: "Director, SYNERGY 2026",
        organization: "University of Batangas, Lipa Campus",
        country: "Philippines",
        image: jeffersonLitan,
      },
      {
        name: "Dr. Arun Chainit",
        role: "Assistant Professor & Member of Council",
        organization: "Phranakhon Rajabhat University",
        country: "Thailand",
        image: arunChainit,
      },
      {
        name: "Prof. Dr. Chaiwat Phuakkhong",
        role: "Associate Professor",
        organization: "Suratthani Rajabhat University",
        country: "Thailand",
        image: chaiwatPhuakkhong,
      },
      {
        name: "Dr. Dharmesh Dhabliya",
        role: "Founder & CEO",
        organization: "Research Connect",
        country: "India",
        image: dharmeshDhabliya,
      },
      {
        name: "Dr. Giresh Kumar",
        role: "Conference Co-Director",
        organization: "Central University of Kerala",
        country: "India",
        image: gireshKumar,
      },
      {
        name: "Dr. J. P. Bhosale",
        role: "Conference Patron; Professor & Head Research",
        organization: "Gramonnati Mandal's ACS College, Pune",
        country: "India",
        image: jpBhosale,
      },
    ],
  },
  {
    title: "International Advisory Committee",
    description:
      "Our International Advisory Committee comprises distinguished academicians and experts from across the globe.",
    columns: 4,
    members: [
      {
        name: "Dr. Suresh Kumar Madhusudhanan",
        role: "Advisory Member",
        organization: "Seagull Group of Companies",
        country: "India",
        image: sureshMadhusudhanan,
      },
      {
        name: "Dr. Arun Kumar Tarofder",
        role: "Professor, Graduate School of Management",
        organization: "Management & Science University",
        country: "Malaysia",
        image: arunTarofder,
      },
      {
        name: "Dr. S. M. Ferdous Azam",
        role: "Associate Professor",
        organization: "Management & Science University",
        country: "Malaysia",
        image: ferdousAzam,
      },
      {
        name: "Dr. Shibu Dharmarajan",
        role: "Advisory Member",
        organization: "Assumption University",
        country: "Thailand",
        image: shibuDharmarajan,
      },
      //     {
      //       name: "Dr. June Bernadette D’Souza",
      //       role: "Advisory Member",
      //       organization: "Christ Church",
      //       country: "New Zealand",
      //       image: juneDsouza,
      //     },
      //     {
      //       name: "Dr. Krishnaraj V.",
      //       role: "Assistant Professor",
      //       organization: "Karnataka State Open University, Mysore",
      //       country: "India",
      //       image: krishnaraj,
      //     },
      //   ],
      // },
      // {
      //   title: "National Advisory Board",
      //   description:
      //     "The National Advisory Board brings together academic and professional experts from institutions across India.",
      //   columns: 4,
      //   members: [
      //     {
      //       name: "Dr. M. Muthukumar",
      //       role: "Advisory Member",
      //       organization: "Madurai Kamaraj University",
      //       country: "India",
      //       image: muthukumar,
      //     },
      //     {
      //       name: "Dr. Cholaraja M.",
      //       role: "Assistant Professor",
      //       organization: "Campus Law Centre, University of Delhi",
      //       country: "India",
      //       image: cholaraja,
      //     },
      //     {
      //       name: "Dr. Kailash J. Karande",
      //       role: "Director & Principal",
      //       organization: "SKN Sinhgad College of Engineering",
      //       country: "India",
      //       image: kailashKarande,
      //     },
      //     {
      //       name: "Adv. Varun Dev S.",
      //       role: "Research Officer and Assistant Professor",
      //       organization:
      //         "Centre for Advanced Legal Studies and Research, Kerala Law Academy",
      //       country: "India",
      //       image: varunDev,
      //     },
      //     {
      //       name: "Dr. N. Krishnakumar",
      //       role: "Conference Chairman",
      //       organization: "Kerala Legislative Assembly",
      //       country: "India",
      //       image: nKrishnakumar,
      //     },
      //     {
      //       name: "Dr. B. Bhavana Rao",
      //       role: "Advisory Member",
      //       organization: "UPES, Dehradun",
      //       country: "India",
      //       image: bhavanaRao,
      //     },
    ],
  },
];

// ==================================================
// ANIMATION VARIANTS
// ==================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const noMotion = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const springTransition = {
  type: "spring",
  stiffness: 250,
  damping: 23,
};

// ==================================================
// COMMITTEE MEMBER CARD
// ==================================================

function MemberCard({ member, reduceMotion }) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <motion.article
      variants={reduceMotion ? noMotion : fadeUp}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              scale: 1.015,
            }
      }
      transition={springTransition}
      className="
        group
        flex
        min-h-[185px]
        w-full
        min-w-0
        flex-col
        items-center
        justify-start
        rounded-[14px]
        border
        border-[#E8EEF8]
        bg-white
        px-4
        py-5
        text-center
        shadow-[0_7px_22px_rgba(10,40,90,0.07)]
        transition-[box-shadow,border-color]
        duration-300
        hover:border-[#FFB51D]/60
        hover:shadow-[0_18px_38px_rgba(10,50,100,0.15)]
      "
    >
      
{/* Profile Image */}

<motion.div
  whileHover={
    reduceMotion
      ? undefined
      : {
          scale: 1.08,
        }
  }
  transition={springTransition}
  className="
    mb-4
    flex
    h-[110px]
    w-[110px]
    shrink-0
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border-2
    border-[#F3C76D]
    bg-gradient-to-b
    from-[#F3F5F7]
    to-[#E2E7ED]
    shadow-[0_5px_15px_rgba(0,0,0,0.10)]
    sm:h-[120px]
    sm:w-[120px]
    lg:h-[130px]
    lg:w-[130px]
  "
>
  {member.image && !photoFailed ? (
    <img
      src={member.image}
      alt={`${member.name} profile`}
      loading="lazy"
      decoding="async"
      onError={() => setPhotoFailed(true)}
      className="
        h-full
        w-full
        rounded-full
        object-cover
        object-center
        transition-transform
        duration-500
        motion-safe:group-hover:scale-110
      "
    />
  ) : (
    <UserRound
      size={58}
      strokeWidth={1.45}
      className="text-[#9DA8B3]"
    />
  )}
</motion.div>


      {/* Name */}

      <h3
        className="
          max-w-full
          break-words
          text-[13px]
          font-semibold
          leading-[1.4]
          text-[#1762B8]
          transition-colors
          duration-300
          group-hover:text-[#06407D]
          sm:text-[14px]
        "
      >
        {member.name}
      </h3>

      {/* Role */}

      <p
        className="
          mt-1
          text-[12px]
          font-medium
          leading-5
          text-[#081B40]
        "
      >
        {member.role}
      </p>

      {/* Organization */}

      {member.organization && (
        <p
          className="
            mt-1
            max-w-[230px]
            text-[12px]
            leading-[1.5]
            text-[#41577A]
          "
        >
          {member.organization}
        </p>
      )}

      {/* Country */}

      {member.country && (
        <p className="text-[12px] leading-[1.5] text-[#41577A]">
          {member.country}
        </p>
      )}
    </motion.article>
  );
}

// ==================================================
// COMMITTEE SECTION
// ==================================================

function CommitteeSection({ section, reduceMotion }) {
  const isChair = section.columns === 1;

  const gridClass =
    section.columns === 4
      ? "lg:grid-cols-4"
      : section.columns === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-1";

  const variants = reduceMotion ? noMotion : fadeUp;

  return (
    <section
      className={`
        relative
        py-5
        sm:py-6
        ${isChair ? "bg-[#F1F8FF]" : "bg-transparent"}
      `}
    >
      {/* Chair Section Background */}

      {isChair && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-[#F5FAFF]
            via-[#EFF7FF]
            to-[#DFEEFF]
          "
        />
      )}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1340px]
          px-5
          sm:px-8
          lg:px-16
        "
      >
        {/* Section Heading */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={variants}
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-[3px]
                w-[23px]
                shrink-0
                rounded-full
                bg-[#FFB51D]
              "
            />

            <h2
              className="
                text-[21px]
                font-semibold
                leading-tight
                text-[#09254B]
                sm:text-[24px]
                lg:text-[26px]
              "
            >
              {section.title}
            </h2>
          </div>

          <p
            className="
              mt-2
              text-[12px]
              font-medium
              leading-6
              text-[#415678]
              sm:text-[13px]
            "
          >
            {section.description}
          </p>
        </motion.div>

        {/* Members Grid */}

        <motion.div
          variants={reduceMotion ? noMotion : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className={`
            mt-5
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            ${gridClass}
            ${isChair ? "mx-auto max-w-[360px] sm:grid-cols-1" : ""}
          `}
        >
          {section.members.map((member, index) => (
            <MemberCard
              key={`${section.title}-${index}`}
              member={member}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ==================================================
// MAIN COMMITTEE PAGE
// ==================================================

export default function Committee() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion ? noMotion : fadeUp;

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-white
        font-sans
        text-[#07113F]
      "
    >
      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section
        className="
          relative
          min-h-[360px]
          bg-[#031631]
          bg-cover
          bg-center
          bg-no-repeat
          sm:min-h-[430px]
          lg:min-h-[470px]
          lg:bg-[length:100%_100%]
        "
        style={{
          backgroundImage: `
            url("${committeeHero}")
          `,
        }}
      >
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[360px]
            max-w-[1420px]
            items-center
            px-5
            py-6
            sm:min-h-[430px]
            sm:px-8
            lg:min-h-[460px]
            lg:px-16
          "
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            className="max-w-[560px]"
          >
            {/* Breadcrumb */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-2
                text-[13px]
                font-medium
                text-white/90
              "
            >
              <Link
                to="/"
                className="
                  transition-colors
                  duration-300
                  hover:text-[#FFB51D]
                "
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <span>Committee</span>
            </div>

            {/* Hero Title */}

            <h1
              className="
                text-[36px]
                font-[600]
                leading-none
                sm:text-[42px]
                lg:text-[46px]
              "
            >
              <span className="block text-white">Conference</span>

              <span className="block text-[#FFB51D]">Committee</span>
            </h1>

            {/* Accent Line */}

            <div
              className="
                mt-4
                flex
                h-[4px]
                w-[70px]
                overflow-hidden
                rounded-full
              "
            >
              <span className="w-[55%] bg-[#FFB51D]" />
              <span className="w-[45%] bg-[#83A2C0]" />
            </div>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[350px]
                text-[15px]
                font-medium
                leading-[1.75]
                text-white/95
              "
            >
              SYNERGY 2026 is guided by an esteemed committee of academicians,
              researchers, and industry experts from diverse disciplines and
              countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          COMMITTEE SECTIONS
      ===================================== */}

      <div
        className="
          bg-gradient-to-b
          from-[#FFFFFF]
          via-[#F7FBFF]
          to-[#FFFFFF]
        "
      >
        {committeeSections.map((section) => (
          <CommitteeSection
            key={section.title}
            section={section}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* =====================================
    REGISTRATION CTA
===================================== */}

      <section className="bg-white py-6 sm:py-8">
        {/* Same container alignment as other sections */}
        <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={reveal}
            className="
        relative
        flex
        min-h-[135px]
        w-full
        flex-col
        items-start
        justify-between
        gap-5
        overflow-hidden
        rounded-[14px]
        bg-[#041B43]
        px-5
        py-6
        text-white
        shadow-[0_10px_30px_rgba(10,40,90,0.12)]
        sm:px-8
        lg:flex-row
        lg:items-center
        lg:px-10
      "
            style={{
              backgroundImage: `
          linear-gradient(
            90deg,
            rgba(1,18,49,0.94) 0%,
            rgba(1,18,49,0.65) 48%,
            rgba(1,18,49,0.12) 100%
          ),
          url("${cta}")
        `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* CTA Text */}
            <div className="relative z-10 w-full lg:w-auto">
              <h2 className="text-[22px] font-semibold leading-tight sm:text-[25px] lg:text-[28px]">
                Be a Part of{" "}
                <span className="text-[#FFB51D]">SYNERGY 2026</span>
              </h2>

              <p className="mt-2 max-w-[520px] text-[12px] leading-5 text-white/90 sm:text-[13px]">
                Join global experts, researchers and innovators for meaningful
                discussions and collaboration.
              </p>
            </div>

            {/* Register Button */}
            <Link
              to="/registration"
              className="
          group
          relative
          z-10
          inline-flex
          min-h-[44px]
          shrink-0
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#FFB51D]
          px-7
          py-3
          text-[12px]
          font-semibold
          text-[#082C53]
          shadow-[0_8px_22px_rgba(255,181,29,0.18)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#FFCA4F]
          hover:shadow-[0_14px_30px_rgba(255,181,29,0.25)]
        "
            >
              Register Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
