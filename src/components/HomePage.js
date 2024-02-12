import React from "react";
import { Navbar } from ".";
import { useNavigate } from "react-router-dom";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const HomePage = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/transaction");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-[91vh] flex flex-1 justify-center items-center flex-col mf:mr-10   gradient-bg-rev">
        <div className="w-3/5 ">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-4/12 w-11/12  text-xl">
            Explore the crypto world. Buy and sell cryptocurrencies easily.
          </p>
          <button
            type="button"
            onClick={() => handleRedirect()}
            className="flex flex-row justify-center items-center md:w-8/12 my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">
              Make Transacton
            </p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}> Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}> Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}> WEB 3.0</div>
            <div className={commonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}> Blockchain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
