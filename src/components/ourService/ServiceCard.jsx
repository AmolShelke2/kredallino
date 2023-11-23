import React from "react";

export const ServiceCard = ({ service, logo }) => {
  return (
    <div className="w-[304px] h-[60px] mb-[20px] flex items-center gap-2">
      <div className="rounded-full h-[60px] w-[60px] flex items-center justify-center hover:bg-[#db3847] transition-all duration-1000 p-2">
        <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
      </div>
      <p className="text-[20px] leading-[28px] w-[224px] h-[28px] text-start font-text font-light capitalize">
        {service}
      </p>
    </div>
  );
};
