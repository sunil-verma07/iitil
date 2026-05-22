import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function AboutHeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* 🔹 TOP RIGHT ICON + TEXT */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40px" },
          right: { xs: "10px", md: "70px" },
          width: { xs: "60px", md: "70px" },
          zIndex: 1,
          pointerEvents: "none",
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/Images/Icon.svg"
          alt="icon"
          sx={{
            width: "40%",
            height: "auto",
          }}
        />

        <Typography
          sx={{
            mt: "5px",
            fontFamily: "Gilroy-Medium, sans-serif",
            fontWeight: 400,
            fontSize: "9.94px",
            color: "#8D94B8",
          }}
        >
          A{" "}
          <Box component="span" sx={{ fontWeight: 900 }}>
            YAKA
          </Box>{" "}
          Brand
        </Typography>
      </Box>

      <Container
        maxWidth={false}
        sx={{
          px: { xs: "20px", sm: "32px", md: "48px" },
          pt: { xs: "90px", sm: "110px", md: "130px", lg: "150px" },
          pb: { xs: "70px", sm: "90px", md: "110px", lg: "130px" },
          position: "relative",
          zIndex: 2,
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{ maxWidth: "900px" }}
        >
          <MotionTypography
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              color: "#08D9FF",
              mb: { xs: "20px", md: "28px" },
            }}
          >
            About Us
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: {
                xs: "38px",
                sm: "50px",
                md: "62px",
                lg: "72px",
              },
              lineHeight: {
                xs: "46px",
                sm: "56px",
                md: "68px",
                lg: "79.2px",
              },
              letterSpacing: {
                xs: "-1px",
                sm: "-1.2px",
                md: "-1.5px",
                lg: "-1.8px",
              },
              color: "#E7EAF3",
              maxWidth: "820px",
              position: "relative",
              display: "inline-block",
            }}
          >
            Bridging Data Complexity
            <br />
            and Business Clarity

            {/* Light Blue Line */}
            
          </MotionTypography>
        </MotionBox>
      </Container>
    </Box>
  );
}