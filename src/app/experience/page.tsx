import React from "react";
import { useTranslations, useLocale } from 'next-intl';
import Image from "next/image";
import { experiencesByLocale } from "@/contents/skillsInfo";
import { ExperienceType } from "@/types";

const Experience = () => {
  const t = useTranslations('experience');
  const locale = useLocale() as 'vi' | 'en';
  const experiences = experiencesByLocale[locale];
  return (
    <section className="py-24 pb-24 px-4 md:px-8 lg:px-16 font-sans bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
           
      {/* Tiêu đề Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary dark:text-white">
          {t('title')}
        </h2>
        <div className="w-32 h-1 bg-primary mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {t('desc')}
        </p>
      </div>

      {/* Timeline Kinh nghiệm */}
      <div className="relative">
        {/* Đường thẳng dọc */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-black dark:bg-white h-full"></div>

        {/* Các mục Kinh nghiệm */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Vòng tròn Timeline */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white dark:bg-gray-800 border-4 border-primary w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <Image
                src={experience.img}
                alt={experience.company}
                width={64}
                height={64}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Phần Nội dung */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-white dark:bg-gray-900 backdrop-blur-md shadow-xl shadow-primary/20 ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Container flex cho ảnh và text */}
              <div className="flex items-center space-x-6">
                {/* Logo/Hình ảnh Công ty */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <Image
                    src={experience.img}
                    alt={experience.company}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Vai trò, Tên công ty và Ngày */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-dark dark:text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-dark dark:text-white">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Ngày ở dưới cùng */}
                  <p className="text-sm text-dark dark:text-white mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-dark dark:text-white">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-dark dark:text-white">
                  {locale === 'vi' ? 'Kỹ năng:' : 'Skills:'}
                </h5>
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