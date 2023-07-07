import React, { useEffect, useState } from "react";
import defaultUser from "../../assets/defaultUser.png";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Search from "../search/Search";
import { useAddToWishList } from "../../Pages/WishListContext/WishListContext";
import MenuDrop from "../MenuDrop/MenuDrop";
import { useCartList } from "../../Pages/CartContext/CartContext";
const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const auth = JSON.parse(localStorage.getItem("auth"));

  const { addToWishList } = useAddToWishList();

  const { addToCartInList } = useCartList();

  return (
    <>
      <div
        className={` flex flex-col sm:flex-row py-3 max-w-screen mb-3 fixed left-0 right-0 px-[4%] md:px-[10%] bg-[--theme-color] ${
          colorChange ? "shadow-sm  drop-shadow-sm" : ""
        } z-10 transition delay-75 ease-in-out`}
      >
        <nav className="flex justify-between w-full items-center  ">
          <div className="relative flex items-center">
            <Link to={auth ? "/profile" : "/login"}>
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
          <div className="hidden  sm:block sm:w-1/3 relative">
            <Search />
          </div>
          <div className="flex  items-center">
            <Link to="/start-shopping">
              <button className="mx-2 px-3 py-1 shadow-sm rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition">
                <span className="hidden xs:block">Explore</span>
              </button>
            </Link>

            <ul className="hidden md:flex justify-between text-2xl ps-1">
              <Link to={auth ? "/wishlist" : "/login"}>
                <li className="relative bg-gray-200  p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer mx-2 transition shadow-sm">
                  <BsBookmarkHeart />
                  {auth && addToWishList.length > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-600 border-2 border-[--theme-color] rounded-full -top-2 -right-2 ">
                      {addToWishList.length}
                    </div>
                  )}
                </li>
              </Link>
              <Link to={auth ? "/cart" : "/login"}>
                <li className="relative bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer mx-2 transition shadow-sm">
                  <HiOutlineShoppingBag />
                  {auth && addToCartInList.length > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-600 border-2 border-[--theme-color] rounded-full -top-2 -right-2 ">
                      {addToCartInList.length}
                    </div>
                  )}
                </li>
              </Link>
            </ul>
            <section className="md:hidden cursor-pointer relative">
              <RxHamburgerMenu
                className="text-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              {isMenuOpen && <MenuDrop navigate={navigate} />}
            </section>
          </div>
        </nav>
        <div className="mt-4 sm:hidden relative">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Navbar;
