import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
    const [time, setTime] = useState({
      days: 3,
      hours: 23,
      minutes: 19,
      seconds: 56,
    })
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (time.seconds > 0) {
          setTime({ ...time, seconds: time.seconds - 1 })
        } else if (time.minutes > 0) {
          setTime({ ...time, minutes: time.minutes - 1, seconds: 59 })
        } else if (time.hours > 0) {
          setTime({ ...time, hours: time.hours - 1, minutes: 59, seconds: 59 })
        } else if (time.days > 0) {
          setTime({ ...time, days: time.days - 1, hours: 23, minutes: 59, seconds: 59 })
        }
      }, 1000)
  
      return () => clearInterval(timer)
    }, [time])
  
    return (
      <div className="flex gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold">{String(time.days).padStart(2, "0")}</div>
          <div className="text-xs text-gray-500">Days</div>
        </div>
        <div className="text-2xl font-bold">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold">{String(time.hours).padStart(2, "0")}</div>
          <div className="text-xs text-gray-500">Hours</div>
        </div>
        <div className="text-2xl font-bold">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold">{String(time.minutes).padStart(2, "0")}</div>
          <div className="text-xs text-gray-500">Minutes</div>
        </div>
        <div className="text-2xl font-bold">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold">{String(time.seconds).padStart(2, "0")}</div>
          <div className="text-xs text-gray-500">Seconds</div>
        </div>
      </div>
    )
  }

export default CountdownTimer
