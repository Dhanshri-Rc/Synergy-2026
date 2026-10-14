
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Conference from "./pages/Conference";
import Committee from "./pages/Committee";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <Layout navVariant="dark">
                <Home />
              </Layout>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          {/* Conference Page */}
          <Route
            path="/conference"
            element={
              <Layout navVariant="dark">
                <Conference />
              </Layout>
            }
          />

          {/* Committee Page */}
          <Route
            path="/committee"
            element={
              <Layout>
                <Committee />
              </Layout>
            }
          />

          {/* Registration Page */}
          <Route
            path="/registration"
            element={
              <Layout navVariant="dark">
                <Registration />
              </Layout>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <Layout navVariant="dark">
                <Contact />
              </Layout>
            }
          />

          {/* 404 Page */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </AnimatePresence>
    </>
  );
}
