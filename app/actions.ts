"use server";

import { Testimonial } from "@/Types/Testimonial";

const mailChimp = require("@mailchimp/mailchimp_marketing");
const mailChimpApiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.LIST_ID;
const apiKey = process.env.PAYLOAD_API_KEY;
const baseUrl = process.env.PAYLOAD_URL;

mailChimp.setConfig({
  apiKey: mailChimpApiKey,
  server: "us18",
});

export async function subscribe(prevState: any, formData: FormData) {
  console.log("Form Data: ", formData);
  try {
    const response = await mailChimp.lists.addListMember(listId, {
      email_address: formData.get("email"),
      status: "subscribed",
      merge_fields: {
        FNAME: formData.get("firstName"),
        LNAME: formData.get("lastName"),
        SITETYPE: formData.get("siteType"),
        BIZDESC: formData.get("bizDesc"),
      },
    });
    console.log("Response: ", response);
    return { message: "success" };
  } catch (e) {
    console.log("Request Failed with error: ", e);
    return { message: "failed" };
  }
}

export async function getTestimonials() {
  try {
    const response = await fetch(`${baseUrl}/testimonials?limit=3`, {
      method: "GET",
      headers: {
        Authorization: `users API-Key ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    const testimonials: Testimonial[] = data?.docs.map((testimonial: any) => {
      return {
        name: testimonial?.businessOwnerName,
        quote: testimonial.quote,
        image: `${baseUrl}${testimonial?.url}`,
        business: testimonial?.businessName,
        link: testimonial?.businessLink,
      };
    });

    console.log(testimonials);
    return testimonials;
  } catch (e) {
    console.log("request failed with the error: ", e);
    return { message: "failed" };
  }
}
