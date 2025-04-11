"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Instagram, Facebook, Twitter, Menu, X, Clock, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInfoMenuOpen, setIsInfoMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleInfoMenu = () => {
    setIsInfoMenuOpen(!isInfoMenuOpen)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-black/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-2">
            {/* Top bar with contact and social */}
            <div className="flex justify-between items-center">
              <div className="hidden sm:flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2 text-yellow-400" />
                <span>contact@chaatcafe.com</span>
              </div>
              <div className="sm:hidden">
                <Link href="mailto:contact@chaatcafe.com">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="https://instagram.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="https://facebook.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="https://twitter.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Twitter className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Main navigation */}
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-yellow-400">The Chaat Cafe</span> 
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <NavLink href="/">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Menu</NavLink>
                <NavLink href="#">Gallery</NavLink>
                <NavLink href="#">Locations</NavLink>
                <NavLink href="#">Contact</NavLink>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-white p-2 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-yellow-400" />
                ) : (
                  <Menu className="h-6 w-6 text-yellow-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out flex flex-col overflow-auto",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        <div className="bg-black/95 flex-1 flex flex-col w-full pt-16 px-6">
          <nav className="flex flex-col justify-center items-center space-y-6 py-8 border-b border-gray-800">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Menu</MobileNavLink>
            <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Locations</MobileNavLink>
            <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
          </nav>
          
          {/* Restaurant Info Section */}
          <div className="py-8 space-y-6">
            {/* Restaurant Hours */}
            <div>
              <h3 className="text-yellow-400 font-bold text-sm flex items-center mb-2">
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
            {/* <div>
              <h3 className="text-yellow-400 font-bold text-lg flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" /> Contact
              </h3>
              <p className="text-gray-300">+4800 567 8900</p>
              <p className="text-gray-300">support@example.com</p>
            </div> */}
            
            {/* Location */}
            {/* <div>
              <h3 className="text-yellow-400 font-bold text-lg flex items-center mb-2">
                <MapPin className="h-5 w-5 mr-2" /> Location
              </h3>
              <p className="text-gray-300">71 Madison Ave, New York, USA</p>
            </div> */}
          </div>
          
          {/* Social Links */}
          {/* <div className="mt-auto py-6 border-t border-gray-800">
            <div className="flex justify-center space-x-6">
              <Link href="https://instagram.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-yellow-400 transition-colors relative group">
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-white text-md md:text-xl font-medium hover:text-yellow-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}