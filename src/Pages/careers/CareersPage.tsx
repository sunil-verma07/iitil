import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  InputBase,
  Grid,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { usePublishedJobs } from "../../hooks/useJobs";
import { JobCard } from "../../Components/careers/JobCard";
import { JobModal } from "../../Components/careers/JobModal";
import { ApplicationForm } from "../../Components/careers/ApplicationForm";
import { Toast, useToast } from "../../Components/ui/Toast";
import type { Job, EmploymentType } from "../../types";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// ─── Types ───────────────────────────────────────────────────────────────────
export type JobType = "On-site" | "Remote" | "Hybrid";

// ─── Constants ────────────────────────────────────────────────────────────────
const DEPARTMENTS = [
  "All",
  "Engineering",
  "Design",
  "Data Science",
  "Product",
  "Marketing",
  "Operations",
];

const EMP_TYPES = [
  "All",
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Remote",
];

const JOB_TYPES = ["All", "On-site", "Remote", "Hybrid"];

// ─── Styled native select ─────────────────────────────────────────────────────
interface FilterSelectProps {
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

function FilterSelect({ value, onChange, options, placeholder }: FilterSelectProps) {
  const isActive = value !== "All";

  return (
    <Box sx={{ position: "relative", height: "40px", flexShrink: 0 }}>
      {/* Native select */}
      <Box
        component="select"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
        sx={{
          appearance: "none",
          WebkitAppearance: "none",
          background: "#141829",
          border: isActive
            ? "1px solid rgba(0,217,255,0.28)"
            : "1px solid rgba(255,255,255,0.07)",
          color: isActive ? "#00D9FF" : "#8D94B8",
          fontFamily: "Jost, sans-serif",
          fontSize: "12px",
          height: "40px",
          pl: "12px",
          pr: "30px",
          cursor: "pointer",
          outline: "none",
          borderRadius: 0,
          transition: "border-color 0.2s, color 0.2s",
          minWidth: "140px",
          "&:hover": {
            borderColor: "rgba(0,217,255,0.35)",
            color: isActive ? "#00D9FF" : "#E8EAF2",
          },
          "&:focus": {
            borderColor: "rgba(0,217,255,0.5)",
          },
          "& option": {
            background: "#141829",
            color: "#8D94B8",
          },
        }}
      >
        {options.map(({ value: v, label }) => (
          <option key={v} value={v}>
            {label}
          </option>
        ))}
      </Box>

      {/* Chevron */}
      <KeyboardArrowDownIcon
        sx={{
          position: "absolute",
          right: "7px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          fontSize: 15,
          color: isActive ? "#00D9FF" : "#8D94B8",
          transition: "color 0.2s",
        }}
      />

      {/* Active cyan underline */}
      {isActive && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "#00D9FF",
          }}
        />
      )}
    </Box>
  );
}

// ─── Stat pill ────────────────────────────────────────────────────────────────
function StatItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Box sx={{ color: "#00D9FF", display: "flex", alignItems: "center" }}>
        {icon}
      </Box>
      <Typography
        sx={{ fontFamily: "Jost, sans-serif", fontSize: "14px", color: "#8D94B8" }}
      >
        {label}
      </Typography>
    </Box>
  );
}

// ─── Culture benefit tile ─────────────────────────────────────────────────────
function BenefitTile({ title, desc }: { title: string; desc: string }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontFamily: "Jost, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          color: "#E8EAF2",
          mb: "4px",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ fontFamily: "Jost, sans-serif", fontSize: "12px", color: "#7A82A8" }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");
  const [empType, setEmpType] = useState<EmploymentType | "All">("All");
  const [jobType, setJobType] = useState<JobType | "All">("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const { toast, show: showToast, hide: hideToast } = useToast();

  const hasActiveFilters =
    search !== "" || dept !== "All" || empType !== "All" || jobType !== "All";

  const filters = useMemo(
    () => ({
      search: search || undefined,
      department: dept !== "All" ? dept : undefined,
      employment_type: (empType !== "All" ? empType : undefined) as
        | EmploymentType
        | undefined,
      job_type: (jobType !== "All" ? jobType : undefined) as
        | JobType
        | undefined,
    }),
    [search, dept, empType, jobType]
  );

  const { jobs, loading, error } = usePublishedJobs(filters);

  const clearFilters = () => {
    setSearch("");
    setDept("All");
    setEmpType("All");
    setJobType("All");
  };

  const handleApply = (job: Job) => {
    setSelectedJob(null);
    setApplyJob(job);
  };

  const handleSuccess = () => {
    setApplyJob(null);
    showToast(
      "Application submitted successfully! We'll be in touch soon.",
      "success"
    );
  };

  const handleError = (msg: string) => {
    showToast(msg, "error");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0A0E27",
        color: "#E8EAF2",
        fontFamily: "Jost, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Decorative grid */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(#00D9FF 1px,transparent 1px),linear-gradient(90deg,#00D9FF 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        {/* Glow blob */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: "384px",
            height: "384px",
            backgroundColor: "rgba(0,217,255,0.05)",
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "relative",
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: "20px", sm: "32px", md: "48px", lg: "64px" },
            pt: { xs: "80px", md: "96px" },
            pb: { xs: "64px", md: "80px" },
          }}
        >
          <MotionTypography
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ letterSpacing: "5px" }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#00D9FF",
              mb: "20px",
            }}
          >
            Careers at IITIL
          </MotionTypography>

          <MotionTypography
            component="h1"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75, ease: "easeOut" }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "36px", sm: "48px", md: "56px", lg: "60px" },
              lineHeight: { xs: "42px", sm: "54px", md: "62px" },
              letterSpacing: { xs: "-1px", md: "-1.5px" },
              color: "#E8EAF2",
              mb: "24px",
              maxWidth: "640px",
            }}
          >
            Build the Future of{" "}
            <Box component="span" sx={{ color: "#00D9FF" }}>
              Data Intelligence
            </Box>
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65, ease: "easeOut" }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "28px",
              color: "#7A82A8",
              maxWidth: "560px",
              mb: "48px",
            }}
          >
            Join a team of passionate engineers, designers, and data scientists
            shaping how enterprises understand and leverage their data.
          </MotionTypography>

          {/* Stats */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
            <StatItem
              icon={<GroupsOutlinedIcon sx={{ fontSize: 16 }} />}
              label="200+ Team Members"
            />
            <StatItem
              icon={<TrendingUpIcon sx={{ fontSize: 16 }} />}
              label="High-Growth Company"
            />
            <StatItem
              icon={<WorkOutlineIcon sx={{ fontSize: 16 }} />}
              label={`${jobs.length} Open Positions`}
            />
          </Box>
        </Box>
      </Box>

      {/* ── Filters ───────────────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "rgba(13,17,48,0.88)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: "20px", sm: "32px", md: "48px", lg: "64px" },
            py: "14px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "12px",
            alignItems: { xs: "stretch", md: "center" },
          }}
        >
          {/* Search */}
          <Box
            sx={{
              position: "relative",
              flex: 1,
              maxWidth: { md: "320px" },
              backgroundColor: "#141829",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              alignItems: "center",
              px: "14px",
              height: "40px",
              "&:focus-within": { borderColor: "rgba(0,217,255,0.45)" },
              transition: "border-color 0.2s",
            }}
          >
            <SearchIcon
              sx={{ fontSize: 15, color: "#8D94B8", mr: "8px", flexShrink: 0 }}
            />
            <InputBase
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search roles, skills..."
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "13px",
                color: "#E8EAF2",
                flex: 1,
                "& input::placeholder": {
                  color: "rgba(141,148,184,0.6)",
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* Vertical divider — desktop only */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "1px",
              height: "20px",
              backgroundColor: "rgba(255,255,255,0.08)",
              flexShrink: 0,
            }}
          />

          {/* Filter selects */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <FilterListIcon
              sx={{
                fontSize: 14,
                color: "#8D94B8",
                display: { xs: "none", md: "block" },
                flexShrink: 0,
              }}
            />

            {/* Department */}
            <FilterSelect
              value={dept}
              onChange={setDept}
              placeholder="All Departments"
              options={DEPARTMENTS.map((d) => ({
                value: d,
                label: d === "All" ? "All Departments" : d,
              }))}
            />

            {/* Employment Type */}
            <FilterSelect
              value={empType}
              onChange={(v) => setEmpType(v as EmploymentType | "All")}
              placeholder="All Types"
              options={EMP_TYPES.map((t) => ({
                value: t,
                label: t === "All" ? "All Types" : t,
              }))}
            />

            {/* Job Type (new) */}
            <FilterSelect
              value={jobType}
              onChange={(v) => setJobType(v as JobType | "All")}
              placeholder="All Job Types"
              options={JOB_TYPES.map((t) => ({
                value: t,
                label: t === "All" ? "All Job Types" : t,
              }))}
            />
          </Box>

          {/* Clear filters */}
          {hasActiveFilters && (
            <Box
              component="button"
              onClick={clearFilters}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(0,217,255,0.55)",
                fontFamily: "Jost, sans-serif",
                fontSize: "11px",
                p: 0,
                letterSpacing: "0.03em",
                flexShrink: 0,
                transition: "color 0.15s",
                "&:hover": { color: "#00D9FF" },
              }}
            >
              <CloseIcon sx={{ fontSize: 12 }} />
              Clear
            </Box>
          )}
        </Box>
      </Box>

      {/* ── Job Listings ──────────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px", lg: "64px" },
          py: { xs: "48px", md: "64px" },
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: "96px",
              gap: "12px",
            }}
          >
            <CircularProgress size={20} sx={{ color: "#00D9FF" }} />
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "13px",
                color: "#8D94B8",
              }}
            >
              Loading positions...
            </Typography>
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: "center", py: "96px" }}>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "13px",
                color: "#f87171",
              }}
            >
              {error}
            </Typography>
          </Box>
        ) : jobs.length === 0 ? (
          <Box sx={{ textAlign: "center", py: "96px" }}>
            <WorkOutlineIcon
              sx={{ fontSize: 32, color: "rgba(141,148,184,0.4)", mb: "16px" }}
            />
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "13px",
                color: "#8D94B8",
                mb: "16px",
              }}
            >
              No positions found matching your criteria.
            </Typography>
            <Box
              component="button"
              onClick={clearFilters}
              sx={{
                background: "none",
                border: "none",
                color: "#00D9FF",
                fontFamily: "Jost, sans-serif",
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Clear filters
            </Box>
          </Box>
        ) : (
          <>
            <Typography
              sx={{
                fontFamily: "Jost, sans-serif",
                fontSize: "11px",
                color: "#7A82A8",
                letterSpacing: "0.05em",
                mb: "24px",
              }}
            >
              {jobs.length} position{jobs.length !== 1 ? "s" : ""} found
            </Typography>
            <Grid container spacing={2}>
              {jobs.map((job) => (
                <Grid
                  item
                  xs={12}
                  key={job.id}
                  sx={{ display: "flex", width: "80%" }}
                >
                  <JobCard job={job} onClick={setSelectedJob} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>

      {/* ── Culture Banner ────────────────────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "rgba(20,24,41,0.6)",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: "20px", sm: "32px", md: "48px", lg: "64px" },
            py: { xs: "56px", md: "80px" },
            textAlign: "center",
          }}
        >
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ letterSpacing: "5px" }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#00D9FF",
              mb: "16px",
            }}
          >
            Why IITIL
          </MotionTypography>

          <MotionTypography
            component="h2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            sx={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "26px", md: "32px" },
              color: "#E8EAF2",
              mb: "40px",
            }}
          >
            A place where great minds thrive
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Grid container spacing={3} sx={{ maxWidth: "720px", mx: "auto" }}>
              {[
                { title: "Remote Friendly", desc: "Flexible work arrangements" },
                { title: "Learning Budget", desc: "Invest in your growth" },
                { title: "Health & Wellness", desc: "Comprehensive coverage" },
                { title: "Stock Options", desc: "Share in our success" },
              ].map(({ title, desc }) => (
                <Grid item xs={6} md={3} key={title}>
                  <BenefitTile title={title} desc={desc} />
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Box>
      </Box>

      {/* ── Modals ────────────────────────────────────────────── */}
      <JobModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={handleApply}
      />
      <ApplicationForm
        job={applyJob}
        onClose={() => setApplyJob(null)}
        onSuccess={handleSuccess}
        onError={handleError}
      />

      {/* ── Toast ─────────────────────────────────────────────── */}
      {toast && (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </Box>
  );
}