import React from "react";
import teamMember1 from "../../assets/team/Shubham-kred.webp";
import teamMember2 from "../../assets/team/Sachin-kred.webp";

export const Team = () => {
  return (
    <div className="w-full h-full 2xl:h-screen mt-16">
      <h4 className="text-center text-[40px] leading-[50px] lg:text-[90px] font-thin lg:leading-[100px] mb-10 tracking-[0.2px]">
        Our Team
      </h4>
      <div
        className="flex flex-col overflow-hidden justify-start gap-8 mb-8 lg:mb-0 lg:gap-0 lg:flex-row lg:justify-between
          w-full h-full xl:max-h-[810px]">
        {/* Image container */}
        <div className="w-full p-3 lg:p-0 lg:w-2/4">
          <img src={teamMember1} alt="team-member" className="h-full w-full" />
        </div>
        {/* Text Container */}
        <div className="w-full lg:w-2/4 flex flex-col justify-center items-center text-center">
          <p
            className="font-text font-light text-[35px] leading-[45px] lg:text-[64px]
           lg:leading-[74px] w-[80%] mb-8">
            Shubham is a highly motivated Person and
          </p>
          <h3
            className="font-bold text-[18px] lg:text-[24px] leading-[28px] lg:leading-[34px]
           tracking-[0.5px]">
            Co-Founder & CTO <br /> @KredAllino Technologies
          </h3>
        </div>
      </div>

      <div
        className="flex flex-col overflow-hidden justify-start gap-8 mb-8 lg:mb-0 lg:gap-0 
        lg:flex-row-reverse lg:justify-between w-full h-full xl:max-h-[810px]">
        {/* Image container */}
        <div className="w-full p-3 lg:p-0 lg:w-2/4">
          <img src={teamMember2} alt="team-member" className="h-full w-full" />
        </div>
        {/* Text Container */}
        <div className="w-full lg:w-2/4 flex flex-col justify-center items-center text-center">
          <p
            className="font-text font-light text-[35px] leading-[45px] lg:text-[64px]
           lg:leading-[74px] w-[80%] mb-8">
            Sachin is a highly motivated Person and
          </p>
          <h3
            className="font-bold text-[18px] lg:text-[24px] leading-[28px] lg:leading-[34px]
           tracking-[0.5px]">
            Co-Founder <br /> @KredAllino Technologies
          </h3>
        </div>
      </div>
    </div>
  );
};
