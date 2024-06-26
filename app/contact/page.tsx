"use client";

import React, { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { subscribe } from "@/app/actions";

const page = () => {
  const [state, formAction] = useFormState(subscribe, { message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        aria-disabled={pending}
        disabled={pending}
        type="submit"
        className="btn btn-secondary text-base-100 my-4"
      >
        {pending ? "Loading..." : "Submit"}
      </button>
    );
  };

  useEffect(() => {
    if (state?.message === "success") {
      formRef.current?.reset();
      alert("Successfully Subscribed");
    }
    if (state?.message === "failed") {
      alert("Failed to Subscribe");
    }
  }, [state]);

  return (
    <div className="hero min-h-fit my-16">
      <div className="hero-content flex-col-reverse lg:flex-row lg:space-x-20">
        <div className="flex text-left flex-col">
          <h1 className="text-secondary text-5xl font-bold my-8">Contact Me</h1>
          <p className="text-neutral">
            Get started with an intro call and learn how I can help your
            business succeed
          </p>
          <form className="flex flex-col my-8" action={formAction}>
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
            <fieldset name="siteType" id="siteType" className="my-4">
              <legend className="my-4">What type of site do you need?</legend>
              <label>
                <input
                  type="radio"
                  name="siteType"
                  value="Portfolio"
                  className="mx-4"
                />
                Portfolio
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="siteType"
                  value="E-Commerce"
                  className="mx-4"
                />
                E-Commerce
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="siteType"
                  value="Landing Page"
                  className="mx-4"
                />
                Landing Page
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="siteType"
                  value="Blog"
                  className="mx-4"
                />
                Blog
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="siteType"
                  value="Brochure"
                  className="mx-4"
                />
                Brochure
              </label>
              <br />
            </fieldset>
            <label className="form-control">
              <div className="label">
                <span className="">Describe Your Business</span>
              </div>
              <textarea
                id="bizDesc"
                name="bizDesc"
                className="border-2 p-2 rounded-md border-primary my-2 h-52"
                placeholder="What kind of business do you own and what kind of website or services are you looking for me to provide?"
              ></textarea>
            </label>
            <SubmitButton />
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
