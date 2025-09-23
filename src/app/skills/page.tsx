"use client";
import { SkillsInfoByLocale } from "@/contents/skillsInfo";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";
import { useTranslations, useLocale } from "next-intl";

const Skills = () => {
  // Hook để lấy translations từ namespace "skills"
  const t = useTranslations("skills");
  // Hook để lấy locale hiện tại (vi hoặc en)
  const locale = useLocale() as "vi" | "en";
  // Lấy data skills theo locale từ file skillsInfo.ts
  const SkillsInfo = SkillsInfoByLocale[locale];
  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 lg:px-16 font-sans bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Tiêu đề Section */}
      <motion.div className="text-center mb-8" {...fadeInUp}>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white">
          {t("title")}
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">{t("desc")}</p>
      </motion.div>

      {/* Danh mục Kỹ năng */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 max-w-6xl mx-auto relative z-10"
        {...staggerContainer}
      >
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-white dark:bg-gray-800 backdrop-blur-md px-6 py-6 rounded-2xl border border-gray-200 dark:border-gray-600 
          shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[300px]"
            {...(index % 2 === 0 ? slideInLeft : slideInRight)}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center"
              {...fadeInUp}
            >
              {category.title}
            </motion.h3>

            {/* Các mục Kỹ năng - 3 mỗi hàng trên màn hình lớn */}
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full"
                {...staggerContainer}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    {...fadeInUp}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-lg flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
  );
};

export default Skills;
