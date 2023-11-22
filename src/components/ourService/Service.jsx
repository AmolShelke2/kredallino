import React from "react";
import { ServiceCard } from "./ServiceCard";
import webdev from "../../assets/services/web-dev.svg";
import webdesign from "../../assets/services/web-design.svg";
import seo from "../../assets/services/seo.svg";
import mobileDev from "../../assets/services/mobile.svg";

export const Service = () => {
  return (
    <div className="w-full h-full 2xl:h-screen" id="services">
      <div className="p-4 lg:p-24">
        <div className="mt-32 pb-10 lg:max-w-[1100px] lg:mx-auto">
          <h3 className="text-center lowercase text-[40px] leading-[50px] lg:text-[96px] lg:leading-[110px] font-thin">
            We've been {""}
            <span className="font-text font-bold">
              winning Awards and Hearts
            </span>{" "}
            for over 12 years...
          </h3>
        </div>
        <div className="px-4 lg:px-32 mt-8 flex flex-col justify-center items-center lg:flex-row gap-3 py-8">
          <ServiceCard logo={webdev} service={"Web Devlopment"} />
          <ServiceCard logo={webdesign} service={"Designing and dev"} />
          <ServiceCard logo={seo} service={"SEO & Marketing"} />
          <ServiceCard logo={mobileDev} service={"Mobile Apps"} />
        </div>
      </div>
    </div>
  );
};
