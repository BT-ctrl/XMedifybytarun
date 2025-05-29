import { useSwiper } from "swiper/react";
import { Box } from "@mui/material";
import next from "../../../assets/next.png";
import prev from "../../../assets/prev.png";

const buttonStyles = (side) => ({
  cursor: "pointer",
  zIndex: 999,
  bgcolor: "#fff",
  position: "absolute",
  top: 0,
  [side]: 0, // 'left' or 'right'
  height: 48,
  width: 48,
});

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <Box
      component="img"
      src={prev}
      alt="Previous"
      onClick={() => swiper.slidePrev()}
      sx={buttonStyles("left")}
      data-testid="slide-prev-button"
    />
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <Box
      component="img"
      src={next}
      alt="Next"
      onClick={() => swiper.slideNext()}
      sx={buttonStyles("right")}
      data-testid="slide-next-button"
    />
  );
}

export { SlidePrevButton, SlideNextButton };
