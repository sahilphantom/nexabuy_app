import { useState } from "react"
import React from "react"
import useCartStore from "../store/cartStore"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import { Link } from "react-router-dom"

const CartPage = () => {
  const [couponCode, setCouponCode] = useState("")
  const { items, updateQuantity, removeFromCart, clearCart } = useCartStore()

  const handleApplyCoupon = () => {
    // Implement coupon logic here
    console.log("Applying coupon:", couponCode)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        <span className="text-gray-500">Home</span>
        <span className="text-gray-500">/</span>
        <span>Cart</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-4 px-2">Product</th>
                  <th className="text-left py-4 px-2">Price</th>
                  <th className="text-left py-4 px-2">Quantity</th>
                  <th className="text-left py-4 px-2">Subtotal</th>
                  <th className="text-left py-4 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
           
            <button  className="px-6 py-2 border rounded hover:bg-gray-50 transition-colors">
            <Link to='/'>
              Return to Shopping
              </Link>
            </button>
            <button className="px-6 py-2 border rounded hover:bg-gray-50 transition-colors">Update Cart</button>
           
          </div>

          {/* Coupon Section */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <input
              type="text"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={handleApplyCoupon}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:w-80">
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
export default CartPage
