import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const caseStudies = [
  {
    category: "Data Intelligence",
    title: "Transforming Decision Making Through Advanced Analytics",
    client: "Fortune 500 Retailer",
    highlight: "40% improvement in operational efficiency",
    metrics: [
      { value: "32%", label: "Revenue Growth" },
      { value: "200hrs/mo", label: "Time Saved" },
    ],
  },
  {
    category: "AI & Machine Learning",
    title: "Intelligent Automation for Supply Chain Optimization",
    client: "Global Manufacturing Leader",
    highlight: "Reduced costs by $2.4M annually",
    metrics: [
      { value: "$2.4M", label: "Cost Reduction" },
      { value: "98.5%", label: "Accuracy Rate" },
    ],
  },
  {
    category: "Cloud Migration",
    title: "Seamless Cloud Transformation at Enterprise Scale",
    client: "Financial Services Firm",
    highlight: "100% uptime during migration",
    metrics: [
      { value: "100%", label: "Uptime" },
      { value: "3.5x", label: "Performance Boost" },
    ],
  },
];

export default function CaseStudiesPreview() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0A0E27",
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            color: "#00D9FF",
            fontSize: "13px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            mb: "26px",
            fontWeight: 500,
          }}
        >
          Case Studies
        </MotionTypography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: "28px",
            flexDirection: { xs: "column", md: "row" },
            mb: { xs: "48px", md: "64px" },
          }}
        >
          <Box>
            <MotionTypography
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              sx={{
                fontSize: { xs: "34px", sm: "44px", md: "50px" },
                lineHeight: { xs: "42px", sm: "54px", md: "60px" },
                fontWeight: 500,
                letterSpacing: "-1.2px",
                mb: "28px",
                maxWidth: "650px",
              }}
            >
              Measurable Results,
              <br />
              Real-World Impact
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              sx={{
                color: "#8D94B8",
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: "28px",
                maxWidth: "720px",
              }}
            >
              Our work is defined by measurable results. From improving
              operational efficiency to driving revenue growth, litl has
              consistently delivered impactful outcomes for its clients.
            </MotionTypography>
          </Box>

          <MotionButton
            onClick={() => navigate("/case-studies")}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, backgroundColor: "rgba(0,217,255,0.08)" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            endIcon={<ArrowForwardIcon />}
            sx={{
              width: { xs: "100%", sm: "245px" },
              height: "58px",
              border: "1px solid #00D9FF",
              color: "#00D9FF",
              borderRadius: 0,
              textTransform: "none",
              fontFamily: "Jost, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            View All Case Studies
          </MotionButton>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: "22px", md: "30px" },
          }}
        >
          {caseStudies.map((item, index) => (
            <MotionBox
              key={item.title}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                borderColor: "rgba(0,217,255,0.45)",
                boxShadow: "0 24px 60px rgba(0,217,255,0.08)",
              }}
              sx={{
                width: "100%",
                minWidth: 0,
                bgcolor: "#141829",
                border: "1px solid rgba(255,255,255,0.06)",
                boxSizing: "border-box",
                overflow: "hidden",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  p: { xs: "28px 24px", md: "34px 32px" },
                  minHeight: { xs: "auto", md: "320px" },
                  flex: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#00D9FF",
                    fontSize: "12px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    mb: "18px",
                  }}
                >
                  {item.category}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "19px", md: "20px" },
                    lineHeight: "26px",
                    fontWeight: 500,
                    color: "#E9ECF7",
                    mb: "18px",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography sx={{ color: "#8D94B8", fontSize: "14px", mb: "18px" }}>
                  {item.client}
                </Typography>

                <Box sx={{ height: "1px", bgcolor: "rgba(255,255,255,0.08)", mb: "24px" }} />

                <Typography
                  sx={{
                    color: "#00D9FF",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    mb: "26px",
                  }}
                >
                  {item.highlight}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "18px",
                  }}
                >
                  {item.metrics.map((metric) => (
                    <Box key={metric.label}>
                      <Typography
                        sx={{
                          fontSize: { xs: "24px", md: "26px" },
                          fontWeight: 500,
                          color: "#E9ECF7",
                        }}
                      >
                        {metric.value}
                      </Typography>
                      <Typography sx={{ color: "#8D94B8", fontSize: "12px", mt: "8px" }}>
                        {metric.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}