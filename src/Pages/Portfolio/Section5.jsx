import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function ContactSection() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "#0F1433", // section bg
                px: { xs: "18px", sm: "28px", md: "48px" },
                py: { xs: "70px", md: "120px" },
                fontFamily: "Jost, sans-serif",
                overflowX: "hidden",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1200px",
                    mx: "auto",
                    bgcolor: "#0A0E27", // card bg
                    borderTop: "0.8px solid #1A1F47",
                    px: { xs: "24px", sm: "40px", md: "60px" },
                    py: { xs: "50px", md: "70px" },
                    textAlign: "center",
                }}
            >
                {/* TOP LABEL */}
                <MotionTypography
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    sx={{
                        color: "#00D9FF",
                        fontSize: "13px",
                        letterSpacing: "6px",
                        textTransform: "uppercase",
                        mb: "20px",
                    }}
                >
                    Get In Touch
                </MotionTypography>

                {/* HEADING */}
                <MotionTypography
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    sx={{
                        fontSize: { xs: "30px", sm: "42px", md: "48px" },
                        lineHeight: { xs: "40px", sm: "52px", md: "60px" },
                        fontWeight: 500,
                        color: "#E9ECF7",
                        mb: "18px",
                    }}
                >
                    Ready to Transform Your Business?
                </MotionTypography>

                {/* SUBTEXT */}
                <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    sx={{
                        color: "#8D94B8",
                        fontSize: { xs: "15px", md: "16px" },
                        maxWidth: "680px",
                        mx: "auto",
                        mb: "36px",
                    }}
                >
                    Let’s discuss how litl can help you build scalable digital solutions
                    and drive business growth.
                </MotionTypography>

                {/* BUTTONS */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                        mb: "40px",
                    }}
                >
                    <MotionButton
                        onClick={() => navigate("/schedule-consultation")}
                        whileHover={{
                            scale: 1.05,
                            y: -3,
                            boxShadow: "0 14px 35px rgba(0,217,255,0.3)",
                        }}
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            minWidth: { xs: "100%", sm: "260px" },
                            height: "58px",
                            backgroundColor: "#00D9FF",
                            color: "#000",
                            fontSize: "15px",
                            fontWeight: 500,
                            borderRadius: 0,
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "#00D9FF",
                            },
                        }}
                    >
                        Schedule a Consultation
                    </MotionButton>

                    <MotionButton
                        onClick={() => navigate("/contact")}
                        whileHover={{
                            scale: 1.05,
                            y: -3,
                            backgroundColor: "rgba(0,217,255,0.08)",
                        }}
                        sx={{
                            minWidth: { xs: "100%", sm: "180px" },
                            height: "58px",
                            border: "1px solid #00D9FF",
                            color: "#00D9FF",
                            fontSize: "15px",
                            fontWeight: 500,
                            borderRadius: 0,
                            textTransform: "none",
                            "&:hover": {
                                borderColor: "#00D9FF",
                                backgroundColor: "rgba(0,217,255,0.08)",
                            },
                        }}
                    >
                        Reach Us
                    </MotionButton>
                </MotionBox>

                {/* DIVIDER */}
                <Box
                    sx={{
                        height: "1px",
                        bgcolor: "rgba(255,255,255,0.06)",
                        mb: "30px",
                    }}
                />

                {/* ADDRESS */}
                <Typography
                    sx={{
                        color: "#8D94B8",
                        fontSize: "14px",
                        lineHeight: "24px",
                        mb: "10px",
                    }}
                >
                    Sattva Knowledge City, Raidurg, Hitec City
                    <br />
                    Hyderabad - 500 081, Telangana, India
                </Typography>

                <Typography
                    sx={{
                        color: "#00D9FF",
                        fontSize: "14px",
                        fontWeight: 500,
                    }}
                >
                    www.iitil.com
                </Typography>
            </Box>
        </Box>
    );
}