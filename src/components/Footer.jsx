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
<svg fill="#ffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xml:space="preserve" stroke="#ffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="38" y="23" width="2" height="5"></rect> <rect x="42" y="23" width="2" height="5"></rect> <rect x="38" y="30" width="2" height="2"></rect> <rect x="42" y="30" width="2" height="2"></rect> <rect x="31" y="34" width="2" height="2"></rect> <rect x="26" y="54" width="2" height="2"></rect> <rect x="42" y="34" width="2" height="2"></rect> <rect x="38" y="38" width="2" height="2"></rect> <rect x="42" y="38" width="2" height="2"></rect> <path d="M2,2h3V0H1C0.448,0,0,0.448,0,1v4h2V2z"></path> <path d="M63,0h-4v2h3v3h2V1C64,0.448,63.552,0,63,0z"></path> <path d="M2,59H0v4c0,0.552,0.448,1,1,1h4v-2H2V59z"></path> <path d="M62,62h-3v2h4c0.552,0,1-0.448,1-1v-4h-2V62z"></path> <path d="M4,5v12c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1V5c0-0.552-0.448-1-1-1H5C4.448,4,4,4.448,4,5z M6,6h10v10H6V6z"></path> <path d="M13,8H9C8.448,8,8,8.448,8,9v4c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V9C14,8.448,13.552,8,13,8z M12,12h-2v-2h2V12z"></path> <path d="M47,18h12c0.552,0,1-0.448,1-1V5c0-0.552-0.448-1-1-1H47c-0.552,0-1,0.448-1,1v12C46,17.552,46.448,18,47,18z M48,6h10v10 H48V6z"></path> <path d="M55,8h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V9C56,8.448,55.552,8,55,8z M54,12h-2v-2h2V12z "></path> <path d="M17,46H5c-0.552,0-1,0.448-1,1v12c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1V47C18,46.448,17.552,46,17,46z M16,58H6V48 h10V58z"></path> <path d="M9,56h4c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1H9c-0.552,0-1,0.448-1,1v4C8,55.552,8.448,56,9,56z M10,52h2v2h-2V52z"></path> <path d="M44,19h-7V7h-2v13c0,0.552,0.448,1,1,1h8V19z"></path> <rect x="22" y="12" width="7" height="2"></rect> <rect x="26" y="8" width="7" height="2"></rect> <rect x="4" y="19" width="2" height="9"></rect> <path d="M18,25H8v2h9v4h2v-5C19,25.448,18.552,25,18,25z"></path> <rect x="9" y="20" width="2" height="2"></rect> <rect x="21" y="18" width="2" height="8"></rect> <rect x="21" y="28" width="9" height="2"></rect> <path d="M61,29h-2v10h-3v2h4c0.552,0,1-0.448,1-1V29z"></path> <rect x="26" y="18" width="2" height="2"></rect> <rect x="4" y="33" width="2" height="8"></rect> <rect x="4" y="42" width="9" height="2"></rect> <path d="M50,28h2v-4c0-0.552-0.448-1-1-1h-5v2h4V28z"></path> <rect x="9" y="33" width="2" height="2"></rect> <rect x="20" y="32" width="2" height="8"></rect> <rect x="20" y="42" width="9" height="2"></rect> <rect x="8" y="38" width="9" height="2"></rect> <rect x="21" y="52" width="2" height="4"></rect> <rect x="20" y="48" width="9" height="2"></rect> <path d="M36,44v-5c0-0.552-0.448-1-1-1H25v2h9v4H36z"></path> <rect x="26" y="32" width="2" height="2"></rect> <rect x="15" y="34" width="2" height="2"></rect> <rect x="59" y="53" width="2" height="7"></rect> <rect x="54" y="58" width="3" height="2"></rect> <rect x="54" y="52" width="2" height="4"></rect> <path d="M61,44c0-0.552-0.448-1-1-1H49v2h10v6h2V44z"></path> <path d="M48,56v-5c0-0.552-0.448-1-1-1H36v2h10v4H48z"></path> <rect x="50" y="47" width="7" height="2"></rect> <rect x="20" y="58" width="7" height="2"></rect> <rect x="30" y="51" width="2" height="9"></rect> <rect x="32" y="46" width="4" height="2"></rect> <path d="M47,36h5v-2h-4v-6h-2v7C46,35.552,46.448,36,47,36z"></path> <rect x="50" y="30" width="5" height="2"></rect> <rect x="54" y="20" width="3" height="2"></rect> <rect x="59" y="20" width="2" height="5"></rect> <rect x="54" y="25" width="2" height="2"></rect> <path d="M39,17h4c0.552,0,1-0.448,1-1V3h-2v12h-3V17z"></path> <path d="M24,5h15V3H23c-0.552,0-1,0.448-1,1v5h2V5z"></path> <path d="M25,24h7c0.552,0,1-0.448,1-1v-8h-2v7h-6V24z"></path> <rect x="34" y="23" width="2" height="4"></rect> <rect x="36" y="54" width="7" height="2"></rect> <rect x="36" y="58" width="9" height="2"></rect> <path d="M50,58h-2v2h3c0.552,0,1-0.448,1-1v-8h-2V58z"></path> <rect x="16" y="42" width="2" height="2"></rect> <rect x="39" y="42" width="4" height="2"></rect> <rect x="46" y="38" width="2" height="3"></rect> <rect x="45" y="43" width="2" height="2"></rect> <rect x="39" y="46" width="3" height="2"></rect> <rect x="50" y="38" width="2" height="2"></rect> <rect x="54" y="34" width="3" height="2"></rect> <rect x="35" y="34" width="5" height="2"></rect> <rect x="34" y="29" width="2" height="3"></rect> </g> </g></svg>              </div>
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

