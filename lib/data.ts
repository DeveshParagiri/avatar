import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sage from "@/public/sage.png";
import transcribe from "@/public/transcribe.png";
import decluttered from "@/public/decluttered.png";
import washport from "@/public/washport.png";


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
] as const;

export const experiencesData = [
  {
    company: "Hushh AI",
    role: "SWE Developer Advocate",
    location: "Remote",
    description:
      "Help build a community of developers that use Hushh's products as well as create engaging content for the community. Work on developing Generative AI based applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    company: "dVerse Innovation Labs",
    role: "Software Engineering Intern",
    location: "Remote",
    description:
      "Developed a Computer Vision model to detect human presence in elevators. Implemented optimization techniques to ensure high computation efficiency and integrated with supporting hardware (RaspberryPi) to help sanitize elevators with UV technology.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2020",
  },
  {
    company: "GUVI",
    role: "Software Engineering Intern",
    location: "Chennai, IND",
    description:
      "Built a video player with custom controls for GUVI’s e-learning platform of 1M+ users. Helped deploy the product in production while utilizing version control.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2019",
  },
  {
    company: "CollegeFit",
    role: "Co-Founder and Tech Lead",
    location: "San Francisco, CA",
    description:
      "Part of a six-member team; validated and built an online platform to provide personalized tours of universities. Helped gain traction; enrolled 50+ mentors from top universities.",
    icon: React.createElement(FaReact),
    date: "Jun 2018 - Jul 2019",
  },
] as const;

export const projectsData = [
  {
    title: "S.A.G.E",
    description:
      "A secure A.I to perform RAG on personal private data. Based on a custom fine-tuned LLaMA v2 LLM; Makes use of quantization for efficient CPU-based inference.",
      tags: ["LLaMA", "Python(Flask)", "Milvus", "LangChain", "PEFT (QLoRA)"],
    imageUrl: sage,
    url:'https://github.com/DeveshParagiri/sagee'
  },
  {
    title: "Autotranscribe",
    description:
      "An open-source, 'compute aware' python library based on OpenAI Whisper to provide efficient transcription from various sources such as YouTube.",
    tags: ["Python", "REST API", "Multiprocessing", "Whisper"],
    imageUrl: transcribe,
    url:'https://github.com/DeveshParagiri/auto-transcribe'
  },
  {
    title: "Twitter Decluttered",
    description:
      "A Flask web app which helps users to view tweets from select handles and clusters based on Personal or Work related tweets to help maximize productivity.",
    tags: ["Python (Flask)", "HTML/CSS", "REST API"],
    imageUrl: decluttered,
    url:'https://github.com/DeveshParagiri/twitter-decluttered'
  },
  {
    title: "WashPort",
    description:
      "A Flask web app which helps users to view tweets from select handles and clusters based on Personal or Work related tweets to help maximize productivity.",
    tags: ["Python", "SolidWorks", "3D Printing"],
    imageUrl: washport,
    url:''
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C++",
  "HTML",
  "JS",
  "CSS",
  "Flask",
  "SKLearn",
  "Tensorflow",
  "Keras",
  "Pandas",
  "Numpy",
  "Langchain",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Azure",
  "GCP",
  "Git",
  "Docker",
  "Postman",
  "Embedded-C"
] as const;