import { Box, Container, Grid, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function RetailCaseStudyDetailCard() {
  const metrics = [
    { value: "42%", label: "Reduction in inventory costs" },
    { value: "55%", label: "Increase in customer retention" },
    { value: "38%", label: "Growth in average order value" },
  ];

  const sections = [
    {
      icon: <ShoppingBagOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
      title: "Client Background",
      text: "A fast-growing e-commerce retailer operating across multiple markets with a catalog of over 100,000 products and processing thousands of orders daily.",
    },
    {
      icon: <TrackChangesOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
      title: "Business Challenge",
      text: "The company struggled with inventory management inefficiencies, leading to stockouts and overstock situations. They also lacked deep insights into customer purchasing behavior and preferences.",
    },
    {
      icon: <LightbulbOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
      title: "IITIL Approach",
      text: "IITIL implemented a data-driven inventory optimization system combined with customer analytics to understand purchasing patterns. We developed predictive models for demand forecasting and personalized recommendation engines.",
    },
    {
      icon: <TaskAltOutlinedIcon sx={{ color: "#00D9FF", fontSize: 12 }} />,
      title: "Solution Implemented",
      text: "We built an integrated analytics platform featuring demand forecasting algorithms, real-time inventory tracking, customer segmentation models, and personalized marketing automation systems.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "40px", md: "70px" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: "16px", sm: "24px", md: "40px", lg: "60px" },
        }}
      >
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
            position: "relative",
            transition: "all 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "2px",
              height: "100%",
              background: `
                linear-gradient(
                  180deg,
                  #00D9FF 0%,
                  rgba(0,197,231,0.93) 7.14%,
                  rgba(0,177,208,0.86) 14.29%,
                  rgba(0,157,185,0.78) 21.43%,
                  rgba(0,138,163,0.71) 28.57%,
                  rgba(0,119,141,0.64) 35.71%,
                  rgba(0,101,120,0.57) 42.86%,
                  rgba(0,83,99,0.5) 50%,
                  rgba(0,66,79,0.43) 57.14%,
                  rgba(0,50,60,0.36) 64.29%,
                  rgba(0,34,42,0.29) 71.43%,
                  rgba(0,20,25,0.21) 78.57%,
                  rgba(0,7,10,0.14) 85.71%,
                  rgba(0,1,1,0.07) 92.86%,
                  rgba(0,0,0,0) 100%
                )
              `,
            },
          }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            <Grid size={{ xs: 12, md: 3.2 }}>
              <MotionBox
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.55 }}
                sx={{ height: "100%", pr: { md: 1 }, pl: { xs: 0, md: 1 } }}
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
                  <ShoppingBagOutlinedIcon sx={{ color: "#00D9FF", fontSize: 22 }} />
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
                  Retail Chain
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
                  Retail
                </MotionTypography>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 8.8 }}>
              {sections.map((section, index) => (
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