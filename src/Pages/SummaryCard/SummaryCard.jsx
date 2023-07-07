import React from "react";
import OrderSummary from "../OrdersSummary/OrderSummary";

const SummaryCard = ({ setShowModal }) => {
  return (
    <>
      <OrderSummary setShowModal={setShowModal} />
    </>
  );
};

export default SummaryCard;
