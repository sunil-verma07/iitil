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
        position: "relative",
      }}
    >
      {/* ✅ ICON */}
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

      {/* ✅ FIXED CONTAINER (MATCHES FIRST HERO) */}
      <Box
        sx={{
          maxWidth: "1440px", // 🔥 FIXED
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" }, // 🔥 FIXED
          pt: { xs: "100px", sm: "120px", md: "140px" },
          pb: { xs: "70px", md: "100px" },
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LABEL */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ mb: "18px" }}
        >
          <Typography
            sx={{
              color: "#08D9FF",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Data Intelligence
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
          }}
        >
          {/* LEFT */}
          <Box sx={{ maxWidth: "720px" }}>
            <MotionTypography
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: "32px",
                  sm: "44px",
                  md: "58px",
                  lg: "72px",
                },
                lineHeight: {
                  xs: "40px",
                  sm: "52px",
                  md: "70px",
                  lg: "90px",
                },
                letterSpacing: {
                  xs: "-0.8px",
                  sm: "-1.2px",
                  md: "-1.5px",
                  lg: "-1.8px",
                },
                color: "#E7EAF3",
              }}
            >
              Transforming Data into Intelligent Business Outcomes
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              sx={{
                mt: "18px",
                fontSize: "15px",
                lineHeight: "26px",
                color: "#7A82A8",
              }}
            >
              At Iitil, we enable organizations to harness the true power of data
              through advanced analytics, intelligent technologies and scalable
              digital architectures.
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              sx={{
                mt: "14px",
                fontSize: "15px",
                lineHeight: "26px",
                color: "#7A82A8",
              }}
            >
              Businesses that effectively utilize data outperform their competition.
              Iitil acts as a strategic partner by combining deep technical expertise
              with domain understanding.
            </MotionTypography>

            <MotionBox
              sx={{
                mt: "26px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <MotionButton
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/contact")}
                sx={{
                  backgroundColor: "#11D7FF",
                  color: "#000",
                  height: "46px",
                  fontSize: "13.5px",
                  px: "18px",
                  textTransform: "none",
                }}
              >
                Schedule a Consultation
              </MotionButton>

              <MotionButton
                onClick={() => navigate("/speak-to-our-expert")}
                sx={{
                  border: "1px solid #11D7FF",
                  color: "#11D7FF",
                  height: "46px",
                  fontSize: "13.5px",
                  px: "18px",
                  textTransform: "none",
                }}
              >
                Speak to an Expert
              </MotionButton>
            </MotionBox>
          </Box>

          {/* RIGHT ICON HOLDER */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              width: "280px",
              justifyContent: "flex-end",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}