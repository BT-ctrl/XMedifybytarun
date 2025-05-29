import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function CustomSnackbar({
  open,
  setOpen,
  message,
  severity = "success", 
  duration = 5000,
  position = { vertical: "bottom", horizontal: "center" },
}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={position}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ color: "#fff", bgcolor: severityColor(severity) }}
        icon={false}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

// Optional helper function to customize background colors
const severityColor = (severity) => {
  switch (severity) {
    case "error":
      return "#d32f2f";
    case "warning":
      return "#ed6c02";
    case "info":
      return "#0288d1";
    case "success":
    default:
      return "#2e7d32";
  }
};
