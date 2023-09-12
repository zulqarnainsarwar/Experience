import React from "react";

const Modal = ({ handleCloseModal, showModal }) => {
  return (
    showModal && (
      <div className="left-[calc((100vw-400px)/2)] top-[calc((100vh-400px)/2)]  w-[400px] h-[400px] bg-innerform_image bg-cover   rounded-xl fixed z-50">
        <div className="bg-form_image bg-cover">
          <button
            class="absolute -top-1 right-0 text-xl bg-transparent cursor-pointer text-center text-black bg-white w-7 h-7"
            onClick={handleCloseModal}
          >
            &times;
          </button>

          <h2 className="text-center text-lg 	font-sharpin pt-4   text-white  ">
            Book an Appointment
          </h2>
          <form class="px-8 pt-8">
            <div className="my-4">
              <input
                className="shadow appearance-none border rounded w-[100%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-6">
              <input
                class="shadow appearance-none border rounded w-[100%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div class="mb-6">
              <input
                className="shadow appearance-none border rounded w-[100%] pt-3 pb-16 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="text"
                type="text"
                placeholder="Enter Your Text Here"
              />
            </div>
            <div className="flex items-center justify-between ">
              <button
                class="bg-[#333333]   text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
