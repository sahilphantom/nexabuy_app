import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"
import {
  MobileOutlined,
  LaptopOutlined,
  CustomerServiceOutlined,
  PlaySquareOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"
import { Apple, } from "lucide-react"
import { TbPerfume,   } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import { Button, Card } from "antd"

const categories = [
  { id: "phones", name: "Phones", icon: MobileOutlined, slug: "smartphones" },
  { id: "computers", name: "Computers", icon: LaptopOutlined, slug: "laptops" },
  { id: "Groceries", name: "Groceries", icon: Apple, slug: "groceries" },
  { id: "Fragrance", name: "Fragrance", icon: TbPerfume, slug: "fragrances" },
  { id: "Furniture", name: "Furniture", icon: MdChair, slug: "furniture" },
]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("")
  const navigate = useNavigate()

  const handleCategoryClick = (slug) => {
    navigate(`/category/${slug}`)
  }

  return (
    <div className="container w-[90%] border-b-2 border-gray-300 border-solid  mx-auto px-4 py-14">
      <div className="flex items-center justify-between mb-6">
      <div className="flex flex-col items-start gap-4 max-sm:w-auto">
          
          <div className="space-y-6 mb-4">
    <div className="inline-flex items-center">
      <div className="bg-red-500 w-4 h-8 rounded-sm mr-4"></div>
      <span className="text-red-500 font-medium">Categories</span>
    </div>
  </div>
  <div className="flex flex-row space-x-12">
  <h2 className="text-3xl font-bold text-black">Browse By Category</h2>

        </div>
        </div>
        <div className="flex gap-2">
          <Button
            icon={<LeftOutlined />}
            className="flex items-center justify-center border border-gray-200 hover:border-gray-300"
          />
          <Button
            icon={<RightOutlined />}
            className="flex items-center justify-center border border-gray-200 hover:border-gray-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 pt-3 sm:grid-cols-3 md:grid-cols-5  gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Card
              key={category.id}
              className={`cursor-pointer border ${
                activeCategory === category.id
                  ? "bg-[#EE4444] text-white border-[#EE4444]"
                  : "bg-white hover:bg-[#EE4444] hover:border-[#EE4444] group"
              }`}
              onClick={() => handleCategoryClick(category.slug)}
            >
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <Icon
                  className={`text-3xl mb-3 ${
                   "text-gray-600 "
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                   "text-gray-900 "
                  }`}
                >
                  {category.name}
                </span>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
export default Categories;
