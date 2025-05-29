import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { format } from "date-fns";

export default function BookingModal({
  setOpen,
  open,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    triggerEvent();

    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings.push({ ...bookingDetails, bookingEmail: email });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    showSuccessMessage(true);
    setEmail("");
    setOpen(false);
  };

  const triggerEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "first_visit",
      eventDate: new Date().toISOString(),
    });
  };

  const formatDate = (day) => {
    if (!day) return "";
    return format(new Date(day), "E, d LLL");
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
        role="dialog"
        data-testid="booking-modal"
      >
        <Typography variant="h5" fontWeight={600} mb={1}>
          Confirm Booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          Please enter your email to confirm booking for{" "}
          <Box component="span" fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </Box>
        </Typography>

        <form onSubmit={handleBooking}>
          <Stack spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ "data-testid": "booking-email-input" }}
            />
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                data-testid="confirm-booking-btn"
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => setOpen(false)}
                data-testid="cancel-booking-btn"
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
