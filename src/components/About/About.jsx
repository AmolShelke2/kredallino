import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import kredConnect from "../../assets/KredConnect.png";
import KredTradex from "../../assets/KredTradex.png";
import LearningPower from "../../assets/LearningPower.png";
import CAS from "../../assets/CAS.png";

export const About = () => {
  return (
    <div className="w-full h-[912px]" id="about">
      {/* Image container */}
      <div
        className="w-full overflow-x-scroll overflow-y-hidden
      lg:overflow-hidden lg:max-w-[1300px] 2xl:mx-auto h-[380px] flex sm:justify-center sm:items-center gap-2 about">
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
          src={LearningPower}
          className="mt-[24px]"
          alt="kredConnect"
          height={348}
          width={200}
        />
        <img
          src={CAS}
          className="mb-[24px]"
          alt="kredConnect"
          height={348}
          width={200}
        />
      </div>

      {/* content container */}
      <div className="mt-[64px] text-center">
        <p className="font-text text-[32px] leading-[40px] lg:text-[57px] lg:leading-[58px] text-center font-bold">
          Thinking of working with us? <br /> You'll be in a good company
        </p>
        <div className="mt-[90px] flex flex-col justify-center items-center gap-8 xl:w-[500px] xl:mx-auto">
          <button
            className="flex bg-white hover:bg-[#ef8292] transition-transform duration-[0.2s] hover:scale-150 text-black 
          rounded-[20px] py-4 px-6 text-[18px] lg:text-[32px] text-start tracking-wider font-text items-center gap-4 cursor-pointer font-semibold">
            <AiOutlineArrowRight />
            Check Our Past Work
          </button>
          <button
            className="flex bg-white hover:bg-[#ef8292] text-black rounded-[20px] transition-transform duration-[0.2s]
           hover:scale-150 py-4 px-6 text-[18px] lg:text-[32px] text-start tracking-wider font-text items-center gap-4 cursor-pointer font-semibold">
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
