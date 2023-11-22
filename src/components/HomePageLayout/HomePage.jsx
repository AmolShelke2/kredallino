import React from "react";
import { Header } from "../Header/Header";
import { HomeSection } from "../HomeSection/HomeSection";
import { About } from "../About/About";
import { Service } from "../ourService/Service";
import { Blogs } from "../Blogs/Blogs";
import { Team } from "../Team/Team";

export const HomePage = () => {
  return (
    <div className="h-full">
      <Header />
      <HomeSection />
      <About />
      <Service />
      <Blogs />
      <Team />
    </div>
  );
};
