import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function OurApproachSection() {
  const approachItems = [
    {
      number: "01",
      title: "Understanding Business",
      description:
        "We begin by deeply analyzing business requirements and challenges.",
      icon: "/Images/Bulb.svg",
    },
    {
      number: "02",
      title: "Designing Solution",
      description:
        "We architect solutions that leverage data effectively.",
      icon: "/Images/Circle.svg",
    },
    {
      number: "03",
      title: "Executing with Precision",
      description:
        "We ensure seamless implementation with measurable outcomes.",
      icon: "/Images/Person.svg",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "60px", md: "100px" },
        overflowX: "hidden",
      }}
    >
      {/* ✅ HERO ALIGNMENT */}
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          width: "100%",
        }}
      >
        {/* Heading */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{ mb: { xs: "40px", md: "60px" } }}
        >
          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "38px", sm: "48px", md: "60px" },
              lineHeight: { xs: "44px", sm: "54px", md: "60px" },
              letterSpacing: "-1.5px",
              color: "#E8EAF2",
              mb: "18px",
            }}
          >
            Our Approach
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: { xs: "26px", md: "29px" },
              color: "#7A82A8",
            }}
          >
            Our approach is built on three key pillars:
          </MotionTypography>
        </MotionBox>

        {/* Cards */}
        <Grid container spacing={{ xs: 5, md: 6 }}>
          {approachItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.number}>
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                sx={{ transition: "all 0.3s ease" }}
              >
                {/* Number */}
                <MotionTypography
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 400,
                    fontSize: {
                      xs: "60px",
                      sm: "74px",
                      md: "86px",
                      lg: "96px",
                    },
                    lineHeight: {
                      xs: "60px",
                      sm: "74px",
                      md: "86px",
                      lg: "96px",
                    },
                    color: "#00D9FF26",
                    mb: { xs: "26px", md: "36px" },
                  }}
                >
                  {item.number}
                </MotionTypography>

                {/* Icon */}
                <MotionBox
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: { duration: 2, repeat: Infinity },
                  }}
                  sx={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#151B34",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "24px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                    }}
                  />
                </MotionBox>

                {/* Title */}
                <MotionTypography
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  whileHover={{ x: 5 }}
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "24px", sm: "28px", md: "32px" },
                    lineHeight: { xs: "30px", sm: "34px", md: "36px" },
                    color: "#E8EAF2",
                    maxWidth: "400px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.title}
                </MotionTypography>

                {/* Description */}
                <MotionTypography
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: { xs: "26px", md: "29px" },
                    color: "#7A82A8",
                    maxWidth: "320px",
                  }}
                >
                  {item.description}
                </MotionTypography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}