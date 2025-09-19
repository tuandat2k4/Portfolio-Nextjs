'use client'

import React from 'react'
import Image from 'next/image'
import { aboutDataByLocale } from '@/contents/aboutData'
import { AboutData } from '@/types'
import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/utils/animations'
import { useLocale, useTranslations } from 'next-intl'

const About = () => {
  const locale = useLocale() as 'vi' | 'en'
  const t = useTranslations('about')
  const aboutData = aboutDataByLocale[locale]
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-primary dark:text-white"
          {...fadeInUp}
        >
          {aboutData.title}
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          {...staggerContainer}
        >
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center"
            {...slideInLeft}
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <Image
                src={aboutData.image!}
                alt={aboutData.personalInfo.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-6"
            {...slideInRight}
          >
            {/* Personal Info */}
            <motion.div {...fadeInUp}>
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-2">
                {aboutData.personalInfo.name}
              </h3>
              <p className="text-xl text-secondary mb-4">
                {aboutData.personalInfo.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                📍 {aboutData.personalInfo.location}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                ✉️ {aboutData.personalInfo.email}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div {...fadeInUp}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {aboutData.description}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div className="space-y-4" {...fadeInUp}>
              {aboutData.bio.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Achievements */}
            <motion.div {...fadeInUp}>
              <h4 className="text-xl font-semibold text-primary dark:text-white mb-4">
                {t('achievements')}
              </h4>
              <ul className="space-y-2">
                {aboutData.achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-green-500 mr-2">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About