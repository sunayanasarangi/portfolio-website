"use client";

import React from "react";
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
      transition={{
        delay: 1.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelor degree in{" "}
        <span className="font-medium">Electrical & Electronics</span> and a
        master degree in{" "}
        <span className="font-medium">Technological Pedagogy</span>, I started
        started my career in the IT industry as a Web Developer working on
        backend technologies like{" "}
        <span className="font-medium">PHP, Node.js, Express.js and Docker</span>
        . I am currently upgrading myself to a{" "}
        <span className="font-medium">full-stack web developer</span> through
        various trainings and demo projects.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">position</span> as a full-stack web
        developer.
      </p>
      <p>
        I am also very passionate about{" "}
        <span className="italic">Microcontrollers and PCB Designing</span>. I
        enjoy building small <span className="font-medium">IoT Projects</span>{" "}
        using arduino and ESP8266 Wi-Fi Modules
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading to
        my 3 year old. I also enjoy{" "}
        <span className="font-medium">crocheting amigurumies</span>. I'm also
        learning how to play the guitar and attempting nursery rhymes.
      </p>
    </motion.section>
  );
}
