import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import nextMultistepFormImg from "@/public/nextmultistepform.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Full-Stack Developer Training",
    location: "Online",
    description:
      "I'm training now as a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
    icon: React.createElement(CgWebsite),
    date: "08/2024 - present",
  },
  {
    title: "Web Developer",
    location: "Shure Europe GmbH, Eppingen, Baden Württemberg",
    description:
      "Maintainance and Enhancement of B2B and B2C Websites for Digital Marketing",
    icon: React.createElement(CgWorkAlt),
    date: "06/2017 – 07/2024",
  },
  {
    title: "Master of Science",
    location: "Stuttgart University, Germany",
    description:
      "Master of Science in technological pedagogy for Electrical Electronics and IT.",
    icon: React.createElement(LuGraduationCap),
    date: "10/2013 – 09/2017",
  },
  {
    title: "Deutsch als Fremdesprache",
    location: "Language schools in Munich and Frankfurt",
    description: "Completed german language studies with TestDAF.",
    icon: React.createElement(FaLanguage),
    date: "03/2011 – 10/2012",
  },
  {
    title: "Solution Architect",
    location: "GE India Innovation Center, Secunderabad, Indien",
    description:
      "Software enhancement project to calculate the financial bonus based on the shipment history of customers.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2007 – 05/2010",
  },
  {
    title: "Application Developer",
    location: "Kanbay (Capgemini India), Hyderabad, Indien",
    description:
      "Data migration from hierarchical database IMS in to a relational database DB2.",
    icon: React.createElement(CgWorkAlt),
    date: "12/2003 – 04/2006",
  },
  {
    title: "Bachelor of Engineering",
    location: "Berhampur, Indien",
    description: "Bachelor of Engineering in Electrical and Electronics.",
    icon: React.createElement(LuGraduationCap),
    date: "08/1999 – 08/2003",
  },
] as const;

export const projectsData = [
  {
    title: "Next Multistep Form",
    description:
      "This next.js project demonstrates multistep form with client and server side validations. Concepts like react server actions and hooks have been implemented.",
    tags: [
      "React",
      "Next.js",
      "React-Hook-Form",
      "Tailwind",
      "Zod",
      "Server Actions",
      "React Hooks",
      "Framer Motion",
    ],
    imageUrl: nextMultistepFormImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
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
  "REST",
  "GraphQL",
  "Hygraph",
  "Express",
  "PostgreSQL",
  "Python",
  "FastApi",
  "Framer Motion",
  "PHP",
] as const;
