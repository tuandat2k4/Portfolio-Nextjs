import React from "react";
import Image from "next/image";
import { experiences } from "@/contents/skillsInfo";
import { ExperienceType } from "@/types";

const Experience = () => {
  return (
    <section className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary dark:text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-primary mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-black dark:bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 white:bg-dark bg-gray-400 border-4 border-primary w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <Image
                src={experience.img}
                alt={experience.company}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-white dark:bg-gray-900 backdrop-blur-md shadow-xl shadow-primary/20 ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <Image
                    src={experience.img}
                    alt={experience.company}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-dark dark:text-white">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-dark dark:text-white mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-dark dark:text-white">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-dark dark:text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill: string, index: number) => (
                    <li
                      key={index}
                      className="bg-primary/10 px-3 py-1 text-xs sm:text-sm rounded-full mr-2 mb-2"
                    >
                      <Image 
                        src={`/tech_logo/${skill.trim().toLowerCase().replace(" ", "")}.png`}
                        alt={skill}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
