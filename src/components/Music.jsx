import { img9 } from "../assets";
import React from "react";
import Timer from "./Timer";

const Music = () => {
  return (
    <div className="relative w-[90%] mt-20 m-auto bg-black min-h-[500px] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <span className="text-green-500 font-medium">Categories</span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Enhance Your
              <br />
              Music Experience
            </h1>

            <Timer />

            <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors">
              Buy Now!
            </button>
          </div>

          {/* Right Content - Speaker Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src= {img9}
              alt="JBL Speaker"
              className="w-full max-w-[600px] mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Music;
