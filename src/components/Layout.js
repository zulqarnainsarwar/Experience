import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" w-full bg-[#0A0A0A]  h-screen overflow-auto ">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
