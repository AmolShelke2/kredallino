import React from "react";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  return (
    <div className="h-full 2xl:h-screen w-full my-4" id="blogs">
      <div className="text-center lg:max-w-[1150px] lg:mx-auto mb-10 mt-16 lg:mt-40">
        <h3 className=" text-[40px] capitalize leading-[50px] lg:text-[90px] lg:leading-[105px] font-thin text-center pb-8">
          Whilst sharing{" "}
          <span className="font-text font-bold">ideas & advice</span> through
          the <span className="font-text font-bold">#KredBlogs</span>
        </h3>
      </div>
      <div
        className="w-full h-full 2xl:max-h-[700px] px-4 2xl:px-10 flex justify-center items-center flex-wrap 
      sm:justify-start sm:items-start flex-col lg:flex-row overflow-x-hidden">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
