import { Box, Button, Typography } from "@mui/material";
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
        position: "relative",
      }}
    >
      {/* ✅ RIGHT IMAGE / ICON */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40px", md: "80px" },
          right: { xs: "10px", md: "70px", lg: "90px" },
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

      {/* ✅ CONTENT CONTAINER */}
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px", lg: "80px" },
          pt: { xs: "10px", sm: "50px" },
          pb: { xs: "80px", md: "100px" },
          position: "relative",
          zIndex: 2,
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          sx={{ maxWidth: "1100px" }}
        >
          {/* ✅ TITLE */}
          <MotionTypography
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            sx={{
              fontWeight: 500,
              fontSize: {
                xs: "42px",
                sm: "56px",
                md: "68px",
                lg: "82px",
              },
              lineHeight: {
                xs: "46px",
                sm: "62px",
                md: "74px",
                lg: "82px",
              },
              letterSpacing: {
                xs: "-1px",
                sm: "-1.4px",
                md: "-2px",
                lg: "-2.6px",
              },
              color: "#E7EAF3",
              maxWidth: "900px",
            }}
          >
            Build Powerful, Scalable Digital Systems
          </MotionTypography>

          {/* ✅ SUBTEXT */}
          <MotionTypography
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{
              mt: { xs: "24px", md: "34px" },
              fontWeight: 400,
              fontSize: { xs: "15px", sm: "16px", md: "18px" },
              lineHeight: { xs: "22px", md: "32px" },
              color: "#8D94B8",
              maxWidth: "1080px",
              letterSpacing: "0.3px",
            }}
          >
            Data Services at IITIL are designed to help businesses transform raw information into meaningful insights and strategic assets. We enable organizations to collect, manage, process, and analyze data with precision and scalability. Our solutions ensure data accuracy, security, and accessibility across systems. By leveraging advanced analytics and intelligent frameworks, we empower better decisionmaking. From data integration to visualization, we cover the entire lifecycle. Our approach is built to support growth, efficiency, and competitive advantage.
          </MotionTypography>

          {/* ✅ BUTTONS */}
          <MotionBox
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            sx={{
              mt: { xs: "36px", md: "54px" },
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {/* PRIMARY BUTTON */}
            <MotionButton
              onClick={() => navigate("/schedule-consultation")}
              whileHover={{ y: -4 }}
              sx={{
                width: { xs: "100%", sm: "260px" },
                height: "60px",
                backgroundColor: "#11D7FF",
                color: "#000",
                borderRadius: 0,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "16px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#11D7FF",
                  boxShadow: "none",
                },
              }}
            >
              Schedule a Consultation →
            </MotionButton>

            {/* SECONDARY BUTTON */}
            <MotionButton
              onClick={() => navigate("/speak-to-our-expert")}
              whileHover={{ y: -4 }}
              sx={{
                width: { xs: "100%", sm: "185px" },
                height: "60px",
                backgroundColor: "transparent",
                color: "#11D7FF",
                border: "1px solid #11D7FF",
                borderRadius: 0,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "15px",
                "&:hover": {
                  backgroundColor: "rgba(17,215,255,0.08)",
                  border: "1px solid #11D7FF",
                },
              }}
            >
              Speak to an Expert
            </MotionButton>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
}