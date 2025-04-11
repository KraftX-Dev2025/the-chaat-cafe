import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-yellow-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About with circular image */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 p-2 border-yellow-500">
              <Image src="/images/chaat-cafe-logo.webp" alt="Chaat Cafe" fill className="object-contain"/>
            </div>
            {/* <h3 className="text-xl font-bold mb-4">
              <span className="text-yellow-400">The Chaat Cafe</span>
            </h3> */}
            <p className="text-gray-400 mb-4 text-center md:text-left">
              Experience the authentic flavors of Indian street food in a modern setting.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="bg-gray-800 hover:bg-yellow-500 text-white hover:text-black p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                className="bg-gray-800 hover:bg-yellow-500 text-white hover:text-black p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-gray-800 hover:bg-yellow-500 text-white hover:text-black p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Favorite Dishes */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Favorite Picks</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Butter Chicken
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Paneer Tikka Masala
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Chicken Biryani
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Samosa Chaat
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-yellow-400" />
                  Gulab Jamun
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Get News & Offers</h3>
            <p className="text-gray-400 mb-4">
              Subscribe & get <span className="text-yellow-400">10% discount</span>. Get E-mail updates about our latest
              shop and <span className="text-yellow-400">special offers</span>.
            </p>
            <div className="space-y-4">
              <Input type="email" placeholder="Your email address" className="bg-gray-900 border-gray-700 text-white" />
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black flex items-center justify-center">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Chaat Cafe. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
