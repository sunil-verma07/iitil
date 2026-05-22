import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const sections = [
  {
    title: "Terms and Conditions",
    items: [
      "1.1 Acceptance of Terms By accessing or using the IITIL website, services, or platforms, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, you should not use our services.",
      "1.2 Services Scope IITIL provides IT services, data services, software development, data engineering, analytics, AI/ML solutions, and related consulting services across multiple industry verticals.",
      "1.3 Use of Website Users agree not to misuse the website, attempt unauthorized access, introduce malicious software, or interfere with system integrity.",
      "1.4 Intellectual Property All content, branding, designs, code, and materials on this website are the intellectual property of IITIL unless otherwise stated. Unauthorized reproduction is strictly prohibited.",
      "1.5 Limitation of Liability IITIL shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our website or services.",
    ],
  },
  {
    title: "Privacy Policy",
    items: [
      "2.1 Information Collection\nWe may collect personal and non-personal information such as name, email, phone number, company details, and usage data for service delivery and improvement.",
      "2.2 Use of Information\nCollected data is used for service delivery and support, business communication, analytics and performance improvement, compliance, and legal obligations.",
      "2.3 Data Protection\nWe implement appropriate technical and organizational security measures to protect user data against unauthorized access, alteration, or disclosure.",
      "2.4 Data Sharing\nWe do not sell or rent personal data. Data may be shared only with trusted service partners under strict confidentiality agreements or legal requirements.",
      "2.5 Cookies\nOur website may use cookies to enhance user experience, track usage patterns, and improve performance.",
    ],
  },
  {
    title: "Cookie Policy",
    items: [
      "3.1 What Are Cookies\nCookies are small files stored on your device that help improve website functionality and user experience.",
      "3.2 How We Use Cookies\nWe use cookies for website analytics, performance tracking, user session management, and service optimization.",
      "3.3 Managing Cookies\nUsers can control or disable cookies through browser settings; however, some features may not function properly without them.",
    ],
  },
  {
    title: "4. Data Protection & Security Policy",
    items: [
      "4.1 Data Security Commitment\nIITIL ensures strict security practices to protect data integrity, confidentiality, and availability.",
      "4.2 Security Measures\nEncrypted data transmission, access control mechanisms, secure cloud infrastructure, and regular security audits.",
      "4.3 Breach Handling\nIn case of any data breach, IITIL will take immediate corrective actions and notify affected stakeholders as per applicable regulations.",
    ],
  },
  {
    title: "5. Service Disclaimer",
    items: [
      "5.1 General Disclaimer\nAll information provided on the IITIL website is for general informational purposes only.",
      "5.2 No Guarantee Clause\nWhile we ensure accuracy, IITIL does not guarantee that all content is error-free or fully up to date at all times.",
      "5.3 Third-Party Links\nOur website may contain links to third-party websites. IITIL is not responsible for their content, policies, or practices.",
    ],
  },
  {
    title: "Intellectual Property Rights (IPR)",
    items: [
      "All trademarks, logos, service marks, software, content, and design elements belong exclusively to IITIL unless explicitly stated otherwise. Unauthorized use, duplication, or modification of any intellectual property is strictly prohibited and may lead to legal action.",
    ],
  },
  {
    title: "Grievance Redressal",
    items: [
      "For any concerns, complaints, or legal queries, users may contact our grievance officer: Grievance Officer — IITIL\nEmail: grievances@iitil.com\nResponse Time: Within 7–10 business days",
    ],
  },
  {
    title: "Governing Law & Jurisdiction",
    items: [
      "These Terms and all related policies shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of Hyderabad courts, Telangana, India.",
    ],
  },
  {
    title: "Policy Updates",
    items: [
      "IITIL reserves the right to update or modify these legal policies at any time without prior notice. Users are encouraged to review this page periodically.",
    ],
  },
];

export default function LegalContentSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        color: "#E8EAF2",
        overflowX: "hidden",
        py: { xs: "50px", md: "80px" },
        borderTop:"0.8px solid #FFFFFF14",
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
        <MotionBox
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{
            width: "100%",
          }}
        >
          {sections.map((section, sectionIndex) => (
            <MotionBox
              key={section.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: sectionIndex * 0.05,
                ease: "easeOut",
              }}
              sx={{
                border: "1px solid #00D9FF",
                borderRadius: "6px",
                overflow: "hidden",
                mb: { xs: "24px", md: "28px" },
                backgroundColor: "#070B24",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#0F2A46",
                  px: { xs: "18px", sm: "24px", md: "32px" },
                  py: { xs: "20px", md: "26px" },
                }}
              >
                <MotionTypography
                  whileHover={{ x: 4 }}
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "20px", sm: "23px", md: "26px" },
                    lineHeight: { xs: "28px", sm: "32px", md: "36px" },
                    letterSpacing: "-0.5px",
                    color: "#E8EAF2",
                    transition: "all 0.3s ease",
                  }}
                >
                  {section.title}
                </MotionTypography>
              </Box>

              <Box
                sx={{
                  px: { xs: "18px", sm: "24px", md: "32px" },
                  py: { xs: "18px", md: "24px" },
                }}
              >
                {section.items.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      lineHeight: { xs: "22px", sm: "24px", md: "26px" },
                      color: "#9AA3C7",
                      mb: index === section.items.length - 1 ? 0 : "10px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}