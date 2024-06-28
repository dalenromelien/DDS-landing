import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-base-100">
              For The Love of Programming
            </h1>
            <p className="mb-5 text-base-100 text-2xl">
              For the art and continous learning of this field
            </p>
          </div>
        </div>
      </div>

      {/* Will need to place a "My Background", "Mission Statement", "Vision" Section here 
      Maybe put a shortened mission or vision statement as the title for this hero section,
      then have a background info on me with my credentials etc */}

      <div className="flex lg:flex-row flex-col lg:my-64 my-32">
        <div className="lg:basis-1/2 lg:text-center text-left lg:text-8xl text-6xl px-16">
          <h1 className="text-secondary">The Dream</h1>
        </div>
        <div className="lg:basis-1/2 lg:text-center text-left text-4xl px-16">
          <p className="text-neutral my-16">
            Directing what technology and skills I get to learn while freeing my
            time for the other things I enjoy in life
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse lg:my-64 my-32">
        <div className="lg:basis-1/2 lg:text-center text-left text-4xl px-16">
          <p className="text-neutral my-16">
            Offer my learning and experiences as a service that adds value to
            your business
          </p>
        </div>
        <div className="lg:basis-1/2 lg:text-center text-left lg:text-8xl text-6xl px-16">
          <h1 className="text-secondary">The Strategy</h1>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:my-64 my-32">
        <div className="lg:basis-1/2 lg:text-center text-left lg:text-8xl text-6xl px-16">
          <h1 className="text-secondary">The Result</h1>
        </div>
        <div className="lg:basis-1/2 lg:text-center text-left text-4xl px-16">
          <p className="text-neutral my-16">
            A relationship between our businesses that offers you custom
            solutions and myself the opportunity to innovate
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-6xl text-secondary m-10 mb-20 font-bold">
          Interested in what I have to offer?
        </h1>
        <Link href="/contact">
          <button className="btn btn-secondary px-12 text-base-100 mb-40">
            Reach Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
