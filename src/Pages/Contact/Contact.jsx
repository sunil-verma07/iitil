import ContactHeroSection from "./Section1";
import ContactSection from "./Section2";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const sections = [<ContactHeroSection />, <ContactSection />];

  return (
    <Box
      sx={{
        backgroundColor: "#0A0E27",
        overflow: "hidden",
      }}
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          component={motion.div}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {section}
        </Box>
      ))}
    </Box>
  );
}