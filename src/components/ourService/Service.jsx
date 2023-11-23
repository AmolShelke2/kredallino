import React from "react";
import { ServiceCard } from "./ServiceCard";
import creativePng from "../../assets/services/creative.png";
import cyber from "../../assets/services/cyber.webp";
import digital from "../../assets/services/digital.png";
import efficient from "../../assets/services/efficient.png";
import mobile from "../../assets/services/mobile-app.png";
import seo from "../../assets/services/seo.png";

export const Service = () => {
  return (
    <div className="w-full h-full 2xl:h-screen" id="services">
      <div className="p-4 lg:p-24">
        <div className="mt-32 pb-10 lg:max-w-[1100px] lg:mx-auto">
          <h3 className="text-center capitalize text-[40px] leading-[50px] lg:text-[96px] lg:leading-[110px] font-thin">
            We've been {""}
            <span className="font-text font-bold">
              winning Awards and Hearts
            </span>{" "}
            for over 12 years...
          </h3>
        </div>
        <div
          className="px-4 lg:px-32 mt-8 lg:max-w-[1000px] lg:mx-auto flex flex-col text-center
         justify-center items-center sm:grid sm:grid-cols-2 sm:place-items-center py-8">
          <ServiceCard logo={creativePng} service={"creative Designs"} />
          <ServiceCard logo={seo} service={"Optimizing seo"} />
          <ServiceCard logo={efficient} service={"efficient website"} />
          <ServiceCard logo={digital} service={"digital marketing"} />
          <ServiceCard logo={mobile} service={"responsive mobile app"} />
          <ServiceCard logo={cyber} service={"best cyber security"} />
        </div>
      </div>
    </div>
  );
};
