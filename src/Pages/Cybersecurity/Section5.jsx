import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const useCases = [
  {
    title: "Financial Institutions & Banking Systems",
    description:
      "Cybersecurity protects customer data, transaction systems, and online banking platforms from fraud, hacking, and data breaches.",
  },
  {
    title: "Healthcare & Medical Data Protection",
    description:
      "Secure patient records, hospital systems, and healthcare applications against cyber threats while maintaining compliance and privacy standards.",
  },
  {
    title: "Enterprise Network & Infrastructure Security",
    description:
      "Protect enterprise networks, servers, and cloud infrastructure through continuous monitoring, threat prevention, and secure access controls.",
  },
];

export default function UseCasesSection() {
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
          py: { xs: "70px", md: "100px" },
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            color: "#E7EAF3",
            fontWeight: 500,
            fontSize: { xs: "36px", md: "56px" },
            lineHeight: { xs: "44px", md: "64px" },
            letterSpacing: "-1px",
            mb: { xs: "36px", md: "48px" },
          }}
        >
          Use Cases
        </MotionTypography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "20px", md: "32px" },
          }}
        >
          {useCases.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              sx={{
                backgroundColor: "#141829",
                border: "0.8px solid #1A1F47",
                px: { xs: "24px", md: "32px" },
                py: { xs: "30px", md: "38px" },
                minHeight: { xs: "220px", md: "220px" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: "24px", md: "28px" },
                  lineHeight: { xs: "34px", md: "36px" },
                  letterSpacing: "-0.6px",
                  color: "#E8EAF2",
                  mb: "16px",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "15px" },
                  lineHeight: { xs: "26px", md: "28px" },
                  letterSpacing: "0px",
                  color: "#8D94B8",
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