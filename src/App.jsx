import Navbar from "./components/Navbar"
import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import { AnimatePresence } from "framer-motion"
import CategoryProducts from "./components/CategoryProducts"
import Layout from "./components/Layout"
import CartPage from "./components/CartPage"
import CheckOut from "./components/CheckOut"

function App() {
  const Location = useLocation();
console.log(Location);
  return (
    
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
          <Routes location={Location} key={Location.pathname}> 
             <Route path="/" element={<Home />} />
             <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
          <Route
          path="/checkout"
          element={
            <Layout>
              <CheckOut />
            </Layout>} />
             <Route path="/category/:categorySlug" element={<CategoryProducts />} />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
  
    
  )
}

export default App