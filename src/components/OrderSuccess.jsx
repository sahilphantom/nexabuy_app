import { CheckCircle } from "lucide-react"
import React from "react"
import { useNavigate } from "react-router-dom"

const OrderSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-0">
      <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-md mx-auto text-center">
        <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Order Placed Successfully!</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors text-sm sm:text-base"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}
export default OrderSuccess;
