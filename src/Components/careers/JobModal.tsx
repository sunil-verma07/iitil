// src/components/careers/JobModal.tsx

import React from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import type { Job } from "../../types";

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
  onApply: (job: Job) => void;
}

export const JobModal: React.FC<JobModalProps> = ({
  job,
  onClose,
  onApply,
}) => {
  if (!job) return null;

  return (
    <Dialog
  open={!!job}
  onClose={onClose}
  maxWidth="md"
  fullWidth
  sx={{
    zIndex: 9999,

    "& .MuiBackdrop-root": {
      background: "rgba(2,6,23,0.82)",
      backdropFilter: "blur(14px)",
    },

    "& .MuiPaper-root": {
      background: "#0E1228 !important",
      backgroundImage: "none !important",
      color: "#E8EAF2",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "28px",
      overflow: "hidden",
      boxShadow: "0 30px 100px rgba(0,0,0,0.65)",
    },
  }}
>
      {/* Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-150px",
          right: "-120px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,217,255,0.12)",
          filter: "blur(130px)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <Box
        sx={{
          px: { xs: 3, md: 4 },
          py: 3,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(14px)",
        }}
      >
        <Typography
          sx={{
            color: "#00D9FF",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontFamily: "Jost, sans-serif",
          }}
        >
          {job.department}
        </Typography>

        <IconButton
          onClick={onClose}
          sx={{
            color: "#7A82A8",
            "&:hover": {
              color: "#E8EAF2",
              background: "rgba(255,255,255,0.04)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent
        sx={{
          px: { xs: 3, md: 4 },
          py: 4,
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            color: "#E8EAF2",
            fontSize: { xs: "28px", md: "38px" },
            lineHeight: 1.2,
            fontWeight: 500,
            fontFamily: "Jost, sans-serif",
            mb: 3,
            maxWidth: "700px",
          }}
        >
          {job.title}
        </Typography>

        {/* Meta */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 5,
          }}
        >
          <MetaItem
            icon={<LocationOnOutlinedIcon sx={{ fontSize: 16 }} />}
            label={job.location}
          />

          <MetaItem
            icon={<AccessTimeOutlinedIcon sx={{ fontSize: 16 }} />}
            label={job.employment_type}
          />

          <MetaItem
            icon={<WorkOutlineOutlinedIcon sx={{ fontSize: 16 }} />}
            label={job.experience}
          />

          {job.salary_range && (
            <MetaItem
              icon={<WorkspacePremiumOutlinedIcon sx={{ fontSize: 16 }} />}
              label={job.salary_range}
            />
          )}
        </Box>

        <Section title="About the Role">{job.description}</Section>

        {job.responsibilities && (
          <Section title="Responsibilities">{job.responsibilities}</Section>
        )}

        {job.requirements && (
          <Section title="Requirements">{job.requirements}</Section>
        )}

        {/* Skills */}
        {job.skills.length > 0 && (
          <Box mb={5}>
            <Typography
              sx={{
                color: "#E8EAF2",
                fontSize: "15px",
                fontWeight: 500,
                mb: 2,
                fontFamily: "Jost, sans-serif",
              }}
            >
              Skills
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={1.2}>
              {job.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    background: "rgba(29,36,66,0.8)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#8D94B8",
                    borderRadius: "999px",
                    fontFamily: "Jost, sans-serif",

                    "& .MuiChip-label": {
                      px: 1.5,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* CTA */}
        <Button
          fullWidth
          onClick={() => onApply(job)}
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 1,
            height: "58px",
            borderRadius: "16px",
            textTransform: "none",
            fontSize: "15px",
            fontWeight: 500,
            fontFamily: "Jost, sans-serif",
            color: "#000",
            background: "linear-gradient(135deg, #19C8E8 0%, #00D9FF 100%)",
            boxShadow: "0 12px 35px rgba(0,217,255,0.28)",

            "&:hover": {
              transform: "translateY(-2px)",
              background: "linear-gradient(135deg, #19C8E8 0%, #00D9FF 100%)",
              boxShadow: "0 16px 40px rgba(0,217,255,0.35)",
            },
          }}
        >
          Apply for this Position
        </Button>
      </DialogContent>
    </Dialog>
  );
};

const MetaItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 2,
      py: 1,
      borderRadius: "999px",
      background: "rgba(29,36,66,0.65)",
      border: "1px solid rgba(255,255,255,0.05)",
      color: "#8D94B8",
      fontSize: "13px",
      fontFamily: "Jost, sans-serif",
    }}
  >
    <Box sx={{ color: "#00D9FF" }}>{icon}</Box>
    {label}
  </Box>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box mb={5}>
    <Typography
      sx={{
        color: "#E8EAF2",
        fontSize: "15px",
        fontWeight: 500,
        mb: 2,
        fontFamily: "Jost, sans-serif",
      }}
    >
      {title}
    </Typography>

    <Typography
      sx={{
        color: "#8D94B8",
        fontSize: "14px",
        lineHeight: "30px",
        whiteSpace: "pre-line",
        fontFamily: "Jost, sans-serif",
      }}
    >
      {children}
    </Typography>
  </Box>
);
