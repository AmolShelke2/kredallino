import React from "react";
import teamMember1 from "../../assets/team/Shubham-kred.webp";
import teamMember2 from "../../assets/team/Sachin-kred.webp";

export const Team = () => {
  return (
    <div className="w-full h-full 2xl:h-[1000px] my-16">
      <h4 className="text-center text-[40px] leading-[50px] lg:text-[90px] font-bold font-text lg:leading-[100px] mb-10 tracking-[0.2px]">
        Our Team
      </h4>
      <div className="2xl:mt-[100px] mx-8 2xl:mx-[78px] 2xl:max-h-[861px] h-full flex flex-col 2xl:flex-row gap-y-20 2xl:gap-0 xl:justify-between items-start">
        <div className="w-full 2xl:max-w-[45%] my-6 2xl:my-[90px] h-full 2xl:h-[630px] 2xl:w-[700px] flex flex-col gap-20">
          <div>
            <h3 className="font-text text-[36px] font-bold leading-[50px] capitalize mb-2.5">
              Types of Application we have build
            </h3>
            <p className="text-[16px] leading-[26px] font-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              commodi quos maxime ad placeat exercitationem corporis
              consectetur! Deserunt, obcaecati assumenda! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Iusto aperiam accusamus
              temporibus in ab quam dolores odio est enim mollitia!
            </p>
          </div>
          {/* application types  */}
          <div className="w-full sm:w-[700px] flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center">
              <p className="w-[231px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#ddd0c8]">
                Digital marketing
              </p>
              <div className="ml-2 w-[315px] bg-[#ddd0c8] h-1 hidden md:block"></div>
              <p className="ml-2 w-[84px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#ddd0c8]">
                60%
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center">
              <p className="w-[231px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#c4b471]">
                Woo Commerce
              </p>
              <div className="ml-2 w-[315px] bg-[#c4b471] h-1 hidden md:block"></div>
              <p className="ml-2 w-[84px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#c4b471]">
                95%
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center">
              <p className="w-[231px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#93fcfd]">
                E-commerce
              </p>
              <div className="ml-2 w-[315px] bg-[#93fcfd] h-1 hidden md:block"></div>
              <p className="ml-2 w-[84px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#93fcfd]">
                80%
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center">
              <p className="w-[231px] text-[20px] leading-[34px] font-semibold font-text capitalize text-[#ffa8d7]">
                Enterprise websites
              </p>
              <div className="ml-2 w-[315px] bg-[#ffa8d7] h-1 hidden md:block"></div>
              <p className="ml-2 w-[84px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#ffa8d7]">
                100%
              </p>
            </div>
          </div>
        </div>

        <div className="w-auto h-full 2xl:w-[55%] grid grid-cols-1 place-items-center md:grid-cols-2 md:place-items-start xl:grid-cols-3 gap-4">
          <div className="cursor-pointer">
            <div className="opacity-30 hover:opacity-100 transition-all duration-1000">
              <img src={teamMember1} alt="team-member" />
            </div>
            <p className="bg-black w-full py-4 px-2 text-center text-font">
              Shubham - CTO
            </p>
          </div>

          <div className="cursor-pointer">
            <div className="opacity-30 hover:opacity-100 transition-all duration-1000">
              <img src={teamMember2} alt="team-member" />
            </div>
            <p className="bg-black w-full py-4 px-2 text-center text-font">
              Sachin - Co-founder
            </p>
          </div>

          <div className="cursor-pointer">
            <div className="opacity-30 hover:opacity-100 transition-all duration-1000">
              <img src={teamMember1} alt="team-member" />
            </div>
            <p className="bg-black w-full py-4 px-2 text-center text-font">
              Shubham - CTO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
