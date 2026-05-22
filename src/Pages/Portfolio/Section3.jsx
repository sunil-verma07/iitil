import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const items = [
  {
    title: "Business Leadership",
    desc: "Business Director and team for all verticals (Product and Services of IT and Data)",
  },
  {
    title: "Project Management",
    desc: "Project Director (Mr. Jhonny) and team for the projects",
  },
  {
    title: "Service Delivery",
    desc: "Services Director and team for all services verticals",
  },
];

export default function OrganizationSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0F1433",
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
          boxSizing: "border-box",
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            color: "#00D9FF",
            fontSize: { xs: "11px", sm: "12px", md: "13px" },
            letterSpacing: { xs: "4px", md: "6px" },
            textTransform: "uppercase",
            mb: "20px",
          }}
        >
          Organization Structure
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "46px", lg: "48px" },
            lineHeight: { xs: "38px", sm: "48px", md: "56px", lg: "58px" },
            fontWeight: 500,
            mb: "18px",
          }}
        >
          Leadership & Teams
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            color: "#7A82A8",
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: { xs: "24px", sm: "26px", md: "28px" },
            maxWidth: "720px",
            mb: "50px",
          }}
        >
          Our organizational structure is designed to ensure efficient delivery
          across all service verticals and project engagements.
        </MotionTypography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: "26px",
          }}
        >
          {items.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 45px rgba(0,217,255,0.08)",
              }}
              sx={{
                bgcolor: "#0A0E27",
                borderTop: "0.8px solid #1A1F47",
                p: { xs: "22px", sm: "26px", md: "30px" },
                transition: "all 0.3s ease",
                minHeight: "180px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: { xs: "44px", sm: "48px", md: "52px" },
                  height: { xs: "44px", sm: "48px", md: "52px" },
                  borderRadius: "50%",
                  border: "1px solid rgba(0,217,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:" #00D9FF1A",
                  mb: "18px",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "10px", md: "12px" },
                    height: { xs: "10px", md: "12px" },
                    borderRadius: "50%",
                    bgcolor: "#00D9FF",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "19px", md: "20px", lg: "22px" },
                  lineHeight: { xs: "26px", sm: "28px", md: "30px" },
                  fontWeight: 500,
                  mb: "10px",
                  color: "#E9ECF7",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "14px", md: "14.5px" },
                  lineHeight: { xs: "21px", sm: "22px", md: "24px" },
                  color: "#8A93B2",
                }}
              >
                {item.desc}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}