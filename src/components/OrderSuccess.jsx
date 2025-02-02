import { CheckCircle } from "lucide-react"
import React from "react"
import { useNavigate } from "react-router-dom"

const OrderSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been successfully placed.</p>
        <div className="space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/orders")}
            className="w-full border border-gray-300 py-2 rounded hover:bg-gray-50 transition-colors"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  )
}
export default OrderSuccess;
