'use client'
import Link from 'next/link'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {useTranslations, useLocale} from 'next-intl'

export default function Navbar(){
  const t = useTranslations('navbar')
  const locale = useLocale()
  ////////////////////
  const setLocale = async (value: 'vi' | 'en') => {
    // Hiển thị trạng thái loading
    setIsMobileMenuOpen(false);
    
    // Đặt cookie
    document.cookie = `locale=${value}; path=/; max-age=31536000; SameSite=Lax`;
    
    //Delay tí
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: '/about', label: t('about') },
    { href: '/skills', label: t('skills') },
    { href: '/experience', label: t('experience') },
    { href: '/projects', label: t('projects') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm border-b border-white/20 dark:border-white/10 shadow-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 ">
          <Link href="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8 ">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <button onClick={() => setLocale('vi')} className={`px-2 py-1 rounded ${locale === 'vi' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>VI</button>
              <button onClick={() => setLocale('en')} className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>EN</button>
            </div>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </motion.button>
          </div>

          {/* Nút Menu Mobile */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex items-center gap-3 px-2">
                  <button onClick={() => { setLocale('vi'); setIsMobileMenuOpen(false); }} className={`px-2 py-1 rounded ${locale === 'vi' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>VI</button>
                  <button onClick={() => { setLocale('en'); setIsMobileMenuOpen(false); }} className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>EN</button>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center py-2 hover:text-primary transition-colors"
                  >
                    {theme === 'dark' ? (
                      <>
                        <SunIcon className="h-5 w-5 mr-2" />
                        {t('light')}
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 mr-2" />
                        {t('dark')}
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 