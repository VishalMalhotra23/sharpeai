import React from "react";

const ServiceCard = ({ amount, addressTo, timestamp }) => {
  const formattedTimestamp = new Date(timestamp.toDate()).toLocaleString();
  return (
    <div className="w-full flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className="ml-1 flex flex-col flex-1">
        <p className="mt-1 text-white text-sm">Address: {addressTo}</p>
        <p className="mt-1 text-white text-sm">Amount: {amount}</p>
        <p className="mt-1 text-white text-sm">Date: {formattedTimestamp}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
