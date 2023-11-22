import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-auto mt-28 bg-[#020d2f]">
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
              <a
                href="https://www.instagram.com/kredallino_technologies/"
                target="_blank"
                rel="noreferrer">
                Instagram
              </a>
            </li>
            <li className="cursor-pointer font-text font-semibold text-lg">
              <a
                href="https://www.facebook.com/kredallino/"
                target="_blank"
                rel="noreferrer">
                Facebook
              </a>
            </li>
            <li className="cursor-pointer font-text font-semibold text-lg">
              <a
                href="https://www.linkedin.com/company/kredallino/"
                target="_blank"
                rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="cursor-pointer font-text font-semibold text-lg">
              <a href="#" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
