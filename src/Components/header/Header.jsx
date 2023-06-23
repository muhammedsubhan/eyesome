import React from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
import bannerImg from "../../assets/bannerImg.png";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-3 mb-5 px-32 ">
        <div className="max-w-xl mx-auto sm:mx-0  py-2  lg:w-1/3 ">
          <h1 className="text-6xl  sm:text-7xl lg:text-8xl font-semibold  py-3 w-full">
            Glasses & Lens
          </h1>
          <p className="py-3 text-md  text-gray-600">
            Buy the best high-quality sunglasses from us.
            <br />
            More than 100 types of assortment.
          </p>
          <div className="flex gap-5">
            <button className=" py-2 px-4 bg-gray-900  text-gray-100 rounded-lg hover:bg-gray-800 disabled:bg-opacity-50 disabled:hover:bg-opacity-50">
              Start Shopping
            </button>
            <button className="flex items-center">
              Explore More
              <BsArrowDownRightCircle className="text-lg" />
            </button>
          </div>
        </div>
        <div className="hidden w-1/2 lg:flex justify-end">
          <img src={bannerImg} alt="bannerImg" className="w-2/3	 h-full" />
        </div>
      </div>
    </>
  );
};

export default Header;
