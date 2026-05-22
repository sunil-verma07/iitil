import { Box, Container, Grid, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined"; // ✅ new icon
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const industries = [
  {
    title: "Healthcare",
    desc: "We enable healthcare organizations to improve patient outcomes, optimize operations, and enhance service delivery through data-driven insights and digital solutions.",
    icon: <FavoriteBorderOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Finance",
    desc: "We empower financial institutions with advanced analytics, risk management tools, and secure platforms to drive smarter financial decisions.",
    icon: <AccountBalanceWalletOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Retail & E-commerce",
    desc: "We help retailers understand customer behavior, optimize inventory, and enhance customer experience through intelligent data usage.",
    icon: <ShoppingCartOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Manufacturing",
    desc: "We improve operational efficiency and productivity through automation, predictive maintenance, and data-driven insights.",
    icon: <FactoryOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Logistics",
    desc: "We streamline supply chain operations with real-time tracking, analytics, and intelligent decision-making systems.",
    icon: <LocalShippingOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
  {
    title: "Real Estate", // ✅ added card
    desc: "We support property developers, brokers, and facility management firms with digital platforms, analytics, CRM systems, and smart property management solutions.",
    icon: <ApartmentOutlinedIcon sx={{ color: "#00D9FF", fontSize: 24 }} />,
  },
];

export default function IndustryVerticalsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "60px", md: "90px", lg: "110px" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: "20px", sm: "32px", md: "48px", lg: "80px" },
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            fontFamily: "Jost, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "34px", md: "48px" },
            color: "#E8EAF2",
            mb: { xs: "32px", md: "52px" },
          }}
        >
          Industry Verticals
        </MotionTypography>

        <Grid container spacing={3} alignItems="stretch">
          {industries.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{ display: "flex" }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(0,217,255,0.3)",
                  boxShadow: "0 18px 45px rgba(0,217,255,0.1)",
                }}
                sx={{
                  backgroundColor: "#141829",
                  border: "1px solid rgba(255,255,255,0.05)",
                  px: { xs: "24px", md: "32px" },
                  py: { xs: "24px", md: "32px" },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#1D2442",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "26px",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "18px", md: "20px" },
                    color: "#E8EAF2",
                    mb: "14px",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: { xs: "15px", md: "16px" },
                    color: "#7A82A8",
                    lineHeight: "24px",
                  }}
                >
                  {item.desc}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}