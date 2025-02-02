import React from 'react'
import { motion } from "framer-motion"
import ContactSection from '../components/ContactSection'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
     <ContactSection />
    </motion.div>
  )
}

export default Contact
