"use client"

import { useState } from "react"
import { MapPin, Clock, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Location = {
  id: string
  name: string
  address: string
  phone: string
  hours: string
  mapEmbed: string
  googleMapsUrl: string // Added this property for the direct Google Maps link
}

export default function LocationSection() {
  const [activeLocation, setActiveLocation] = useState<string>("sinhgadRd") // Changed default to use an actual ID that exists

  const locations: Location[] = [
    {
      id: "sinhgadRd",
      name: "Sinhgad Rd",
      address: "Showroom No.4.5, FRRM+Q9Q Bhamini Arcade, S. No. 118, Sinhgad Rd, near Pu. La. Deshpande Garden, Sarita Vihar Phase 2, Dattawadi, Pune, Maharashtra 411030",
      phone: "+91 - 9370558492",
      hours: "Mon-Sun: 11:00 AM - 10:00 PM",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7567.419708004997!2d73.82273349513127!3d18.49679725499465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3438cd5103%3A0x545dd1b99b7bb25c!2sThe%20Chaat%20Cafe%20by%20Ganesh%20Bhel!5e0!3m2!1sen!2sin!4v1744381091754!5m2!1sen!2sin",
      googleMapsUrl: "https://maps.google.com/?q=The+Chaat+Cafe+by+Ganesh+Bhel+Sinhgad+Rd+Pune",
    },
    {
      id: "kothrud",
      name: "Kothrud",
      address: "BLOCK-2, Kothrud, Pune, Maharashtra 411038",
      phone: "+91 - 9307034963",
      hours: "Mon-Sun: 10:30 AM - 10:30 PM",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7567.419708004997!2d73.82273349513127!3d18.49679725499465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf433a512207%3A0x11929590f61d9d13!2sThe%20Chaat%20Cafe%20by%20Ganesh%20Bhel!5e0!3m2!1sen!2sin!4v1744381044704!5m2!1sen!2sin",
      googleMapsUrl: "https://maps.google.com/?q=The+Chaat+Cafe+by+Ganesh+Bhel+Kothrud+Pune",
    },
  ]

  const currentLocation = locations.find((location) => location.id === activeLocation)

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-yellow-400">Locations</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Visit us at one of our convenient locations across the city</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Our Branches</h3>
              <div className="space-y-4">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all",
                      activeLocation === location.id
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-800 text-white hover:bg-gray-700",
                    )}
                  >
                    <div className="font-bold text-lg">{location.name}</div>
                    <div className="text-sm mt-1">
                      {activeLocation === location.id ? "Currently viewing" : "Click to view details"}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {currentLocation && (
              <motion.div
                key={currentLocation.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-xl overflow-hidden"
              >
                <div className="aspect-video w-full">
                  <iframe
                    src={currentLocation.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title={`Map of ${currentLocation.name} location`}
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{currentLocation.name} Location</h3>
                  <div className="space-y-3">
                    {/* Modified to make address clickable and open in Google Maps */}
                    <a 
                      href={currentLocation.googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start group hover:bg-gray-800 p-2 rounded-lg transition-colors"
                    >
                      <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">
                        {currentLocation.address}
                        <span className="block text-xs text-yellow-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Open in Google Maps
                        </span>
                      </span>
                    </a>
                    
                    {/* Modified to make phone number clickable */}
                    <a 
                      href={`tel:${currentLocation.phone.replace(/\s+/g, '')}`} 
                      className="flex items-start group hover:bg-gray-800 p-2 rounded-lg transition-colors"
                    >
                      <Phone className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">
                        {currentLocation.phone}
                        <span className="block text-xs text-yellow-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to call
                        </span>
                      </span>
                    </a>
                    
                    <div className="flex items-start p-2">
                      <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{currentLocation.hours}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}