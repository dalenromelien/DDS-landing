import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-fit my-16">
      <div className="hero-content flex-col lg:flex-row lg:space-x-20">
        <img
          src="/navy_shirt_hs.jpeg"
          className="lg:max-w-xl rounded-lg shadow-2xl"
        />
        <div className="flex items-center flex-col">
          <h1 className="text-5xl font-bold text-secondary text-center">
            Personal Software Development
          </h1>
          <p className="py-6 text-center text-neutral">
            Detroit based Software Engineer offering Web Development and Custom
            Software Solutions
          </p>
          <button className="btn btn-secondary px-12 text-base-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
