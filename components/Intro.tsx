import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="hero min-h-fit my-16">
      <div className="hero-content flex-col lg:flex-row lg:space-x-20">
        <div className="flex items-center flex-col">
          <h1 className="text-5xl font-bold text-secondary text-center">
            Hi I&apos;m Dalen
          </h1>
          <p className="py-6 text-center text-neutral">
            Full-Stack Software Engineer with 4 years of experience and a
            passion for web design and development. I&apos;m looking to design,
            build and host your next website or application and continue to
            build features that help you and your business succeed
          </p>
        </div>
        <Image
          src="/gold_suit_hb.JPEG"
          className="lg:max-w-xl rounded-lg shadow-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
