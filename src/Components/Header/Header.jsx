import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  "Home",
  "About",
  "Solutions",
  "Portfolio",
  "Case Studies",
  "Reach Us",
];

const routes = {
  Home: "/",
  About: "/about",
  Solutions: "/solutions",
  Portfolio: "/portfolio",
  "Case Studies": "/case-studies",
  "Reach Us": "/contact",
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeaderIcon, setShowHeaderIcon] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.1; // ✅ 10% of screen
      setShowHeaderIcon(window.scrollY > triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "62px", md: "64px" },
          backgroundColor: "#0A0E27",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 5 },
          boxSizing: "border-box",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1200,
        }}
      >
        {/* Left Logo */}
        <Box
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            flexShrink: 0,
            marginLeft: "5px",
          }}
        >
          <Box
            component="img"
            src="/Images/Itil.svg"
            alt="Iitil"
            sx={{
              height: { xs: "38px", md: "42px" },
              width: "auto",
              display: "block",
            }}
          />
        </Box>

        {/* Desktop Right Section */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "24px",
            ml: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "22px",
              alignItems: "center",
              mr: showHeaderIcon ? "10px" : "0px",
              transition: "all 0.3s ease",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item}
                onClick={() => navigate(routes[item])}
                sx={{
                  color:
                    location.pathname === routes[item] ? "#00e5ff" : "#b0b0b0",
                  fontSize: "14px",
                  fontWeight: 400,
                  cursor: "pointer",
                  transition: "0.3s",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    color: "#00e5ff",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Button
            onClick={() => navigate("/contact")}
            sx={{
              backgroundColor: "#00e5ff",
              color: "#000",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              padding: "8px 18px",
              borderRadius: "0px",
              minWidth: "125px",
              height: "34px",
              "&:hover": {
                backgroundColor: "#00c8e0",
              },
            }}
          >
            Engage with us
          </Button>

          {/* Scroll Icon */}
          <Box
            component="img"
            src="/Images/Icon.svg"
            alt="icon"
            sx={{
              width: showHeaderIcon ? "34px" : "0px",
              height: showHeaderIcon ? "34px" : "0px",
              opacity: showHeaderIcon ? 1 : 0,
              objectFit: "contain",
              transition: "all 0.3s ease",
              overflow: "hidden",
              flexShrink: 0,
            }}
          />
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#fff",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Spacer */}
      <Box sx={{ height: { xs: "62px", md: "64px" } }} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            height: "50vh",
            width: "100%",
            backgroundColor: "#000",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1, pt: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item}
              onClick={() => {
                navigate(routes[item]);
                handleDrawerToggle();
              }}
              sx={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "15px",
                  color:
                    location.pathname === routes[item]
                      ? "#00e5ff"
                      : "#b0b0b0",
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ p: 2.5, mt: 1 }}>
          <Button
            fullWidth
            onClick={() => {
              navigate("/contact");
              handleDrawerToggle();
            }}
            sx={{
              backgroundColor: "#00e5ff",
              color: "#000",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              height: "46px",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#00c8e0",
              },
            }}
          >
            Engage with us
          </Button>
        </Box>
      </Drawer>
    </>
  );
}