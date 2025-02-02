import { Menu } from "antd"
import { RightOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { img3, img4, img5, img6, img7, img8 } from "../assets"

const categories = [
  "Women's Clothing",
  "Men's Clothing",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby & Toys",
  "Groceries & Pets",
  "Health & Beauty",
]

const heroContents = [
  {
    title: "iPhone 14 Series",
    image: img3,
    discount: "Up to 10%",
    voucher: "off Voucher",
    background: "bg-[#000]",
  },
  {
    title: "iPhone 14 Pro",
    image: img5,
    discount: "Save 15%",
    voucher: "off Today",
    background: "bg-gradient-to-r from-blue-700 to-cyan-800",
  },
  {
    title: "iPhone 14 Pro Max",
    image: img6,
    discount: "Special 20%",
    voucher: "off Deal",
    background: "bg-gradient-to-r from-green-700 to-teal-800",
  },
  {
    title: "iPhone 14 Plus",
    image: img7,
    discount: "Extra 12%",
    voucher: "off Sale",
    background: "bg-gradient-to-r from-red-700 to-pink-800",
  },
  {
    title: "iPhone 14 Mini",
    image: img8,
    discount: "Get 18%",
    voucher: "off Now",
    background: "bg-gradient-to-r from-purple-800 to-indigo-900",
  },
]

const Hero = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    // Convert category to URL-friendly format and lowercase
    const categorySlug = category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens

    navigate(`/category/${categorySlug}`)
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContents.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="flex w-[90%] mx-auto mb-12 min-h-[400px]">
    {/* Left Navigation Menu - Hidden on mobile */}
    <div className="w-60 mr-6 bg-white hidden md:block border-r-2 border-solid border-gray-300">
    <Menu
          mode="vertical"
          className="h-full border-r-0"
          items={categories.map((category, index) => ({
            key: index,
            label: (
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <span>{category}</span>
                <RightOutlined className="text-gray-400" />
              </div>
            ),
          }))}
        />
    </div>

    {/* Hero Content Slider */}
    <div className="flex-1 relative overflow-hidden">
      <div
        className="transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroContents.map((content, index) => (
          <div
            key={index}
            className={`min-w-full px-4 md:px-16 py-8 h-[400px] flex items-center justify-between ${content.background}`}
          >
            {/* Left Content - Hidden on mobile */}
            <div className="text-white space-y-6 w-full md:w-1/2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <img
                  src= {img4}
                  alt="Apple Logo"
                  className="w-8 h-8"
                />
                <span className="text-sm">{content.title}</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold">{content.discount}</h1>
                <h2 className="text-3xl md:text-4xl font-bold">{content.voucher}</h2>
              </div>
              <button className="inline-flex items-center space-x-2 text-white border-b border-white pb-1 hover:opacity-80 transition-opacity group">
                <span>Shop Now</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Right Content - Product Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img src={content.image || "/placeholder.svg"} alt={content.title} className="w-[80%] object-contain" />
            </div>
          </div>
        ))}
      </div>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroContents.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-red-700 scale-100" : "bg-white/50 scale-90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
  )
}
export default Hero;
