import { useState, useEffect, useRef } from "react"
import React from "react"
import { Card, Rate, Button, message } from "antd"
import { HeartOutlined, LeftOutlined, RightOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import useCartStore from "../store/cartStore"
import CountdownTimer from "./CountdownTimer"
import Loader from "./Loader"
import AllProducts from "./AllProducts"



const ProductCard = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart)
  
    const calculateDiscountedPrice = (price, discountPercentage) => {
      return (price * (1 - discountPercentage / 100)).toFixed(2)
    }
  
    const handleAddToCart = () => {
      addToCart({
        id: product.id,
        title: product.title,
        price: calculateDiscountedPrice(product.price, product.discountPercentage),
        image: product.thumbnail,
      })
      message.success("Added to cart!")
    }
  
    return (
      <Card
        className="flex-shrink-0 w-[280px] transition-shadow"
        cover={
          <div className="relative">
            <img alt={product.title} src={product.thumbnail || "/placeholder.svg"} className="h-48 w-full object-cover" />
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
              -{product.discountPercentage.toFixed(0)}%
            </div>
            <Button
              icon={<HeartOutlined />}
              className="absolute top-2 right-2 flex items-center justify-center bg-white"
            />
          </div>
        }
        bodyStyle={{ padding: "12px" }}
      >
        <h3 className="text-sm font-medium mb-2">{product.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="text-red-500 font-bold">
              ${calculateDiscountedPrice(product.price, product.discountPercentage)}
            </span>
            <span className="text-gray-400 line-through ml-2">${product.price}</span>
          </div>
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            size="small"
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Add
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Rate disabled defaultValue={product.rating} className="text-sm" />
          <span className="text-gray-500 text-sm">({Math.floor(Math.random() * 100)})</span>
        </div>
      </Card>
    )
  }
  
  const FlashSales = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const sliderRef = useRef(null)
    const totalItems = useCartStore((state) => state.getCartTotal())
  
    useEffect(() => {
      fetch("https://dummyjson.com/products?limit=10")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products)
          setLoading(false)
        })
    }, [])
  
    const scroll = (direction) => {
      if (sliderRef.current) {
        const scrollAmount = direction === "left" ? -300 : 300
        sliderRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        })
      }
    }
  
    return (
      <div className="container w-[90%] m-auto mx-auto px-4 py-8 border-b-2 border-gray-300 border-solid">
        <div className="flex justify-between items-center mb-8 max-sm:w-auto">
          
          <div className="flex flex-col items-start gap-4 max-sm:w-auto">
          
            <div className="space-y-6 mb-4">
      <div className="inline-flex items-center">
        <div className="bg-red-500 w-4 h-8 rounded-sm mr-4"></div>
        <span className="text-red-500 font-medium">Today's</span>
      </div>
    </div>
    <div className="flex flex-row space-x-12">
    <h2 className="text-3xl font-bold text-black">Flash Sales</h2>
       <div className="max-sm:hidden">
            <CountdownTimer />
            </div>
          </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-lg font-medium"></div>
            <div className="flex gap-2">
              <Button
                icon={<LeftOutlined />}
                onClick={() => scroll("left")}
                className="flex items-center justify-center border border-gray-200"
              />
              <Button
                icon={<RightOutlined />}
                onClick={() => scroll("right")}
                className="flex items-center justify-center border border-gray-200"
              />
            </div>
          </div>
        </div>
  
        {loading ? (
          <Loader />
        ) : (
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
  
        <div className="text-center mt-8">
          <button  className="bg-red-500 rounded-md cursor-pointer  text-white px-12 py-3 hover:bg-red-600 " onClick={() => setShowAllProducts(true)}>
            View All Products
          </button>
        </div>
  
        {showAllProducts && <AllProducts onClose={() => setShowAllProducts(false)} />}
      </div>
    )
  }
  
  export default FlashSales

