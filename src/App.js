import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomePage, TransactionPage, DataPage, Error } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
