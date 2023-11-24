import React from "react";

export const BlogCard = ({ blogTitle, ImageURL }) => {
  return (
    <div className="h-[400px] mb-2 sm:mb-0 sm:h-[600px] w-[300px] sm:w-[400px] sm:px-4">
      <div className="h-[370px] sm:h-[570px] w-[365px]">
        <img
          src={ImageURL}
          alt="Blog"
          height={258}
          width={458}
          className="w-[300px] sm:w-full h-[60%]"
        />
        <p className="font-text cursor-pointer text-[24px] leading-[36px] sm:text-[34px] sm:leading-[42px] tracking-[0.5px] pl-2 text-start mt-4 mb-4">
          <a href="#">Imbrace Platform based design interface</a>
        </p>
      </div>
    </div>
  );
};
