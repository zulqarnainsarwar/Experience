import React, { useState } from "react";
import LeftContainer from "../EnigMara/LeftContainer";
import Heading from "../common/Heading";
import imagesData from "../imagesData.json";
import exartaData from "../Data/ExartaData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Modal from "../common/Model";
import { Link } from "react-router-dom";
import CustomLinkArrow from "../common/CustomLinkArrow";
const Exarta = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showModal, setModalShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const {
    path: activeImagePath,
    heading,
    text,
    linkPosition,
    secn,
  } = exartaData[activeImageIndex];
  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };
  return (
    <div className="h-full w-full overflow-auto">
      <div className="pt-5 w-full flex-col flex lg:flex-row  px-10 ">
        <div className="w-full lg:w-1/5 lg:pl-10  ">
          <h1 className="text-white text-2xl font-sharpin lg:pb-5 ">
            GAMES ARENA
          </h1>
          <div className="bg-left_image bg-contain bg-no-repeat lg:h-[644px] h-[400px]   lg:py-10">
            <LeftContainer />
          </div>
        </div>
        <div className="w-full lg:w-4/5 lg:ml-10 ">
          <div className="  lg:py-0 py-5">
            <h2 className="lg:pl-20 lg:pb-5 font-sharpin text-2xl text-white">
              {" "}
              SCENES LIST
            </h2>
            <div className="bg-border_image  bg-no-repeat  bg-100% lg:w-[1307px] lg:h-[500px] ">
              <div className="flex justify-center items-center relative  ">
                <img
                  src={activeImagePath}
                  style={{
                    width: "99%",
                    marginBottom: "0.1vw",
                    marginTop: "0.1vw",
                  }}
                  alt="mainImage"
                />
                <Heading
                  text={heading}
                  paragraph={text}
                  secn={secn}
                  top={70}
                  left={4}
                  className="absolute w-[65vw] "
                />
                <Modal
                  handleCloseModal={handleCloseModal}
                  showModal={showModal}
                />
                {linkPosition.map((position) => (
                  <Link
                    className="block z-20 w-[11px] h-[11px] cursor-pointer"
                    onClick={() => setModalShow(true)}
                    style={{
                      position: "absolute",
                      left: position.left,
                      top: position.top,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
                      <div className="h-4 w-4 bg-white rounded-full" />
                    </div>
                  </Link>
                ))}
                {activeImageIndex !== exartaData.length - 1 && (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      if (activeImageIndex < exartaData.length - 1) {
                        setActiveImageIndex((prev) => prev + 1);
                      }
                    }}
                  >
                    <CustomLinkArrow
                      top={65}
                      right={14}
                      text={"Next Billboard"}
                      rotate={0}
                      link={"/Exarta"}
                    />
                  </div>
                )}
                {activeImageIndex > 0 && (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveImageIndex((prev) => prev - 1);
                    }}
                  >
                    <CustomLinkArrow
                      top={60}
                      left={8}
                      text={"Previous Billboard"}
                      rotate={180}
                      link={"/Exarta"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <Swiper
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
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="  cursor-pointer  !px-10 !py-5 "
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {exartaData.map((exartaData, index) => (
              <SwiperSlide
                key={index}
                className={`${activeImageIndex === index ? "border  " : ""}`}
                onClick={() => handleImageChange(index)}
              >
                <img
                  src={exartaData.path}
                  className=" object-cover rounded-lg"
                  alt="BottomImage"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Exarta;
