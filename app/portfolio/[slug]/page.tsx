import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return <div>page</div>;
};

// export async function generateStaticParams() {
//   const posts = await fetch("https://.../posts").then((res) => res.json());

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
export default page;
