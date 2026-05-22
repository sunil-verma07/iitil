import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function CaseStudyDetailCard() {
  const metrics = [
    { value: "35%", label: "Reduction in patient readmission rates" },
    { value: "50%", label: "Faster access to patient records" },
    { value: "28%", label: "Improvement in operational efficiency" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "40px", md: "70px" },
        borderTop:"0.8px solid #FFFFFF14",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: "16px", sm: "24px", md: "40px", lg: "60px" },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            maxWidth: "1280px",
            mx: "auto",
            backgroundColor: "#141829",
            border: "1px solid rgba(255,255,255,0.05)",
            px: { xs: "20px", sm: "28px", md: "36px" },
            py: { xs: "24px", sm: "28px", md: "34px" },
          }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {/* LEFT */}
            <Grid size={{ xs: 12, md: 3.2 }}>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <MotionBox
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  sx={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#1D2442",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "18px",
                  }}
                >
                  <BusinessOutlinedIcon sx={{ color: "#00D9FF", fontSize: 22 }} />
                </MotionBox>

                <MotionTypography
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "28px", md: "32px" },
                    lineHeight: { xs: "34px", md: "36px" },
                    color: "#E8EAF2",
                    mb: "10px",
                  }}
                >
                  Healthcare Service
                  
                  
                </MotionTypography>

                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    letterSpacing: "2.8px",
                    textTransform: "uppercase",
                    color: "#00D9FF",
                  }}
                >
                  Healthcare
                </Typography>
              </MotionBox>
            </Grid>

            {/* RIGHT */}
            <Grid size={{ xs: 12, md: 8.8 }}>
              {[
                {
                  icon: <BusinessOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
                  title: "Client Background",
                  text:
                    "A multinational healthcare organization with operations across 15 countries, managing millions of patient records and complex operational workflows.",

                },
                {
                  icon: <PublicOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
                  title: "Business Challenge",
                  text:
                    "The organization faced challenges in consolidating patient data from disparate systems, leading to inefficiencies in care delivery and difficulty in extracting actionable insights for improving patient outcomes.",
                },
                {
                  icon: <LightbulbOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
                  title: "IITIL Approach",
                  text:
                    "IITIL conducted a comprehensive assessment of existing data infrastructure and designed a unified data platform that integrated multiple data sources. Our team implemented advanced analytics and machine learning models to identify patterns in patient care.",
                },
                {
                  icon: <TaskAltOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
                  title: "Solution Implemented",
                  text:
                    "We deployed a cloud-based data integration platform with real-time analytics dashboards, predictive models for patient risk assessment, and automated reporting systems that provided actionable insights to clinical teams.",
                },
              ].map((section, i) => (
                <MotionBox
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  sx={{ mb: "20px" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "8px" }}>
                    <MotionBox
                      whileHover={{ scale: 1.2 }}
                      sx={{
                        width: "18px",
                        height: "18px",
                        backgroundColor: "#1D2442",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {section.icon}
                    </MotionBox>

                    <Typography
                      sx={{
                        fontSize: "14px",
                        letterSpacing: "2.8px",
                        textTransform: "uppercase",
                        color: "#00D9FF",
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  <Typography sx={{ color: "#7A82A8" }}>
                    {section.text}
                  </Typography>
                </MotionBox>
              ))}

              {/* RESULTS */}
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "12px" }}>
                  <InsightsOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />
                  <Typography sx={{ color: "#00D9FF", fontSize: "14px", letterSpacing: "2.8px" }}>
                    Results Achieved
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  {metrics.map((item, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 4 }}>
                      <MotionBox
                        whileHover={{ scale: 1.05 }}
                        sx={{
                          backgroundColor: "#1F2850",
                          px: "18px",
                          py: "16px",
                        }}
                      >
                        <Typography sx={{ color: "#00D9FF", fontSize: "28px" }}>
                          {item.value}
                        </Typography>
                        <Typography sx={{ color: "#7A82A8", fontSize: "12px" }}>
                          {item.label}
                        </Typography>
                      </MotionBox>
                    </Grid>
                  ))}
                </Grid>
              </MotionBox>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}