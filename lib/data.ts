import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
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
    title: "Software Developer - TaDa Gaming Limited",
    location: "Gżira, Malta",
    description:
      "Worked on backend and platform system development and maintenance for production services. Handled bug fixing, feature implementation, and system stability improvements in a live environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2026 - present",
  },
  {
    title: "Software Developer - International Games System",
    location: "New Taipei City, Taiwan",
    description:
      "Developed and maintained backend services using Go in production systems. Responsible for debugging production issues, implementing features, and improving system reliability. Collaborated across the full development lifecycle including testing, version control, and deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - 2026",
  },
  {
    title: "Cybersecurity Testing Intern - Onward Security",
    location: "New Taipei City, Taiwan",
    description:
      "Conducted vulnerability scanning, IoT security testing, and network security assessments. Developed Dradis reporting templates to support automated security report generation workflows. Performed structured testing on DUT systems including telecommunications infrastructure and surveillance systems, applying industry standards such as NIST, FIRST, and CNS 16120.",
    icon: React.createElement(MdSecurity),
    date: "2024 - 2025",
  },
  {
    title: "National Taiwan University of Science and Technology (NTUST)",
    location: "Taipei, Taiwan",
    description:
      "Bachelor’s degree in Computer Science and Information Technology. Focused on software engineering, backend systems, and security-related topics.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2026",
  },
  {
    title: "Customer Service Representative",
    location: "Kluang, Johor",
    description:
      "Worked at a postal company handling customer service operations and basic website content management using HTML during pre-university period.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Chong Hwa High School Kluang",
    location: "Kluang, Johor",
    description:
      "Completed secondary education with a focus on science subjects.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
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
] as const;

export const skillsData = [
  "Go (Golang)",
  "Backend Development",
  "API Development",
  "System Design",
  "Distributed Systems",

  "Git",
  "Linux",
  "Debugging",
  "Problem Solving",

  "Cybersecurity Testing",
  "Vulnerability Assessment",
  "Network Security",
  "IoT Security"
] as const;
