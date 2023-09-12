import React from "react";
import LeftSideData from "../LeftSideData.json";
import { Link, useLocation } from "react-router-dom";

const LeftContainer = () => {
  const location = useLocation();

  return (
    <div>
      {LeftSideData.map((data, index) => {
        console.log("location.pathname:", location.pathname);
        console.log("data.url:", data.url);

        return (
          <Link to={data.url} key={index}>
            <h1
              className={`text-white text-xl font-montserat py-7 w-[313px] lg:w-[328px] lg:px-10 px-5  ${
                location.pathname === data.url ? "bg-[#FF6600] text-white " : ""
              }`}
            >
              <span>{data.id} .</span> {data.heading}
            </h1>
          </Link>
        );
      })}
    </div>
  );
};

export default LeftContainer;
