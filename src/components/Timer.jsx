import { useState, useEffect } from "react"
import React from "react"

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-full w-16 h-16 md:w-20 md:h-20">
    <span className="text-black font-bold text-lg md:text-xl">{value}</span>
    <span className="text-gray-600 text-xs">{label}</span>
  </div>
)

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex space-x-4">
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}
export default Timer;
