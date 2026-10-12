import { useState } from "react";
import {
  UserPlus,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  Globe,
  Building2,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import loginBg from "../assets/hero/ideax-2026-login-background.webp";
import logo from "../assets/hero/ideax-2026-official-logo.webp";
import { authAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";

const inputClass =
  "h-[48px] w-full rounded-[8px] border border-[#D9E3F2] bg-white pl-12 pr-4 text-[13px] font-medium outline-none transition focus:border-[#2563EB] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)] sm:h-[50px]";

const labelClass = "mb-2 block text-[13px] font-extrabold text-[#07113F]";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    country: "",
    organization: "",
    affiliation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const required = ["fullName", "email", "password", "confirmPassword", "mobile", "country", "organization"];
    for (const field of required) {
      if (!form[field]?.trim()) {
        setError("Please fill all required fields.");
        return;
      }
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      const { data } = await authAPI.register(form);
      login(data.token, data.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F8FF] px-3 py-8 sm:px-5">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto w-full max-w-[820px] overflow-hidden rounded-[14px] border border-[#DCE6F5] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
      >
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-[280px_1fr]">
          {/* LEFT SIDE */}
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative min-h-[180px] overflow-hidden bg-[#03124C] p-6 text-white sm:min-h-[220px] sm:p-8 md:min-h-full"
          >
            <img src={loginBg} alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="relative z-10 flex h-full flex-col">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="IDEAX 2026" className="w-[170px] sm:w-[220px] lg:w-[250px]" />
              </Link>
            </div>
          </motion.aside>

          {/* RIGHT SIDE */}
          <motion.section
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col justify-center bg-white px-5 py-8 sm:px-8 md:px-10"
          >
            <div className="mx-auto w-full max-w-[440px]">
              <div>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#EEF4FF]"
                  >
                    <UserPlus size={20} className="text-[#2563EB]" />
                  </motion.div>

                  <h2 className="text-[18px] font-semibold leading-tight text-[#07113F] sm:text-[20px] lg:text-[23px]">
                    Create Your Account
                  </h2>
                </div>

                <p className="mt-3 text-center text-[12px] font-medium text-[#64748B] sm:text-[13px]">
                  Register to submit papers and track your IDEAX 2026 participation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      required
                      type="text"
                      value={form.fullName}
                      onChange={update("fullName")}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="Enter your email address"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={update("password")}
                      placeholder="Create a password"
                      className={`${inputClass} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] transition hover:text-[#2563EB]"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      value={form.confirmPassword}
                      onChange={update("confirmPassword")}
                      placeholder="Re-enter your password"
                      className={`${inputClass} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((p) => !p)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] transition hover:text-[#2563EB]"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      required
                      type="tel"
                      value={form.mobile}
                      onChange={update("mobile")}
                      placeholder="Enter mobile number"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      required
                      type="text"
                      value={form.country}
                      onChange={update("country")}
                      placeholder="Enter your country"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Organization <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      required
                      type="text"
                      value={form.organization}
                      onChange={update("organization")}
                      placeholder="Institute / Company"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Affiliation</label>
                  <div className="relative">
                    <BadgeCheck size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    <input
                      type="text"
                      value={form.affiliation}
                      onChange={update("affiliation")}
                      placeholder="Department / Role (optional)"
                      className={inputClass}
                    />
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-[6px] bg-red-50 px-4 py-3 text-[12px] font-semibold text-red-600 sm:col-span-2"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-[8px] bg-[#0B5BFF] text-[14px] font-extrabold text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0648D9] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:col-span-2 sm:h-[50px]"
                >
                  {submitting ? "Creating account..." : "Register"} <ArrowRight size={18} />
                </button>

                <p className="text-center text-[12.5px] font-medium text-[#64748B] sm:col-span-2">
                  Already have an account?{" "}
                  <Link to="/login" className="font-extrabold text-[#0B5BFF] hover:underline">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
}
