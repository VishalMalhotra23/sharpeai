import React, { useState } from "react";
import { Navbar } from ".";
import Input from "./helper/Input";
import { isAddress } from "ethers";
import db from "../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const TransactionPage = () => {
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async () => {
    if (formData.addressTo.length == 0) {
      setError("Wallet address cannot be empty");
      return;
    }
    if (!isAddress(formData.addressTo)) {
      setError("Wallet address field cannot be invalid.");
      return;
    }
    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount < 0 || amount > 10000) {
      setError("Amount must be a number between 0 and 1000.");
      return;
    }

    try {
      await addDoc(collection(db, "transactions"), {
        addressTo: formData.addressTo,
        amount: amount,
        timestamp: serverTimestamp(),
      });
      setSuccess("Transaction successful.Redirecting to Data Page");
      setFormData({ addressTo: "", amount: "" });
      setTimeout(() => {
        window.location.href = "/data";
      }, 1000);
    } catch (error) {
      console.error("Error adding transaction: ", error);
      setError(
        "Error occurred while processing transaction. Please try again."
      );
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="min-h-[91vh] flex flex-1 justify-start items-center flex-col mf:mr-10 ju  gradient-bg-rev">
        <div className="my-20 text-3xl sm:text-7xl text-white  ">
          Transaction Page
        </div>
        <div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              value={formData.addressTo}
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              value={formData.amount}
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {error && <p className="text-red-500">{error}</p>}{" "}
            {success && <p className="text-green-500">{success}</p>}{" "}
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
