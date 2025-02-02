import { Navigate, useNavigate } from "react-router-dom"
import useCartStore from "../store/cartStore"
import React from "react"

const CartSummary = () => {
  const { items, getCartTotal } = useCartStore()
  const navigate = useNavigate()

  const subtotal = getCartTotal()
  const shipping = "Free"
  const total = subtotal // Add shipping cost if not free
  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Cart Total</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b pb-3">
          <span>Shipping:</span>
          <span>{shipping}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600 transition-colors"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  )
}

export default CartSummary;