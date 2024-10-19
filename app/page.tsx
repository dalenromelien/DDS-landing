"use client";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Intro from "@/components/Intro";
import { Testimonial } from "@/Types/Testimonial";
import TestimonialComponent from "@/components/TestimonialComponent";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTestimonials } from "./actions";

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res: Testimonial[] | { message: string } =
          await getTestimonials();
        if (Array.isArray(res)) {
          setTestimonials(res);
        } else {
          console.log(res.message);
        }
      } catch (e) {
        console.log("Error fetching testimonials: ", e);
      }
    }
    fetchTestimonials();
  }, []);

  useEffect(() => {
    console.log(testimonials);
  }, [testimonials]);

  return (
    <>
      <Hero />
      <div className="flex lg:flex-row flex-col place-content-around">
        <Card
          image="/code-icon.svg"
          title="The Tech"
          text="Developing local business sites with Next.JS for SEO  and Payload CMS for extensible content and product driven solutions. Crafting Custom Web App Solutions Utilizing the MERN Stack."
        />
        <Card
          image="/eye-icon.svg"
          title="The Vision"
          text="I will become the go to guy for business and technical solutions involving site development, maintenance and custom mobile and web app solutions"
        />
        <Card
          image="/heart-icon.svg"
          title="The Mission"
          text="To provide small businesses in the Detroit area with a launching pad to develop their web presence, and foster a community of learning in STEM in the city of Detroit"
        />
      </div>
      <Intro />
      <div className="text-left m-16">
        <h1 className="text-secondary font-bold text-3xl">Testimonials</h1>
        <h3 className="text-neutral">Hear from local Detroit Businesses</h3>
      </div>
      <div className="flex lg:flex-row flex-col lg:place-content-around justify-between items-center">
        {testimonials &&
          testimonials.map((testimonial, index) => {
            return (
              <TestimonialComponent
                key={index}
                name={testimonial?.name}
                quote={testimonial?.quote}
                image={testimonial?.image}
                link={testimonial?.link}
                business={testimonial?.business}
              />
            );
          })}
      </div>
      {/* turn this into a component. add to bottom of other pages like it */}
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
    </>
  );
}
