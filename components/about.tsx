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
      I am a Software Engineer focused on backend system development with{" "}
      <span className="font-medium">Go (Golang)</span>. I have 
      experience working in production environments, where I contributed to backend services, 
      system maintenance, and improving system reliability.
      </p>

      <p className="mb-3">
      I also have experience in{" "}
      <span className="font-medium">cybersecurity testing</span>, including vulnerability scanning, IoT security 
      testing, and system-level validation, which helps me build more secure and robust systems.
      </p>

      <p className="mb-3">
      My core stack includes{" "}
      <span className="font-medium">
      Go, backend systems, APIs, Git, and Linux
      </span>. I focus on building reliable 
      services, debugging production issues, and improving system performance and stability.
      </p>

      <p>
      <span className="italic">Outside of work</span>, I enjoy learning about backend system design, software architecture, 
      distributed systems, and security practices.
      </p>
    </motion.section>
  );
}
