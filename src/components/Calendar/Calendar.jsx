import { useState } from "react";
import { Box } from "@mui/material";
import { startOfDay } from "date-fns";

import DaySelector from "./DaySelector/DaySelector";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

export default function Calendar({
  availableSlots = {},
  details,
  handleBooking,
}) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    (availableSlots.morning?.length || 0) +
    (availableSlots.afternoon?.length || 0) +
    (availableSlots.evening?.length || 0);

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
