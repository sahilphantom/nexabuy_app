import { useState, useEffect } from "react"
import React from "react"
import { Card, Rate, Button } from "antd"
import { HeartOutlined, EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import useCartStore from "../store/cartStore"

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart)

  const calculateDiscountedPrice = (price, discountPercentage) => {
    return (price * (1 - discountPercentage / 100)).toFixed(2)
  }

  const handleAddToCart = () => {
    const existingItems = useCartStore.getState().items
    const existingItem = existingItems.find((item) => item.id === product.id)

    if (existingItem) {
      message.error("This item is already in your cart!")
      return
    }
   
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

const BestSelling = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  // const addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/category/fragrances")
        const data = await response.json()
        // Take only first 4 products
        setProducts(data.products.slice(0, 6))
      } catch (error) {
        console.error("Error fetching skincare products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  

  const calculateDiscount = (price) => {
    const discount = Math.floor(Math.random() * 30) + 10 // Random discount between 10-40%
    const originalPrice = Math.floor(price / (1 - discount / 100))
    return { discountedPrice: price, originalPrice, discount }
  }
  const calculateDiscountedPrice = (price, discountPercentage) => {
    return (price * (1 - discountPercentage / 100)).toFixed(2)
  }

  return (
    <div className="container w-[90%] mx-auto px-2 py-20">
      <div className="flex items-center justify-between mb-8">
      <div className="flex flex-col items-start gap-4 max-sm:w-auto">
          
          <div className="space-y-6 mb-4">
    <div className="inline-flex items-center">
      <div className="bg-red-500 w-4 h-8 rounded-sm mr-4"></div>
      <span className="text-red-500 font-medium">This Month</span>
    </div>
  </div>
  <div className="flex flex-row space-x-12">
  <h2 className="text-3xl font-bold text-black">Best Selling Products</h2>

        </div>
        </div>
        <button className="px-10 py-3 text-white rounded-md bg-red-500 hover:bg-red-600 border-0 max-sm:p-2">
          View All
        </button>
      </div>

      <div className="grid pt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        {loading
          ? Array(4)
              .fill(null)
              .map((_, index) => <Card key={index} loading={true} className="w-full h-[300px]" />)
          : products.map((product) => {
              const { discountedPrice, originalPrice } = calculateDiscount(product.price)
              return (
                <div>
                <ProductCard key={product.id} product={product} />
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default BestSelling;