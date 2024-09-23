import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Testimonial } from "@/Types/Testimonial";

const TestimonialComponent = ({
  name,
  quote,
  image,
  business,
  link,
}: Testimonial) => {
  return (
    <div className="flex flex-col shadow-2xl h-90 lg:w-[27rem] w-5/6 p-8 rounded-xl mb-16">
      <h1 className="mb-8 text-large text-secondary font-bold">{`"${quote}"`}</h1>
      <div className="flex flex-row">
        <Image
          src={image}
          alt="business logo or profile pic"
          className="max-h-16 max-w-16 rounded-full mr-4"
          height={500}
          width={500}
        />
        <div className="flex flex-col">
          <h3>{name}</h3>
          <Link href={link} className="text-accent">
            {business}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
