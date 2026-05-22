import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const industries = [
  { count: "25+", title: "Financial Services" },
  { count: "18+", title: "Healthcare" },
  { count: "32+", title: "Retail & E-Commerce" },
  { count: "22+", title: "Manufacturing" },
  { count: "40+", title: "Technology" },
  { count: "15+", title: "Telecommunications" },
];

export default function IndustryPresence() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#141829", // main bg
        color: "#E9ECF7",
        fontFamily: "Jost, sans-serif",
        px: { xs: "18px", sm: "28px", md: "48px" },
        py: { xs: "70px", md: "120px" },
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* TOP */}
        <MotionTypography
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            color: "#00D9FF",
            fontSize: "13px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            mb: "20px",
            fontWeight: 500,
          }}
        >
          Industry Presence
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          sx={{
            fontSize: { xs: "32px", sm: "42px", md: "50px" },
            lineHeight: { xs: "42px", sm: "52px", md: "60px" },
            fontWeight: 500,
            letterSpacing: "-1px",
            mb: "20px",
          }}
        >
          Serving Diverse Industries
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{
            color: "#8D94B8",
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "28px",
            maxWidth: "780px",
            mx: "auto",
            mb: { xs: "40px", md: "60px" },
          }}
        >
          litl serves a diverse range of industries, enabling organizations to
          modernize operations, enhance customer experiences and achieve
          operational excellence. Our cross industry experience allows us to
          bring best practices and innovative approaches to every engagement.
        </MotionTypography>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "18px", md: "24px" },
            width: "100%",
          }}
        >
          {industries.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 50px rgba(0,217,255,0.08)",
                borderColor: "rgba(0,217,255,0.4)",
              }}
              sx={{
                width: "100%",
                minWidth: 0,
                bgcolor: "#0A0E27", // card bg
                border: "1px solid rgba(255,255,255,0.05)",
                px: { xs: "24px", md: "28px" },
                py: { xs: "30px", md: "34px" },
                textAlign: "left",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  color: "#00D9FF",
                  fontSize: { xs: "30px", md: "34px" },
                  fontWeight: 600,
                  mb: "14px",
                }}
              >
                {item.count}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  fontWeight: 500,
                  color: "#E9ECF7",
                  mb: "6px",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#8D94B8",
                  fontSize: "14px",
                }}
              >
                Active Projects
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}