import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const transformCards = [
  {
    title: "Intelligent Decision Making",
    description:
      "AI enables real-time insights and predictive analytics, helping businesses make faster and more accurate decisions.",
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive and manual tasks using AI-driven workflows to improve speed, reduce errors, and increase productivity.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast trends, customer behavior, and market demand using advanced machine learning models for better planning and strategy.",
  },
  {
    title: "Customer Experience Enhancement",
    description:
      "Deliver personalized experiences through AI-powered recommendations, chatbots, and behavior analysis.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Optimize business operations by identifying inefficiencies and improving resource utilization through AI insights.",
  },
  {
    title: "Fraud Detection & Risk Management",
    description:
      "Detect anomalies, prevent fraud, and manage risks using intelligent pattern recognition and real-time monitoring systems.",
  },
];

export default function CTASection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        borderTop: "0.8px solid #FFFFFF14",
        fontFamily: "Jost, sans-serif",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px", lg: "80px" },
          py: { xs: "80px", md: "120px" },
        }}
      >
        {/* TITLE */}
        <MotionTypography
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            color: "#E7EAF3",
            fontWeight: 500,
            textAlign: "center",
            fontSize: {
              xs: "34px",
              sm: "44px",
              md: "58px",
              lg: "68px",
            },
            lineHeight: {
              xs: "42px",
              sm: "52px",
              md: "66px",
              lg: "76px",
            },
            letterSpacing: "-1.2px",
            mb: { xs: "50px", md: "80px" },
          }}
        >
          Protect What Matters Most
        </MotionTypography>

        {/* CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: { xs: "24px", md: "40px 32px" },
          }}
        >
          {transformCards.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              sx={{
                backgroundColor: "#141829",
                border: "0.8px solid #1A1F47",
                px: { xs: "28px", md: "32px" },
                py: { xs: "32px", md: "40px" },
                minHeight: { xs: "220px", md: "220px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {/* CARD TITLE */}
              <Typography
                sx={{
                  color: "#E8EAF2",
                  fontWeight: 500,
                  fontSize: {
                    xs: "28px",
                    md: "34px",
                  },
                  lineHeight: {
                    xs: "38px",
                    md: "46px",
                  },
                  letterSpacing: "-1px",
                  mb: "20px",
                  maxWidth: "520px",
                }}
              >
                {item.title}
              </Typography>

              {/* CARD DESCRIPTION */}
              <Typography
                sx={{
                  color: "#8D94B8",
                  fontWeight: 400,
                  fontSize: {
                    xs: "15px",
                    md: "18px",
                  },
                  lineHeight: {
                    xs: "32px",
                    md: "38px",
                  },
                  letterSpacing: "0.2px",
                  maxWidth: "520px",
                }}
              >
                {item.description}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}