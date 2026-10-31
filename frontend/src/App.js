import { useEffect } from "react";
import "@/index.css";
import { HashRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    const pageName = pathname === "/" ? "Home" : pathname.split("/").filter(Boolean).map((part) => part.replace(/-/g, " ")).join(" · ");
    document.title = `${pageName.replace(/\b\w/g, (letter) => letter.toUpperCase())} | Rane Management Consultant`;
  }, [pathname, hash]);
  return null;
}

function ScrollReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    // Immediately mark elements already in viewport as visible
    // so `.reveal` never leaves anything permanently hidden.
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => {
      if (inView(el)) el.classList.add("is-visible");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

function Shell({ children }) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:text-[#243D71]">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <ScrollReveal />
        <Toaster position="top-right" richColors closeButton />
        <Routes>
          <Route path="/" element={<Shell><Home /></Shell>} />
          <Route path="/about" element={<Shell><About /></Shell>} />
          <Route path="/services" element={<Shell><Services /></Shell>} />
          <Route path="/services/:serviceSlug" element={<Shell><ServiceDetail /></Shell>} />
          <Route path="/gis-technology" element={<Navigate to="/services/geospatial-it-solutions" replace />} />
          <Route path="/land-acquisition" element={<Navigate to="/services/land-acquisition-consultancy" replace />} />
          <Route path="/projects" element={<Shell><Projects /></Shell>} />
          <Route path="/careers" element={<Shell><Careers /></Shell>} />
          <Route path="/contact" element={<Shell><Contact /></Shell>} />
          <Route path="*" element={<Shell><NotFound /></Shell>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
