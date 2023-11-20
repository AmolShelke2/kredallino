import React from "react";
import { Link } from "react-scroll";

export const HeaderItem = ({ name, link }) => {
  return (
    <div>
      <Link
        activeClass="active"
        className="text-[16px] tracking-wider font-normal text-[#a4a4a4] cursor-pointer hover:text-white"
        to={link}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}>
        {name}
      </Link>
    </div>
  );
};
