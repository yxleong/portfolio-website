import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import roadcrossingImg from "@/public/roadcrossing.png";
import ultimateshowdownImg from "@/public/ultimateshowdown.png";
import excelshiftschedulerImg from "@/public/excelshiftscheduler.png";

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

export const experiencesData = [
  {
    title: "Chong Hwa High School Kluang",
    location: "Kluang, Johor",
    description:
      "I completed my high school education with a focus on science and later pursued a degree in Computer Science and Information Technology at university.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "Customer Service Representative",
    location: "Kluang, Johor",
    description:
      "I spent 9 months working in this role at a postage company while awaiting university admission results. During this time, I also used HTML to manage and upload items for sale on the company website.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "National Taiwan University of Science and Technology",
    location: "Taipei, Taiwan",
    description:
      "I am in my final year of studying Computer Science and Information Technology at university.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Road Crossing Game",
    description:
      "In this team project, I handled UI programming and Quality Assurance, ensuring smooth button interactions, page transitions, and bug-free gameplay.",
    tags: ["Python", "Tkinter", "Pygame", "Turtle", "random"],
    imageUrl: roadcrossingImg,
  },
  {
    title: "Ultimate Showdown - Boxing Game",
    description:
      "Team project in Unity with Xbox Kinect motion control. I designed the UI (buttons, health bars, text) and handled QA testing.",
    tags: ["C#", "Windows Kinect SDK", "Unity", ".NET", ],
    imageUrl: ultimateshowdownImg,
  },
  {
    title: "Excel Shift Scheduler",
    description:
      "Generates monthly calendars, organizes weekly shifts with checkboxes, and sends automated LINE notifications every Saturday for task updates using Apps Script.",
    tags: ["JavaScript", "Google Apps Script", "LINE API", "Excel"],
    imageUrl: excelshiftschedulerImg,
  },
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
