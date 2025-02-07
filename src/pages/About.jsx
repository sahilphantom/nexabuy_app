import React from "react"
import { motion } from "framer-motion"
import OurStory from "../components/OurStory";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Services from "../components/Services";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-[95%] mx-auto px-4 py-8"
    >
    <OurStory />
    <Stats />
    <Team />
    <Services />
    </motion.div>
  )
}
export default About;
