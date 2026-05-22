import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const cardSx = {
  backgroundColor: "#141829",
  border: "1px solid rgba(255,255,255,0.08)",
};

const iconBoxSx = {
  width: "46px",
  height: "46px",
  backgroundColor: "#1D2442",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: "22px",
};

const titleSx = {
  fontFamily: "Jost, sans-serif",
  fontWeight: 500,
  fontSize: { xs: "22px", md: "26px" },
  lineHeight: { xs: "30px", md: "34px" },
  color: "#E8EAF2",
};

const bodySx = {
  fontFamily: "Jost, sans-serif",
  fontSize: { xs: "13px", md: "14px" },
  lineHeight: "24px",
  color: "#8D94B8",
};

const fieldSx = {
  "& .MuiInputLabel-root": {
    color: "#8D94B8",
    fontFamily: "Jost, sans-serif",
    fontSize: "13px",
    position: "static",
    transform: "none",
    mb: "8px",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#1F2850",
    color: "#E8EAF2",
    borderRadius: 0,
    fontFamily: "Jost, sans-serif",
    fontSize: "13px",
    "& fieldset": { border: "none" },
    "& input::placeholder, & textarea::placeholder": {
      color: "#8D94B8",
      opacity: 1,
    },
  },
};

export default function ContactSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent("New Contact Form Submission");

    const body = encodeURIComponent(`
Full Name: ${formData.fullName}

Email Address: ${formData.email}

Message:
${formData.message}
  `);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=business@iitil.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "60px", md: "90px", lg: "110px" },
        overflowX: "hidden",
        borderTop: "0.8px solid #FFFFFF14",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          alignItems="stretch"
          sx={{
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                ...cardSx,
                p: { xs: "24px", md: "30px" },
                width: "100%",
                height: "100%",
                minHeight: { xs: "auto", md: "230px" },
              }}
            >
              <Box sx={iconBoxSx}>
                <CalendarTodayOutlinedIcon
                  sx={{ color: "#00D9FF", fontSize: 22 }}
                />
              </Box>

              <Typography sx={{ ...titleSx, mb: "14px" }}>
                Schedule a Consultation
              </Typography>

              <Typography sx={{ ...bodySx, maxWidth: "520px", mb: "20px" }}>
                Book a meeting with our experts to discuss your specific
                requirements and explore potential solutions.
              </Typography>

              <Box
                onClick={() => navigate("/schedule-consultation")}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#00D9FF",
                  fontSize: "13px",
                  cursor: "pointer",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Book Now <ArrowForwardIcon sx={{ fontSize: 15 }} />
              </Box>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              sx={{
                ...cardSx,
                p: { xs: "24px", md: "30px" },
                width: "100%",
                height: "100%",
                minHeight: { xs: "auto", md: "230px" },
              }}
            >
              <Box sx={iconBoxSx}>
                <GroupsOutlinedIcon sx={{ color: "#00D9FF", fontSize: 22 }} />
              </Box>

              <Typography sx={{ ...titleSx, mb: "14px" }}>
                Speak to an Expert
              </Typography>

              <Typography sx={{ ...bodySx, maxWidth: "520px", mb: "20px" }}>
                Connect directly with our technical specialists to get answers to
                your technical questions.
              </Typography>

              <Box
                onClick={() => navigate("/speak-to-our-expert")}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#00D9FF",
                  fontSize: "13px",
                  cursor: "pointer",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Contact Expert <ArrowForwardIcon sx={{ fontSize: 15 }} />
              </Box>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Grid container spacing={3} sx={{ width: "100%", height: "100%" }}>
              <Grid size={{ xs: 12 }} sx={{ display: "flex" }}>
                <MotionBox
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    ...cardSx,
                    p: { xs: "24px", md: "30px" },
                    width: "100%",
                    height: "100%",
                    minHeight: { xs: "auto", md: "235px" },
                  }}
                >
                  <Typography sx={{ ...titleSx, mb: "24px" }}>
                    Engage with us
                  </Typography>

                  <Box sx={{ display: "flex", gap: "16px", mb: "22px" }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        backgroundColor: "#1D2442",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MailOutlineOutlinedIcon
                        sx={{ color: "#00D9FF", fontSize: 19 }}
                      />
                    </Box>

                    <Box>
                      <Typography sx={{ ...bodySx, fontSize: "13px" }}>
                        Email
                      </Typography>
                      <Typography
                        sx={{
                          color: "#E8EAF2",
                          fontFamily: "Jost, sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        business@iitil.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: "16px" }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        backgroundColor: "#1D2442",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <LocationOnOutlinedIcon
                        sx={{ color: "#00D9FF", fontSize: 19 }}
                      />
                    </Box>

                    <Box>
                      <Typography sx={{ ...bodySx, fontSize: "13px" }}>
                        Address
                      </Typography>
                      <Typography
                        sx={{
                          color: "#E8EAF2",
                          fontFamily: "Jost, sans-serif",
                          fontSize: "14px",
                          lineHeight: "23px",
                        }}
                      >
                        Sattva Knowledge City, Hi-Tec City,
                        <br />
                        Hyderabad - 500081 Telangana,
                        <br />
                        India
                      </Typography>
                    </Box>
                  </Box>
                </MotionBox>
              </Grid>

              <Grid size={{ xs: 12 }} sx={{ display: "flex" }}>
                <MotionBox
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  sx={{
                    ...cardSx,
                    p: { xs: "24px", md: "30px" },
                    width: "100%",
                    height: "100%",
                    minHeight: { xs: "auto", md: "235px" },
                  }}
                >
                  <Typography sx={{ ...titleSx, mb: "22px" }}>
                    Office Hours
                  </Typography>

                  <Box sx={{ display: "flex", gap: "16px" }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        backgroundColor: "#1D2442",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CalendarTodayOutlinedIcon
                        sx={{ color: "#00D9FF", fontSize: 19 }}
                      />
                    </Box>

                    <Box>
                      <Typography sx={bodySx}>
                        Monday - Friday: 9:00 AM - 6:00 PM (IST)
                      </Typography>
                      <Typography sx={bodySx}>
                        Saturday - Sunday: Closed
                      </Typography>
                    </Box>
                  </Box>
                </MotionBox>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                ...cardSx,
                p: { xs: "24px", md: "36px" },
                width: "100%",
                height: "100%",
                minHeight: { xs: "auto", md: "494px" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ ...titleSx, mb: "30px" }}>Reach Us</Typography>

              <TextField
                fullWidth
                name="fullName"
                label="Full Name"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                sx={{ ...fieldSx, mb: "22px" }}
              />

              <TextField
                fullWidth
                name="email"
                label="Email Address"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                sx={{ ...fieldSx, mb: "22px" }}
              />

              <TextField
                fullWidth
                multiline
                rows={6}
                name="message"
                label="Message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...fieldSx,
                  mb: "26px",
                  "& .MuiOutlinedInput-root": {
                    ...fieldSx["& .MuiOutlinedInput-root"],
                    alignItems: "flex-start",
                  },
                }}
              />

              <MotionButton
                fullWidth
                type="button"
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: "auto",
                  height: "54px",
                  backgroundColor: "#19C8E8",
                  color: "#000",
                  borderRadius: 0,
                  textTransform: "none",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#19C8E8",
                  },
                }}
              >
                Submit
              </MotionButton>
            </MotionBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}