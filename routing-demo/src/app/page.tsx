"use client";

import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effects";
import { ArrowRight, Bot, Code, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Nathaniel",
    },
    {
      text: "Alexander",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 md:px-20 gap-12">
        <div className="md:w-3/5">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <TypewriterEffect words={words} />
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 text-center">
            A Computer Science student interested in AI and Web Programming.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects">
              <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-6 py-6 rounded-md flex items-center gap-2 text-lg cursor-pointer">
                View Projects <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-900 px-6 py-6 rounded-md flex items-center gap-2 text-lg cursor-pointer"
              >
                About Me <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-black dark:border-white">
            <Image
              src="/images/profile_picture.jpeg"
              alt="Logo"
              width={200}
              height={100}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-12 text-center">My Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 inline-block rounded-full">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting responsive and performant websites using modern
              frameworks and best practices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 inline-block rounded-full">
              <Bot className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Developing AI models.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 inline-block rounded-full">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Architecture</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building scalable and maintainable frontend systems with
              TypeScript and modern tooling.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/about">
            <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-6 py-6 rounded-md flex items-center gap-2 text-lg mx-auto cursor-pointer">
              See All Skills <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
