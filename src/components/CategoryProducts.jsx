

import { useEffect, useState } from "react"
import React from "react"
import { useParams } from "react-router-dom"
import { Card, Empty, Rate, Button, message } from "antd"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import useCartStore from "../store/cartStore"

// const { product } = Card

// Map our categories to dummyjson categories
const categoryMapping = {
  "womens-dresses": "womens-dresses",
  "mens-fashion": "mens-shirts",
  electronics: "smartphones",
  "home-lifestyle": "furniture",
  medicine: "skincare",
  "sports-outdoor": "mens-shoes",
  "baby-toys": "toys",
  "groceries-pets": "groceries",
  "health-beauty": "fragrances",
}


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
   else{
    addToCart({
      id: product.id,
      title: product.title,
      price: calculateDiscountedPrice(product.price, product.discountPercentage),
      image: product.thumbnail,
    })
    message.success("Added to cart!")
  }
  }
  return (
    <Card
                className="flex-shrink-0 w-full sm:w-[280px] "
                cover={
                  <div className="relative">
                    <img alt={product.title} src={product.thumbnail || "/placeholder.svg"} className="h-40 sm:h-48 w-full object-cover" />
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



const CategoryProducts = () => {
  const { categorySlug } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        // Get the mapped category
        const mappedCategory = categoryMapping[categorySlug] || categorySlug

        // Fetch products by category
        const response = await fetch(`https://dummyjson.com/products/category/${mappedCategory}`)
        const data = await response.json()

        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products)
        } else {
          setError("No products found in this category")
        }
      } catch (error) {
        console.error("Error fetching products:", error)
        setError("Failed to load products")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [categorySlug])

 

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">{categorySlug.replace(/-/g, " ")}</h1>
        <Empty description={error} className="my-8" />
      </div>
    )
  }
  const calculateDiscountedPrice = (price, discountPercentage) => {
    return (price * (1 - discountPercentage / 100)).toFixed(2)
  }

  return (
    <div className="container w-[85%] mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-8 capitalize">{categorySlug.replace(/-/g, " ")}</h1>

      {products.length === 0 ? (
        <Empty description="No products found in this category" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {products.map((product) => {
            const discountPercent = Math.floor(Math.random() * 20)
            const originalPrice = (product.price / (1 - discountPercent / 100)).toFixed(2)

            return (
              <div>
   
      <ProductCard key={product.id} product={product} />
   
  </div>
           
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CategoryProducts

