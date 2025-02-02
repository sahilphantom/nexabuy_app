
import React from "react";
import { img14 } from "../assets";

const  OurStory = () => {
    return (
      <div className="container w-[90%] m-auto mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-12">
          <span>Home</span>
          <span>/</span>
          <span className="text-black">About</span>
        </div>
  
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Our Story</h1>
  
            <div className="space-y-4 text-gray-600">
              <p>
                Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in
                Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has
                10,500 sellers and 300 brands and serves 3 millions customers across the region.
              </p>
  
              <p>
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse
                assortment in categories ranging from consumer.
              </p>
            </div>
          </div>
  
          {/* Right Column - Image */}
          <div className="relative">
            <img
              src={img14}
              alt="Happy shoppers with shopping bags"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    )
  }
  export default OurStory;
  