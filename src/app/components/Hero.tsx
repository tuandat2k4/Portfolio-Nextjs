import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4 ">
      <div className="max-w-3xl mx-auto text-center ">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/profile.avif"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I&apos;m <span className="text-primary">Tuấn Đạt</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-100 mb-0">
          Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 "
          >
            <FaGithub />
          </Link>
          <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 "
          >
            <FaLinkedin />
          </Link>
          <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 "
          >
            <FaTwitter />
          </Link>
        </div>

        <div className="flex md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary text-white  w-full md:w-auto mt-8 px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-gray-500 text-white w-full md:w-auto mt-8 px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
