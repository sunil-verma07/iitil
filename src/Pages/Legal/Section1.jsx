import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function LegalHeroSection() {
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
                    px: { xs: "20px", sm: "32px", md: "48px", lg: "54px" },
                    pt: { xs: "70px", sm: "90px", md: "110px", lg: "44px" },
                    pb: { xs: "70px", sm: "80px", md: "90px", lg: "54px" },
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    sx={{ maxWidth: "760px" }}
                >
                    {/* <MotionTypography
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        whileHover={{ letterSpacing: "5px" }}
                        sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "4.2px",
                            textTransform: "uppercase",
                            color: "#00D9FF",
                            mb: { xs: "18px", md: "20px" },
                        }}
                    >
                        Contact Us
                    </MotionTypography> */}

                    <MotionTypography
                        initial={{ opacity: 0, y: 45 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.75, ease: "easeOut" }}
                        whileHover={{ scale: 1.02 }}
                        sx={{
                            fontFamily: "Jost, sans-serif",
                            fontWeight: 500,
                            fontSize: {
                                xs: "38px",
                                sm: "52px",
                                md: "64px",
                                lg: "56px",
                            },
                            lineHeight: {
                                xs: "44px",
                                sm: "58px",
                                md: "68px",
                                lg: "58px",
                            },
                            letterSpacing: {
                                xs: "-1px",
                                sm: "-1.3px",
                                md: "-1.5px",
                                lg: "-1.4px",
                            },
                            color: "#E8EAF2",
                            maxWidth: { xs: "100%", lg: "720px" },
                            mb: { xs: "22px", md: "24px" },
                        }}
                    >
                        Legal
                    </MotionTypography>


                </MotionBox>
            </Container>
        </Box>
    );
}