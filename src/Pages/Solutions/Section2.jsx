import { Box, Container, Grid, Typography } from "@mui/material";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const services = [
  {
    title: "Data Analytics",
    desc: "We transform raw data into meaningful insights through advanced analytics techniques. Our solutions help organizations identify patterns, trends, and opportunities that drive informed decision-making.",
    icon: <BarChartOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Business Intelligence (BI)",
    desc: "We design and implement intuitive dashboards and reporting systems that provide real-time visibility into business performance, enabling leadership to monitor key metrics and make data-driven decisions.",
    icon: <StorageOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Data Engineering",
    desc: "Our data engineering services focus on building robust data pipelines and architectures that ensure seamless data collection, storage, and processing. This forms the backbone of all analytics and AI initiatives.",
    icon: <HubOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Predictive Analytics",
    desc: "Using statistical models and machine learning algorithms, we help organizations forecast future trends, anticipate risks, and make proactive decisions.",
    icon: <TrendingUpOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "AI & ML Solutions",
    desc: "We develop intelligent systems that automate processes, enhance accuracy, and improve efficiency across various business functions.",
    icon: <PsychologyOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Data Governance & Compliance",
    desc: "Ensures data is accurate, secure, and regulation-ready. Includes data quality management, master data management (MDM), data security, compliance frameworks, and audit readiness.",
    icon: <SecurityOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
];

export default function DataIntelligenceSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "60px", md: "90px", lg: "110px" },
        borderTop:"0.8px solid #FFFFFF14",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: "20px", sm: "32px", md: "48px", lg: "80px" },
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            fontFamily: "Jost, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "34px", sm: "40px", md: "44px", lg: "48px" },
            lineHeight: { xs: "40px", sm: "44px", md: "46px", lg: "48px" },
            letterSpacing: { xs: "-0.8px", md: "-1px", lg: "-1.2px" },
            color: "#E8EAF2",
            mb: { xs: "32px", md: "52px" },
          }}
        >
          Data Intelligence
        </MotionTypography>

        <Grid container spacing={3} alignItems="stretch">
          {services.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{ display: "flex" }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(8, 217, 255, 0.35)",
                  boxShadow: "0px 22px 45px rgba(8, 217, 255, 0.12)",
                }}
                sx={{
                  backgroundColor: "#141829",
                  border: "1px solid rgba(255,255,255,0.05)",
                  px: { xs: "24px", md: "32px" },
                  py: { xs: "24px", md: "32px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "100%",
                  width: "100%",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#1D2442",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "26px",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "18px", md: "20px" },
                    lineHeight: { xs: "26px", md: "30px" },
                    color: "#E8EAF2",
                    mb: "14px",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "13px", md: "14px" },
                    lineHeight: { xs: "22px", md: "24px" },
                    color: "#7A82A8",
                  }}
                >
                  {item.desc}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}