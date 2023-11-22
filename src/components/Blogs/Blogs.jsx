import React from "react";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  return (
    <div className="h-screen w-full my-4" id="blogs">
      <div className="max-w-[1150px] mx-auto mb-10 mt-40">
        <h3 className="text-[90px] leading-[105px] tracking-normal font-thin text-center pb-8">
          Whilst sharing{" "}
          <span className="font-text font-bold">ideas & advice</span> through
          the <span className="font-text font-bold">#KredBlogs</span>
        </h3>
      </div>
      <div className="w-full max-h-[700px] px-10 flex lg:flex-row gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
