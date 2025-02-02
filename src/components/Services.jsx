import { Truck, Headphones, ShieldCheck } from "lucide-react"
import React from "react"


const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
    <h3 className="mt-4 font-bold text-sm uppercase tracking-wide">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
  </div>
)

const services = [
  {
    icon: Truck,
    title: "Free and Fast Delivery",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Service",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: ShieldCheck,
    title: "Money Back Guarantee",
    description: "We return money within 30 days",
  },
]

const Services = () => {
  return (
    <div className="w-[80%] m-auto py-16 px-4 mt-5 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Services;
