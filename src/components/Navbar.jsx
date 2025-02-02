import React, { useState, useEffect } from "react"
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { Input, Badge } from "antd"

import { Link, useNavigate } from "react-router-dom"
import Cart from "./CartPage"
import useCartStore from "../store/cartStore"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { ShoppingCart } from "lucide-react"

export default function Navbar() {
  const navigate = useNavigate()

  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavFixed, setIsNavFixed] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartCount = useCartStore((state) => state.getCartCount())

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavFixed(true)
      } else {
        setIsNavFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-black text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-center flex-1 text-xs sm:text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
            <a href="#" className="ml-2 font-semibold">
              ShopNow
            </a>
          </p>
          <div className="flex items-center">
            <span className="text-xs sm:text-sm">English</span>
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`border-b transition-all duration-300 ease-in-out ${isNavFixed ? "fixed top-0 left-0 right-0 bg-white shadow-md z-50" : ""}`}
      >
        <div className="max-w-7xl w-[85%]  mx-auto px-4 pt-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link  to="/" className="text-xl font-bold">
                NexaBuy
              </Link>
            </div>

            {/* Center Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm hover:text-gray-600">
                Home
              </Link>
              <Link to="/contact" className="text-sm hover:text-gray-600">
                Contact
              </Link>
              <Link to="/about" className="text-sm hover:text-gray-600">
                About
              </Link>
             
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              {/* Search Bar - Hidden on mobile */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className={`w-48 py-1 px-3 text-sm border rounded-sm transition-all ${
                    isSearchFocused ? "w-64" : "w-48"
                  }`}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <MagnifyingGlassIcon className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-4">
                <Link to="/wishlist" className="text-gray-700 hover:text-gray-900">
                  <Badge count={0} size="small">
                    <HeartOutlined style={{ fontSize: "24px" }} />
                  </Badge>
                </Link>
                <button className="p-2 hover:text-red-500 relative" onClick={() => navigate("/cart")}>
                  
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
             
            </button>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold">NexaBuy</span>
            <button onClick={closeMobileMenu}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="flex flex-col px-4 py-6 space-y-4 overflow-y-auto">
            <Link to="/" className="text-lg hover:text-gray-600">
            <button onClick={closeMobileMenu}> Home</button> 
            </Link>
            <Link to="/about" className="text-lg hover:text-gray-600">
            <button onClick={closeMobileMenu}> About</button> 
            </Link>
            <Link to="/contact" className="text-lg hover:text-gray-600">
            <button onClick={closeMobileMenu}> Contact</button> 
            </Link>
           
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full py-2 px-3 text-sm border rounded-sm"
              />
              <MagnifyingGlassIcon className="h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="hover:text-gray-600">
                <HeartIcon className="h-6 w-6" />
              </button>
              <button className="hover:text-gray-600">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

