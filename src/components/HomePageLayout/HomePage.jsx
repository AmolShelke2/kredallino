import React from "react";
import { Header } from "../Header/Header";
import { HomeSection } from "../HomeSection/HomeSection";
import { About } from "../About/About";

export const HomePage = () => {
  return (
    <div className="h-full">
      <Header />
      <HomeSection />
      <About />
    </div>
  );
};
