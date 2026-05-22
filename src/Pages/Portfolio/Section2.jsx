import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const projects = [
  {
    title: "My Doctor Capsule",
    image: "/Images/Doctor.svg",
    desc: "A digital healthcare platform that simplifies access to consultations, health records, and patient care services.",
    points: [
      "Seamless connection with healthcare providers",
      "Technology-driven solutions",
      "Convenient & reliable care delivery",
      "Smooth integrated healthcare experience",
    ],
  },
  {
    title: "Loan Konnekt",
    image: "/Images/Loan.svg",
    desc: "A smart credit and lending facilitation platform connecting customers with the right lenders based on their financial profile.",
    points: [
      "Streamlined loan discovery",
      "Credit eligibility assessment",
      "Structured channel approach",
      "Transparency and speed focused",
    ],
  },
  {
    title: "Lawvix",
    image: "/Images/Larvix.svg",
    desc: "A technology enabled legal services platform offering accessible, reliable, and structured legal solutions.",
    points: [
      "Verified legal professionals",
      "Advisory & documentation services",
      "Digital legal processes",
      "Efficiency and accuracy guaranteed",
    ],
  },
  {
    title: "Property Care X",
    image: "/Images/Property.svg",
    desc: "An integrated property management and support platform designed to handle end-to-end property needs.",
    points: [
      "Maintenance & tenant management",
      "Documentation and compliance",
      "Hassle-free ownership",
      "Transparent and efficient control",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0A0E27",
        color: "#E9ECF7",
        fontFamily: "Jost, sans-serif",
        py: { xs: "70px", md: "110px" },
        overflowX: "hidden",
        borderTop: "0.8px solid #FFFFFF14",
      }}
    >
      {/* ✅ SAME CONTAINER AS HERO */}
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
          width: "100%",
        }}
      >
        {/* LABEL */}
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
            mb: "22px",
          }}
        >
          Active Projects
        </MotionTypography>

        {/* TITLE */}
        <MotionTypography
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "46px", lg: "48px" },
            lineHeight: { xs: "38px", sm: "48px", md: "56px", lg: "58px" },
            fontWeight: 500,
            mb: "20px",
          }}
        >
          Current Project Portfolio
        </MotionTypography>

        {/* DESCRIPTION */}
        <MotionTypography
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          sx={{
            color: "#7A82A8",
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: { xs: "24px", sm: "26px", md: "28px" },
            maxWidth: "760px",
            mb: { xs: "42px", md: "60px" },
          }}
        >
          Our dedicated teams are currently delivering innovative solutions
          across multiple high-impact projects, spanning healthcare, finance,
          legal tech, and property management domains.
        </MotionTypography>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: "26px", md: "30px" },
          }}
        >
          {projects.map((project, index) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 22px 55px rgba(0,217,255,0.08)",
                borderColor: "rgba(0,217,255,0.25)",
              }}
              sx={{
                bgcolor: "#0F1433",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                p: { xs: "22px", sm: "26px", md: "30px" },
                minHeight: { md: "405px" },
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: { xs: "46px", md: "58px" },
                  height: { xs: "46px", md: "58px" },
                  mb: "18px",
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "22px" },
                  lineHeight: "30px",
                  fontWeight: 500,
                  mb: "14px",
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "28px",
                  color: "#AAB1D6",
                  mb: "18px",
                }}
              >
                {project.desc}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {project.points.map((point) => (
                  <Box key={point} sx={{ display: "flex", gap: "10px" }}>
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#00D9FF",
                        boxShadow: "0 0 0 4px rgba(0,217,255,0.15)",
                        flexShrink: 0,
                        mt: "6px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#8D94B8" }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}