"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function InfiniteMovingSkills() {
  return (
    <div
      className="h-[35rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
      <InfiniteMovingCards items={testimonials_2} direction="right" speed="normal" />
    </div>
  );
}

const testimonials = [
  { quote: "HTML", title: "", logo: "/logo_img/html.png"},
  { quote: "CSS",  title: "", logo: "/logo_img/css.png" },
  { quote: "JavaScript", logo: "/logo_img/js.png"  },
  { quote: "TypeScript", title: "", logo: "/logo_img/ts.png" },
  { quote: "Bootstrap", title: "", logo: "/logo_img/bootstrap.png" },
  { quote: "Tailwind CSS", title: "", logo: "/logo_img/tailwind.png" },
  { quote: "Next.js", title: "", logo: "/logo_img/nextjs.png" },
  { quote: "MongoDB", title: "", logo: "/logo_img/mongoDb.png" },
  { quote: "Express", title: "", logo: "/logo_img/expressjs.png" },
  { quote: "React", title: "", logo: "/logo_img/react.png" },
  { quote: "Node.js", title: "Node.js", logo: "/logo_img/nodejs.png" },
  { quote: "Git", title: "", logo: "/logo_img/git.png" },
  { quote: "GitHub", title: "", logo: "/logo_img/github.png" },
  { quote: "Bycrypt.js", title: "", logo: "/logo_img/bcryptjs.png" },
  { quote: "Postman", title: "", logo: "/logo_img/postman.png" },
  { quote: "zod", title: "", logo: "/logo_img/zod.png" },
  { quote: "nextauth", title: "", logo: "/logo_img/nextauth.png" },
  { quote: "jsPDF", title: "", logo: "/logo_img/jspdf.png" },
];
const testimonials_2 = [
  { quote: "Vercel", title: "", logo: "/logo_img/vercel.png" },
  { quote: "Python", title: "", logo: "/logo_img/python.png" },
  { quote: "NPM", title: "", logo: "/logo_img/npm.png" },
  { quote: "RESTapi", title: "", logo: "/logo_img/restapi.png" },
  { quote: "Acertinity", title: "", logo: "/logo_img/acertinity.png" },
  { quote: "Canva", title: "", logo: "/logo_img/canva.png" },
  { quote: "PostgreSQL", title: "", logo: "/logo_img/postgresql.png" },
  { quote: "Mongoose", title: "", logo: "/logo_img/mongoose.png" },
  { quote: "Firebase", title: "", logo: "/logo_img/firebase.png" },
  { quote: "Figma", title: "", logo: "/logo_img/figma.png" },
  { quote: "Prisma", title: "", logo: "/logo_img/prisma.png" },
  { quote: "Socket.io", title: "", logo: "/logo_img/socket.png" },
  { quote: "Redis", title: "", logo: "/logo_img/redis.png" },
  { quote: "Redux", title: "", logo: "/logo_img/redux.png" },
  { quote: "JWT", title: "", logo: "/logo_img/jwt.png" },
  { quote: "swagger", title: "", logo: "/logo_img/swagger.png" },
];

export default InfiniteMovingSkills;
