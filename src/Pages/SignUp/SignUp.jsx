import React, { useState } from "react";
import bannerHero from "../../assets/bannerHero.jpg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext/UserAuthContext";

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const [passwordToggle, setPassowrdToggle] = useState(false);

  const navigate = useNavigate();

  const userDataOnChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(userData.email, userData.password);
      localStorage.setItem("username", userData.username);
      localStorage.setItem("email", userData.email);

      navigate("/login");
    } catch (error) {
      setError(error.message);
    }

    setUserData({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const showPassword = () => {
    setPassowrdToggle((prev) => !prev);
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
              <h1 className="text-4xl font-bold mb-3 ">Sign Up</h1>
              <form
                className="flex flex-col gap-6 py-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="username"
                  placeholder="Username"
                  name="username"
                  value={userData.username}
                  className="border rounded-md p-1.5 shadow-sm"
                  onChange={userDataOnChange}
                />

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userData.email}
                  className="border rounded-md p-1.5 shadow-sm"
                  onChange={userDataOnChange}
                />
                <label className="flex flex-col relative">
                  <input
                    type={passwordToggle ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    className="border rounded-md p-1.5 shadow-sm"
                    onChange={userDataOnChange}
                  />
                  <span
                    className="absolute right-2 top-3 cursor-pointer"
                    onClick={showPassword}
                  >
                    {passwordToggle ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </label>
                <label className="flex flex-col relative">
                  <input
                    type={passwordToggle ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmpassword"
                    value={userData.confirmpassword}
                    className="border rounded-md p-1.5 shadow-sm"
                    onChange={userDataOnChange}
                  />
                  <span
                    className="absolute right-2 top-3 cursor-pointer"
                    onClick={showPassword}
                  >
                    {passwordToggle ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </label>
                {error && <p className="text-center text-red-800">{error}</p>}

                <div className="w-full py-2 flex flex-col gap-4 items-center">
                  <button
                    type="submit"
                    className=" w-2/3 text-lg text-center py-2 px-4 border border-[--primary-text-color] rounded-lg hover:bg-[--primary-text-color] hover:text-white transition"
                  >
                    Create Account
                  </button>

                  <span className="text-gray-600 ">
                    Already have an account?
                    <Link to="/login" className="underline font-semibold">
                      Login
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
