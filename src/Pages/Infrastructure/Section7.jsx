import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const transformCards = [
  {
    title: "Data Protection & Security",
    description:
      "Safeguard sensitive business and customer data using advanced encryption, backup systems, and strict access controls.",
  },
  {
    title: "Threat Detection & Prevention",
    description:
      "Identify and neutralize cyber threats in real time through continuous monitoring and intelligent security systems.",
  },
  {
    title: "Identity & Access Management",
    description:
      "Ensure only authorized users access critical systems through secure authentication, role-based access, and multi-factor verification.",
  },
  {
    title: "Business Continuity & Disaster Recovery",
    description:
      "Maintain uninterrupted operations with robust backup, recovery plans, and failover systems during unexpected disruptions.",
  },
  {
    title: "Compliance & Risk Management",
    description:
      "Stay compliant with industry regulations through regular audits, security policies, and governance frameworks.",
  },
  {
    title: "Infrastructure Monitoring & Control",
    description:
      "Gain full visibility of cloud and IT infrastructure performance with real-time monitoring, alerts, and automated management tools.",
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