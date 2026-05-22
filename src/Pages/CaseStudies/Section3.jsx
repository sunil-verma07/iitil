import { Box, Container, Grid, Typography } from "@mui/material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function FinanceCaseStudyDetailCard() {
  const metrics = [
    { value: "65%", label: "Reduction in fraudulent transactions" },
    { value: "40%", label: "Faster fraud detection time" },
    { value: "100%", label: "Regulatory compliance achievement" },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#0A0E27", py: { xs: "40px", md: "70px" } }}>
      <Container maxWidth={false} sx={{ px: { xs: "16px", sm: "24px", md: "40px", lg: "60px" } }}>
        <MotionBox
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{
            borderColor: "rgba(8,217,255,0.25)",
            boxShadow: "0px 24px 55px rgba(8,217,255,0.1)",
          }}
          sx={{
            maxWidth: "1280px",
            mx: "auto",
            backgroundColor: "#141829",
            border: "1px solid rgba(255,255,255,0.05)",
            px: { xs: "20px", sm: "28px", md: "36px" },
            py: { xs: "24px", sm: "28px", md: "34px" },
            transition: "all 0.3s ease",
          }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            <Grid size={{ xs: 12, md: 3.2 }}>
              <MotionBox
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.55 }}
                sx={{ height: "100%", pr: { md: 1 } }}
              >
                <MotionBox
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: { duration: 2.3, repeat: Infinity, ease: "easeInOut" },
                  }}
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
                  <BusinessCenterOutlinedIcon sx={{ color: "#00D9FF", fontSize: 22 }} />
                </MotionBox>

                <MotionTypography
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "28px", md: "32px" },
                    lineHeight: { xs: "34px", md: "36px" },
                    color: "#E8EAF2",
                    maxWidth: "240px",
                    mb: "10px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Financial Leading
                </MotionTypography>

                <MotionTypography
                  whileHover={{ letterSpacing: "3.4px" }}
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "2.8px",
                    textTransform: "uppercase",
                    color: "#00D9FF",
                    cursor: "default",
                  }}
                >
                  Finance
                </MotionTypography>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 8.8 }}>
              {[
                {
                  icon: <BusinessCenterOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
                  title: "Client Background",
                  text: "A tier-1 financial institution serving over 10 million customers with diverse financial products including retail banking, wealth management, and corporate lending.",
                },
                {
                  icon: <TrackChangesOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
                  title: "Business Challenge",
                  text: "The institution needed to enhance its fraud detection capabilities and improve risk assessment processes while ensuring compliance with evolving regulatory requirements.",
                },
                {
                  icon: <LightbulbOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
                  title: "IITIL Approach",
                  text: "IITIL designed a comprehensive AI-driven fraud detection system leveraging machine learning algorithms and real-time transaction monitoring. We also implemented advanced risk modeling frameworks aligned with regulatory standards.",
                },
                {
                  icon: <TaskAltOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
                  title: "Solution Implemented",
                  text: "We delivered an intelligent fraud detection platform with real-time alerting, predictive risk assessment models, and automated compliance reporting systems integrated with existing core banking infrastructure.",
                },
              ].map((section, index) => (
                <MotionBox
                  key={section.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.55 }}
                  whileHover={{ x: 4 }}
                  sx={{ mb: "20px", transition: "all 0.3s ease" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "8px" }}>
                    <MotionBox
                      whileHover={{ scale: 1.2, rotate: 8 }}
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
                        fontFamily: "Jost, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "2.8px",
                        textTransform: "uppercase",
                        color: "#00D9FF",
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "14px", md: "15px" },
                      lineHeight: { xs: "24px", md: "26px" },
                      color: "#7A82A8",
                    }}
                  >
                    {section.text}
                  </Typography>
                </MotionBox>
              ))}

              <MotionBox
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.55 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "12px" }}>
                  <MotionBox
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    sx={{
                      width: "18px",
                      height: "18px",
                      backgroundColor: "#1D2442",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <InsightsOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />
                  </MotionBox>

                  <Typography
                    sx={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: "2.8px",
                      textTransform: "uppercase",
                      color: "#00D9FF",
                    }}
                  >
                    Results Achieved
                  </Typography>
                </Box>

                <Grid container spacing={{ xs: 1.5, md: 2 }}>
                  {metrics.map((item, index) => (
                    <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
                      <MotionBox
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.55 + index * 0.1, duration: 0.5 }}
                        whileHover={{
                          y: -6,
                          scale: 1.04,
                          boxShadow: "0px 18px 35px rgba(8,217,255,0.12)",
                        }}
                        sx={{
                          backgroundColor: "#1F2850",
                          minHeight: "94px",
                          px: { xs: "16px", md: "18px" },
                          py: { xs: "14px", md: "16px" },
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 400,
                            fontSize: { xs: "28px", md: "32px" },
                            lineHeight: { xs: "32px", md: "36px" },
                            color: "#00D9FF",
                            mb: "6px",
                          }}
                        >
                          {item.value}
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 400,
                            fontSize: { xs: "11px", md: "12px" },
                            lineHeight: "18px",
                            color: "#7A82A8",
                          }}
                        >
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