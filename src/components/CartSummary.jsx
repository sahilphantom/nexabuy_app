import { useNavigate } from "react-router-dom"
import React from "react"
import useCartStore from "../store/cartStore"

const CartSummary = () => {
  const navigate = useNavigate()
  const { items, getCartTotal } = useCartStore()

  const subtotal = getCartTotal()
  const shipping = "Free"
  const total = subtotal

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Cart Total</h2>
      <div className="space-y-3">
        <div className="flex justify-between text-sm sm:text-base">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b pb-3 text-sm sm:text-base">
          <span>Shipping:</span>
          <span>{shipping}</span>
        </div>
        <div className="flex justify-between font-bold text-sm sm:text-base">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600 transition-colors text-sm sm:text-base"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  )
}
export default CartSummary
