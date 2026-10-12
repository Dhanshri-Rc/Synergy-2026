// src/pages/admin/AdminLayout.jsx

import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  FileCheck2,
  Users,
  BarChart3,
  Mail,
  Settings,
  LogOut,
  CalendarDays,
  ChevronDown,
  Menu,
  X,
  UserCircle,
} from "lucide-react";

import Logo from "../../assets/hero/ideax-2026-white-logo.webp";
import EditProfileModal from "../User/EditProfile";
import Avatar from "../../components/Avatar";
import { useAuth } from "../../context/AuthContext";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { name: "Submissions", icon: FileText, path: "/admin/submissions" },
  { name: "Copyright Forms", icon: FileCheck2, path: "/admin/copyright-forms" },
  { name: "Authors", icon: Users, path: "/admin/authors" },
  { name: "Reports", icon: BarChart3, path: "/admin/reports" },
];

const settingItems = [
  { name: "Users", icon: Users, path: "/admin/users" },
  { name: "Email Templates", icon: Mail, path: "/admin/email-templates" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

function Sidebar({ mobileOpen, setMobileOpen, handleLogout }) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-[260px] bg-[#020B26] text-white transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[75px] items-center justify-between border-b border-white/10 bg-white px-6">
          <div className="px-2 pt-4 pb-4">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="IDEAX 2026"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setMobileOpen(false)}
            className="rounded-md p-2 text-[#020B26] lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="px-4 py-8">
          <p className="px-4 pt-1 pb-3 text-[12px] uppercase text-white/55">
            MAIN MENU
          </p>

          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex w-full items-center gap-4 rounded-lg px-3 py-2 text-left text-[14px] transition ${
                      isActive ? "bg-[#0F5BFF]" : "hover:bg-[#0F5BFF]"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          <div className="my-6 h-px bg-white/10" />

          <p className="mb-4 px-2 text-[13px] text-white/70">SETTINGS</p>

          <div className="space-y-2">
            {settingItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex w-full items-center gap-4 rounded-lg px-3 py-2 text-left text-[14px] transition ${
                      isActive ? "bg-[#0F5BFF]" : "hover:bg-[#0F5BFF]"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              );
            })}

            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-left text-[14px] transition hover:bg-[#0F5BFF]"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-sans text-[#000B45]">
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleLogout={handleLogout}
      />

      <main className="lg:ml-[260px]">
        <header className="sticky top-0 z-30 flex min-h-[75px] flex-col gap-4 border-b border-[#DDE6F5] bg-white/95 pl-3 pr-5 py-4 shadow-sm backdrop-blur xl:flex-row xl:items-center xl:justify-between xl:pl-6 xl:pr-8">
          <div className="flex w-full items-center gap-3 xl:w-auto">
            <button
              type="button"
              aria-label="Open sidebar"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#DDE6F5] bg-white text-[#005BFF] lg:hidden"
            >
              <Menu size={22} />
            </button>

            <div className="block max-w-[300px] text-[12px] font-semibold leading-6 text-[#07113F] sm:text-[13px] lg:text-[14px]">
              International Conference on Innovation, Decision Engineering and
              Artificial Intelligence
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="hidden h-12 w-px bg-[#E3EAF5] md:block" />

            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#005BFF]" size={25} />
              <div>
                <p className="text-[12px] font-semibold">10 – 12 Dec, 2026</p>
                <p className="text-[12px] text-[#4B5579]">Singapore</p>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-[#E3EAF5] md:block" />

            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3"
              >
                <Avatar name={user?.fullName} size={40} />

                <div className="hidden text-left sm:block">
                  <p className="text-[14px] font-semibold">{user?.fullName}</p>
                  <p className="text-[12px] text-[#4B5579]">Admin</p>
                </div>

                <ChevronDown
                  size={16}
                  className={`transition ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-[55px] z-50 w-[190px] rounded-[8px] border border-[#E5ECF7] bg-white py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  <button
                    type="button"
                    onClick={() => {
                      setProfileOpen(false);
                      setEditProfileOpen(true);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-[13px] font-semibold text-[#07113F] hover:bg-[#F4F8FF]"
                  >
                    <UserCircle size={17} />
                    Edit Profile
                  </button>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-3 text-[13px] font-semibold text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <section className="px-4 py-7 sm:px-6 xl:px-8">
          <Outlet />
        </section>
      </main>

      <EditProfileModal
        open={editProfileOpen}
        onClose={() => setEditProfileOpen(false)}
      />
    </div>
  );
}