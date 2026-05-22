import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function VisionMissionSection() {
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
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          {/* VISION */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 24px 50px rgba(8, 217, 255, 0.14)",
                borderColor: "rgba(8, 217, 255, 0.35)",
              }}
              sx={{
                backgroundColor: "#141829",
                border: "1px solid rgba(255,255,255,0.06)",
                px: { xs: "24px", md: "40px" },
                py: { xs: "30px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                height: "100%", // ✅ KEY FIX
              }}
            >
              <MotionBox
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                sx={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#1A2340",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "28px",
                }}
              >
                <Typography sx={{ color: "#00D9FF",fontSize: "35px" }}>V</Typography>
              </MotionBox>

              <Typography sx={{ fontSize: "32px", color: "#E8EAF2", mb: "18px" }}>
                Vision
              </Typography>

              <Typography sx={{ fontSize: "18px", color: "#7A82A8" }}>
                To become a globally recognized leader in data intelligence and
                technology solutions, enabling organizations to make intelligent
                decisions and achieve sustainable growth through innovation.
              </Typography>
            </MotionBox>
          </Grid>

          {/* MISSION */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 24px 50px rgba(8, 217, 255, 0.14)",
                borderColor: "rgba(8, 217, 255, 0.35)",
              }}
              sx={{
                backgroundColor: "#141829",
                border: "1px solid rgba(255,255,255,0.06)",
                px: { xs: "24px", md: "40px" },
                py: { xs: "30px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                height: "100%", // ✅ KEY FIX
              }}
            >
              <MotionBox
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: 0.3 }}
                sx={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#1A2340",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "28px",
                }}
              >
                <Typography sx={{ color: "#00D9FF",fontSize: "35px" }}>M</Typography>
              </MotionBox>

              <Typography sx={{ fontSize: "32px", color: "#E8EAF2", mb: "18px" }}>
                Mission
              </Typography>

              <Typography sx={{ fontSize: "18px", color: "#7A82A8" }}>
                To deliver reliable, scalable and intelligent solutions that
                empower businesses to leverage data for strategic advantage,
                operational efficiency and continuous innovation.
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}