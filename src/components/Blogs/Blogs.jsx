import React from "react";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  return (
    <div className="h-full w-full my-4" id="blogs">
      <div className="text-center lg:max-w-[1150px] lg:mx-auto mb-10 mt-16 lg:mt-40">
        <h3 className=" text-[40px] capitalize leading-[50px] lg:text-[90px] lg:leading-[105px] font-thin text-center pb-8">
          Whilst sharing{" "}
          <span className="font-text font-bold">ideas & advice</span> through
          the <span className="font-text font-bold">#KredBlogs</span>
        </h3>
      </div>
      <div
        className="w-full h-full 2xl:max-h-[700px] 2xl:px-4 flex justify-center items-center flex-wrap
      sm:justify-center sm:items-center flex-col lg:flex-row overflow-x-hidden">
        <BlogCard
          ImageURL={
            "https://dt-digiartz.myshopify.com/cdn/shop/articles/blog12.jpg?v=1671769323&width=720"
          }
        />
        <BlogCard
          ImageURL={
            "https://dt-digiartz.myshopify.com/cdn/shop/articles/blog07.jpg?v=1671771292&width=720"
          }
        />
        <BlogCard
          ImageURL={
            "https://dt-digiartz.myshopify.com/cdn/shop/articles/blog11.jpg?v=1671712640&width=720"
          }
        />
        <BlogCard
          ImageURL={
            "https://assets-global.website-files.com/5f98979999bf5c3407e06fa3/6540ed0a03c763c79b5b2360_Website%20-%20Blog%20post-p-500.png"
          }
        />
      </div>
    </div>
  );
};
