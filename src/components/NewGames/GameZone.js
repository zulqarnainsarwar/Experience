import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Modal from "../common/Model";
import Heading from "../common/Heading";
import imagesData from "../../components/imagesData.json";
import { EffectCoverflow, Pagination } from "swiper";
const GameZone = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showModal, setModalShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  const {
    path: activeImagePath,
    heading,
    text,
    linkPosition,
    linkPosition2,
  } = imagesData[activeImageIndex];

  return (
    <div className="h-full w-full overflow-auto">
      <div className="pt-5 w-full flex-col flex lg:flex-row  px-10 overflow-hidden">
        <div className="w-full lg:w-1/5 lg:pl-10  ">
          <h1 className="text-white text-2xl font-sharpin pb-20">
            GAMES ARENA
          </h1>
          <div className="bg-left_image bg-contain bg-no-repeat h-[644px]  px-10 py-10">
            <h1 className="text-white text-xl font-montserat ">
              {" "}
              1. EXARTA HQ{" "}
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-4/5 ml-10 ">
          <div className="relative ">
            <div className="bg-border_image bg-contain bg-no-repeat !h-[64vh] !w-[72vw]">
              <h2 className="pl-10  font-sharpin text-2xl text-white">
                {" "}
                SCENES LIST
              </h2>
              <div className="flex justify-center items-center ">
                <img src={activeImagePath} className=" object-fit mt-24 " />
                <Heading
                  text={heading}
                  paragraph={text}
                  top={70}
                  left={4}
                  className="absolute w-[65vw] "
                />
                <Modal
                  handleCloseModal={handleCloseModal}
                  showModal={showModal}
                />
                {linkPosition.left !== "hidden" && (
                  <Link
                    className="block z-20 w-[11px] h-[11px] cursor-pointer"
                    onClick={() => setModalShow(true)}
                    style={{
                      position: "absolute",
                      left: linkPosition.left,
                      top: linkPosition.top,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
                      <div className="h-4 w-4 bg-white rounded-full" />
                    </div>
                  </Link>
                )}
                {linkPosition2.left !== "hidden" && (
                  <Link
                    className="block z-20 w-[11px] h-[11px] cursor-pointer"
                    onClick={() => setModalShow(true)}
                    style={{
                      position: "absolute",
                      left: linkPosition2.left,
                      top: linkPosition2.top,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
                      <div className="h-4 w-4 bg-white rounded-full" />
                    </div>
                  </Link>
                )}
              </div>
            </div>

            <Swiper>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>

          <Swiper
            effect={"coverflow"}
            onSwiper={setThumbsSwiper}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="  cursor-pointer  !px-10  "
          >
            {imagesData.map((imageData, index) => (
              <SwiperSlide
                key={index}
                className={`${activeImageIndex === index ? "border  " : ""}`}
                onClick={() => handleImageChange(index)}
              >
                <img
                  src={imageData.path}
                  className=" object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GameZone;
