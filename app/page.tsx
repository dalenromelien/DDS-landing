import Image from "next/image";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Intro from "@/components/Intro";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";

export default function Home() {
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
        <Testimonial
          name={"Chef D"}
          quote={"Best SEO websites ever!"}
          image={"/blue_shirt_hs.JPEG"}
          business="Chef D's Kitchen"
          link="dalensdigitalservices.com"
        />
        <Testimonial
          name={"Chef D"}
          quote={"Best SEO websites ever!"}
          image={"/blue_shirt_hs.JPEG"}
          business="Chef D's Kitchen"
          link="dalensdigitalservices.com"
        />
        <Testimonial
          name={"Chef D"}
          quote={"Best SEO websites ever!"}
          image={"/blue_shirt_hs.JPEG"}
          business="Chef D's Kitchen"
          link="dalensdigitalservices.com"
        />
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
    </>
  );
}
