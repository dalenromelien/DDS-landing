import Image from "next/image";
import React from "react";

const PortfolioCard = () => {
  return (
    <div className="flex flex-col text-left justify-between lg:m-4 my-4 p-8 bg-white rounded-xl shadow-2xl space-y-5 w-full max-w-xs">
      {/* Image Container */}
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/blue_shirt_hs.jpeg"
          alt="burgundy suit"
          width={800}
          height={400}
          quality={85}
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-primary">Portfolio Site Name</h1>

      {/* Description */}
      <p className="text-base text-primary">Description:</p>
      <p className="text-base text-primary">
        Discover how JoJo’s website showcases their unique services and
        products. Whether you&apos;re looking for delicious menu options or
        high-quality pet care essentials.
      </p>
    </div>
  );
};

export default PortfolioCard;
