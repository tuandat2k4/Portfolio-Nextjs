"use client";
import React from "react";
import { SkillsInfoByLocale } from "@/contents/skillsInfo";
import { SkillCategory } from "@/types";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/utils/animations";
import {useTranslations, useLocale} from 'next-intl'

const Skills = () => {
  const t = useTranslations('skills')
  const locale = useLocale() as 'vi' | 'en';
  const SkillsInfo = SkillsInfoByLocale[locale];
  return (
  <section
    id="skills"
    className="py-24 px-4 md:px-8 lg:px-16 font-sans bg-gray-50 dark:bg-gray-900"
  >
    {/* Section Title */}
    <motion.div 
      className="text-center mb-8"
      {...fadeInUp}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white">{t('title')}</h2>
      <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">{t('desc')}</p>
    </motion.div>

    {/* Skill Categories */}
    <motion.div 
      className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
      {...staggerContainer}
    >
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          className="bg-white dark:bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-xl shadow-primary/20"
          {...(index % 2 === 0 ? slideInLeft : slideInRight)}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-semibold bg-white dark:bg-gray-900 mb-4 text-center"
            {...fadeInUp}
          >
            {category.title}
          </motion.h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full"
              {...staggerContainer}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                  {...fadeInUp}
                  transition={{ delay: skillIndex * 0.1 }}
                >
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
                  />
                  <span className="text-xs sm:text-sm bg-white dark:bg-gray-900">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  </section>
)};

export default Skills;