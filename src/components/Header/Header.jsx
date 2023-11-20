import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/kredallino-logo.webp";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
  const [show, setShow] = useState(false);

  const showAndHideHandler = () => {
    setShow(!show);
  };

  return (
    <header className="flex justify-between items-center py-4 px-14">
      <div className="cursor-pointer">
        <img className="" src={logo} alt="" height={150} width={150} />
      </div>
      <nav className="flex list-none gap-8">
        <HeaderItem name={"Home"} link={"home"} />
        <HeaderItem name={"Services"} link={"services"} />
        <HeaderItem name={"About"} link={"about"} />
        <HeaderItem name={"Blogs"} link={"blogs"} />
        <HeaderItem name={"Contact"} link={"contact"} />
      </nav>
    </header>
  );
};
