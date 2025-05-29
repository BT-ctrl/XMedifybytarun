import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function SmsForm() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    console.log(`Send SMS to: +91 ${phone}`);
  };

  return (
    <Box mb={5}>
      <Typography fontWeight={600} mb={1}>
        Get the link to download the app
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TextField
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          type="tel"
          inputProps={{
            inputMode: "numeric",
            maxLength: 10,
            pattern: "[0-9]{10}",
            "aria-label": "Phone number",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
          required
          sx={{
            border: "1px solid #F0F0F0",
            flex: 1,
            bgcolor: "#fff",
          }}
        />

        <Button type="submit" size="large" variant="contained" disableElevation>
          Send SMS
        </Button>
      </Box>
    </Box>
  );
}
