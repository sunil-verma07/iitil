import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
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
import { Box } from "@mui/material";
import It from "./Pages/It/It";
import DataServices from "./Pages/DataServices/DataServices";
import AIML from "./Pages/AIML/AIML";
import Infrastructure from "./Pages/Infrastructure/Infrastructure";
import Cybersecurity from "./Pages/Cybersecurity/Cybersecurity";
import { AuthProvider } from './layouts/AuthProvider';
import { ProtectedRoute } from './layouts/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';

import CareersPage from './Pages/careers/CareersPage';
import AdminLogin from './Pages/admin/AdminLogin';
import AuthCallback from './Pages/admin/AuthCallback';
import AdminDashboard from './Pages/admin/AdminDashboard';
import AdminJobs from './Pages/admin/AdminJobs';
import AdminApplications from './Pages/admin/AdminApplications';



function Layout() {
  const { pathname } = useLocation();
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    const cookieStatus = localStorage.getItem("iitilCookieConsent");
    if (cookieStatus) {
      setCookieAccepted(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <Header />

      {/* ✅ BLUR WRAPPER */}
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

      {/* COOKIE BANNER (always on top) */}
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
            <Route path="/careers" element={<CareersPage />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/auth/callback" element={<AuthCallback />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route
                  path="/admin/dashboard"
                  element={<AdminDashboard />}
                />

                <Route
                  path="/admin/jobs"
                  element={<AdminJobs />}
                />

                <Route
                  path="/admin/applications"
                  element={<AdminApplications />}
                />

                <Route
                  path="/admin"
                  element={
                    <Navigate
                      to="/admin/dashboard"
                      replace
                    />
                  }
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRouter;