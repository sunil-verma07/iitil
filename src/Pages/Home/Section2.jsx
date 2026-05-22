import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const offerings = [
  {
    title: "Data Intelligence & Analytics",
    desc: "Unlock actionable insights from structured and unstructured data.",
    icon: <BarChartOutlinedIcon />,
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    desc: "Build intelligent systems that learn, adapt and optimize business processes.",
    icon: <AutoAwesomeOutlinedIcon />,
  },
  {
    title: "Cloud & DevOps Services",
    desc: "Enable scalable, secure, and agile infrastructure for digital transformation.",
    icon: <CloudOutlinedIcon />,
  },
  {
    title: "Enterprise Technology Solutions",
    desc: "Develop robust applications and integrated systems tailored to business goals.",
    icon: <DnsOutlinedIcon />,
  },
];

export default function KeyOfferings() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#0A0E27",
        color: "#E9ECF7",
        fontFamily: "Jost, sans-serif",
        py: { xs: "70px", md: "120px" },
        overflowX: "hidden",
        borderTop:"0.8px solid #FFFFFF14",
      }}
    >
      {/* ✅ MATCH HERO SECTION */}
      <Box
        sx={{
          maxWidth: "1440px", // 🔥 FIXED
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" }, // 🔥 FIXED
          width: "100%",
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            color: "#00D9FF",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "7px",
            textTransform: "uppercase",
            mb: "28px",
          }}
        >
          Key Offerings
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            fontSize: { xs: "34px", sm: "44px", md: "50px" },
            lineHeight: { xs: "44px", sm: "54px", md: "60px" },
            fontWeight: 500,
            letterSpacing: "-1.5px",
            maxWidth: "760px",
            mb: "34px",
          }}
        >
          Comprehensive Data Intelligence
          <br />& Technology Services
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            color: "#8D94B8",
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: "29px",
            maxWidth: "790px",
            mb: { xs: "44px", md: "60px" },
          }}
        >
          litl delivers a comprehensive suite of data intelligence and technology
          services designed to address the evolving needs of modern enterprises.
        </MotionTypography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: "20px", md: "28px" },
            width: "100%",
          }}
        >
          {offerings.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              whileHover={{
                y: -8,
                borderColor: "rgba(0,217,255,0.55)",
                boxShadow: "0 22px 55px rgba(0, 217, 255, 0.08)",
              }}
              sx={{
                width: "100%",
                maxWidth: "500px",
                minHeight: "220px",
                bgcolor: "#14192B",
                border: "1px solid rgba(255,255,255,0.06)",
                px: { xs: "24px", md: "28px" },
                py: { xs: "30px", md: "34px" },
                transition: "all 0.3s ease",
              }}
            >
              <Box
                sx={{
                  color: "#00D9FF",
                  width: "46px",
                  height: "46px",
                  mb: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": { fontSize: "40px" },
                }}
              >
                {item.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "21px", md: "23px" },
                  fontWeight: 500,
                  mb: "14px",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "15.5px",
                  color: "#8D94B8",
                }}
              >
                {item.desc}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}