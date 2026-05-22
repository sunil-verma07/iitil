import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function LeadershipSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "60px", md: "100px" },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{ maxWidth: "900px" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              mb: { xs: "24px", md: "28px" },
            }}
          >
            <MotionBox
              whileHover={{ scale: 1.1, rotate: 8 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              sx={{
                width: "56px",
                height: "56px",
                backgroundColor: "#1A2340",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Typography sx={{ color: "#00D9FF",fontSize: "35px" }}>L</Typography>
            </MotionBox>

            <MotionTypography
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              sx={{
                fontFamily: "Jost, sans-serif",
                fontWeight: 500,
                fontSize: {
                  xs: "32px",
                  sm: "38px",
                  md: "44px",
                  lg: "48px",
                },
                lineHeight: {
                  xs: "38px",
                  sm: "42px",
                  md: "46px",
                  lg: "48px",
                },
                letterSpacing: {
                  xs: "-0.8px",
                  sm: "-1px",
                  md: "-1.1px",
                  lg: "-1.2px",
                },
                color: "#E8EAF2",
                transition: "all 0.3s ease",
              }}
            >
              Leadership
            </MotionTypography>
          </Box>

          <MotionTypography
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
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
              maxWidth: "780px",
              transition: "all 0.3s ease",
            }}
          >
            litl is led by a team of experienced professionals with deep
            expertise across data science, technology architecture and enterprise
            operations. The leadership team brings a strong combination of
            strategic vision and execution capability, ensuring that every
            engagement delivers measurable value.
          </MotionTypography>
        </MotionBox>
      </Box>
    </Box>
  );
}