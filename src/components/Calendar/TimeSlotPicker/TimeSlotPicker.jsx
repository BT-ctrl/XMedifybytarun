import { Chip, Stack, Typography, Divider } from "@mui/material";

export default function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  const CustomChip = ({ label, onClick }) => (
    <Chip
      label={label}
      color="primary"
      variant="outlined"
      onClick={onClick}
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": { ml: 0 },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
    />
  );

  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  const SlotGroup = ({ label, slots }) => (
    <Stack
      direction="row"
      alignItems="center"
      px={{ xs: 0, md: 6 }}
      flexWrap="wrap"
    >
      <Typography width={{ xs: 1, md: "15%" }} fontSize={{ xs: 14, md: 16 }}>
        {label}
      </Typography>
      {slots.map((slot) => (
        <CustomChip key={slot} label={slot} onClick={() => handleClick(slot)} />
      ))}
    </Stack>
  );

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {availableSlots.morning.length > 0 && (
        <SlotGroup label="Morning" slots={availableSlots.morning} />
      )}
      {availableSlots.afternoon.length > 0 && (
        <SlotGroup label="Afternoon" slots={availableSlots.afternoon} />
      )}
      {availableSlots.evening.length > 0 && (
        <SlotGroup label="Evening" slots={availableSlots.evening} />
      )}
    </Stack>
  );
}
