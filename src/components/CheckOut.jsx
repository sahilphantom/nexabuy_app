import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"
import useCartStore from "../store/cartStore"
import OrderSuccess from "./OrderSuccess"

const CheckOut = () => {
  const navigate = useNavigate()
  const { items, getCartTotal, clearCart } = useCartStore()
  const [paymentMethod, setPaymentMethod] = useState("bank")
  const [couponCode, setCouponCode] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (items.length === 0) {
      alert("Your cart is empty!")
      return
    }

    setIsSubmitting(true)

    try {
      const orderData = {
        billingDetails: formData,
        items,
        paymentMethod,
        total: getCartTotal(),
        orderDate: new Date().toISOString(),
      }

      await new Promise((resolve) => setTimeout(resolve, 1500))

      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
      localStorage.setItem("orders", JSON.stringify([...existingOrders, orderData]))

      clearCart()
      setShowSuccess(true)
    } catch (error) {
      console.error("Error placing order:", error)
      alert("There was an error placing your order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const subtotal = getCartTotal()
  const shipping = "Free"
  const total = subtotal

  if (showSuccess) {
    return <OrderSuccess />
  }

  return (
    <div className="container w-[85%] justify-center items-center overflow-x-auto mx-auto px-4 py-20  ">
      <div className="flex items-center space-x-2 text-sm mb-8">
        <span className="text-gray-500">Home</span>
        <span className="text-gray-500">/</span>
        <span>Checkout</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
      {
  /* Billing Details Form */
}
;<div className="order-2 md:order-1 px-4 md:px-0">
  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Billing Details</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-sm mb-2">First Name*</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
        className="w-full p-2 md:p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
      />
    </div>

    <div>
      <label className="block text-sm mb-2">Company Name</label>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        className="w-full p-2 md:p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
      />
    </div>

    <div>
      <label className="block text-sm mb-2">Street Address*</label>
      <input
        type="text"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleInputChange}
        required
        className="w-full p-2 md:p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
      />
    </div>

    <div>
      <label className="block text-sm mb-2">Apartment, floor, etc. (optional)</label>
      <input
        type="text"
        name="apartment"
        value={formData.apartment}
        onChange={handleInputChange}
        className="w-full p-2 md:p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
      />
    </div>

    <div>
      <label className="block text-sm mb-2">Town/City*</label>
      <input
        type="text"
        name="townCity"
        value={formData.townCity}
        onChange={handleInputChange}
        required
        className="w-full p-2 md:p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
      />
    </div>

    <div>
      <label className="block text-sm mb-2">Phone Number*</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required
        className="w-full p-2 md:p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
      />
    </div>
  </form>
</div>



{
  /* Order Summary */
}
;<div className="order-1 md:order-2">
  <div className="bg-white p-4 md:p-6 rounded-lg border">
    {/* Cart Items */}
    <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="text-sm md:text-base">{item.name}</span>
                  </div>
                  <span className="text-sm md:text-base">${item.price}</span>
                </div>
              ))}
            </div>

    {/* Totals */}
    <div className="border-t pt-4 space-y-3">
      <div className="flex justify-between text-xs md:text-sm lg:text-base">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between text-xs md:text-sm lg:text-base">
        <span>Shipping:</span>
        <span>{shipping}</span>
      </div>
      <div className="flex justify-between font-bold text-xs md:text-sm lg:text-base">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>

    {/* Payment Methods */}
    <div className="mt-6 space-y-4">
      <div className="flex items-center space-x-3">
        <input
          type="radio"
          id="bank"
          name="payment"
          value="bank"
          checked={paymentMethod === "bank"}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="form-radio text-red-500"
        />
        <label htmlFor="bank" className="text-xs md:text-sm lg:text-base">
          Bank
        </label>
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="radio"
          id="cash"
          name="payment"
          value="cash"
          checked={paymentMethod === "cash"}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="form-radio text-red-500"
        />
        <label htmlFor="cash" className="text-xs md:text-sm lg:text-base">
          Cash on delivery
        </label>
      </div>

      {/* Payment Icons */}
      <div className="flex items-center space-x-2 mt-4">
        <img src="https://www.svgrepo.com/show/508697/klarna.svg" alt="Klarna" className="h-4 md:h-6 lg:h-8" />
        <img src="https://www.svgrepo.com/show/362033/visa.svg" alt="Visa" className="h-4 md:h-6 lg:h-8" />
        <img
          src="https://www.svgrepo.com/show/508701/mastercard-full.svg"
          alt="Mastercard"
          className="h-4 md:h-6 lg:h-8"
        />
        <img
          src="https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg"
          alt="GPay"
          className="h-4 md:h-6 lg:h-8"
        />
      </div>

      {/* Coupon Code */}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1 p-2 text-xs md:text-sm lg:text-base border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="px-3 md:px-4 py-2 text-xs md:text-sm lg:text-base bg-red-500 text-white rounded hover:bg-red-600">
          Apply Coupon
        </button>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`w-full py-2 md:py-3 rounded transition-colors mt-4 text-xs md:text-sm lg:text-base ${
          isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        {isSubmitting ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default CheckOut