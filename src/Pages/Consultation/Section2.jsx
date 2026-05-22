import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const fieldStyles = {
  "& .MuiInputBase-root": {
    backgroundColor: "#1B2242",
    color: "#E8EAF2",
    fontSize: "12px",
    minHeight: "36px",
  },
  "& .MuiOutlinedInput-input": {
    py: "8px",
  },
  "& .MuiSelect-select": {
    py: "8px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& input::placeholder, & textarea::placeholder": {
    color: "#7A82A8",
    opacity: 1,
  },
};

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    designation: "",
    businessEmail: "",
    service: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent("Schedule Consultation Enquiry");

    const body = encodeURIComponent(`
First Name: ${formData.firstName}

Last Name: ${formData.lastName}

Company Name: ${formData.companyName}

Designation: ${formData.designation}

Business Email: ${formData.businessEmail}

Service: ${formData.service}

Message:
${formData.message}
    `);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=business@iitil.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#0A0E27",
        py: { xs: "45px", md: "65px" },
        borderTop: "0.8px solid #FFFFFF14",
      }}
    >
      <Box
        sx={{
          width: "100%",
          mb: { xs: "32px", md: "44px" },
        }}
      />

      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: "20px", sm: "32px", md: "48px" },
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 20 }}
          alignItems="stretch"
          sx={{
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              sx={{
                backgroundColor: "#141829",
                width: "100%",
                height: { xs: "320px", md: "700px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="/Images/Calendar.svg"
                alt="contact"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <MotionBox
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                backgroundColor: "#141829",
                width: "100%",
                height: { xs: "auto", md: "700px" },
                p: { xs: "24px", md: "28px" },
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  color: "#E8EAF2",
                  fontFamily: "Jost, sans-serif",
                  fontSize: { xs: "26px", md: "32px" },
                  fontWeight: 500,
                  mb: { xs: "20px", md: "24px" },
                }}
              >
                Submit the details
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flex: 1,
                }}
              >
                {[
                  { label: "First Name", placeholder: "John", key: "firstName" },
                  { label: "Last Name", placeholder: "Doe", key: "lastName" },
                  {
                    label: "Company Name",
                    placeholder: "Your Company",
                    key: "companyName",
                  },
                  {
                    label: "Designation",
                    placeholder: "Your Designation",
                    key: "designation",
                  },
                  {
                    label: "Business Email",
                    placeholder: "john@company.com",
                    key: "businessEmail",
                  },
                ].map((field) => (
                  <Box key={field.label}>
                    <Typography
                      sx={{
                        color: "#8D94B8",
                        fontSize: "12px",
                        fontWeight: 500,
                        mb: "6px",
                      }}
                    >
                      {field.label}
                    </Typography>

                    <TextField
                      fullWidth
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      sx={fieldStyles}
                    />
                  </Box>
                ))}

                <Box>
                  <Typography
                    sx={{
                      color: "#8D94B8",
                      fontSize: "12px",
                      fontWeight: 500,
                      mb: "6px",
                    }}
                  >
                    Services
                  </Typography>

                  <TextField
                    select
                    fullWidth
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    sx={fieldStyles}
                  >
                    <MenuItem value="" disabled>
                      Select your Service
                    </MenuItem>
                    <MenuItem value="AI & ML">AI & ML</MenuItem>
                    <MenuItem value="Cloud">Cloud</MenuItem>
                    <MenuItem value="Data">Data</MenuItem>
                  </TextField>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#8D94B8",
                      fontSize: "12px",
                      fontWeight: 500,
                      mb: "6px",
                    }}
                  >
                    Message Box
                  </Typography>

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Add Message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    sx={fieldStyles}
                  />
                </Box>
              </Box>

              <Button
                onClick={handleSubmit}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: "16px",
                  width: "100%",
                  height: "46px",
                  backgroundColor: "#11D7FF",
                  color: "#000",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#11D7FF",
                  },
                }}
              >
                Submit
              </Button>
            </MotionBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}