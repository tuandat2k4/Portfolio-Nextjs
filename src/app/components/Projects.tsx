"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall,
  fadeIn,
} from "@/utils/animations";

const page = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              {...fadeInUp}
              {...cardHoverSmall}
            >
              {/* Image */}
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Title */}
              <motion.h3
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4 items-center"
                {...fadeIn}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={30}
                      height={30}
                      className="h-5 w-5"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Links */}
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
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  Code
                </motion.a>

                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  Live Demo
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
