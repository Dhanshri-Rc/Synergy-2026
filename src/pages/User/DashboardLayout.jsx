import { useState } from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileEdit,
  CheckSquare,
  FileSignature,
  FolderOpen,
  UserCircle,
  Mail,
  Bell,
  Calendar,
  ChevronDown,
  LogOut,
  Menu,
  ArrowRight,
} from "lucide-react";

import Logo from "../../assets/hero/ideax-2026-official-logo.webp";
import footerTrophyBg from "../../assets/hero/ideax-2026-dashboard-background.webp";
import EditProfileModal from "./EditProfile";
import Avatar from "../../components/Avatar";
import { useAuth } from "../../context/AuthContext";

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
  { icon: FileEdit, label: "Submit Paper ", to: "/submit-paper" },
  // { icon: CheckSquare, label: "Check Status", to: "/check-status" },
  { icon: FileSignature, label: "Copyright Form", to: "/copyright-form" },
  // { icon: FolderOpen, label: "My Submissions", to: "/my-submissions" },
  // { icon: UserCircle, label: "Profile", to: "/profile" },
  // { icon: Mail, label: "Messages", to: "/messages", badge: 3 },
  // { icon: Bell, label: "Notifications", to: "/notifications", badge: 2 },
];

export default function DashboardLayout() {

  const [profileOpen, setProfileOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-[#F7F9FF] flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 z-50 h-screen w-[250px] bg-[#020B26] text-white flex flex-col transition-transform duration-300 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="px-4 pt-5 pb-4">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="IDEAX 2026"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="px-4 pt-3 pb-3 text-[10px] uppercase text-white/55">
          Participant Dashboard
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileNavOpen(false)}
              className={`w-full flex items-center gap-3 px-3 py-[8px] rounded-[7px] text-[13px] font-semibold transition-all ${
                item.active
                  ? "bg-[#0B63FF] text-white"
                  : "text-white/85 hover:bg-[#0B63FF] hover:text-white"
              }`}
            >
              <item.icon size={15} strokeWidth={2} />
              <span className="flex-1 text-left">{item.label}</span>

              {item.badge && (
                <span className="bg-[#0B63FF] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          {/* <button
              onClick={() => navigate("/login")}
              className="w-full flex items-center gap-3 px-3 py-[10px] rounded-[7px] text-[12px] font-semibold text-white/85 hover:bg-white/10 transition-all"
            >
              <LogOut size={15} />
              Logout
            </button> */}
        </nav>

        {/* CTA Trophy Card */}
        <div
          className="mx-4 mt-2 mb-4 min-h-[250px] rounded-[9px] border border-[#1B4AA8]/70 bg-cover bg-bottom px-4 pt-5 pb-3 overflow-hidden"
          style={{
            backgroundImage: `
      linear-gradient(180deg, rgba(2,11,38,0.15) 0%, rgba(2,11,38,0.1) 100%),
      url(${footerTrophyBg})
    `,
          }}
        >
          <h3 className="text-[18px] font-semibold leading-[1.25] text-white">
            Be a Part of <br /> IDEAX 2026
          </h3>

          <p className="mt-4 max-w-[170px] text-[12px] leading-6 text-white/85">
            Join researchers and industry experts from around the world.
          </p>

          <Link
            to="/registration"
            className="mt-4 inline-flex h-[34px] items-center justify-center gap-3 rounded-[5px] border border-white/35 px-4 text-[12px] font-semibold text-white hover:bg-white hover:text-[#07113F] transition"
          >
            Register Now <ArrowRight size={14} />
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-[#E5ECF7]">
          <div className=" h-[80px] sm:h-[90px] lg:h-[88px] flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8  py-1 sm:py-2 lg:py-4">
            <button
              className="lg:hidden w-10 h-10 rounded-lg border border-[#E5ECF7] flex items-center justify-center"
              onClick={() => setMobileNavOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div className="hidden md:block max-w-[300px] text-[12px] lg:text-[14px] font-semibold leading-6 text-[#07113F]">
              International Conference on Innovation, Decision Engineering and
              Artificial Intelligence
            </div>

            <div className="ml-auto flex items-center gap-4 sm:gap-16">
              <div className="hidden lg:flex items-center gap-3 border-l border-[#E5ECF7] pl-8">
                <Calendar size={25} className="text-[#0B63FF]" />
                <div>
                  <p className="text-[12px] font-semibold">10 – 12 Dec, 2026</p>
                  <p className="text-[12px] text-[#4B5579]">Singapore</p>
                </div>
              </div>

              <div className="relative">
  <button
    type="button"
    onClick={() => setProfileOpen(!profileOpen)}
    className="flex items-center gap-3"
  >
    <Avatar name={user?.fullName} size={40} />

    <div className="hidden sm:block text-left">
      <p className="text-[14px] font-semibold">{user?.fullName}</p>
      <p className="text-[12px] text-[#4B5579]">Participant</p>
    </div>

    <ChevronDown
      size={16}
      className={`transition ${profileOpen ? "rotate-180" : ""}`}
    />
  </button>

  {profileOpen && (
    <div className="absolute right-0 top-[55px] w-[190px] bg-white border border-[#E5ECF7] rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] py-2 z-50">
      <button
        type="button"
        onClick={() => {
          setProfileOpen(false);
setEditProfileOpen(true);
        }}
        className="w-full flex items-center gap-3 px-4 py-3 text-[13px] font-semibold text-[#07113F] hover:bg-[#F4F8FF]"
      >
        <UserCircle size={17} />
        Edit Profile
      </button>

      <button
        type="button"
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 text-[13px] font-semibold text-red-600 hover:bg-red-50"
      >
        <LogOut size={17} />
        Logout
      </button>
    </div>
  )}
</div>
            </div>
          </div>
        </header>

        {/* Every page appears here */}
        <main className="px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>
      </div>
      <EditProfileModal
  open={editProfileOpen}
  onClose={() => setEditProfileOpen(false)}
/>
    </div>
  );
}
