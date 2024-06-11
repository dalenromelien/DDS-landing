import React from "react";

type CardProps = {
  image: string;
  title: string;
  text: string;
};

const Card = ({ image, title, text }: CardProps) => {
  return (
    <div className="flex flex-col lg:items-left items-center space-x-4 lg:text-left text-center p-8">
      <div className="max-w-40 max-h-40 rounded-full border-8 border-accent p-8 mb-16">
        <img src={image} />
      </div>
      <h2 className="text-2xl mb-8 mx-0 text-secondary font-bold ml-0">
        {title}
      </h2>
      <p className="lg:max-w-80 text-neutral">{text}</p>
    </div>
  );
};

export default Card;
