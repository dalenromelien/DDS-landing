import React, { ChangeEvent, useState } from "react";
import PriceCard from "./PriceCard";

const monthlyOfferings = {
  simpleHosting: [
    "Static Hosting through CDN (S3 and Cloudfront)",
    "CMS Hosting not offered",
    "SSL Cert and Domain Name included",
    "No Maintenance",
  ],
  contentDrivenHosting: [
    "CMS Hosting Included",
    "SSL and Domain Name included",
    "Daily Backups",
    "1-hour CMS live training monthly (recorded and distributed later)",
    "Direct Customer Support (me)",
    "Feature Roadmap",
    "3 minor revisions per month",
  ],
  ecommerceHosting: [
    "CMS Hosting Included",
    "SSL and Domain Name included",
    "Daily Backups",
    "1-hour CMS live training monthly (recorded and distributed later)",
    "Direct Customer Support (me)",
    "Feature Roadmap",
    "5 minor revisions per month",
  ],
};

const MonthlyRates = () => {
  const [yearlyRates, setYearlyRates] = useState(false);

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setYearlyRates(event.target.checked);
  };

  return (
    <div>
      <div className="w-full flex flex-row justify-center">
        <p className="mx-4">Monthly Rates</p>
        <input
          checked={yearlyRates}
          onChange={handleToggle}
          type="checkbox"
          className="toggle toggle-lg bg-primary hover:bg-secondary"
        />
        <p className="mx-4">Yearly Rates</p>
      </div>
      <div className="flex lg:flex-row flex-col place-content-around items-center">
        {yearlyRates ? (
          <>
            <PriceCard
              variant="base"
              titleColor="text-secondary"
              price="$250"
              unit="USD per year"
              subtitle="Simple Hosting (2 months free)"
              offerings={monthlyOfferings.simpleHosting}
            />
            <PriceCard
              variant="primary"
              titleColor="text-base-100"
              price="$1500"
              unit="USD per year"
              subtitle="Content Driven Sites (-$25/mo)"
              offerings={monthlyOfferings.contentDrivenHosting}
            />
            <PriceCard
              variant="secondary"
              titleColor="text-base-100"
              price="$3600"
              unit="USD per year"
              subtitle="E-Commerce Sites (-$50/mo)"
              offerings={monthlyOfferings.ecommerceHosting}
            />
          </>
        ) : (
          <>
            <PriceCard
              variant="base"
              titleColor="text-secondary"
              price="$25"
              unit="USD per month"
              subtitle="Simple Hosting"
              offerings={monthlyOfferings.simpleHosting}
            />
            <PriceCard
              variant="primary"
              titleColor="text-base-100"
              price="$150"
              unit="USD per month"
              subtitle="Content Driven Sites"
              offerings={monthlyOfferings.contentDrivenHosting}
            />
            <PriceCard
              variant="secondary"
              titleColor="text-base-100"
              price="$350"
              unit="USD per month"
              subtitle="E-Commerce Sites"
              offerings={monthlyOfferings.ecommerceHosting}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MonthlyRates;
