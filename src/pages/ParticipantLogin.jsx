import { useState } from "react";
import {
  Send,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import loginBg from "../assets/hero/ideax-2026-login-background.webp";
import logo from "../assets/hero/ideax-2026-official-logo.webp";
import { authAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!form.email || !form.password) {
    setError("Please enter email and password.");
    return;
  }

  setSubmitting(true);
  try {
    const { data } = await authAPI.login({
      email: form.email.trim(),
      password: form.password,
    });

    login(data.token, data.user);

    const redirectTo = location.state?.from?.pathname;

    if (data.user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate(redirectTo || "/dashboard");
    }
  } catch (err) {
    setError(err.message || "Invalid email or password.");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F8FF] px-3 py-4 sm:px-5">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto w-full max-w-[660px] overflow-hidden rounded-[14px] border border-[#DCE6F5] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
      >
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-[280px_1fr] lg:grid-cols-[300px_360px]">
          {/* LEFT SIDE */}
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative min-h-[220px] overflow-hidden bg-[#03124C] p-6 text-white sm:min-h-[260px] sm:p-8 md:min-h-[480px] lg:min-h-[480px]"
          >
            <img
              src={loginBg}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative z-10 flex h-full flex-col">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="IDEAX 2026"
                  className="w-[170px] sm:w-[220px] lg:w-[250px]"
                />
              </Link>
            </div>
          </motion.aside>

          {/* RIGHT SIDE */}
          <motion.section
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex min-h-[430px] flex-col justify-center bg-white px-5 py-8 sm:px-8 md:min-h-[480px] md:px-8 lg:px-8"
          >
            <div className="mx-auto w-full max-w-[300px] sm:max-w-[340px] md:max-w-[300px]">
              <div>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#EEF4FF]"
                  >
                    <Send size={20} className="text-[#2563EB]" />
                  </motion.div>

                  <h2 className="text-[18px] font-semibold leading-tight text-[#07113F] sm:text-[20px] lg:text-[23px]">
                    Welcom to IDEAX
                  </h2>
                </div>

                <p className="mt-3 text-center text-[12px] font-medium text-[#64748B] sm:text-[13px]">
                  Access your dashboard using credentials.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-[13px] font-extrabold text-[#07113F]">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                    />

                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="Enter your email address"
                      className="h-[48px] w-full rounded-[8px] border border-[#D9E3F2] bg-white pl-12 pr-4 text-[13px] font-medium outline-none transition focus:border-[#2563EB] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)] sm:h-[50px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-extrabold text-[#07113F]">
                    Password <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                    />

                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      placeholder="Enter your password"
                      className="h-[48px] w-full rounded-[8px] border border-[#D9E3F2] bg-white pl-12 pr-12 text-[13px] font-medium outline-none transition focus:border-[#2563EB] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)] sm:h-[50px]"
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

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-[6px] bg-red-50 px-4 py-3 text-[12px] font-semibold text-red-600"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-[8px] bg-[#0B5BFF] text-[14px] font-extrabold text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0648D9] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:h-[50px]"
                >
                  {submitting ? "Logging in..." : "Login"} <ArrowRight size={18} />
                </button>

                <p className="text-center text-[12.5px] font-medium text-[#64748B]">
                  Don't have an account?{" "}
                  <Link to="/register" className="font-extrabold text-[#0B5BFF] hover:underline">
                    Register here
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