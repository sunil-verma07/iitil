import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About/About";
import Solutions from "./Pages/Solutions/Solutions";
import CaseStudies from "./Pages/CaseStudies/CaseStudies";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Legal from "./Pages/Legal/Legal";
import Speak from "./Pages/Speak/Speak";
import Consultation from "./Pages/Consultation/Consultation";
import CookieConsent from "./Components/Cookies/Cookies";
import It from "./Pages/It/It";
import DataServices from "./Pages/DataServices/DataServices";
import AIML from "./Pages/AIML/AIML";
import Infrastructure from "./Pages/Infrastructure/Infrastructure";
import Cybersecurity from "./Pages/Cybersecurity/Cybersecurity";
import { AuthProvider } from "./layouts/AuthProvider";
import { Box } from "@mui/material";
import Loader from "./Components/animations/Loader";
import FloatingLogo from "./Components/animations/FloatingLogo";
// ─────────────────────────────────────────────────────────────────────────────

function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [cookieAccepted, setCookieAccepted] = useState(false);

  const [loaderDone, setLoaderDone] = useState(!isHome);
  const handleLoaderComplete = useCallback(() => setLoaderDone(true), []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const cookieStatus = localStorage.getItem("iitilCookieConsent");
    if (cookieStatus) setCookieAccepted(true);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      {isHome && !loaderDone && (
        <Loader onComplete={handleLoaderComplete} />
      )}

    
      <FloatingLogo
        loaderDone={loaderDone}
        isHome={isHome}
        onScrollProgress={setScrollProgress}
      />

     
      <Header scrollProgress={scrollProgress} />

      <Box
        sx={{
          filter: cookieAccepted ? "none" : "blur(6px)",
          pointerEvents: cookieAccepted ? "auto" : "none",
          userSelect: cookieAccepted ? "auto" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Outlet />
        <Footer />
      </Box>

      <CookieConsent onAccept={() => setCookieAccepted(true)} />
    </>
  );
}

function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/speak-to-our-expert" element={<Speak />} />
            <Route path="/schedule-consultation" element={<Consultation />} />
            <Route path="/it-services" element={<It />} />
            <Route path="/data-services" element={<DataServices />} />
            <Route path="/ai-ml" element={<AIML />} />
            <Route path="/cloud-infrastructure" element={<Infrastructure />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRouter;