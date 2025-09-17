'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/utils/animations'
import FormField from '@/app/components/FormField'

interface FormData {
  name: string
  email: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactItems = [
    { icon: <FaEnvelope className="h-6 w-6 text-primary" />, title: "Email", value: "tdat96386@gmail.com", href: "mailto:tdat96386@gmail.com" },
    { icon: <FaPhone className="h-6 w-6 text-primary" />, title: "Phone", value: "0942417773", href: "tel:0942417773" },
    { icon: <FaMapMarkerAlt className="h-6 w-6 text-primary" />, title: "Location", value: "Ho Chi Minh City" }
  ]

  return (
    <div className="container max-w-7xl mx-auto py-12">
      {/* Title */}
      <motion.h1 className="text-4xl text-primary font-bold mb-8 text-center" {...fadeInUp}>
        Contact Me
        <div className="w-24 h-1 bg-primary mx-auto mt-3"></div>
      </motion.h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" {...staggerContainer}>
        {/* Contact Info */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              Looking forward to opportunities where I can learn, grow, and make an impact
            </p>
          </motion.div>

          <motion.div className="space-y-4" {...staggerContainer}>
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4"
                {...fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-secondary hover:text-primary">{item.value}</a>
                  ) : (
                    <p className="text-secondary">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" {...slideInRight}>
          <motion.form onSubmit={handleSubmit} className="space-y-6" {...staggerContainer}>
            <motion.div {...fadeInUp}>
              <FormField label="Name" name="name" value={formData.name} onChange={handleChange} required />
            </motion.div>
            <motion.div {...fadeInUp}>
              <FormField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </motion.div>
            <motion.div {...fadeInUp}>
              <FormField label="Message" type="textarea" name="message" value={formData.message} onChange={handleChange} required />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <motion.p className="text-green-500 text-center" {...fadeInUp}>
                Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p className="text-red-500 text-center" {...fadeInUp}>
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  )
}
