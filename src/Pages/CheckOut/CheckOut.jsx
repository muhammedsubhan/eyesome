import React, { useState } from "react";
import Modal from "../Model/Modal";
import Address from "../Address/Address";
import SummaryCard from "../SummaryCard/SummaryCard";
import Navbar from "../../Components/navbar/Navbar";

const CheckOut = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  return (
    <>
      <Navbar />
      <div className="md:min-h-[80vh] flex justify-center items-center py-3">
        <main className="grid md:grid-cols-2 gap-10 w-full">
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setIsOrderPlaced={setIsOrderPlaced}
          />
          <section className="p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min mt-28 ">
            <Address />
          </section>
          <div className="mt-28">
            <SummaryCard setShowModal={setShowModal} />
          </div>
        </main>
      </div>
    </>
  );
};

export default CheckOut;
