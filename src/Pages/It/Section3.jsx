import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const offerings = [
  {
    number: "01",
    title: "Data Integration & Management",
    description:
      "Seamlessly consolidate data from multiple sources into a unified system, ensuring consistency, accuracy, and easy accessibility across the organization.",
  },
  {
    number: "02",
    title: "Data Warehousing Solutions",
    description:
      "Design and implement scalable data warehouses that enable structured storage, faster retrieval, and efficient reporting for business intelligence needs.",
  },
  {
    number: "03",
    title: "Data Analytics & Insights",
    description:
      "Leverage advanced analytics to uncover patterns, trends, and actionable insights that drive strategic decision-making and business growth.",
  },
  {
    number: "04",
    title: "Data Visualization & Reporting",
    description:
      "Transform complex datasets into intuitive dashboards and visual reports for realtime monitoring and executive-level clarity.",
  },
  {
    number: "05",
    title: "Data Security & Governance",
    description:
      "Ensure data protection through robust security frameworks, compliance standards, and governance policies to maintain integrity and confidentiality.",
  },
  {
    number: "06",
    title: "Big Data & AI Enablement",
    description:
      "Enable organizations to harness the power of big data and AI technologies for predictive analysis, automation, and intelligent operations.",
  },
];

export default function KeyOfferingsSection() {
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
        {/* TITLE */}
        <MotionTypography
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            color: "#E7EAF3",
            fontWeight: 500,
            fontSize: { xs: "42px", md: "64px" },
            lineHeight: { xs: "48px", md: "72px" },
            letterSpacing: "-2px",
            mb: { xs: "50px", md: "70px" },
          }}
        >
          Key Offering
        </MotionTypography>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "40px", md: "70px 60px" },
          }}
        >
          {offerings.map((item, index) => (
            <MotionBox
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* NUMBER */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "72px",
                    sm: "82px",
                    md: "96px",
                  },
                  lineHeight: 1,
                  fontWeight: 400,
                  color: "#00D9FF",
                  mb: { xs: "24px", md: "34px" },
                  letterSpacing: "-3px",
                }}
              >
                {item.number}
              </Typography>

              {/* TITLE */}
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
                  mb: "22px",
                  maxWidth: "360px",
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
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
                  maxWidth: "360px",
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