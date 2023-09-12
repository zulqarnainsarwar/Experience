import React from "react";

const Heading = ({ text, paragraph, top, left, secn, className }) => {
  const style = {
    top: `${top}%`,
    left: `${left}%`,
  };
  return (
    <div className={`absolute ${className}`} style={style}>
      <span className="text-lg font-montserat bg-[#5E41A9] text-white w-[102px] text-center absolute lg:top-[-25vh] lg:left-[0vw]">
        {secn}
      </span>
      <h1 className="text-2xl  uppercase text-white font-sharpin  min-w-full  ">
        {text}
      </h1>
      <p className="text-lg font-montserat py-4 text-[#B8B8B8]">{paragraph}</p>
    </div>
  );
};

export default Heading;
