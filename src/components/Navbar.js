import React from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirect = (destination) => {
    navigate(destination);
  };

  return (
    <nav className="w-full flex md:justify-center justify-between item-center p-6 gradient-bg-services">
      <div className="w-10 md:flex-[0.5] flex-initial justify-center items-center ">
        <img
          src={logo}
          alt="logo"
          className="w-32 cursor-pointer"
          onClick={() => handleRedirect("/")}
        />
      </div>
      <div>
        <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
          <li
            className="mx-4 text-lg cursor-pointer"
            onClick={() => handleRedirect("/")}
          >
            Home
          </li>
          <li
            className="mx-4 text-lg cursor-pointer"
            onClick={() => handleRedirect("/transaction")}
          >
            Transaction
          </li>
          <li
            className="mx-4 text-lg cursor-pointer"
            onClick={() => handleRedirect("/data")}
          >
            Data
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
