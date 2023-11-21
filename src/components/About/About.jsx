import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import kredConnect from "../../assets/KredConnect.png";
import KredTradex from "../../assets/KredTradex.png";

export const About = () => {
  return (
    <div className="w-full h-[912px]" id="about">
      {/* Image container */}
      <div className="max-w-[1300px] mx-auto h-[380px] flex gap-5 px-8">
        <img
          src={kredConnect}
          className="mt-[24px]"
          alt="kredConnect"
          height={348}
          width={200}
        />
        <img
          src={KredTradex}
          className="mb-[24px]"
          alt="kredConnect"
          height={348}
          width={200}
        />
        <img
          src={kredConnect}
          className="mb-[24px]"
          alt="kredConnect"
          height={348}
          width={200}
        />
        <img
          src={kredConnect}
          className="mt-[24px]"
          alt="kredConnect"
          height={348}
          width={200}
        />
        <img
          src={kredConnect}
          alt="kredConnect"
          className="mb-[25px]"
          height={348}
          width={200}
        />
      </div>

      {/* content container */}
      <div className="mt-[64px] text-center">
        <p className="font-text text-[57px] leading-[58px] text-center font-bold">
          Thinking of working with us? <br /> You'll be in a good company
        </p>
        <div className="mt-[90px] flex flex-col gap-4 w-[500px] mx-auto">
          <button
            className="flex bg-white hover:bg-[#ef8292] transition-transform duration-[0.2s] hover:scale-150 text-black 
          rounded-[20px] py-4 px-6 text-[32px] text-start tracking-wider font-text items-center gap-4 cursor-pointer font-semibold">
            <AiOutlineArrowRight />
            Our Past Work
          </button>
          <button
            className="flex bg-white hover:bg-[#ef8292] text-black rounded-[20px] transition-transform duration-[0.2s]
           hover:scale-150 py-4 px-6 text-[32px] text-start tracking-wider font-text items-center gap-4 cursor-pointer font-semibold">
            <AiOutlineArrowRight />
            <a
              href="https://calendly.com/kalilinuxuser5/30min?month=2023-11"
              target="_blank"
              rel="noreferrer">
              Book A Free Session
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
