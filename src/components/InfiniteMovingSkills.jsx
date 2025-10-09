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
  { quote: "Next.js", title: "", logo: "" },
  { quote: "MongoDB", title: "", logo: "/logo_img/mongoDb.png" },
  { quote: "Express", title: "", logo: "" },
  { quote: "React", title: "", logo: "/logo_img/react.png" },
  { quote: "Node.js", title: "Node.js", logo: "/logo_img/nodejs.png" },
  { quote: "Git", title: "", logo: "/logo_img/git.png" },
  { quote: "GitHub", title: "", logo: "/logo_img/github.png" },
  { quote: "PostgreSQL", title: "", logo: "" },
  { quote: "Postman", title: "", logo: "" },
  { quote: "zod", title: "", logo: "" },
  { quote: "nextauth", title: "", logo: "" },
  { quote: "jsPDF", title: "", logo: "" },
];
const testimonials_2 = [
  { quote: "Vercel", title: "", logo: "" },
  { quote: "Mongoose", title: "", logo: "" },
  { quote: "Python", title: "", logo: "/logo_img/python.png" },
  { quote: "NPM", title: "", logo: "/logo_img/npm.png" },
  { quote: "RESTapi", title: "", logo: "" },
  { quote: "Acertinity", title: "", logo: "" },
  { quote: "Canva", title: "", logo: "" },
  { quote: "PostgreSQL", title: "", logo: "/logo_img/postgresql.png" },
  { quote: "Firebase", title: "", logo: "/logo_img/firebase.png" },
  { quote: "Figma", title: "", logo: "" },
  { quote: "Prisma", title: "", logo: "" },
  { quote: "Socket.io", title: "", logo: "" },
  { quote: "Redis", title: "", logo: "" },
  { quote: "Redux", title: "", logo: "" },
  { quote: "JWT", title: "", logo: "" },
  { quote: "swagger", title: "", logo: "" },
  { quote: "Bycrypt.js", title: "", logo: "" },
  { quote: "AI", title: "", logo: "" },
];

export default InfiniteMovingSkills;
