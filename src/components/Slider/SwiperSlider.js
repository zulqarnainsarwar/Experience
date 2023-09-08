import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const teamMembers = [
  {
    src: "https://swiperjs.com/demos/images/nature-1.jpg",
    name: "Exarta HQ",
    designation: "Lorem lipsum",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-2.jpg",
    name: "ESCAPE GAME",
    designation: "Lorem lipsum",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-3.jpg",
    name: "ESCAPE GAME",
    designation: "Lorem lipsum",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-4.jpg",
    name: "ESCAPE GAME",
    designation: "Lorem lipsum",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-5.jpg",
    name: "ESCAPE GAME",
    designation: "Lorem lipsum",
  },
];

const SwiperSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
      }}
      slidesPerView={3}
      spaceBetween={30}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      loop
      className="mySwiper"
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index}>
          <img
            className="object-cover h-[360px] w-[360px] max-w-full max-h-full mx-auto"
            src={member.src}
            alt="team-member"
          />
          <div className="bg-black px-4 flex flex-col py-3 w-full absolute opacity-90 bottom-0">
            <h2 className="text-lg text-white uppercase">{member.name}</h2>
            <h3 className="text-[14px] text-[#ededee] leading-5 font-secondary">
              {member.designation}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
