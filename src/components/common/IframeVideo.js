import React from "react";

const IframeVideo = ({ videourl, title }) => {
  return (
    <div className="">
      <iframe
        src={videourl}
        title={title}
        height={"600px"}
        className="w-full h-[70vh]"
        frameBorder="0"
        allowFullScreen
        autoplay // This attribute enables autoplay
      ></iframe>
    </div>
  );
};

export default IframeVideo;
