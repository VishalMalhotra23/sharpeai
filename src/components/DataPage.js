import React, { useState, useEffect } from "react";
import { Navbar } from ".";
import ServiceCard from "./helper/ServiceCard";
import db from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const DataPage = () => {
  const [transactions, setTransactions] = useState([]);

  //fetching all transcations
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsRef = collection(db, "transactions");
        const querySnapshot = await getDocs(transactionsRef);
        const transactionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const sortedTransactions = transactionsData.sort(
          (a, b) => b.timestamp - a.timestamp
        );

        setTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-[91vh] pt-10 flex flex-1  items-center flex-col mf:mr-10 ju  gradient-bg-rev">
        <div className=" text-3xl sm:text-5xl text-white  ">
          All Transactions
        </div>
        <div className=" w-3/6 my-10 flex-1 flex flex-col justify-start items-center">
          {transactions.map((transaction) => (
            <ServiceCard
              key={transaction.id}
              amount={transaction.amount}
              addressTo={transaction.addressTo}
              timestamp={transaction.timestamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataPage;
