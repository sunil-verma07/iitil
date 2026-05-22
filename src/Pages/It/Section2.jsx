import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function AboutSection() {
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
          px: { xs: "20px", sm: "32px", md: "48px" },
          py: { xs: "70px", md: "100px" },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* TITLE */}
          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              color: "#E7EAF3",
              fontWeight: 500,
              fontSize: { xs: "36px", md: "56px" },
              lineHeight: { xs: "44px", md: "64px" },
              letterSpacing: "-1px",
              mb: "18px",
            }}
          >
            About
          </MotionTypography>

          {/* SUBTITLE */}
          <MotionTypography
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            sx={{
              fontFamily: "Inter, sans-serif", // ✅ as per requirement
              fontWeight: 400,
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: { xs: "24px", md: "28px" },
              letterSpacing: "0px",
              color: "#8D94B8",
              maxWidth: "900px",
            }}
          >
            IITIL delivers robust IT services that enable businesses to operate
            efficiently, scale seamlessly, and innovate continuously.
          </MotionTypography>
        </MotionBox>
      </Box>
    </Box>
  );
}