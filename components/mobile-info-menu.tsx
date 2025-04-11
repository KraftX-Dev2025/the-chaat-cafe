"use client"

import { useState } from "react"
import { Clock, MapPin, Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MobileInfoMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-yellow-900/30">
      {/* Toggle button */}
      <button
        onClick={toggleMenu}
        className="absolute -top-12 right-4 bg-yellow-500 text-black p-2 rounded-t-lg flex items-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="ml-2 font-medium">Info</span>
      </button>

      {/* Menu content */}
      <div
        className={cn(
          "bg-black transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[400px] py-4" : "max-h-0",
        )}
      >
        <div className="container px-4 space-y-6">
          {/* Restaurant Hours */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg flex items-center mb-2">
              <Clock className="h-5 w-5 mr-2" /> Hours
            </h3>
            <ul className="text-gray-300 space-y-1">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2" /> Contact
            </h3>
            <p className="text-gray-300">+4800 567 8900</p>
            <p className="text-gray-300">support@example.com</p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2" /> Location
            </h3>
            <p className="text-gray-300">71 Madison Ave, New York, USA</p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#menu" className="text-white hover:text-yellow-400 transition-colors">
                Menu
              </a>
              <a href="#gallery" className="text-white hover:text-yellow-400 transition-colors">
                Gallery
              </a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors">
                About Us
              </a>
              <a href="#location" className="text-white hover:text-yellow-400 transition-colors">
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
