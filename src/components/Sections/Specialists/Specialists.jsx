import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../../assets/lesley.png";
import img2 from "../../../assets/ahmad.png";
import img3 from "../../../assets/heena.png";
import img4 from "../../../assets/ankur.png";
import img5 from "../../../assets/ahmad-stevens.png";

import SpecialistCard from "./SpecialistCard";

export default function Specialists() {
  const specialistData = [
    { img: img1, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopedics" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img5, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    // Duplicates for loop effect
    { img: img1, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopedics" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img5, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
  ];

  return (
    <Box py={6} id="find-doctors" aria-label="Our Medical Specialists Section">
      <Typography variant="h2" textAlign="center" mb={4} px={2}>
        Our Medical Specialists
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop
        centeredSlides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          767: { slidesPerView: 4 },
        }}
      >
        {specialistData.map((doc, index) => (
          <SwiperSlide key={`${doc.title}-${index}`}>
            <SpecialistCard
              img={doc.img}
              title={doc.title}
              designation={doc.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
