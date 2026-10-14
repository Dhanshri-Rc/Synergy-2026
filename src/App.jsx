import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Conference from "./pages/Conference";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Committee from "./pages/Committee";
import Registration from "./pages/Registration";
import ParticipantLogin from "./pages/ParticipantLogin";
import RegisterAccount from "./pages/RegisterAccount";
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/User/Dashboard";
import CopyrightForm from "./pages/User/CopyrightForm";
import DashboardLayout from "./pages/User/DashboardLayout";
import SubmitPaper1 from "./pages/User/SubmitPaper1";
import EditProfile from "./pages/User/EditProfile";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboardLayout from "./pages/Admin/AdminDashboardLayout";
import AdminSubmission from "./pages/Admin/AdminSubmissions";
import AdminCopyrightForm from "./pages/Admin/AdminCopyrightForms";
import AdminAuthors from "./pages/Admin/AdminAuthors";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Layout navVariant="dark">
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/conference"
            element={
              <Layout navVariant="dark">
                <Conference />
              </Layout>
            }
          />
          <Route
            path="/speakers"
            element={
              <Layout navVariant="dark">
                <Speakers />
              </Layout>
            }
          />
          <Route
            path="/schedule"
            element={
              <Layout>
                <Schedule />
              </Layout>
            }
          />
          <Route
            path="/committee"
            element={
              <Layout>
                <Committee />
              </Layout>
            }
          />
          <Route
            path="/registration"
            element={
              <Layout navVariant="dark">
                <Registration />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout navVariant="dark">
                <Contact />
              </Layout>
            }
          />
          {/* Standalone pages without the marketing Navbar/Footer chrome */}
          {/* Standalone pages without the marketing Navbar/Footer chrome */}
          <Route path="/login" element={<ParticipantLogin />} />
          <Route path="/register" element={<RegisterAccount />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboardLayout />} />
            <Route path="submissions" element={<AdminSubmission />} />
            <Route path="copyright-forms" element={<AdminCopyrightForm />} />
            <Route path="authors" element={<AdminAuthors />} />
          </Route>

          <Route
            element={
              <ProtectedRoute role="user">
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/copyright-form" element={<CopyrightForm />} />
            <Route path="/submit-paper" element={<SubmitPaper1 />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>

          <Route path="*" element={<NotFound />} />

          {/* SPA-safe catch-all (fixes refresh 404 in production hosting) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
