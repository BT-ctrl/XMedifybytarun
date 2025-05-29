import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { format, add, isEqual, startOfDay } from "date-fns";
import { SlideNextButton, SlidePrevButton } from "./SliderButtons";
import styles from "./DaySelector.module.css";

export default function DaySelector({
  selectedDate,
  setSelectedDate,
  totalSlots,
}) {
  const today = useMemo(() => startOfDay(new Date()), []);

  const dateItems = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => add(today, { days: i }));
  }, [today]);

  const customDateFormat = (day) => {
    if (isEqual(today, day)) return "Today";
    if (isEqual(add(today, { days: 1 }), day)) return "Tomorrow";
    return format(day, "E, d LLL");
  };

  return (
    <Stack pt={3} position="relative" data-testid="day-selector">
      <Divider sx={{ mb: 3 }} />

      <Swiper
        slidesPerView={4}
        loop={false}
        spaceBetween={11}
        className={styles.swiperStyles}
        breakpoints={{
          767: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {/* Prev Button */}
        <span slot="container-start">
          <Box display={{ xs: "none", md: "block" }}>
            <SlidePrevButton />
          </Box>
        </span>

        {dateItems.map((day, index) => {
          const isSelected = isEqual(day, selectedDate);
          return (
            <SwiperSlide
              key={index}
              className={styles.swiperslide}
              data-testid={`day-item-${index}`}
            >
              <Stack
                textAlign="center"
                onClick={() => setSelectedDate(day)}
                sx={{ cursor: "pointer" }}
                data-testid={`day-select-${customDateFormat(day).toLowerCase()}`}
              >
                <Typography
                  fontWeight={isSelected ? 700 : 400}
                  fontSize={{ xs: 11, md: 16 }}
                >
                  {customDateFormat(day)}
                </Typography>
                <Typography fontSize={{ xs: 8, md: 12 }} color="primary.green">
                  {`${totalSlots} Slots Available`}
                </Typography>

                <Box
                  height={{ xs: "4px", md: "5px" }}
                  width={{ xs: 1, md: "calc(100% - 50px)" }}
                  bgcolor={isSelected ? "primary.main" : "transparent"}
                  mt="5px"
                  mx="auto"
                  data-testid={`day-highlight-${index}`}
                />
              </Stack>
            </SwiperSlide>
          );
        })}

        {/* Next Button */}
        <span slot="container-end">
          <Box display={{ xs: "none", md: "block" }}>
            <SlideNextButton />
          </Box>
        </span>
      </Swiper>

      {/* Bottom Track Line */}
      <Box
        height={{ xs: "4px", md: "5px" }}
        width={{ xs: 1, md: "calc(100% - 150px)" }}
        bgcolor="#F0F0F5"
        mt="5px"
        position="absolute"
        bottom={0}
        left="50%"
        sx={{ translate: "-50% 0" }}
      />
    </Stack>
  );
}
