// src/components/careers/ApplicationForm.tsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  CircularProgress,
  Select,
  MenuItem,
  Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlined";
import { applicationsService } from "../../services/applications";
import type { Job } from "../../types";

interface FormValues {
  full_name: string;
  email: string;
  phone: string;
  experience_years: number;
  portfolio_url?: string;
  cover_letter?: string;
}

interface ApplicationFormProps {
  job: Job | null;
  onClose: () => void;
  onSuccess: () => void;
  onError: (msg: string) => void;
}

// ── Country codes ─────────────────────────────────────────────────────────────
const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+81", label: "🇯🇵 +81" },
  { code: "+86", label: "🇨🇳 +86" },
];

// ── Shared field styles ───────────────────────────────────────────────────────
const fieldSx = {
  "& .MuiInputLabel-root": {
    color: "#8D94B8",
    fontFamily: "Jost, sans-serif",
    fontSize: "13px",
    position: "static",
    transform: "none",
    mb: "8px",
  },
  "& .MuiOutlinedInput-root": {
    background: "rgba(31, 40, 80, 0.75)",
    backdropFilter: "blur(12px)",
    color: "#E8EAF2",
    borderRadius: "14px",
    fontFamily: "Jost, sans-serif",
    fontSize: "14px",
    transition: "all 0.3s ease",
    "& fieldset": { border: "1px solid rgba(255,255,255,0.06)" },
    "&:hover fieldset": { border: "1px solid rgba(0,217,255,0.35)" },
    "&.Mui-focused fieldset": {
      border: "1px solid rgba(0,217,255,0.55)",
      boxShadow: "0 0 25px rgba(0,217,255,0.12)",
    },
    "& input::placeholder, & textarea::placeholder": {
      color: "#8D94B8",
      opacity: 1,
    },
  },
};

// ── Inline alert banner ───────────────────────────────────────────────────────
function AlertBanner({
  type,
  message,
  onClose,
}: {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}) {
  const isSuccess = type === "success";
  return (
    <Collapse in={!!message}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          p: "14px 16px",
          borderRadius: "12px",
          border: `1px solid ${isSuccess ? "rgba(0,217,100,0.25)" : "rgba(248,113,113,0.25)"}`,
          background: isSuccess
            ? "rgba(0,217,100,0.07)"
            : "rgba(248,113,113,0.07)",
          mb: 2,
        }}
      >
        {isSuccess ? (
          <CheckCircleOutlineIcon
            sx={{ fontSize: 18, color: "#00D964", mt: "1px", flexShrink: 0 }}
          />
        ) : (
          <ErrorOutlineIcon
            sx={{ fontSize: 18, color: "#f87171", mt: "1px", flexShrink: 0 }}
          />
        )}
        <Typography
          sx={{
            fontFamily: "Jost, sans-serif",
            fontSize: "13px",
            lineHeight: "20px",
            color: isSuccess ? "#5EFFA0" : "#fca5a5",
            flex: 1,
          }}
        >
          {message}
        </Typography>
        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            color: isSuccess ? "#5EFFA0" : "#fca5a5",
            p: "2px",
            opacity: 0.6,
            "&:hover": { opacity: 1 },
          }}
        >
          <CloseIcon sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>
    </Collapse>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  job,
  onClose,
  onSuccess,
  onError,
}) => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {},
  });

  if (!job) return null;

  const onSubmit = async (values: FormValues) => {
    try {
      setAlert(null);
      setSubmitting(true);

      const fullPhone = `${values.country_code}${values.phone}`;

      await applicationsService.submit(
        {
          full_name: values.full_name,
          email: values.email,
          phone: values.phone,
          experience_years: values.experience_years,
          portfolio_url: values.portfolio_url,
          cover_letter: values.cover_letter,
          job_id: job.id,
        },
        resumeFile ?? undefined,
      );

      reset();
      setResumeFile(null);
      setAlert({
        type: "success",
        message:
          "Application submitted successfully! We'll review your profile and get back to you soon.",
      });
      // Bubble up after a short delay so user sees the in-form alert
      setTimeout(() => {
        onSuccess();
      }, 2200);
    } catch (e: unknown) {
      const msg =
        e instanceof Error ? e.message : "Submission failed. Please try again.";
      setAlert({ type: "error", message: msg });
      onError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(file.type)) {
      setAlert({
        type: "error",
        message: "Invalid file type. Please upload a PDF or Word document.",
      });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setAlert({ type: "error", message: "File size must be under 5 MB." });
      return;
    }
    setResumeFile(file);
    setAlert(null);
  };

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
          top: "-120px",
          right: "-100px",
          width: "240px",
          height: "240px",
          background: "rgba(0,217,255,0.12)",
          filter: "blur(120px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <Box
        sx={{
          px: { xs: 3, md: 4 },
          py: 3,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(14px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#00D9FF",
              mb: 1,
              fontFamily: "Jost, sans-serif",
            }}
          >
            Apply Now
          </Typography>
          <Typography
            sx={{
              color: "#E8EAF2",
              fontSize: "24px",
              fontWeight: 500,
              fontFamily: "Jost, sans-serif",
            }}
          >
            {job.title}
          </Typography>
        </Box>

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

      <DialogContent sx={{ px: { xs: 3, md: 4 }, py: 4 }}>
        {/* Alert banner */}
        {alert && (
          <AlertBanner
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" gap={3}>
            {/* Full Name */}
            <TextField
              fullWidth
              label="Full Name"
              placeholder="Jane Smith"
              InputLabelProps={{ shrink: true }}
              error={!!errors.full_name}
              helperText={errors.full_name?.message}
              {...register("full_name", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                pattern: {
                  value: /^[A-Za-z\s'-]+$/,
                  message:
                    "Name can only contain letters, spaces, hyphens, or apostrophes",
                },
              })}
              sx={fieldSx}
            />

            {/* Email */}
            <TextField
              fullWidth
              type="email"
              label="Email Address"
              placeholder="jane@example.com"
              InputLabelProps={{ shrink: true }}
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              sx={fieldSx}
            />

            {/* Phone row: country code + number */}
            <Box>
             
              <Box
                sx={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
              >


                {/* Phone number input */}
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="98765 43210"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{7,15}$/,
                      message:
                        "Enter a valid phone number (digits only, 7–15 digits)",
                    },
                  })}
                  sx={fieldSx}
                />
              </Box>
            </Box>

            {/* Years of experience */}
            <TextField
              fullWidth
              type="number"
              label="Years of Experience"
              placeholder="4"
              InputLabelProps={{ shrink: true }}
              error={!!errors.experience_years}
              helperText={errors.experience_years?.message}
              {...register("experience_years", {
                required: "Years of experience is required",
                valueAsNumber: true,
                min: { value: 0, message: "Cannot be negative" },
                max: { value: 60, message: "Please enter a realistic value" },
              })}
              sx={fieldSx}
            />

            {/* Portfolio */}
            <TextField
              fullWidth
              label="Portfolio / LinkedIn URL"
              placeholder="https://portfolio.com"
              InputLabelProps={{ shrink: true }}
              error={!!errors.portfolio_url}
              helperText={errors.portfolio_url?.message}
              {...register("portfolio_url", {
                pattern: {
                  value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/,
                  message: "Enter a valid URL (e.g. https://portfolio.com)",
                },
              })}
              sx={fieldSx}
            />

            {/* Resume upload */}
            <Box>
              <Typography
                sx={{
                  color: "#8D94B8",
                  fontSize: "13px",
                  mb: 1.2,
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Resume
              </Typography>
              <Button
                component="label"
                fullWidth
                startIcon={<UploadOutlinedIcon />}
                sx={{
                  height: "56px",
                  justifyContent: "flex-start",
                  px: 2,
                  background: "rgba(31, 40, 80, 0.75)",
                  border: resumeFile
                    ? "1px solid rgba(0,217,100,0.35)"
                    : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "14px",
                  color: resumeFile ? "#5EFFA0" : "#8D94B8",
                  textTransform: "none",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "13px",
                  "&:hover": {
                    border: "1px solid rgba(0,217,255,0.3)",
                    background: "rgba(31, 40, 80, 0.9)",
                  },
                }}
              >
                {resumeFile
                  ? `✓  ${resumeFile.name}`
                  : "Upload PDF or Word document (max 5 MB)"}
                <input
                  hidden
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFile}
                />
              </Button>
            </Box>

            {/* Cover letter */}
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Cover Letter"
              placeholder="Tell us why you're a great fit for this role..."
              InputLabelProps={{ shrink: true }}
              error={!!errors.cover_letter}
              helperText={errors.cover_letter?.message}
              {...register("cover_letter", {
                maxLength: {
                  value: 2000,
                  message: "Cover letter must be under 2000 characters",
                },
              })}
              sx={fieldSx}
            />

            {/* Submit */}
            <Button
              type="submit"
              fullWidth
              disabled={submitting || alert?.type === "success"}
              endIcon={
                !submitting &&
                alert?.type !== "success" && (
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                )
              }
              sx={{
                mt: 1,
                height: "56px",
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "Jost, sans-serif",
                color: "#000",
                background:
                  alert?.type === "success"
                    ? "linear-gradient(135deg, #00D964 0%, #5EFFA0 100%)"
                    : "linear-gradient(135deg, #19C8E8 0%, #00D9FF 100%)",
                boxShadow:
                  alert?.type === "success"
                    ? "0 10px 30px rgba(0,217,100,0.28)"
                    : "0 10px 30px rgba(0,217,255,0.28)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  background:
                    alert?.type === "success"
                      ? "linear-gradient(135deg, #00D964 0%, #5EFFA0 100%)"
                      : "linear-gradient(135deg, #19C8E8 0%, #00D9FF 100%)",
                  boxShadow:
                    alert?.type === "success"
                      ? "0 16px 40px rgba(0,217,100,0.35)"
                      : "0 16px 40px rgba(0,217,255,0.35)",
                },
                "&.Mui-disabled": {
                  color: "#000",
                  opacity: 0.85,
                },
              }}
            >
              {submitting ? (
                <>
                  <CircularProgress size={18} sx={{ color: "#000", mr: 1 }} />
                  Submitting...
                </>
              ) : alert?.type === "success" ? (
                <>
                  <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1 }} />
                  Application Sent!
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};
