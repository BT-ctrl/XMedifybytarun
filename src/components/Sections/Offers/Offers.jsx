import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import offer1 from "../../../assets/offer1.png";
import offer2 from "../../../assets/offer2.png";

const offerImages = [offer1, offer2, offer1, offer2, offer1, offer2];

export default function Offers() {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          {offerImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={img}
                alt={`Offer ${index + 1}`}
                width="100%"
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
