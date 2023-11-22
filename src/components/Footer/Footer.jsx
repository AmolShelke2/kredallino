import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-auto mt-28">
      <div className="w-full p-8 flex gap-8 flex-col sm:flex-row">
        {/* Contact */}
        <div>
          <h3 className="font-text text-[32px] font-light py-2 my-2">
            Contact Us
          </h3>
          <div className="py-2 my-2">
            <h4 className="font-text text-lg font-light mb-2">Address</h4>
            <p className="w-[80%]">
              5th Floor, Imperial Plaza, Nagpur, Sitabuldi, Nagpur, (MH) 440012-
              India
            </p>
          </div>
          <div>
            <h4 className="font-text text-lg font-light mb-2">Email</h4>
            <p>support@kredallino.tech</p>
          </div>
        </div>

        <div>
          <h3 className="font-text text-[32px] font-light py-2 my-2">
            Find us online
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer font-text font-semibold text-lg">
              Instagram
            </li>
            <li className="cursor-pointer font-text font-semibold text-lg">
              Facebook
            </li>
            <li className="cursor-pointer font-text font-semibold text-lg">
              LinkedIn
            </li>
            <li className="cursor-pointer font-text font-semibold text-lg">
              Twitter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
