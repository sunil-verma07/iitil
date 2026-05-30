import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function SolutionsHero() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        overflow: "hidden",
        position: "relative", // ✅ required
      }}
    >
    
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
          {/* SOLUTIONS LABEL */}
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{
              letterSpacing: "5px",
              transition: { duration: 0.3 },
            }}
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
            Solutions
          </MotionTypography>

          {/* MAIN TITLE */}
          <MotionTypography
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
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
              maxWidth: "920px",
            }}
          >
            Comprehensive Technology
            <br />
            Solutions for Modern
            <br />
            Enterprises
          </MotionTypography>
        </MotionBox>
      </Container>
    </Box>
  );
}