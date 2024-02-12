import React from "react";
import { Navbar } from ".";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="h-[91vh] flex flex-1 justify-center items-center flex-col mf:mr-10 ju  gradient-bg-rev">
        <div className="text-3xl m-5 sm:text-7xl text-white">
          Error: 404 Web Page Not Available
        </div>
        <button
          type="button"
          onClick={() => handleRedirect()}
          className="flex flex-row justify-center items-center md:w-8/12 my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <p className="text-white text-base font-semibold">Go to Home Page</p>
        </button>
      </div>
    </div>
  );
};

export default Error;
