import React from "react";
import { Link } from "react-router-dom";
const CustomLinkButton = ({ text, link = "/" }) => {
  return (
    <div className="flex flex-row space-x-4  ">
      <Link to={link}>
        <span className="bg-[#FFFE03] py-2 lg:py-3 px-12 rounded-md  cursor-pointer font-extrabold text-md lg:text-xl ">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default CustomLinkButton;
