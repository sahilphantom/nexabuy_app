
import React from "react"
import { img10, img11, img12, img13 } from "../assets";

const GridItem = ({ title, description, image, large = false }) => (
    <div className={`relative bg-black group overflow-hidden `}>
      <div className="absolute  inset-0  group-hover:bg-black/50 transition-colors duration-300"></div>
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-fill " />
      <div className="absolute bottom-4 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-4">{description}</p>
        <button className="text-white text-sm hover:underline">Shop Now</button>
      </div>
    </div>
  )
  
  const BentoGrid = () => {
    return (
      <div className="container w-[90%] m-auto  mx-auto px-4 py-24">
        {/* Featured Header */}
        <div className="space-y-6 mb-6">
      <div className="inline-flex items-center">
        <div className="bg-red-500 w-4 h-8 rounded-sm mr-4"></div>
        <span className="text-red-500 font-medium">Featured</span>
      </div>
      <h2 className="text-3xl font-bold text-black">New Arrival</h2>
    </div>
        
  
        {/* Bento Grid */}
        <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-4 ">
          {/* PlayStation 5 - Large Cell */}
          <GridItem
            title="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
            image= {img10}
            large={true}
          />
  
          {/* Right Column Grid */}
          <div className="grid grid-rows-2 gap-4">
            {/* Women's Collections */}
            <GridItem
              title="Women's Collections"
              description="Featured woman collections that give you another vibe."
              image= {img13}
            />
  
            {/* Bottom Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Speakers */}
              <GridItem
                title="Speakers"
                description="Amazon wireless speakers"
                image={img11}
              />
  
              {/* Perfume */}
              <GridItem
                title="Perfume"
                description="GUCCI INTENSE OUD EDP"
                image={img12}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default BentoGrid;
  