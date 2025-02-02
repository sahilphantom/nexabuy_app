import { useEffect } from "react"
import React from "react"
import { useLocation } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion"

const ScrollToTop = () => {
  const { pathname } = useLocation()
//   console.log(pathname);
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{ scaleX }} />
}

export default ScrollToTop;