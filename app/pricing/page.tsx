import React from "react";
import PriceCard from "@/components/PriceCard";

const offerings = {
  staticSite: [
    "Includes up to 5 pages",
    "Figma Mock Ups included",
    "Best Seo Practices (Sitemaps, Robots.txt, Keywords, Fast Loading)",
    "Perfect for Portfolios and Small Business Brochure sites",
    "3 pre + 1 post design revisions",
  ],
};

const page = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="my-16">
        <h1 className="text-secondary text-5xl font-bold my-4">Flat Rates</h1>
        <h4 className="text-neutral">
          Here is the pricing for website development
        </h4>
      </div>
      <div className="flex lg:flex-row flex-col place-content-around items-center">
        <PriceCard
          variant="base"
          titleColor="text-secondary"
          price="$1500"
          unit="USD"
          subtitle="Static Sites"
          offerings={offerings.staticSite}
        />
        <PriceCard
          variant="primary"
          titleColor="text-base-100"
          price="$5000"
          unit="USD"
          subtitle="Content Driven Sites"
          offerings={offerings.staticSite}
        />
        <PriceCard
          variant="secondary"
          titleColor="text-base-100"
          price="$7500"
          unit="USD"
          subtitle="E-Commerce Sites"
          offerings={offerings.staticSite}
        />
      </div>
    </div>
  );
};

export default page;
