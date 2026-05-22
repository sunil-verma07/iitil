import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function CaseStudiesHero() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        overflow: "hidden",
        position: "relative", 
        // ✅ required
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

      <Container
        maxWidth={false}
        sx={{
          px: { xs: "20px", sm: "32px", md: "48px", lg: "80px" },
          pt: { xs: "100px", sm: "120px", md: "140px", lg: "160px" },
          pb: { xs: "80px", md: "100px" },
          position: "relative",
          zIndex: 2, // ✅ keep content above icon
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{ maxWidth: "950px" }}
        >
          {/* LABEL */}
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ letterSpacing: "5px" }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "4.2px",
              textTransform: "uppercase",
              color: "#00D9FF",
              mb: { xs: "20px", md: "28px" },
            }}
          >
            Case Studies
          </MotionTypography>

          {/* TITLE */}
          <MotionTypography
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: {
                xs: "38px",
                sm: "52px",
                md: "64px",
                lg: "72px",
              },
              lineHeight: {
                xs: "46px",
                sm: "60px",
                md: "70px",
                lg: "79.2px",
              },
              letterSpacing: {
                xs: "-1px",
                sm: "-1.3px",
                md: "-1.5px",
                lg: "-1.8px",
              },
              color: "#E8EAF2",
              maxWidth: "900px",
              mb: { xs: "24px", md: "28px" },
            }}
          >
            Proven Results Across
            <br />
            Industries
          </MotionTypography>

          {/* DESCRIPTION */}
          <MotionTypography
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            whileHover={{ y: -3 }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 400,
              fontSize: {
                xs: "15px",
                sm: "16px",
                md: "17px",
                lg: "18px",
              },
              lineHeight: {
                xs: "26px",
                sm: "27px",
                md: "28px",
                lg: "29.25px",
              },
              color: "#7A82A8",
              maxWidth: "720px",
            }}
          >
            Explore how IITIL has helped organizations transform their operations
            and achieve measurable success through data intelligence and
            technology solutions.
          </MotionTypography>
        </MotionBox>
      </Container>
    </Box>
  );
}