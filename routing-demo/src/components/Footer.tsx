"use client";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://github.com/"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
