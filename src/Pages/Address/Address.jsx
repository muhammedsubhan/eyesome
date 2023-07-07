import React, { useEffect, useState } from "react";

const Address = () => {
  const [address, setAddress] = useState({
    fullName: "",
    mobileNumber: "",
    houseNo: "",
    area: "",
    city: "",
    pinCode: "",
  });
  const [addressToggle, setAddressToggle] = useState(false);
  const [addressFilled, setAddressFilled] = useState(false);

  const handleClicked = () => {
    setAddressToggle(true);
  };

  const addressHandlerChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressToggle(false);

    const isAddressFilled = Object.values(address).some(
      (value) => value.trim() !== ""
    );
    setAddressFilled(isAddressFilled);

    if (isAddressFilled) {
      localStorage.setItem("address", JSON.stringify(address));
      localStorage.setItem("addressFilled", JSON.stringify(isAddressFilled));
    } else {
      localStorage.removeItem("address");
      localStorage.removeItem("addressFilled");
    }

    setAddress({
      fullName: "",
      mobileNumber: "",
      houseNo: "",
      area: "",
      city: "",
      pinCode: "",
    });

    const savedAddress = localStorage.getItem("address");
    const addressFilledToggle = localStorage.getItem("addressFilled");

    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
      setAddressFilled(JSON.parse(addressFilledToggle));
    }
  };
  useEffect(() => {
    const savedAddress = localStorage.getItem("address");
    const addressFilledToggle = localStorage.getItem("addressFilled");

    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
      setAddressFilled(JSON.parse(addressFilledToggle));
    }
  }, []);

  const onCancelHandle = () => {
    setAddressToggle(false);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Address</h1>
        {addressToggle ? (
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 p-5 bg-gray-50 shadow-sm "
            >
              <div className="flex gap-2 flex-wrap">
                <label className="flex flex-1 flex-col">
                  Full Name
                  <input
                    required
                    type="text"
                    name="fullName"
                    className="border rounded-md p-1.5 shadow-sm"
                    value={address.fullName}
                    onChange={addressHandlerChange}
                  />
                </label>
                <label className="flex flex-1 flex-col">
                  Mobile No.
                  <input
                    required
                    type="number"
                    className="border rounded-md p-1.5 shadow-sm"
                    name="mobileNumber"
                    value={address.mobileNumber}
                    onChange={addressHandlerChange}
                  />
                </label>
              </div>
              <label className="flex flex-col">
                Flat, House no., Building
                <input
                  required
                  type="text"
                  className="border rounded-md p-1.5 shadow-sm"
                  name="houseNo"
                  value={address.houseNo}
                  onChange={addressHandlerChange}
                />
              </label>
              <label className="flex flex-col">
                Area, Colony, Street
                <input
                  required
                  type="text"
                  className="border rounded-md p-1.5 shadow-sm"
                  name="area"
                  value={address.area}
                  onChange={addressHandlerChange}
                />
              </label>
              <div className="flex gap-2 flex-wrap">
                <label className="flex flex-1 flex-col">
                  Town/City
                  <input
                    required
                    type="text"
                    className="border rounded-md p-1.5 shadow-sm"
                    name="city"
                    value={address.city}
                    onChange={addressHandlerChange}
                  />
                </label>
                <label className="flex flex-1 flex-col">
                  Pin Code
                  <input
                    required
                    type="number"
                    className="border rounded-md p-1.5 shadow-sm"
                    name="pinCode"
                    value={address.pinCode}
                    onChange={addressHandlerChange}
                  />
                </label>
              </div>

              <div className=" flex gap-3 mt-3 flex-wrap">
                <button
                  onClick={onCancelHandle}
                  type="button"
                  className="border border-[--primary-text-color]  py-1.5   px-6 hover:bg-[--primary-text-color] hover:text-white transition rounded-full flex items-center gap-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-[--primary-text-color]  py-1.5   px-6 hover:bg-[--primary-text-color] hover:text-white transition rounded-full flex items-center gap-2 text-sm"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="mt-8">
            <button
              onClick={handleClicked}
              className="border border-[--primary-text-color]  py-1.5   rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition text-sm"
            >
              + Add Address
            </button>
          </div>
        )}

        {addressFilled ? (
          <div className="mt-8">
            <h3 className="text-lg font-semibold break-all">
              {address.fullName}
            </h3>
            <p className="text-sm text-gray-500 break-all">
              {address.houseNo},{address.area}
            </p>
            <p className="text-sm text-gray-500 break-all">
              {address.city},{address.pinCode}
            </p>
            <p className="text-sm text-gray-500">
              Mobile:
              <span className="font-semibold ps-1 break-all">
                {address.mobileNumber}
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Address;
