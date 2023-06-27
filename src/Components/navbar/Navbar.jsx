import React from "react";
import defaultUser from "../../assets/defaultUser.png";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import Search from "../search/Search";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-around py-4  top-0 bg-white ">
        <div className="flex">
          <Link to="/login">
            <img
              src={defaultUser}
              alt="user"
              width={40}
              className="rounded-full border-2  bg-yellow-300 me-3 hover:bg-yellow-500 cursor-pointer"
            />
          </Link>
          <Link to="/">
            <h1 className="font-monoton text-3xl hover:text-red-800 cursor-pointer  transition">
              eyesome
            </h1>
          </Link>
        </div>
        <Search />
        <div className="flex  items-center">
          <Link to="/start-shopping">
            <button className="mx-2 px-3 py-1 shadow-sm rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition">
              Explore
            </button>
          </Link>

          <ul className="text-2xl ps-1 flex">
            <Link to="/login">
              <li className="bg-gray-200  p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer mx-2 transition shadow-sm">
                <BsBookmarkHeart />
              </li>
            </Link>
            <Link to="/login">
              <li className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer mx-2 transition shadow-sm">
                <HiOutlineShoppingBag />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
