import React from "react";
import arrowDown from "../../assets/arrow-down.svg";

export const HomeSection = () => {
  return (
    <div
      className="h-full xl:h-screen w-full xl:pb-[300px] px-4 md:px-14"
      id="home">
      <div className="w-full h-[550px] mt-[100px] sm:mt-[100px] 2xl:mt-[270px] relative">
        {/* This is for bigger screens from mobile sizes */}
        <div className="hidden sm:block absolute right-0 top-0">
          <p className="capitalize text-[18px] border-t-2 p-2 leading-[24px] text-start">
            A digital Product <br /> creative studio
            <br /> Based in India
          </p>
        </div>
        {/* This is for mobile screens */}
        <div className="block sm:hidden absolute left-2 top-0">
          <p className="capitalize text-[18px] border-t-2 p-2 leading-[24px] text-start">
            A digital Product <br /> creative studio
            <br /> Based in India
          </p>
        </div>
        <div className="h-[400px] w-full absolute bottom-0">
          <p
            className="text-[40px] sm:text-[70px] leading-[50px] sm:leading-[80px] 2xl:text-[110px]
           2xl:leading-[138px] text-left tracking-normal font-thin">
            We are <span className="font-bold">KredAllino tech,</span> We Build
            Award-winning <span className="font-bold">Apps,</span>{" "}
            <span className="font-bold">Products</span> and{" "}
            <span className="font-bold">Softwares</span>
          </p>
        </div>
      </div>
      <div className="hidden 2xl:block ml-64 mb-40 ">
        <img src={arrowDown} alt="arrow-down" height={300} width={300} />
      </div>
    </div>
  );
};
