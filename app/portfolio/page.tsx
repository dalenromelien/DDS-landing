"use client";
import PortfolioCard from "@/components/PortfolioCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col min-h-96 lg:w-3/4 w-full lg:rounded-xl text-center items-center justify-center lg:my-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:rounded-xl"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 lg:rounded-xl"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-base-100">
          <h1 className="text-5xl my-5">See what I can do for you</h1>
          <h5 className="text-2xl">Check out some examples of my work</h5>
        </div>
      </div>
      <div className="relative flex flex-col w-3/4 rounded-xl text-center items-center justify-center my-20">
        <div className="flex lg:flex-row flex-col justify-between w-full my-8">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <div className="flex lg:flex-row flex-col justify-between w-full my-8">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </div>
  );
};

export default page;
