import React, { useState } from "react";
import bannerHero from "../../assets/bannerHero.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext/UserAuthContext";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { logIn } = useUserAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(" ");

    try {
      await logIn(data.email, data.password);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="grid  grid-rows-1 lg:grid-cols-2 w-full  h-screen m-auto">
        <div className="hidden lg:block max-h-screen rounded-lg">
          <img
            src={bannerHero}
            alt="bannerHero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center w-full px-5">
          <div className="px-7 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
            <Link to="/">
              <h1 className="font-monoton text-3xl hover:text-red-800 cursor-pointer transition text-center">
                eyesome
              </h1>
            </Link>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold mb-3 ">
                Login To Your Account
              </h1>
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <label className="flex flex-col">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="border rounded-md p-1.5 shadow-sm"
                  />
                </label>
                <label className="flex flex-col">
                  Password
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="border rounded-md p-1.5 shadow-sm"
                  />
                </label>
                {error && <p className="text-center text-red-800">{error}</p>}
                <div className="w-full py-2 flex flex-col gap-4 items-center">
                  <button
                    type="submit"
                    className=" w-2/3 text-lg text-center py-2 px-4 border border-[--primary-text-color] rounded-lg hover:bg-[--primary-text-color] hover:text-white transition"
                  >
                    Login
                  </button>

                  <Link to="/signup" className="underline text-gray-600">
                    Create New Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
