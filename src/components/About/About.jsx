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
        className="w-full overflow-y-hidden
      lg:overflow-hidden lg:max-w-[1300px] 2xl:mx-auto h-[380px] flex px-4 gap-4 about">
        <div className="h-[550px] w-[450px] flex items-center rounded-sm py-4 justify-start flex-col bg-[#1C1C1C]">
          <img
            src={kredConnect}
            className=""
            alt="kredConnect"
            height={348}
            width={200}
          />
        </div>

        <div className="h-[550px] w-[450px] flex items-center rounded-sm py-4 justify-start flex-col bg-[#1C1C1C]">
          <img
            src={KredTradex}
            className=""
            alt="kredConnect"
            height={348}
            width={200}
          />
        </div>

        <div className="h-[550px] w-[450px] flex items-center rounded-sm py-4 justify-start flex-col bg-[#1C1C1C]">
          <img
            src={LearningPower}
            className=""
            alt="kredConnect"
            height={348}
            width={200}
          />
        </div>

        <div className="h-[550px] w-[450px] flex items-center rounded-sm py-4 justify-start flex-col bg-[#1C1C1C]">
          <img
            src={CAS}
            className=""
            alt="kredConnect"
            height={348}
            width={200}
          />
        </div>

        {/* <img
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
        /> */}
      </div>

      {/* content container */}
      <div className="mt-[64px] text-center">
        <p className="font-text text-[32px] capitalize leading-[40px] lg:text-[57px] lg:leading-[58px] text-center font-bold">
          Thinking of working with us? <br /> You'll be in a good company
        </p>
        <div className="mt-[90px] flex flex-col justify-center items-center gap-8 xl:w-[500px] xl:mx-auto">
          <button
            className="flex bg-white text-black  rounded-[20px] py-4 px-6 text-[18px] lg:text-[32px]
          text-start tracking-wider font-text items-center gap-4 cursor-pointer font-semibold">
            <AiOutlineArrowRight />
            Check Our Past Work
          </button>
          <button
            className="flex bg-white text-black rounded-[20px] py-4 px-6 text-[18px] lg:text-[32px] text-start 
          tracking-wider font-text items-center gap-4 cursor-pointer font-semibold">
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
