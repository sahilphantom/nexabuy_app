import React from "react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { img1, img18, img2 } from "../assets";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl w-[85%] m-auto mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Nexabuy</h2>
            <p className="text-sm">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/20 rounded-l px-3 py-2 text-sm w-full focus:outline-none"
              />
              <button className="bg-transparent border border-l-0 border-white/20 rounded-r px-2">
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Support</h2>
            <div className="space-y-2 text-sm">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p>nexabuy@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Account</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/account" className="hover:text-gray-300">
                  My Account
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-gray-300">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-gray-300">
                  Cart
                </a>
              </li>
              <li>
                <a href="/wishlist" className="hover:text-gray-300">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-gray-300">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Link</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-300">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Download App</h2>
            <p className="text-sm text-gray-400">Save $3 with App New User Only</p>
            <div className="relative flex space-x-2">
              <div className="w-20 h-20">
              <img src={img18} alt="QR Code" className="w-full h-full" />
              </div>
              <div className="absolute top-[-1rem] left-[6rem] space-y-0">
                <a href="#" className="block">
                  <img
                    src={img1}
                    alt="Google Play"
                    className="w-14 h-14 "
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src={img2}
                    alt="App Store"
                    className="w-14 h-14"
                  />
                </a>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-300">
              <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-white/10 text-sm text-gray-400">
          <p>© Copyright 2025. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;

