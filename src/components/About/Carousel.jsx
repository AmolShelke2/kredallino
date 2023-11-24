import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import kredConnect from "../../assets/KredConnect.png";
import { useState } from "react";

import KredTradex from "../../assets/KredTradex.png";
import LearningPower from "../../assets/LearningPower.png";
import CAS from "../../assets/CAS.png";

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  };

  const hotelCards = [
    {
      imageSrc: kredConnect,
    },
    {
      imageSrc: KredTradex,
    },
    {
      imageSrc: CAS,
    },
    {
      imageSrc: LearningPower,
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center px-10 2xl:px-40 h-[80px] mb-4">
        <div>
          <h3 className="text-2xl font-bold font-text lg:leading-[100px] tracking-[0.2px] capitalize">
            Our recent products
          </h3>
        </div>
        <div className="flex gap-4">
          <button onClick={sliderRef?.slickPrev}>
            <FaChevronLeft className="text-2xl" />
          </button>
          <button onClick={sliderRef?.slickNext}>
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <Slider ref={setSliderRef} {...sliderSettings} className="mx-10">
        {hotelCards.map((card, index) => (
          <div className="flex flex-row justify-between gap-4">
            <div
              className="h-[550px] w-[95%] flex items-center rounded-sm py-4 mx-2 justify-center flex-col bg-[#1C1C1C]"
              key={index}>
              <img
                src={card.imageSrc}
                alt="kredConnect"
                height={348}
                width={250}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
