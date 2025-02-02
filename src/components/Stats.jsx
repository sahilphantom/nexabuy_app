import { Store, DollarSign, Gift, Wallet } from "lucide-react"
import React from "react"

const StatCard = ({ icon: Icon, number, description }) => (
    <div className="p-6 rounded-lg border bg-white hover:bg-red-500 hover:text-white flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 group">
      <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-300">
        <div className="w-12 h-12 rounded-full bg-black group-hover:bg-white/80 flex items-center justify-center transition-colors duration-300">
          <Icon className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2">{number}</h3>
      <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">{description}</p>
    </div>
  )
  
  const stats = [
    {
      icon: Store,
      number: "10.5k",
      description: "Sellers active our site",
    },
    {
      icon: DollarSign,
      number: "33k",
      description: "Monthly Product Sale",
    },
    {
      icon: Gift,
      number: "45.5k",
      description: "Customer active in our site",
    },
    {
      icon: Wallet,
      number: "25k",
      description: "Annual gross sale in our site",
    },
  ]
  
  const Stats = () => {
    return (
      <div className="container w-[90%]  mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} number={stat.number} description={stat.description} />
          ))}
        </div>
      </div>
    )
  }
export default Stats;
