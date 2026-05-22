import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const transformCards = [
  {
    title: "Secure Cloud Migration",
    description:
      "We ensure safe and structured migration of your data, applications, and workloads to cloud platforms with zero compromise on security.",
  },
  {
    title: "Data Protection in Cloud",
    description:
      "Your critical data is safeguarded using encryption, secure storage practices, and strict access controls in cloud environments.",
  },
  {
    title: "Continuous Cloud Monitoring",
    description:
      "We provide realtime monitoring of cloud infrastructure to detect vulnerabilities, anomalies, and potential threats instantly.",
  },
  {
    title: "Identity & Access Security",
    description:
      "Strong authentication systems and role-based access controls ensure only authorized users can access cloud resources.",
  },
  {
    title: "Backup & Disaster Recovery",
    description:
      "We implement reliable backup systems and recovery plans to ensure business continuity during any cloud disruption or failure.",
  },
  {
    title: "Cloud Optimization & Cost Control",
    description:
      "Optimize cloud usage with intelligent resource management, reducing unnecessary costs while maintaining high performance and efficiency.",
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
          Move to the Cloud with Confidence
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