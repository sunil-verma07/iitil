import { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const services = [
  {
    title: "Managed IT Services",
    points: [
      "Remote IT Support",
      "IT Helpdesk Services",
      "Infrastructure Monitoring",
      "Endpoint Support Services",
      "IT AMC Services",
      "Cloud & Email Management",
    ],
  },
  {
    title: "Application Development",
    points: [
      "Web Applications",
      "Mobile Apps",
      "Desktop Applications",
      "Enterprise Applications",
      "API Development & Integration",
      "ERP & HRMS Systems",
    ],
  },
  {
    title: "CRM Development & Lifecycle",
    points: [
      "Custom CRM Systems",
      "Sales & Support CRM",
      "Lead Management CRM",
      "CRM Integration",
      "Workflow Customisation",
      "CRM Maintenance",
    ],
  },
  {
    title: "Data Services",
    points: [
      "Data Entry & Processing",
      "Data Cleansing",
      "Data Migration",
      "MIS Reporting",
      "Business Dashboards",
      "Data Enrichment",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    points: [
      "Cloud Deployment",
      "Server Management",
      "Virtual Infrastructure",
      "Backup Infrastructure",
      "Storage Management",
      "Cloud Monitoring",
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [paused]);

  const current = services[active];
  const balancedPoints = current.points.slice(0, 6);
  const leftPoints = balancedPoints.slice(0, 3);
  const rightPoints = balancedPoints.slice(3, 6);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0A0E27",
        color: "#E9ECF7",
        fontFamily: "Jost, sans-serif",
        py: { xs: "70px", md: "120px" },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          boxSizing: "border-box",
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            color: "#00D9FF",
            fontSize: { xs: "11px", md: "13px" },
            letterSpacing: { xs: "4px", md: "6px" },
            textTransform: "uppercase",
            mb: "24px",
            fontWeight: 500,
          }}
        >
          Core Service Verticals
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            lineHeight: { xs: "40px", sm: "50px", md: "58px" },
            fontWeight: 500,
            mb: "22px",
          }}
        >
          Comprehensive Services
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            color: "#8D94B8",
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "28px",
            maxWidth: "1120px",
            mb: { xs: "44px", md: "70px" },
          }}
        >
          IITIL delivers a complete digital ecosystem covering infrastructure,
          applications, CRM systems, SaaS platforms, automation, cybersecurity,
          and data services under one scalable operating model.
        </MotionTypography>

        <Box
          sx={{
            position: "relative",
            maxWidth: "900px",
            mx: "auto",
            px: { xs: "0px", md: "90px" },
          }}
        >
          <IconButton
            onClick={prevSlide}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            sx={{
              position: "absolute",
              left: { xs: "-8px", md: "-40px" },
              top: "50%",
              transform: "translateY(-50%)",
              width: "56px",
              height: "56px",
              bgcolor: "#092645",
              color: "#00D9FF",
              zIndex: 3,
              borderRadius: "50%",
              "&:hover": { bgcolor: "#0B3158" },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            sx={{
              position: "absolute",
              right: { xs: "-8px", md: "-40px" },
              top: "50%",
              transform: "translateY(-50%)",
              width: "56px",
              height: "56px",
              bgcolor: "#092645",
              color: "#00D9FF",
              zIndex: 3,
              borderRadius: "50%",
              "&:hover": { bgcolor: "#0B3158" },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
          </IconButton>

          <AnimatePresence mode="wait">
            <MotionBox
              key={active}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              sx={{
                border: "1px solid #00D9FF",
                borderRadius: "12px",
                overflow: "hidden",
                bgcolor: "#080D27",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#0C2948",
                  py: { xs: "26px", md: "36px" },
                  px: "24px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "22px", md: "28px" },
                    fontWeight: 500,
                    color: "#E8EAF2",
                  }}
                >
                  {current.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: { xs: "8px", md: "60px" },
                  px: { xs: "28px", md: "80px" },
                  py: { xs: "28px", md: "34px" },
                }}
              >
                {[leftPoints, rightPoints].map((group, i) => (
                  <Box key={i}>
                    {group.map((point) => (
                      <Box
                        key={point}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          mb: "16px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            bgcolor: "#00D9FF",
                            boxShadow: "0 0 0 4px rgba(0,217,255,0.15)",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#8D94B8",
                            fontSize: { xs: "13px", md: "14px" },
                            lineHeight: "22px",
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
            </MotionBox>
          </AnimatePresence>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              mt: "52px",
            }}
          >
            {services.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActive(index)}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                sx={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  bgcolor: active === index ? "#00D9FF" : "#7B7E8E",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}