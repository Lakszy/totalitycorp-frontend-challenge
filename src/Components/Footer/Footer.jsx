import React from "react";
import logo from "../logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <img className="h-20" src={logo} alt="logo"></img>
        </div>
        <div>
          <p className="text-black text-sm font-inter no-underline normal-case">
          ©  Copyright  {year} By <a href="https://www.linkedin.com/in/lakshaykhattar/" target="_blank" className="animate-pulse hover:border-b-2 border-black hover:animate-none">Lakshay Khattar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;