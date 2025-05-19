"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TalentSync",
      description:
        "A freelance platform to help recruiters find freelancers easily. Built with MERN stack.",
      image: "/images/placeholder_project.jpeg",
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/nathanielalex/TalentSync",
    },
    {
      id: 2,
      title: "HoloX Cafe",
      description:
        "A cafe management website that helps customer to order and owner to manage the cafe. Built using Laravel.",
      image: "/images/placeholder_project.jpeg",
      liveUrl: "https://example.com/project2",
      githubUrl: "https://github.com/nathanielalex/HoloX-Cafe-Website",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work, showcasing my skills in AI and web
            development.
          </p>
          <div className="h-1 w-20 bg-black dark:bg-white mx-auto mt-8"></div>
        </div>

        {projects.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-10">Featured Projects</h2>

            <div className="space-y-16">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt="Sample"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 flex items-center gap-2"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} /> View Live
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="border-black text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-900 flex items-center gap-2"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={18} /> View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
