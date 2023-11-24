import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import kredConnect from "../../assets/KredConnect.png";
import { useState } from "react";

import KredTradex from "../../assets/KredTradex.png";
import LearningPower from "../../assets/LearningPower.png";
import arrowIcon from "../../assets/arrow-icon.png";

import CAS from "../../assets/CAS.png";

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    <div className="w-full h-auto">
      <div className="flex justify-between items-center px-4 sm:px-10 2xl:px-40 h-[80px] mb-4">
        <div>
          <h3 className="text-2xl font-bold font-text lg:leading-[100px] tracking-[0.2px] capitalize">
            Our New products
          </h3>
        </div>
        <div className="flex gap-4">
          <button onClick={sliderRef?.slickPrev}>
            <img
              src={arrowIcon}
              alt="arrow"
              className="rotate-180 hover:-rotate-[135deg] text-white  transition-all duration-500 opacity-60 hover:opacity-100"
            />
          </button>
          <button
            onClick={sliderRef?.slickNext}
            className="hover:text-[#db3847]">
            <img
              src={arrowIcon}
              alt="arrow"
              className="hover:rotate-45 transition-all duration-500 opacity-60 hover:opacity-100"
            />
          </button>
        </div>
      </div>

      <Slider ref={setSliderRef} {...sliderSettings} className="mx-6 sm:mx-10">
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
      <div className="flex items-center justify-center my-10 gap-2">
        <a
          href="shop.kredallino.com"
          className="h-[50px] w-[50px] rounded-full hover:bg-[#db3847] transition-all duration-1000 flex items-center justify-center">
          <img src={arrowIcon} alt="arrow" />
        </a>
        <a
          href="https://shop.kredallino.com"
          rel="noreferrer"
          target="_blank"
          className=" hover:text-[#db3847] transition-all duration-1000 text-xl capitalize font-text font-medium">
          shop now
        </a>
      </div>
    </div>
  );
}
