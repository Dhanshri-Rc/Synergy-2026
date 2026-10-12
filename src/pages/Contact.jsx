import { useState } from "react";
import {
  Calendar, MapPin, Laptop, Mail, Phone, Globe2, Share2,
  ChevronDown, Send, Navigation, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Facebook, Youtube } from "../components/SocialIcons";
import { contactAPI } from "../services/api";
import contactHero from "../assets/hero/ideax-2026-contact-page-banner.webp";
import cta from "../assets/hero/ideax-2026-about-call-to-action-banner.webp"

const META = [
  { icon: Calendar, title: "10 – 12", subtitle: "December, 2026", color: "text-[#2563EB]" },
  { icon: MapPin, title: "Singapore,", subtitle: "Asia", color: "text-[#FF8A00]" },
  { icon: Laptop, title: "Hybrid", subtitle: "(In-person & Online)", color: "text-[#22C55E]" },
];

const CONTACT_CARDS = [
  { icon: MapPin, color: "bg-[#2563EB] text-white", title: "Conference Secretariat", lines: ["IDEAX 2026 Conference Office", "123 Innovation Drive, #05-01", "Singapore 138602"] },
  { icon: Mail, color: "bg-[#f7872b] text-white", title: "Email Us", lines: ["General Inquiries", "submit@innovationconference.com"] },
  { icon: Phone, color: "bg-[#089b34] text-white", title: "Call Us", lines: ["+91-9890917528", "(Mon – Fri, 9:00 AM – 6:00 PM SGT)"] },
  { icon: Globe2, color: "bg-[#7812d2] text-white", title: "Website", lines: ["www.ideax-conference.org"] },
];

const FAQS = [
  "How can I register for IDEAX 2026?",
  "What is the mode of the conference?",
  "Will the sessions be recorded?",
  "Can I present my paper virtually?",
  "What is included in the registration?",
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  return (
    <main className="overflow-hidden bg-white text-[#07113F]">
      

      <section
        className="relative min-h-[480px] bg-cover bg-center bg-no-repeat sm:min-h-[430px] lg:min-h-[500px] lg:bg-[length:100%_100%]"
        style={{
          backgroundImage: `url(${contactHero})`,
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[1420px] items-center px-5 py-6 sm:min-h-[460px] sm:px-8 lg:min-h-[530px] lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-[560px]"
          >
            {/* Breadcrumb */}
            <div className="mb-8 sm:-mt-10 flex items-center gap-2 text-[13px] font-semibold text-black/80">
              <Link to="/" className="transition hover:text-[#13B5FF]">
                Home
              </Link>
              <span className="text-black">›</span>
              <Link to="/contact" className="font-semibold text-[#13B5FF] text-[13px]">
                Contact Us
              </Link>
            </div>
      
            <h1 className="text-[40px] font-[600] leading-[1.02] text-black sm:text-[46px] lg:text-[47px]">
              We’re Here{" "} <br />
              <span className="bg-gradient-to-r from-[#2cb2ef] to-[#493af3] bg-clip-text text-transparent">
                to Help You
              </span>
            </h1>
            <div className="mt-4 flex h-[4px] w-[70px] overflow-hidden rounded-full">
              <span className="w-[55%] bg-[#13B5FF]" />
              <span className="w-[45%] bg-[#FFC21A]" />
            </div>
      
            <p className="mt-7 max-w-[390px] text-[15px] font-medium leading-[1.75] text-black/90">
           Have a question or need assistance? Reach out to our team and we'll get back to you as soon as possible.
            </p>
            <div className="mt-7 flex flex-wrap gap-6">
              {META.map(({ icon: Icon, title, subtitle, color }) => (
                <div key={title} className="flex items-center gap-2">
                  <Icon size={28} className= {color} />
                  <div>
                    <p className="text-[13px] font-bold">{title}</p>
                    <p className="text-[11px] font-semibold text-[#1F2A44]/65">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      
      
      </section>

    <section className="px-5 py-10 sm:px-8 lg:px-16 ">
  <div className="mx-auto grid max-w-[1340px] grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
    
    {/* Contact Information */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      <p className="text-[14px] font-semibold uppercase text-[#2563EB]">
        Get in Touch
      </p>
   <div className=" mt-1 flex h-[4px] w-[85px] mx-1 items-center justify-between">
        <span className="h-[7px] w-[7px] rounded-full bg-[#2563EB]" />
        <span className="h-[3px] w-[36px] bg-[#C7D8FF]" />
        <span className="h-[3px] w-[24px] bg-[#2563EB]" />
        <span className="h-[3px] w-[24px] bg-[#FFC21A]" />
        <span className="h-[3px] w-[36px] bg-[#C7D8FF]" />

        <span className="h-[7px] w-[7px] rounded-full bg-[#2563EB]" />
      </div>
      <h2 className="mt-3 text-[26px] font-semibold leading-tight text-[#07113F]">
        Contact Information
      </h2>

    

      <p className="mt-3 max-w-[350px] text-[13px] font-medium leading-relaxed text-[#1F2A44]/80">
        Our team is ready to assist you with any inquiries related to IDEAX 2026.
      </p>

      <div className="mt-3 space-y-2.5">
        {CONTACT_CARDS.map(({ icon: Icon, color, title, lines }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="flex items-start gap-6 rounded-[10px] border border-[#E1E9F6] bg-white p-4 shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#C7D8FF] hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]"
          >
            <span
              className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full ${color}`}
            >
              <Icon size={20} />
            </span>

            <div className="min-w-0">
              <h3 className="text-[14px] font-semibold text-[#07113F]">
                {title}
              </h3>

              {lines.map((l) => (
                <p
                  key={l}
                  className="break-words text-[12px] font-medium leading-[1.55] text-[#1F2A44]/70"
                >
                  {l}
                </p>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          whileHover={{ y: -5, scale: 1.01 }}
          className="flex items-start gap-6 rounded-[10px] border border-[#E1E9F6] bg-white p-4 shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#C7D8FF] hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]"
        >
          <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full text-[#EEF4FF] bg-[#2563EB]">
            <Share2 size={20} />
          </span>

          <div>
            <h3 className="mb-2 text-[14px] font-semibold text-[#07113F]">
              Follow Us
            </h3>

            <div className="flex gap-2">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e6eaf2] text-[#2863e1] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2563EB] hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Contact Form */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="rounded-[12px] border border-[#E1E9F6] bg-[#F8FBFF] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-7"
    >
      <h3 className="text-[26px] font-semibold text-[#07113F]">
        Send Us a Message
      </h3>

      <p className="mt-3 text-[13px] font-medium text-[#1F2A44]/70">
        Fill in the form below and we will get back to you shortly.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!form.name || !form.email || !form.subject || !form.message) {
            alert("Please fill all required fields.");
            return;
          }

          setSubmitting(true);
          try {
            await contactAPI.send(form);
            alert("Message sent successfully!");
            setForm({ name: "", email: "", subject: "", message: "" });
          } catch (err) {
            alert(err.message || "Failed to send message. Please try again.");
          } finally {
            setSubmitting(false);
          }
        }}
        className="mt-8 space-y-6"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Full Name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Field
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div>
          <label className="mb-2 block text-[12px] font-bold text-[#07113F]">
            Subject <span className="text-red-500">*</span>
          </label>

          <select
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="h-[46px] w-full rounded-[6px] border border-[#D9E3F2] bg-white px-4 text-[12px] font-medium text-[#1F2A44]/70 outline-none transition focus:border-[#2563EB]"
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Registration Support">Registration Support</option>
            <option value="Paper Submission">Paper Submission</option>
            <option value="Sponsorship">Sponsorship</option>
          </select>
        </div>

        <div>
          <label className="mb-3 block text-[12px] font-bold text-[#07113F]">
            Message <span className="text-red-500">*</span>
          </label>

          <textarea
            required
            rows={7}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Type your message here..."
            className="w-full resize-none rounded-[6px] border border-[#D9E3F2] bg-white px-4 py-3 text-[12px] font-medium outline-none transition focus:border-[#2563EB]"
          />
        </div>

        <label className="flex items-start gap-2 text-[12px] font-medium text-[#1F2A44]/70">
          <input required type="checkbox" className="mt-0.5" />
          <span>
            I agree to the{" "}
            <a href="#" className="text-[#2563EB]">
              privacy policy
            </a>{" "}
            and consent to the processing of my data.
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-[42px] items-center gap-3 rounded-[6px] bg-[#2563EB] px-6 text-[11px] font-bold uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2f3ec6] hover:text-[#ebecf0] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {submitting ? "Sending..." : "Send Message"} <Send size={14} />
        </button>
      </form>
    </motion.div>
  </div>
</section>

   <section className="px-5 pb-8 sm:px-8 lg:px-16">
  <div className="mx-auto grid max-w-[1340px] grid-cols-1 gap-5 lg:grid-cols-2">

    {/* FIND US */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="overflow-hidden rounded-[12px] border border-[#DCE8FA] bg-[#F8FBFF] shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
    >
      <h3 className="px-5 py-4 text-[14px] font-semibold uppercase text-[#2563EB]">
        Find Us
      </h3>

      <div className="relative h-[295px] overflow-hidden bg-[#EEF4FF]">
        <iframe
          title="Singapore Map"
          className="h-full w-full"
          loading="lazy"
          src="https://maps.google.com/maps?q=Singapore&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />

      
      </div>

     
    </motion.div>

    {/* FAQ */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="rounded-[12px] border border-[#DCE8FA] bg-[#F8FBFF] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
    >
      <h3 className="mb-4 text-[14px] font-semibold uppercase text-[#2563EB]">
        Frequently Asked Questions
      </h3>

      {FAQS.map((faq, i) => (
        <div key={faq} className="border-b border-[#DCE8FA] last:border-b-0">
          <button
            type="button"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left text-[13px] font-semibold text-[#07113F] transition-all duration-300 "
          >
            <span>{faq}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-[#2563EB] transition-transform duration-300 ${
                openFaq === i ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {openFaq === i && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden pb-4 text-[12px] font-medium leading-relaxed text-[#1F2A44]/70"
              >
                Details will be updated soon. Please contact the IDEAX 2026 team
                for more information.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}

     
    </motion.div>
  </div>
</section>

     <section className="bg-white px-5 pb-7 sm:px-8 lg:px-16">
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className="relative mx-auto flex max-w-[1340px] flex-col items-start justify-between gap-5 overflow-hidden rounded-[10px] px-6 py-6 text-white shadow-[0_14px_35px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:px-10"
  >
    <img
      src={cta}
      alt="CTA Background"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div className="relative z-10 flex w-full items-center gap-4 sm:w-auto">
      <motion.span
        whileHover={{ scale: 1.1, rotate: -8 }}
        className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#005BFF]"
      >
        <Send size={26} className="text-white" />
      </motion.span>

      <div>
        <h3 className="text-[18px] font-semibold leading-tight sm:text-[20px]">
          Stay Connected. Stay Informed.
        </h3>

        <p className="mt-2 max-w-[400px] text-[12px] font-medium leading-[1.55] text-white/85 sm:text-[13px]">
          Subscribe to our newsletter and never miss an update about IDEAX 2026.
        </p>
      </div>
    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Subscribed successfully!");
      }}
      className="relative z-10 flex w-full overflow-hidden rounded-[6px] bg-white sm:w-auto"
    >
      <input
        required
        type="email"
        placeholder="Enter your email"
        className="h-[44px] min-w-0 flex-1 px-4 text-[12px] font-medium text-[#07113F] outline-none placeholder:text-[#6B7280] sm:w-[300px]"
      />

      <button
        type="submit"
        className="inline-flex h-[44px] shrink-0 items-center justify-center gap-2 bg-[#FFC21A] px-5 text-[11px] font-bold uppercase text-[#07113F] transition-all duration-300 hover:bg-[#FFD34D] sm:px-6"
      >
        Subscribe <ArrowRight size={15} />
      </button>
    </form>
  </motion.div>
</section>
    </main>
  );
}

function Field({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-bold text-[#07113F]">
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-[46px] w-full rounded-[6px] border border-[#D9E3F2] bg-white px-4 text-[12px] font-medium outline-none transition focus:border-[#2563EB]"
      />
    </div>
  );
}