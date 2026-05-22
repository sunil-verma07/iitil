import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const features = [
  {
    id: "01",
    title: "Data First Approach",
    desc: "Every solution is designed with data at its core, ensuring relevance and accuracy.",
  },
  {
    id: "02",
    title: "Scalable Architecture",
    desc: "Our systems are built to grow with your business, minimizing future rework.",
  },
  {
    id: "03",
    title: "Domain Expertise",
    desc: "Industry specific knowledge enables us to deliver highly contextual solutions.",
  },
  {
    id: "04",
    title: "Execution Excellence",
    desc: "Strong project management and delivery frameworks ensure timely and quality outcomes.",
  },
];

export default function WhyItil() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0A0E27",
        color: "#E9ECF7",
        fontFamily: "Jost, sans-serif",
        py: { xs: "70px", md: "120px" },
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          width: "100%",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: "45px", md: "40px" },
          alignItems: "flex-start",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Box sx={{ minWidth: 0 }}>
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
              mb: "24px",
              fontWeight: 500,
            }}
          >
            Why Iitil
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            sx={{
              fontSize: { xs: "34px", sm: "46px", md: "56px" },
              lineHeight: { xs: "42px", sm: "56px", md: "64px" },
              fontWeight: 500,
              letterSpacing: "-1.2px",
              mb: "28px",
              maxWidth: "520px",
              wordBreak: "break-word",
            }}
          >
            Partnering for
            <br />
            Outcomes, Efficiency
            <br />& Innovation
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            sx={{
              color: "#8D94B8",
              fontSize: "16px",
              lineHeight: "28px",
              maxWidth: "480px",
            }}
          >
            Choosing litl means partnering with a team that prioritizes
            outcomes, efficiency and innovation.
          </MotionTypography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "100%",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {features.map((item, index) => (
            <MotionBox
              key={item.id}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: { xs: "14px", sm: "18px", md: "20px" },
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box",
              }}
            >
              <MotionBox
                whileHover={{ scale: 1.08 }}
                sx={{
                  minWidth: { xs: "44px", sm: "48px" },
                  width: { xs: "44px", sm: "48px" },
                  height: { xs: "44px", sm: "48px" },
                  border: "1px solid #00D9FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00D9FF",
                  fontSize: "16px",
                  fontWeight: 500,
                  flexShrink: 0,
                  boxSizing: "border-box",
                }}
              >
                {item.id}
              </MotionBox>

              <Box sx={{ minWidth: 0, maxWidth: "420px" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: 500,
                    mb: "6px",
                    color: "#E9ECF7",
                    wordBreak: "break-word",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#8D94B8",
                    fontSize: "15px",
                    lineHeight: "26px",
                    wordBreak: "break-word",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}