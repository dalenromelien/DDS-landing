import React from "react";

const cardVariants = {
  base: "bg-base-100 text-neutral flex flex-col my-16 py-16 px-4 shadow-2xl text-left rounded-3xl lg:max-w-96 w-10/12",
  primary: "bg-primary text-base-100 flex flex-col my-16 py-16 px-4 shadow-2xl text-left rounded-3xl lg:max-w-96 w-10/12",
  secondary: "bg-secondary text-base-100 flex flex-col my-16 py-16 px-4 shadow-2xl text-left rounded-3xl lg:max-w-96 w-10/12",
};

type CardVariant = keyof typeof cardVariants;

type CardConfig = {
  variant: CardVariant;
  price: string;
  subtitle: string;
  unit?: string;
  titleColor: string;
  offerings: string[];
};

const PriceCard: React.FC<CardConfig> = (props) => {
  return (
    <div className={`${cardVariants[props.variant]}`}>
      <div className="flex flex-row mx-2">
        <h1 className={`${props.titleColor} text-3xl font-bold`}>{props.price}</h1>
        <p className={`${props.titleColor} mt-4`}>{props?.unit}</p>
      </div>
      <h4 className="mx-8 py-4 text-sm">{props.subtitle}</h4>
      <ul className="px-8 my-8">
        {props.offerings.map((item, index) => (
          <li key={index} className="list-disc py-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
