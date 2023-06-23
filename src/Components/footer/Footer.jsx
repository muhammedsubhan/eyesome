import React from "react";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="py-5 mt-3  bg-amber-50 flex flex-wrap justify-center items-center gap-2 md:gap-10  absolute right-0 left-0 ">
        <p>Eyesome made with ❤️ by Subhan </p>
        <div className="flex gap-8">
          <a
            href="https://github.com/muhammedsubhan"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-2xl text-gray-800" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-subhan-917b62206/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin className="text-2xl text-gray-800" />
          </a>
          <a
            href="https://twitter.com/Subhan_exe"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter className="text-2xl text-gray-800" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
