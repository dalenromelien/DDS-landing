"use client";

import React, { ChangeEvent, useState } from "react";
import PriceCard from "@/components/PriceCard";

const offerings = {
  staticSite: [
    "Includes up to 5 pages",
    "Sanity CMS",
    "Figma Mock Ups included",
    "Best Seo Practices (Sitemaps, Robots.txt, Keywords, Fast Loading)",
    "Perfect for Portfolios and Small Business Brochure sites",
    "3 pre + 1 post design revisions",
  ],
  contentDrivenSite: [
    "Content Management System (CMS)",
    "Includes up to 10 (static) pages",
    "Best SEO Practices (Sitemaps, Robots.txt, Keywords, Fast Loading)",
    "Analytics and Advanced Tooling",
    "Figma Mocks Included",
    "5 pre + 3 post design revisions",
  ],
  ecommerceSites: [
    "Content Management System (CMS)",
    "Includes up to 15 (static) pages",
    "Best SEO Practices (Sitemaps, Robots.txt, Keywords, Fast Loading)",
    "Analytics and Advanced Tooling",
    "Figma Mocks Included",
    "7 pre + 5 post design revisions",
  ],
};

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

const page = () => {
  const [yearlyRates, setYearlyRates] = useState(false);

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setYearlyRates(event.target.checked);
  };

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
          offerings={offerings.contentDrivenSite}
        />
        <PriceCard
          variant="secondary"
          titleColor="text-base-100"
          price="$7500"
          unit="USD"
          subtitle="E-Commerce Sites"
          offerings={offerings.ecommerceSites}
        />
      </div>
      <div className="my-16">
        <h1 className="text-secondary text-5xl font-bold my-4">
          Subscription Services
        </h1>
        <h4 className="text-neutral">
          Here is the pricing for ongoing maintenance packages
        </h4>
      </div>
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
      <div className="flex flex-row w-full justify-center">
        <div className="bg-primary h-auto w-4/5 m-8 rounded-3xl text-left p-8">
          <h1 className="text-base-100 lg:text-5xl text-3xl m-8 font-bold">
            Terms of Service
          </h1>
          <div className="flex lg:flex-row flex-col text-base-100">
            <ul className="lg:basis-1/2 lg:m-4 list-disc">
              <li>
                I sell Websites and Custom Software Development. Designs are
                part of the service, but not the product I am selling.
              </li>
              <li>
                I also sell ongoing services which include hosting, site
                maintenance, and continuous development. My services do not
                guarantee any sort of success for your business.
              </li>
              <li>
                Ongoing services and hosting are not included in the flat rate
                price. Once the website is built, you can choose to host or
                maintain it how you see fit, but without purchasing my ongoing
                services I am no longer responsible for any customer support or
                ongoing security patches or fixes. Once I deliver the project
                and you accept it, I no longer work on it unless you purchase a
                subscription.
              </li>
              <li>
                All currencies on the site are in USD. I am a US-based company
                primarily servicing US customers.
              </li>
              <li>
                There are no refund policies. Once the project is delivered and
                the customer has accepted it, there are no further revisions.
              </li>
              <li>
                There is a mandatory $100 1-hour consultation; this price is
                taken off the total of your project upon delivery.
              </li>
              <li>
                Half the price of the project is required upfront to begin
                design and development; the other half is paid upon delivery.
              </li>
              <li>
                I do not personally collect any consumer data. Any data
                collected by your applications through the CMS is handled by the
                CMS and stored on the server I host in the cloud.
              </li>
              <li>
                I do not use any of your personal data for profit. I may use
                contact info for communications regarding your site and
                maintenance.
              </li>
              <li>
                Live training sessions are group sessions where my customers can
                ask questions and be presented with skills in using the CMS.
                They are recorded for those who may have missed it and
                distributed through Google Drive.
              </li>
            </ul>

            <ul className="lg:basis-1/2 lg:m-4 list-disc">
              <li>
                Delivery times are estimates:
                <ul className="list-disc pl-8">
                  <li>Static Sites: ~ 4 weeks</li>
                  <li>Content Driven Sites: ~ 6 weeks</li>
                  <li>E-Commerce: ~ 8 weeks</li>
                </ul>
              </li>
              <li>
                Delivery times are subject to change based on revisions,
                complexity, and scope changes.
              </li>
              <li>
                Minor revisions include, but are not limited to: font, style,
                image, text, and asset changes.
              </li>
              <li>
                Flat rate design changes &#40;both pre and post&#41; include
                layout changes, component and asset changes, but not entire
                re-designs. If you&apos;d like a redesign, you will be charged
                at my hourly rate.
              </li>
              <li>My hourly rate is $100/hr.</li>
              <li>
                If you do not like the services provided, you may submit a
                dispute directly with me, but this does not guarantee a
                different outcome. I&apos;ll try my best to provide my services
                as described.
              </li>
              <li>
                If you&apos;d like to cancel mid-project, there is no return of
                the initial consultation fee or the first half of the project
                paid before starting.
              </li>
              <li>
                Customers can expect delivery in the form of ownership of the
                git repository and admin access if they have a CMS.
              </li>
              <li>
                Note: Customers will not get privileges to push changes to the
                git repo to protect the integrity of their site and to maintain
                my ability to provide them ongoing service.
              </li>
              <li>
                I do not directly handle payments; all invoices are through
                Stripe, including subscriptions and hourly services.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
