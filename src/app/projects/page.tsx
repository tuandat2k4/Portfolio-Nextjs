"use client";

import { projectsByLocale } from "@/contents/projects";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeIn,
  cardHover,
  linkHover,
} from "@/utils/animations";
import { useTranslations, useLocale } from 'next-intl';

const Projects = () => {
  const t = useTranslations('projects');
  const locale = useLocale() as 'vi' | 'en';
  const projects = projectsByLocale[locale];
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Tiêu đề */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-primary dark:text-white"
          {...fadeInUp}
        >
          {t('title')}
          <div className="w-24 h-1 bg-primary mx-auto mt-3"></div>
        </motion.h2>

        {/* Lưới Dự án */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              {...fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              {/* Hình ảnh */}
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Tiêu đề */}
              <motion.h3
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>

              {/* Mô tả */}
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* Công nghệ */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4 items-center"
                {...fadeIn}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    {...cardHover}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={10}
                      height={10}
                      className="h-6 w-6"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Liên kết */}
              <motion.div
                className="flex gap-4"
                {...fadeIn}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  {...linkHover}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  {t('code')}
                </motion.a>

                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  {...linkHover}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  {t('liveDemo')}
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
