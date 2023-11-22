import React from "react";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  return (
    <div className="h-auto lg:h-screen w-full my-4" id="blogs">
      <div className="text-center lg:max-w-[1150px] lg:mx-auto mb-10 mt-16 lg:mt-40">
        <h3 className=" text-[40px] leading-[50px] lg:text-[90px] lg:leading-[105px] tracking-normal font-thin text-center pb-8">
          Whilst sharing{" "}
          <span className="font-text font-bold">ideas & advice</span> through
          the <span className="font-text font-bold">#KredBlogs</span>
        </h3>
      </div>
      <div className="w-full h-full lg:max-h-[700px] px-4 2xl:px-10 flex flex-wrap flex-col lg:flex-row overflow-x-hidden">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
