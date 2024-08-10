"use server";

const mailChimp = require("@mailchimp/mailchimp_marketing");
const mailChimpApiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.LIST_ID;

mailChimp.setConfig({
  apiKey: mailChimpApiKey,
  server: "us18",
});

export async function subscribe(prevState: any, formData: FormData) {
  console.log("Form Data: ", formData);
  try {
    const response = await mailChimp.lists.addListMember(listId, {
      email_address: formData.get('email'),
      status: "subscribed",
      merge_fields: {
        FNAME: formData.get('firstName'),
        LNAME: formData.get('lastName'),
        SITETYPE: formData.get('siteType'),
        BIZDESC: formData.get('bizDesc'),
      },
    });
    console.log("Response: ", response);
    return {message: "success"};
  } catch (e) {
    console.log("Request Failed with error: ", e);
    return {message: "failed"};
  }
}

export async function getTestimonials(){
  try{
    const response = await fetch(
      "https://payload.dalensdigitalservices.com/api/testimonials",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("request failed with the error: ", e);
    return {message: "failed"};
  }
}
