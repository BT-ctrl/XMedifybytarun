import { useState } from "react";
import { format } from "date-fns";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import icon from "../../assets/hospitalicon.png";
import thumb from "../../assets/thumbsup.png";
import Calendar from "../Calendar/Calendar";

export default function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  const hospitalName =
    details["Hospital Name"]?.toLowerCase() || "Unnamed Hospital";
  const city = details["City"]?.toLowerCase() || "Unknown City";
  const state = details["State"] || "Unknown State";
  const hospitalType = details["Hospital Type"] || "General";
  const rating =
    details["Hospital overall rating"] === "Not Available"
      ? "0"
      : details["Hospital overall rating"];

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2, md: 4 }}
        flexWrap="wrap"
      >
        {/* Hospital Icon */}
        <Box
          component="img"
          src={icon}
          alt="Hospital"
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />

        {/* Hospital Info */}
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1.2}
          >
            {hospitalName}
          </Typography>

          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
          >
            {`${city}, ${state}`}
          </Typography>

          <Typography fontSize={14} mb={1}>
            {hospitalType}
          </Typography>

          {/* Price Details */}
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="primary.green"
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>

          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

          {/* Rating */}
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component="img"
              src={thumb}
              alt="Rating"
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {rating}
            </Typography>
          </Stack>
        </Box>

        {/* Booking Action Section */}
        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking ? (
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {showCalendar
                  ? "Hide Booking Calendar"
                  : "Book FREE Center Visit"}
              </Button>
            </>
          ) : (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Calendar Slot Section */}
      {showCalendar && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}
