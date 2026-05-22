import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";

const companyRoutes = {
  About: "/about",
  "Case Studies": "/case-studies",
  Legal: "/legal",
  "Reach Us": "/contact",
};

const socialLinks = [
  {
    icon: "/Images/linkedin.svg",
    link: "https://www.linkedin.com/in/iitil-6bbb47407/",
  },
  {
    icon: "/Images/x.svg",
    link: "https://x.com/@iitil58131",
  },
  {
    icon: "/Images/youtube.svg",
    link: "https://www.youtube.com/@Iitil-q9e",
  },
  {
    icon: "/Images/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61589067426703",
  },
  {
    icon: "/Images/instagram.svg",
    link: "https://www.instagram.com/accounts/login/?next=%2Fiitilcipl&source=omni_redirect",
  },
];

const solutions = [
  { label: "IT Services", path: "/it-services" },
  { label: "Data Services", path: "/data-services" },
  { label: "AI & ML", path: "/ai-ml" },
  { label: "Cloud Infrastructure", path: "/cloud-infrastructure" },
  { label: "Cybersecurity", path: "/cybersecurity" },
];

export default function Footer() {
  const openInNewTab = (path) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#141829",
        color: "#8D93B8",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
        fontFamily: "Jost, sans-serif",
        px: { xs: 1, md: 1 },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 5 } }}>
        <Grid container spacing={4}>
          {/* LEFT */}
          <Grid size={{xs:12,md:4}}>
            <Box
              onClick={() => openInNewTab("/")}
              sx={{
                cursor: "pointer",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* LOGO */}
              <Box
                component="img"
                src="/Images/Itil.svg"
                alt="litl"
                sx={{
                  height: "36px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  mb: "4px",
                  position: "relative",
                  marginLeft: "-5px",
                }}
              />

              {/* SUB TEXT */}
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: 600,
                  lineHeight: "14px",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                A YAKA Brand by Crediple
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "14px", mb: 3, mt: 1 }}>
              Transforming data into intelligent business outcomes through
              advanced analytics and technology solutions.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map((item, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    width: 36,
                    height: 36,
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#00D9FF",
                      backgroundColor: "rgba(0,217,255,0.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt="social"
                    sx={{
                      width: "18px",
                      height: "18px",
                      objectFit: "contain",
                    }}
                  />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* SOLUTIONS */}
          <Grid size={{xs:12,md:3}}>
            {solutions.map((item) => (
              <Typography
                key={item.label}
                onClick={() => openInNewTab(item.path)}
                sx={{
                  fontSize: "14px",
                  mb: 1,
                  cursor: "pointer",
                  transition: "0.3s ease",
                  "&:hover": {
                    color: "#00D9FF",
                    transform: "translateX(4px)",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Grid>

          {/* COMPANY */}
          <Grid size={{xs:12,md:2.5}}>
            {["About", "Case Studies", "Legal", "Reach Us"].map((item) => (
              <Typography
                key={item}
                onClick={() => openInNewTab(companyRoutes[item])}
                sx={{
                  fontSize: "14px",
                  mb: 1,
                  cursor: "pointer",
                  transition: "0.3s ease",
                  "&:hover": {
                    color: "#00D9FF",
                    transform: "translateX(4px)",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* CONTACT */}
          <Grid size={{xs:12,md:2.5}}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ fontSize: "14px" }}>
                hello@litl.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Typography sx={{ fontSize: "13px", lineHeight: 1.8 }}>
                Sattva Knowledge City, Hi-Tec City,
                <br />
                Hyderabad - 500081 Telangana,
                <br />
                India
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 5,
            pt: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            width: "100%",
            gap: { xs: 1, md: 0 },
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>
            © 2026 Crediple India Private Limited (CIPL). All rights reserved.
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              marginLeft: { xs: 0, md: "auto" },
              textAlign: { xs: "left", md: "right" },
            }}
          >
            Empowering Professionals Through Convergent Technology.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}