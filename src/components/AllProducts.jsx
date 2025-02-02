import { useState, useEffect } from "react"
import React from "react"
import { Card, Rate, Button, message, Pagination } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
import useCartStore from "../store/cartStore"
import Loader from "./Loader"

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
      className="w-full transition-shadow"
      cover={
        <div className="relative">
          <img alt={product.title} src={product.thumbnail || "/placeholder.svg"} className="h-48 w-full object-cover" />
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
            -{product.discountPercentage.toFixed(0)}%
          </div>
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

const AllProducts = ({ onClose }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const pageSize = 20

  useEffect(() => {
    fetchProducts(currentPage)
  }, [currentPage])

  const fetchProducts = (page) => {
    setLoading(true)
    fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${(page - 1) * pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setTotalProducts(data.total)
        setLoading(false)
      })
  }

  return (
    
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">All Products</h2>
          <Button onClick={onClose}>Close</Button>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Pagination
                current={currentPage}
                total={totalProducts}
                pageSize={pageSize}
                onChange={(page) => setCurrentPage(page)}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AllProducts

