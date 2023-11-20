import React from "react";

export const HomeSection = () => {
  return (
    <div className="h-screen w-full  py-4 px-4 md:px-14" id="home">
      <div className="w-full h-[550px] mt-[270px] relative">
        <div className="absolute right-0 top-0">
          <p className="capitalize text-[18px] border-t-2 p-2 leading-[24px] text-start">
            A digital Product <br /> creative studio
            <br /> Based in India
          </p>
        </div>
        <div className="h-[414px] w-full absolute bottom-0 mb-4">
          <p className="text-[110px] leading-[138px] text-left tracking-normal font-thin">
            We are <span className="font-bold">KredAllino tech,</span> We Build
            Award-winning <span className="font-bold">Apps,</span>{" "}
            <span className="font-bold">Products</span> and{" "}
            <span className="font-bold">Softwares</span>
          </p>
        </div>
      </div>
    </div>
  );
};
