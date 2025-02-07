import React from "react"
import { motion } from "framer-motion"
import Hero from "../components/Hero";
import { ConfigProvider } from "antd";
import FlashSales from "../components/FlashSales";
import Music from "../components/Music";
import Services from "../components/Services";
import BentoGrid from "../components/BentoGrid";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-[95%] mx-auto px-4 py-8"
    >
      <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHeight: 40,
            itemHoverBg: "#f5f5f5",
            itemHoverColor: "#000000",
          },
          Carousel: {
            dotWidth: 8,
            dotHeight: 8,
            dotActiveWidth: 8,
          },
        },
      }}
    >
    
        <Hero />
      
    </ConfigProvider>
    <FlashSales />
    <Categories />
    <BestSelling />
    <Music />
    <Services />
    <BentoGrid />
    </motion.div>
  )
}
export default Home;
