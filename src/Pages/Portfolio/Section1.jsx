import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0A0E27",
        color: "#fff",
        fontFamily: "Jost, sans-serif",
        overflow: "hidden",
        position: "relative", // ✅ required
      }}
    >
      {/* 🔹 ICON + TEXT */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40px" },
          right: { xs: "10px", md: "70px" },
          width: { xs: "60px", md: "70px" },
          zIndex: 1,
          pointerEvents: "none",
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/Images/Icon.svg"
          alt="icon"
          sx={{
            width: "40%",
            height: "auto",
          }}
        />

        <Typography
          sx={{
            mt: "5px",
            fontFamily: "Gilroy-Medium, sans-serif",
            fontWeight: 400,
            fontSize: "9.94px",
            color: "#8D94B8",
          }}
        >
          A{" "}
          <Box component="span" sx={{ fontWeight: 900 }}>
            YAKA
          </Box>{" "}
          Brand
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          pt: { xs: "100px", sm: "120px", md: "140px" },
          pb: { xs: "70px", md: "100px" },
          position: "relative",
          zIndex: 2, // ✅ content above icon
        }}
      >
        {/* TOP LABEL */}
        <MotionBox
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mb: { xs: "24px", md: "26px" },
          }}
        >
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#08D9FF",
            }}
          />
          <Typography
            sx={{
              color: "#08D9FF",
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Technology Services
          </Typography>
        </MotionBox>

        {/* CONTENT */}
        <Box>
          <MotionTypography
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,

              fontSize: {
                xs: "32px",
                sm: "44px",
                md: "58px",
                lg: "72px", // ✅ exact
              },

              lineHeight: {
                xs: "40px",
                sm: "52px",
                md: "70px",
                lg: "90px", // ✅ exact
              },

              letterSpacing: {
                xs: "-0.8px",
                sm: "-1.2px",
                md: "-1.5px",
                lg: "-1.8px", // ✅ exact
              },

              color: "#E7EAF3",
              maxWidth: "1000px",
            }}
          >
            Delivering Scalable IT Solutions
            <br />
            Across India & Global Markets
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            sx={{
              mt: "28px",
              maxWidth: "820px",
              fontSize: "18px",
              color: "#7A82A8",
            }}
          >
            Iitil is a full-stack technology services brand delivering scalable IT services, enterprise applications, CRM systems, SaaS products, automation and data intelligence solutions for businesses across India and global markets.<br />

            With a focus on innovation, reliability and customer success, Iitil empowers organizations to leverage technology for growth, efficiency and competitive advantage.
          </MotionTypography>

          <MotionBox sx={{ mt: "40px", display: "flex", gap: "16px" }}>
            <MotionButton
            onClick={()=>navigate("/contact")}
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#11D7FF",
                color: "#000",
                height: "60px",
                textTransform: "none", // ✅ sentence case
                fontFamily: "Jost, sans-serif",
                fontWeight: 500,
              }}
            >
              Schedule a consultation
            </MotionButton>

            <MotionButton
            onClick={()=>navigate("/solutions")}
              sx={{
                border: "1px solid #11D7FF",
                color: "#11D7FF",
                height: "60px",
                textTransform: "none", // ✅ sentence case
                fontFamily: "Jost, sans-serif",
                fontWeight: 500,
              }}
            >
              View services
            </MotionButton>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}