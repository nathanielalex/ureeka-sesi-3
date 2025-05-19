"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export default function About() {
  const technicalSkills = [
    { name: "React.js", proficiency: "Good" },
    { name: "TypeScript", proficiency: "Good" },
    { name: "Python", proficiency: "Good" },
    { name: "Tailwind CSS", proficiency: "Good" },
    { name: "Express.js", proficiency: "Good" },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Project Management",
    "UI/UX Design",
    "Public Speaking",
  ];

  return (
    <div className="min-h-screen px-6 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Me
          </h1>
          <div className="h-1 w-20 bg-black dark:bg-white mx-auto"></div>
        </div>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="w-64 h-64 md:w-full md:max-w-md md:h-auto aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-black dark:border-white">
                <div className="w-full h-full flex items-center justify-center relative">
                  <Image
                    src="/images/profile_picture.jpeg"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Hello, I`m Nathaniel Alexander
              </h2>

              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  I`m a second-year Computer Science student at Binus
                  University, currently pursuing the AI streaming track.
                  Alongside this, I have a deep passion for web development,
                  which I`ve explored through multiple hackathons and personal
                  projects.
                </p>
                <p>
                  I specialize in React.js, TypeScript, and Express.js, but I`m
                  always eager to learn new tools and frameworks to expand my
                  skill set and stay up-to-date with industry trends.
                </p>
                <p>
                  In addition, I`ve been working part-time as a Software Lab
                  Assistant for the past year, primarily assisting in teaching
                  database-related subjects.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 flex items-center gap-2">
                  <Download size={18} /> Download Resume
                </Button>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-900 flex items-center gap-2"
                >
                  <Mail size={18} /> Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-semibold mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                Technical Skills
              </h3>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.proficiency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                Soft Skills
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mt-12 mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
                Languages
              </h3>

              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Indonesian</span>
                  <span className="text-sm">Native</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>English</span>
                  <span className="text-sm">Fluent</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Experience & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-semibold mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                Experience
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-lg">
                      Part-time Lab Assistant
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      2024 - Now
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Bina Nusantara University
                  </p>
                  <p className="text-sm">
                    Have taught Data Mining, Python, Big Data Processing, and
                    Database Design.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                Achievements
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-lg">Hackathon Winner</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      2025
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    CodeFest ID
                  </p>
                  <p className="text-sm">
                    Handle both backend and frontend part of the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
