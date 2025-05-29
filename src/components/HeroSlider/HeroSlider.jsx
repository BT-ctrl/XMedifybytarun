import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../assets/home.webp";

export default function HeroSlider() {
  return (
    <Swiper>
      <SwiperSlide>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          px={{ xs: 2, md: 6 }}
        >
          {/* Text Section */}
          <Box maxWidth={{ xs: "100%", md: "50%" }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Skip the travel! Find Online
            </Typography>

            <Typography variant="h1" component="h1" mb={1}>
              Medical{" "}
              <Box component="span" color="primary.main" display="inline">
                Centers
              </Box>
            </Typography>

            <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>

            <Link to="/search" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large" disableElevation>
                Find Centers
              </Button>
            </Link>
          </Box>

          {/* Image Section */}
          <Box
            component="img"
            src={img}
            alt="Online medical consultation illustration"
            width={{ xs: "100%", md: "50%" }}
            sx={{ objectFit: "contain" }}
          />
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
}
