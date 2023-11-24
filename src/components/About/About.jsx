import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Carousel from "./Carousel";

export const About = () => {
  return (
    <div className="w-full h-full" id="about">
      <Carousel />
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
