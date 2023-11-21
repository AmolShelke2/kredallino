import React from "react";

export const ServiceCard = ({ service, logo, description }) => {
  return (
    <div
      className="w-[320px] h-[300px] py-5 px-4 rounded-[20px] bg-white
     text-black text-center flex flex-col justify-start items-center gap-4">
      <img src={logo} height={70} width={70} alt="logo" className="mb-4" />
      <div>
        <h4 className="font-text text-lg font-semibold mb-3 tracking-[1.2px]">
          {service}
        </h4>
        <p className="text-[15px] leading-6 tracking-wide">
          Book a free session And Let's build your ideas with our high skilled
          team!
        </p>
      </div>
    </div>
  );
};
