import React from "react";
import hamroPatro from "@/public/hamro_patro.png"
import hamroPay from "@/public/hamro_pay_logo.jpeg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CinePulse",
    description:
      "CinePulse is a modern movie and show discovery app built with React, TypeScript, and Tailwind CSS. Featuring " +
      "Firebase authentication, dynamic routing, Redux Toolkit, and API-powered data with lazy loading, it offers seamless " +
      "navigation and effortless content search",
    tags: ["React", "Tailwind", "Redux", "Firebase"],
    github: "https://github.com/raahul131/CinePulse",
    demo: "https://cinepulse.vercel.app/",
  },
  {
    title: "My portfolio",
    description: "My portfolio web app is an interactive showcase of my professional journey, built with React, TypeScript, " +
      "Tailwind CSS, and Framer Motion. It highlights my skills and projects with sleek design, smooth animations, and a " +
      "responsive user interface.",
    tags: ["React", "Tailwind", "TypeScript", "Framer Motion"],
    github: "https://github.com/raahul131/new-portfolio-web-app",
    demo: "https://rahulryadav.vercel.app/",
  },
  {
    title: "Text Utils",
    description: "\n" +
      "This web app, built with HTML, CSS, JavaScript, and Bootstrap 5, offers text manipulation tools like case conversion, " +
      "extra space removal, and clipboard copying. It also provides word and character counts, plus reading time estimates, " +
      "for quick text editing and analysis.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/raahul131/Text-Utils",
    demo: "https://textutils7.vercel.app/",
  },
  {
    title: "Mflix",
    description: "\n" +
      "This web app, built with React Js, Tailwind and external api for movies data. The web app is fully responsive for different devices",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/raahul131/api_movie_app",
    demo: "https://mflix7.vercel.app/",
  }
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Svelte",
  "gRPC",
  "Ant Design",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "Framer Motion",
  "Firebase",
] as const;

export const experiencesData = [
  {
    title: "Associate Software Engineer",
    location: "Hamro Patro | Kathmandu, Nepal",
    description: [
      "Implemented functionality to allow users to redeem promo codes or coupon codes in Hamro Pay.",
      "Developed filter features to view user statement details and sort the data by applying multiple filter options, allowing administrators to efficiently manage and analyze information.",
      "Implemented the filter feature in the Hamro Pay Merchant Platform to filter data by applying multiple options, enhancing the user experience for merchants by providing greater control over data visibility and access.",
      "Developed more than 10 custom hooks to improve code readability and reusability, streamline component logic, and enhance overall maintainability within the development process.",
      "Integrated statement reconciliation in the admin panel to ensure accurate financial tracking, facilitate error identification, and enhance overall reporting capabilities for administrators."
    ],
    icon: hamroPatro,
    date: "Mar 2024 - Present",
  },
  {
    title: "Fellowship",
    location: "Hamro Patro | Kathmandu, Nepal",
    description: [
      "Collaborated with the frontend team to refine the Hamro Pay Admin Panel interface, improving user experience and streamlining features to enhance customer support and operational efficiency.",
      "Implemented multiple configurations such as Bank Order, Vendor, and Merchant client credentials to manage user accounts, streamline operations, and enhance the overall efficiency of the digital wallet's admin panel.",
      "Introduced efficient and visually appealing features to the Admin Panel, enhancing usability, reducing task completion time, and improving overall user experience for administrators."
    ],
    icon: hamroPatro,
    date: "Sep 2023 - Mar 2024",
  },
] as const;
