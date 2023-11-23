import React from "react";
import teamMember1 from "../../assets/team/Shubham-kred.webp";
import teamMember2 from "../../assets/team/Sachin-kred.webp";

export const Team = () => {
  return (
    <div className="w-full h-[1000px] my-16">
      <h4 className="text-center text-[40px] leading-[50px] lg:text-[90px] font-bold font-text lg:leading-[100px] mb-10 tracking-[0.2px]">
        Our Team
      </h4>
      <div className="mt-[100px] mx-[78px] max-h-[861px] h-full flex justify-between items-start">
        <div className="max-w-[45%] my-[90px] h-[630px] w-[700px] flex flex-col gap-20">
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
          <div className="w-[700px] flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <p className="w-[231px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#ddd0c8]">
                Digital marketing
              </p>
              <div className="ml-2 w-[315px] bg-[#ddd0c8] h-1"></div>
              <p className="ml-2 w-[84px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#ddd0c8]">
                60%
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="w-[231px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#c4b471]">
                Woo Commerce
              </p>
              <div className="ml-2 w-[315px] bg-[#c4b471] h-1"></div>
              <p className="ml-2 w-[84px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#c4b471]">
                95%
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="w-[231px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#93fcfd]">
                E-commerce
              </p>
              <div className="ml-2 w-[315px] bg-[#93fcfd] h-1"></div>
              <p className="ml-2 w-[84px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#93fcfd]">
                80%
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="w-[231px] text-[20px] leading-[34px] font-semibold font-text capitalize text-[#ffa8d7]">
                Enterprise websites
              </p>
              <div className="ml-2 w-[315px] bg-[#ffa8d7] h-1"></div>
              <p className="ml-2 w-[84px] text-[24px] leading-[34px] font-semibold font-text capitalize text-[#ffa8d7]">
                100%
              </p>
            </div>
          </div>
        </div>
        <div className="w-[55%] grid grid-cols-3 gap-4 place-items-center">
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
