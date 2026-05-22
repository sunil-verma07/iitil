import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const models = [
  {
    title: "Fixed Cost",
    desc: "Defined scope and budget for predictable projects",
  },
  {
    title: "Dedicated Team",
    desc: "Your own team working exclusively on your product",
  },
  {
    title: "Time & Material",
    desc: "Flexible engagement for evolving requirements",
  },
];

export default function EngagementModelsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        borderTop: "0.8px solid #FFFFFF14", // ✅ section border
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
            mb: { xs: "36px", md: "48px" },
          }}
        >
          Engagement Models
        </MotionTypography>

        {/* CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "16px", md: "24px" },
          }}
        >
          {models.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              sx={{
                border: "0.8px solid #FFFFFF14", // ✅ card border
                px: { xs: "22px", md: "28px" },
                py: { xs: "26px", md: "32px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "140px",
              }}
            >
              {/* TITLE */}
              <Typography
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: { xs: "18px", md: "20px" },
                  color: "#00D9FF", // ✅ blue title
                  mb: "10px",
                }}
              >
                {item.title}
              </Typography>

              {/* DESC */}
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: "24px", md: "26px" },
                  color: "#7A82A8",
                  maxWidth: "280px",
                }}
              >
                {item.desc}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}