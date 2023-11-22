import React from "react";

export const BlogCard = () => {
  return (
    <div className="h-[600px] w-[300px] sm:w-[400px] 2xl:w-[440px] sm:px-10 pb-20">
      <div className="h-[570px] w-[365px]">
        <img
          src="https://assets-global.website-files.com/5f98979999bf5c3407e06fa3/6540ed0a03c763c79b5b2360_Website%20-%20Blog%20post-p-500.png"
          alt="Blog"
          height={258}
          width={458}
          className="w-[300px] sm:w-full h-[60%]"
        />
        <p className="font-text cursor-pointer text-[34px] leading-[42px] tracking-[0.5px] pl-2 text-start mt-2 mb-4">
          <a href="#">Imbrace Platform based design interface</a>
        </p>
      </div>
    </div>
  );
};
