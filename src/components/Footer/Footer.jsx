import React from "react";
import kredAllino from "../../assets/kredallino-logo.webp";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="w-full h-full mt-28 bg-[#020d2f] pt-4">
      <div className="flex flex-col justify-center items-center py-10 h-[158px] my-20 lg:my-10">
        <h5 className="text-[40px] leading-[52px] font-text text-center text-[#db3847] mb-8 font-bold mt-10 capitalize">
          Sign up our news letter
        </h5>

        <div className="flex flex-col w-full px-6 lg:px-0 gap-4 lg:gap-0 lg:w-auto lg:flex-row">
          <input
            type="email"
            placeholder="your email address"
            className="py-5 rounded-lg bg-transparent border-2 border-gray-700 lg:w-[550px] px-4 placeholder:capitalize"
          />
          <button className="py-3 px-4 bg-[#db3847] rounded-lg">
            sign up now
          </button>
        </div>
      </div>

      <div className="">
        {/* logo div */}
        <div className="flex items-center justify-center py-10">
          <img src={kredAllino} alt="kredallino" height={200} width={200} />
        </div>
        {/* address, email and phone div */}
        <div
          className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center lg:justify-between 
        items-center lg:max-w-[1450px] lg:mx-auto mb-20 py-10 px-4 2xl:px-0">
          <div className="flex items-center">
            <MdOutlineEmail className="text-4xl mr-4 opacity-50" />
            <p className="text-lg font-medium font-text cursor-pointer">
              support@kredallino.com
            </p>
          </div>
          <div>
            <p className="max-w-[400px] text-center font-medium text-lg leading-[40px]">
              5th Floor, Imperial Plaza, Nagpur, Sitabuldi, Nagpur, (MH) 440012-
              India
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg font-medium font-text cursor-pointer">
              +91 82779 96021
            </p>
            <FaPhone className="text-4xl ml-4 opacity-50" />
          </div>
        </div>
        {/* bottom container */}
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:items-start px-10 py-8 gap-2 border-t-2 border-t-gray-700">
          <div className="flex flex-col lg:flex-row gap-4 2xl:gap-10 items-center mb-10 lg:mb-0">
            <p className="text-lg capitalize font-text text-center lg:text-start font-thin leading-12 lg:leading-4 tracking-[0.4px]">
              all rights reserved @kredAllino 2023
            </p>
            <div>
              <ul className="flex flex-row flex-wrap gap-4 items-center justify-center lg:items-start lg:justify-start lg:flex-nowrap">
                <li className="cursor-pointer font-text text-sm font-thin capitalize hover:underline transition-all duration-500">
                  <a
                    href="https://shop.kredallino.com/policies/refund-policy"
                    target="_blank"
                    rel="noreferrer">
                    Refund policy
                  </a>
                </li>
                <li className="cursor-pointer font-text text-sm font-thin capitalize hover:underline transition-all duration-500">
                  <a
                    href="https://shop.kredallino.com/policies/privacy-policy"
                    target="_blank"
                    rel="noreferrer">
                    privacy policy
                  </a>
                </li>
                <li className="cursor-pointer font-text text-sm font-thin capitalize hover:underline transition-all duration-500">
                  <a
                    href="https://shop.kredallino.com/policies/terms-of-service"
                    target="_blank"
                    rel="noreferrer">
                    Terms of service
                  </a>
                </li>
                <li className="cursor-pointer font-text text-sm font-thin capitalize hover:underline transition-all duration-500">
                  <a
                    href="https://shop.kredallino.com/policies/shipping-policy"
                    target="_blank"
                    rel="noreferrer">
                    shipping policy
                  </a>
                </li>
                <li className="cursor-pointer font-text text-sm font-thin capitalize hover:underline transition-all duration-500">
                  <a
                    href="https://shop.kredallino.com/policies/contact-information"
                    target="_blank"
                    rel="noreferrer">
                    contact information
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xl font-text font-light leading-4 mr-4">
              follow us:
            </p>
            <ul className="flex gap-4">
              <li className="cursor-pointer font-text font-semibold text-lg">
                <a
                  href="https://www.instagram.com/kredallino_technologies/"
                  target="_blank"
                  rel="noreferrer">
                  <FaInstagram className="text-2xl opacity-50" />
                </a>
              </li>
              <li className="cursor-pointer font-text font-semibold text-lg">
                <a
                  href="https://www.facebook.com/kredallino/"
                  target="_blank"
                  rel="noreferrer">
                  <FaFacebook className="text-2xl opacity-50" />
                </a>
              </li>
              <li className="cursor-pointer font-text font-semibold text-lg">
                <a
                  href="https://www.linkedin.com/company/kredallino/"
                  target="_blank"
                  rel="noreferrer">
                  <FaLinkedin className="text-2xl opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
