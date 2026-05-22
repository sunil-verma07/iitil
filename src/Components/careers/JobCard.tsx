// src/Components/careers/JobCard.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { Job } from "../../types";

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

// ── Meta chip ─────────────────────────────────────────────────────────────────
function MetaChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <Box
        sx={{
          color: "rgba(0,217,255,0.7)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          fontFamily: "Jost, sans-serif",
          fontSize: "12px",
          color: "#8D94B8",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <Box
      component="button"
      onClick={() => onClick(job)}
      sx={{
        width: "100%",
        height: "100%",
        minHeight: '180px',
        textAlign: "left",
        backgroundColor: "#141829",
        border: "1px solid rgba(255,255,255,0.07)",
        p: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "pointer",
        transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s",
        "&:hover": {
          borderColor: "rgba(0,217,255,0.3)",
          backgroundColor: "rgba(20,24,41,0.8)",
          boxShadow: "0 0 30px rgba(0,217,255,0.05)",
          "& .job-card-chevron": {
            color: "#00D9FF",
            transform: "translateX(4px)",
          },
          "& .job-card-title": {
            color: "#fff",
          },
        },
      }}
    >
      {/* Header row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#00D9FF",
              fontWeight: 500,
              mb: "8px",
            }}
          >
            {job.department}
          </Typography>
          <Typography
            className="job-card-title"
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "24px",
              color: "#E8EAF2",
              transition: "color 0.2s",
            }}
          >
            {job.title}
          </Typography>
        </Box>
        <ChevronRightIcon
          className="job-card-chevron"
          sx={{
            fontSize: 18,
            color: "#7A82A8",
            mt: "4px",
            flexShrink: 0,
            transition: "color 0.2s, transform 0.2s",
          }}
        />
      </Box>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "Jost, sans-serif",
          fontSize: "13px",
          lineHeight: "22px",
          color: "#7A82A8",
          flexGrow: 1, 
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {job.description}
      </Typography>

      {/* Meta chips */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px", mt: "auto" }}>
        <MetaChip
          icon={<LocationOnOutlinedIcon sx={{ fontSize: 13 }} />}
          label={job.location}
        />
        <MetaChip
          icon={<AccessTimeOutlinedIcon sx={{ fontSize: 13 }} />}
          label={job.employment_type}
        />
        <MetaChip
          icon={<WorkOutlineOutlinedIcon sx={{ fontSize: 13 }} />}
          label={job.experience}
        />
      </Box>

      {/* Skills */}
      {job.skills.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            pt: "12px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {job.skills.slice(0, 4).map((skill) => (
            <Box
              key={skill}
              sx={{
                backgroundColor: "#1D2442",
                px: "8px",
                py: "2px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "11px",
                  color: "#8D94B8",
                  letterSpacing: "0.04em",
                }}
              >
                {skill}
              </Typography>
            </Box>
          ))}
          {job.skills.length > 4 && (
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "11px",
                color: "#7A82A8",
                px: "8px",
                py: "2px",
              }}
            >
              +{job.skills.length - 4} more
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
