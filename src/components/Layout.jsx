import Navbar from "./Navbar"
import React from "react"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-1">{children}</main>
    
    </div>
  )
}

