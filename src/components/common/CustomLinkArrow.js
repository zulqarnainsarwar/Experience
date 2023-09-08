import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomLinkArrow = ({
    top,
    left,
    text,
    right,
    rotate = "0",
    link = "/",
}) => {
    const [isArrowHovered, setIsArrowHovered] = useState(false);
  return  <span
  className="border border-white h-6 w-6 transition-all duration-500   text-white flex items-center justify-between ease-in-out font-bold "
  style={{
    borderRadius: "12.5px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
    textShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px",
    width: "24px",
    position: "absolute",
    right: `${right}%`,
    top: `${top}%`,
    left: `${left}%`,
    cursor: isArrowHovered ? "pointer" : "default",
  }}
  onMouseEnter={() => setIsArrowHovered(true)}
  onMouseLeave={() => setIsArrowHovered(false)}
>
  <span
    className="block absolute"
    style={{ top: "6px", left: "auto", right: "5px" }}
  >
    <svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      style={{
        transform: `rotate(${rotate}deg)`,
        cursor: isArrowHovered ? "pointer" : "default",
      }}
      className={`rotate-${rotate} ${
        isArrowHovered ? "cursor-pointer" : ""
      }`}
    >
      <line
        x1="11.7052"
        y1="4.77742"
        x2="6.8748"
        y2="9.60777"
        strokeWidth="2"
      ></line>
      <path d="M10.2912 4.77745L6.89487 1.38135" strokeWidth="2"></path>
      <line
        x1="10.5151"
        y1="5.45581"
        x2="0.998047"
        y2="5.45581"
        strokeWidth="2"
      ></line>
    </svg>
  </span>
  <Link to={link}>
    <span
      className={`block  transition-opacity duration-500 ease-in-out antialiased     ${
        isArrowHovered ? "opacity-100" : "opacity-0"
      }`}
      style={{
        whiteSpace: "nowrap",
        position: "absolute",
        top: "0px",
        lineHeight: "1",
        padding: "3px 22px 3px 15px",
        right: "0px",
        left: "auto",
      }}
    >
      {text}
    </span>
  </Link>
</span>
};

export default CustomLinkArrow;
