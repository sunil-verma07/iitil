import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const steps = [
  {
    id: "1",
    title: "Risk Assessment ",
  },
  {
    id: "2",
    title: "Vulnerability Testing",
  },
  {
    id: "3",
    title: "Security Implementation ",
  },
  {
    id: "4",
    title: "Monitoring ",
    
  },
  {
    id: "5",
    title: "Incident Handling ",
   
  },
];

export default function ProcessSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        borderTop: "0.8px solid #FFFFFF14", // ✅ required
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
        {/* TITLE */}
        <MotionTypography
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            color: "#E7EAF3",
            fontWeight: 500,
            fontSize: { xs: "36px", md: "56px" },
            lineHeight: { xs: "44px", md: "64px" },
            letterSpacing: "-1px",
            mb: { xs: "40px", md: "60px" },
          }}
        >
          Process
        </MotionTypography>

        {/* STEPS */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "34px" }}>
          {steps.map((step, index) => (
            <MotionBox
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              {/* NUMBER BOX */}
              <Box
                sx={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "#00D9FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#000",
                  }}
                >
                  {step.id}
                </Typography>
              </Box>

              {/* CONTENT */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "18px", md: "22px" },
                    color: "#E8EAF2",
                    mb: "6px",
                  }}
                >
                  {step.title}
                </Typography>

                
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}