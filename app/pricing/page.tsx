"use client";

import FlatRates from "@/components/FlatRates";
import MonthlyRates from "@/components/MonthlyRates";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col text-center">
      <FlatRates />
      <MonthlyRates />
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
