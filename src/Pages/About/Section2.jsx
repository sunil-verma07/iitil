import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion(Typography);

export default function CompanyOverview() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        overflowX: "hidden",
        borderTop:"0.8px solid #FFFFFF14",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          py: { xs: "60px", sm: "80px", md: "100px", lg: "120px" },
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionTypography
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
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
                cursor: "default",
              }}
            >
              Company Overview
            </MotionTypography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <MotionTypography
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
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
                mb: "24px",
                maxWidth: "620px",
                transition: "all 0.3s ease",
              }}
            >
              litl is a forward-thinking data intelligence and technology
              company focused on helping organizations unlock the full potential
              of their data assets. With a strong foundation in analytics,
              engineering and enterprise technology, litl bridges the gap
              between data complexity and business clarity.
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0, y: 40 }}
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
                maxWidth: "620px",
                transition: "all 0.3s ease",
              }}
            >
              Our approach is rooted in understanding business challenges first
              and then applying the right combination of data strategies and
              technological solutions to address them effectively.
            </MotionTypography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}