import React from "react";

const page = () => {
  return (
    <div className="hero min-h-fit my-16">
      <div className="hero-content flex-col-reverse lg:flex-row lg:space-x-20">
        <div className="flex text-left flex-col">
          <h1 className="text-secondary text-5xl font-bold my-8">Contact Me</h1>
          <p className="text-neutral">
            Get started with an intro call and learn how I can help your
            business succeed
          </p>
          <form className="flex flex-col my-8">
            <div className="lg:flex-row lg:flex lg:justify-between">
              <div className="flex flex-col my-4">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Jane"
                  className="border-2 p-2 rounded-md border-primary my-2"
                />
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="border-2 p-2 rounded-md border-primary my-2"
                />
              </div>
            </div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="jane.doe@email.com"
              className="border-2 p-2 rounded-md border-primary my-2"
            />
            <label className="form-control">
              <div className="label">
                <span className="">Describe Your Business</span>
              </div>
              <textarea
                className="border-2 p-2 rounded-md border-primary my-2 h-52"
                placeholder="What kind of business do you own and what kind of website or services are you looking for me to provide?"
              ></textarea>
            </label>
            <button className="btn btn-secondary text-base-100 my-4">
              Submit
            </button>
          </form>
        </div>
        <img
          src="/burgundy_suit_fb.JPEG"
          className="lg:max-w-xl rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default page;
