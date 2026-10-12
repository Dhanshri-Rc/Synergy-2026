import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  FileSignature,
  FolderOpen,
  UserCircle,
  Mail,
  Bell,
  FileEdit,
  Search,
  Copyright,
  Clock,
  CheckCircle2,
  XCircle,
  Calendar,
  Headphones,
  Megaphone,
  ClipboardList,
  Users,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { submissionAPI } from "../../services/api";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const STATUS_STYLES = {
  "Under Review": "bg-orange-100 text-orange-600",
  "Decision Pending": "bg-amber-100 text-amber-700",
  Accepted: "bg-green-100 text-green-600",
  Rejected: "bg-red-100 text-red-600",
};

const QUICK_ACTIONS = [
  { icon: FileEdit, title: "Submit Paper", desc: "Submit your original research paper for review.", color: "#0B63FF", btn: "Submit New Paper", to: "/submit-paper" },
  { icon: Search, title: "Check Status", desc: "Check the status of your submitted paper.", color: "#0E8F54", btn: "Check Status", to: "/check-status" },
  { icon: Copyright, title: "Copyright Form", desc: "Submit the copyright transfer form for your paper.", color: "#FF7417", btn: "Submit Copyright", to: "/copyright-form" },
];

const DATES = [
  ["Paper Submission Deadline", "25 August, 2026"],
  ["Notification of Acceptance", "10 September, 2026"],
  ["Camera-Ready Submission", "5 October, 2026"],
  ["Early Bird Registration", "18 October, 2026"],
  ["Conference Dates", "10 – 12 December, 2026"],
];

const ANNOUNCEMENTS = [
  { icon: Megaphone, title: "Call for Papers Extended!", desc: "The paper submission deadline has been extended to 30 June, 2026.", date: "20 May, 2026", color: "#0B63FF" },
  { icon: ClipboardList, title: "Guidelines Updated", desc: "Please check the author guidelines for the complete submission process.", date: "15 May, 2026", color: "#10B981" },
  { icon: Users, title: "Join Our Community", desc: "Connect with researchers and industry experts from around the world.", date: "10 May, 2026", color: "#7C3AED" },
];

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const [statsRes, submissionsRes] = await Promise.all([
          submissionAPI.getMyStats(),
          submissionAPI.getMy(1),
        ]);
        if (!cancelled) {
          setStats(statsRes.data.stats);
          setRecentSubmissions(submissionsRes.data.submissions);
        }
      } catch {
        // Leave defaults on error; individual sections show empty states.
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const firstName = user?.fullName ? user.fullName.split(" ")[0] : "";

  const STATS = [
    { icon: FileText, value: stats?.totalSubmissions ?? 0, label: "Submissions", sub: "Total Papers Submitted", color: "#0B63FF" },
    { icon: Clock, value: stats?.underReview ?? 0, label: "Under Review", sub: "Currently in Review", color: "#10B981" },
    { icon: CheckCircle2, value: stats?.accepted ?? 0, label: "Accepted", sub: "Papers Accepted", color: "#7C3AED" },
    { icon: XCircle, value: stats?.rejected ?? 0, label: "Rejected", sub: "Papers Rejected", color: "#F97316" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FF] text-[#07113F]">
      <main className="px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1 className="text-[20px] font-[600]">Welcome back, {firstName}! 👋</h1>
          <p className="mt-2 text-[14px] text-[#4B5579]">
            Here’s an overview of your paper submission activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-[14px] border border-[#E5ECF7] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
            >
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: `${s.color}14`, color: s.color }}>
                  <s.icon size={22} />
                </span>
                <span className="text-[22px] font-[600]">{s.value}</span>
              </div>

              <h3 className="mt-5 text-[14px] font-[500]">{s.label}</h3>
              <p className="mt-1 text-[12px] text-[#4B5579]">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <section>
          <h3 className="mb-4 text-[14px] font-[600] uppercase">Quick Actions</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {QUICK_ACTIONS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-[14px] border border-[#E5ECF7] p-7 text-center shadow-[0_8px_24px_rgba(0,30,100,0.08)]"
              >
                <span className="mx-auto w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${a.color}14`, color: a.color }}>
                  <a.icon size={22} />
                </span>

                <h4 className="mt-5 text-[14px] font-[500]" style={{ color: a.color }}>{a.title}</h4>
                <p className="mt-3 mx-auto max-w-[190px] text-[12px] leading-6 text-[#4B5579]">{a.desc}</p>

                <Link
                  to={a.to}
                  className="mt-6 inline-flex items-center justify-center gap-3 rounded-md border px-6 py-2 text-[12px] font-[600] transition hover:opacity-80"
                  style={{ borderColor: a.color, color: a.color }}
                >
                  {a.btn} <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white rounded-[14px] border border-[#E5ECF7] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)]">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-[#0B63FF] text-[14px] font-[500] uppercase">My Submissions</h3>
              <Link to="/submit-paper" className="text-[#0B63FF] text-[12px] font-semibold">
                Submit New
              </Link>
            </div>

            {recentSubmissions.length === 0 ? (
              <div className="rounded-xl border border-dashed border-[#E5ECF7] p-8 text-center">
                <FileText size={30} className="mx-auto text-[#94A3B8]" />
                <p className="mt-3 text-[13px] text-[#4B5579]">
                  {loading ? "Loading your submissions..." : "You haven't submitted a paper yet."}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentSubmissions.map((s) => (
                  <div key={s._id} className="rounded-xl border border-[#E5ECF7] p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex gap-4">
                        <FileText size={30} className="text-[#0B63FF]" />
                        <div>
                          <p className="text-[12px] font-semibold text-[#4B5579]">{s.submissionId}</p>
                          <h4 className="mt-2 text-[14px] font-[500] leading-6">{s.title}</h4>
                        </div>
                      </div>
                      <span
                        className={`w-[180px] text-center rounded-full px-4 py-2 text-[11px] font-semibold ${
                          STATUS_STYLES[s.status] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {s.status}
                      </span>
                    </div>

                    <p className="mt-4 text-[13px] text-[#4B5579]">
                      Submitted on: {new Date(s.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                    <p className="mt-1 text-[13px] text-[#4B5579]">Track: {s.track}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white rounded-[14px] border border-[#E5ECF7] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)]">
            <h3 className="text-[#0B63FF] text-[14px] font-[500] uppercase mb-5">Important Dates</h3>

            <ul className="space-y-5">
              {DATES.map(([label, date]) => (
                <li key={label} className="flex items-center gap-4">
                  <Calendar size={20} className="text-[#0B63FF]" />
                  <span className="flex-1 text-[13px] font-[500]">{label}</span>
                  <span className="text-[13px] font-[500] text-[#0B63FF]">{date}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white rounded-[14px] border border-[#E5ECF7] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.08)]">
            <h3 className="text-[14px] font-[600] uppercase mb-5">Announcements</h3>

            <div className="space-y-4">
              {ANNOUNCEMENTS.map((a) => (
                <div key={a.title} className="flex flex-col sm:flex-row sm:items-center gap-4 border-b last:border-b-0 pb-4">
                  <span className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${a.color}14`, color: a.color }}>
                    <a.icon size={22} />
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[14px] font-semibold">{a.title}</h4>
                    <p className="mt-1 text-[12px] text-[#4B5579]">{a.desc}</p>
                  </div>
                  <p className="text-[12px] text-[#4B5579]">{a.date}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-[14px] border border-[#E5ECF7] p-7 text-center shadow-[0_8px_24px_rgba(0,30,100,0.08)]">
            <h3 className="text-[17px] font-semibold">Need Help?</h3>
            <p className="mt-3 text-[13px] leading-6 text-[#4B5579]">
              Our support team is here to assist you with any queries.
            </p>
            <Headphones className="mx-auto mt-5 h-20 w-20 text-[#0B63FF]" />
            <Link
  to="/contact"
  className="mt-6 inline-flex items-center gap-3 rounded-md border border-[#0B63FF] px-6 py-3 text-[13px] font-[500] text-[#0B63FF] hover:bg-[#0B63FF] hover:text-white transition"
>
  Contact Support
  <ArrowRight size={15} />
</Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}