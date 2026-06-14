"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a Software Engineer focused on backend development with{" "}
      <span className="font-medium">Go (Golang)</span>, with
      professional experience in the gaming industry. I have worked on developing and maintaining
      backend systems, debugging production issues, and collaborating with cross-functional teams
      in production environments.
      </p>

      <p className="mb-3">
      I also have experience in{" "}
      <span className="font-medium">cybersecurity testing</span>, including vulnerability scanning, IoT security
      testing, and system-level security validation. This has strengthened my understanding of
      secure software development and system reliability.
      </p>

      <p className="mb-3">
      My core stack includes{" "}
      <span className="font-medium">
      Go, backend systems, APIs, Git, and Linux
      </span>. I am also familiar with
      software engineering practices such as testing, debugging, and version control. I enjoy solving
      complex technical problems and improving system performance and reliability.
      </p>

      <p>
      <span className="italic">Outside of work</span>, I enjoy learning new technologies and exploring backend system design, software architecture, distributed systems, and security practices.
      </p>
    </motion.section>
  );
}
