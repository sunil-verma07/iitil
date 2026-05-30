import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), 3000);
    const t2 = setTimeout(() => onComplete(), 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <Box
          component={motion.div}
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0A0E27",
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            sx={{
              position: "absolute",
              pointerEvents: "none",
              borderRadius: "50%",
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(0,229,255,0.12) 0%, rgba(0,229,255,0.04) 45%, transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          <Box
            component={motion.div}
            initial={{ scale: 3.5, opacity: 0, filter: "blur(18px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            sx={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              component="img"
              src="/Images/Icon.svg"
              alt="Logo"
              sx={{ width: 110, height: 110, objectFit: "contain" }}
            />
            <Typography
          sx={{
            fontFamily: "Gilroy-Medium, sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            color: "#fff",
          }}
        >
          A{" "}
          <Box component="span" sx={{ fontWeight: 900 }}>
            YAKA
          </Box>{" "}
          Brand
        </Typography>

            <Box
              sx={{
                width: 80,
                height: 2,
                borderRadius: 999,
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
            >
              <Box
                component={motion.div}
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                sx={{
                  height: "100%",
                  width: "50%",
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, transparent, #00e5ff, #818cf8, transparent)",
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}