import React, { useState } from "react";
import escape from "../escape.jpeg";
import CustomLinkButton from "./common/CustomLinkButton";
import Heading from "./common/Heading";
import Modal from "./common/Model";
import { Link } from "react-router-dom";
const EscapeGame = () => {
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
            text={"ESCAPE THE ASYLUM 【HORROR】"}
            paragraph={
              "You are trapped in an Asylum, can you escape from the scary doctor? Horror Escape 😱 Realistic Quality 🤫 2 Endings & Easter Eggs 🎃1-4 Players Questions or bugs: @ChitaZFN on Twitter Map walkthroughvideo: @ChitaZ on Youtube"
            }
          />

          {/*  CustomLinkButton component */}
          <div className="flex flex-row space-x-4 py-4">
            <CustomLinkButton text={"Back"} link={"/discover"} />
            <CustomLinkButton text={"Next"} link={"/"} />
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <Modal handleCloseModal={handleCloseModal} showModal={showModal} />
          <div className="bg-hero_three bg-cover bg-center min-h-[600px] min-w-[1050px] relative">
            {/*  Video component */}

            <Link
              className="block z-20 w-[11px] h-[11px] cursor-pointer"
              onClick={() => setModelShow(true)}
              // target="_"
              style={{ position: "absolute", left: "85%", top: "48%" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="h-20 w-20 bg-white/5 rounded-full flex justify-center items-center animation-pulse">
                <div className="h-4 w-4 bg-white rounded-full" />
              </div>
            </Link>

            <Link
              className="block z-20 w-[11px] h-[11px] cursor-pointer"
              onClick={() => setModelShow(true)}
              // target="_"
              style={{ position: "absolute", left: "6%", top: "46%" }}
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
            {/*  Video component */}
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
          {/***<img src={escape} alt="Logo" className="object-cover object-center" /> **/}
        </div>
      </div>
    </div>
  );
};

export default EscapeGame;
