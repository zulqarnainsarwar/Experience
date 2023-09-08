import React, { useState } from "react";
import CustomLinkButton from "./common/CustomLinkButton";
import Heading from "./common/Heading";
import IframeVideo from "./common/IframeVideo";
import Modal from "./common/Model";
import { Link } from "react-router-dom";
import CustomLinkArrow from "./common/CustomLinkArrow";
import SwiperSlider from "./Slider/SwiperSlider";
const Main = () => {
  const [showModal, setModelShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleCloseModal = () => {
    setModelShow(false);
  };
  return (
    <div className="h-full w-full overflow-auto">
      <div className="pt-5 w-11/12 flex-col flex lg:flex-row justify-center items-center overflow-x-auto lg:overflow-hidden">
        <div className="w-full lg:w-2/5 lg:pl-10">
          {/*  Headinga and paragraph  component */}
          <Heading
            text={"EXARTA HQ"}
            paragraph={"Official Headquarters of EXARTA LTD"}
          />

          {/*  CustomLinkButton component 
          <div className="flex flex-row space-x-4 py-4">
            <CustomLinkButton text={"Next"} link={"/discover"} />
          </div>*/}
        </div>
        <div className="w-full lg:w-3/5">
          <Modal handleCloseModal={handleCloseModal} showModal={showModal} />
          <div className="bg-hero_image bg-cover bg-center min-h-[600px] min-w-[1050px] relative">
            {/*  Video component */}
            <Link
              className="block z-20 w-[11px] h-[11px] cursor-pointer"
              onClick={() => setModelShow(true)}
              // target="_"
              style={{ position: "absolute", left: "24.8044%", top: "46%" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
                <div className="h-4 w-4 bg-white rounded-full" />
              </div>
              {/***<span
            className={`text-2xl block bg-white/10 w-[300px] py-2 rounded text-white ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Book an Appointment
          </span>
          **/}
            </Link>
            <CustomLinkArrow
              top={46}
              left={90}
              text={"Next Billboard"}
              link={"/firstslide"}
            />
            {/** <IframeVideo
            videourl={"https://master.d395ofg8jxsgxp.amplifyapp.com"}
            title={"2D Metaverse"}
          />* */}
          </div>
        </div>
      </div>
      <div className="pt-5 w-full h-full flex  flex-col   px-10 ">
        <h1 className="text-lg text-white font-serif font-semibold text-left uppercase">
          New Games
        </h1>
        <SwiperSlider />
      </div>
    </div>
  );
};

export default Main;
