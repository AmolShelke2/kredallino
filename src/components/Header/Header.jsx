import React, { useState } from "react";
import logo from "../../assets/kredallino-logo.webp";
import { HeaderItem } from "./HeaderItem";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [show, setShow] = useState(false);

  const showAndHideHandler = () => {
    setShow(!show);
  };

  return (
    <header
      className="flex flex-col lg:flex-row justify-between lg:items-center py-4 px-4 md:px-14 relative gap-8 
    lg:gap-0 border-b-2 border-b-[hsla(0,0%,100%,.08)] sm:border-none">
      <div className="cursor-pointer">
        <img className="" src={logo} alt="" height={150} width={150} />
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden block cursor-pointer absolute right-4 top-3 py-2"
        onClick={showAndHideHandler}>
        <AiOutlineMenu size={30} className="text-[#a4a4a4]" />
      </div>

      {/* Navigation Links */}
      <nav
        className={`lg:flex list-none gap-8 ${
          show ? "flex flex-col items-start" : "hidden"
        }`}>
        <HeaderItem name={"Home"} link={"home"} />
        <HeaderItem name={"About"} link={"about"} />
        <HeaderItem name={"Services"} link={"services"} />
        <HeaderItem name={"Blogs"} link={"blogs"} />
        <HeaderItem name={"Contact"} link={"contact"} />
      </nav>
    </header>
  );
};
