import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="mx-auto max-w-7xl px-6 pb-8 ">
          <div
            className="mt-8 border-t border-gray
           dark:border-gray-800 pt-8 md:flex md:items-center md:justify-between"
          >
            <div className="flex space-x-6 md:order-2">
              <a
                key="GitHub"
                href="https://github.com/haramizu/Nextjs-Components"
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub />
              </a>
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0 ">
              &copy; 2024 Shinichi Haramizu, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
