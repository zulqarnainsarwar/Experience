import React from "react";

const Heading = ({ text, paragraph, top, left, secn, className }) => {
  const style = {
    top: `${top}%`,
    left: `${left}%`,
  };
  return (
    <div className={`absolute ${className} text-div`} style={style}>
      <span className="text-lg font-montserat bg-[#5E41A9] text-white w-[102px] text-center absolute top-[-10vh] lg:top-[-25vh] lg:left-[0vw] text-span">
        {secn}
      </span>
      <h1 className="lg:text-2xl  uppercase text-white font-sharpin  min-w-full text-md text-heading ">
        {text}
      </h1>
      <p className="lg:text-lg font-montserat py-4 text-[#B8B8B8] text-sm text-paragraph">
        {paragraph}
      </p>
    </div>
  );
};

export default Heading;
