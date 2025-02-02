import { Phone, Mail } from "lucide-react"
import React from "react"

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container w-[90%] m-auto  mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <span>Home</span>
        <span>/</span>
        <span className="text-black">Contact</span>
      </div>

      <div className="w-[90%] m-auto grid md:grid-cols-2 gap-8 py-10">
        {/* Left Column - Contact Info */}
        <div className="space-y-8 border-b-2 border-solid border-gray-300">
          {/* Call To Us Section */}
          <div className="space-y-4 ">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-xl">Call To Us</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-600">Phone: +8801611112222</p>
            </div>
          </div>

          {/* Write To Us Section */}
          <div className="space-y-4 ">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-xl">Write To US</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-600">Emails: customer@exclusive.com</p>
              <p className="text-gray-600">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactSection;
