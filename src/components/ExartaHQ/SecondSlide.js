import React, { useState } from "react";
import CustomLinkButton from "../common/CustomLinkButton";
import Heading from "../common/Heading";
import IframeVideo from "../common/IframeVideo";
import Modal from "../common/Model";
import { Link } from "react-router-dom";
import CustomLinkArrow from "../common/CustomLinkArrow";

const SecondSlide = () => {
  const [showModal, setModelShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleCloseModal = () => {
    setModelShow(false);
  };
  return (
    <div>
      <div className="pt-20 w-11/12 flex-col flex lg:flex-row justify-center items-center overflow-x-auto">
        <div className="w-full lg:w-2/5 lg:pl-10">
          {/*  Headinga and paragraph  component */}
          <Heading
            text={"EXARTA HQ"}
            paragraph={"Official Headquarters of EXARTA LTD"}
          />
          {/*  CustomLinkButton 
          <div className="flex flex-row space-x-4 py-4">
            <CustomLinkButton text={"Back"} link={"/"} />
            <CustomLinkButton text={"Next"} link={"/escape"} />
          </div>component */}
        </div>
        <div className="w-full lg:w-3/5 relative">
          <Modal handleCloseModal={handleCloseModal} showModal={showModal} />
          <div className="bg-hero_three bg-cover bg-center min-h-[600px] min-w-[1050px] relative">
            {/*  Video component */}
            <Link
              className="block z-20 w-[11px] h-[11px] cursor-pointer"
              onClick={() => setModelShow(true)}
              style={{ position: "absolute", left: "87%", top: "48%" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
                <div className="h-4 w-4 bg-white rounded-full" />
              </div>
              {/*** <span
              className={`text-2xl block bg-white/10 w-[230px] py-2 rounded text-white ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              Book Your Packages
            </span>
            **/}
            </Link>
            <Link
              className="block z-20 w-[11px] h-[11px] cursor-pointer"
              onClick={() => setModelShow(true)}
              // target="_"
              style={{ position: "absolute", left: "7.8%", top: "48%" }}
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
              top={78}
              left={20}
              text={"Next Billboard"}
              rotate={180}
              link={"/"}
            />
            <CustomLinkArrow
              top={80}
              right={5}
              text={"  Previous Slide"}
              rotate={0}
              link={"/firstslide"}
            />
            :{/*  Video component */}
            {/* <IframeVideo
            videourl={"https://master.d395ofg8jxsgxp.amplifyapp.com"}
            title={"2D Metaverse"}
          /> */}
            {/*<img
            src={impostor}
            alt="Logo"
            className="object-cover object-center"
        /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
