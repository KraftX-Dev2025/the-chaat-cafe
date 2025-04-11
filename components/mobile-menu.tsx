"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6 text-yellow-400" /> : <Menu className="h-6 w-6 text-yellow-400" />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <button onClick={closeMenu} className="absolute top-6 right-6 text-white" aria-label="Close menu">
          <X className="h-6 w-6 text-yellow-400" />
        </button>

        <nav className="flex flex-col items-center space-y-8">
          <MobileNavLink href="/" onClick={closeMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={closeMenu}>
            About
          </MobileNavLink>
          <MobileNavLink href="/menu" onClick={closeMenu}>
            Menu
          </MobileNavLink>
          <MobileNavLink href="/gallery" onClick={closeMenu}>
            Gallery
          </MobileNavLink>
          <MobileNavLink href="/locations" onClick={closeMenu}>
            Locations
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={closeMenu}>
            Contact
          </MobileNavLink>
        </nav>
      </div>
    </>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
    >
      {children}
    </Link>
  )
}
