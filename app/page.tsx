"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import MenuSection from "@/components/menu-section"
// import GallerySection from "@/components/gallery-section"
import GallerySection2 from "@/components/gallery-section-2"
import LocationSection from "@/components/location-section"
import TestimonialSection from "@/components/testimonial-section"
// import MobileInfoMenu from "@/components/mobile-info-menu"
// import MenuDisplay from "@/components/menu-display";
import Banner from "@/components/banner"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // About section animations
    if (aboutRef.current) {
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0.5,
        duration: 1,
      })

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
      })
    }

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Now using Banner component */}
      <Banner />

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="about-image relative">
              <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px]">
                <Image
                  src="/images/food_image_8.webp"
                  alt="About Chaat Cafe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">Since 2010</span>
              </div>
            </div>
            <div className="about-content">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our <span className="text-yellow-400">Story</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded in 2010, Chaat Cafe began with a simple mission: to bring the authentic flavors of Indian street
                food to food enthusiasts. What started as a small food cart has now grown into multiple locations across
                the city.
              </p>
              <p className="text-gray-300 mb-8">
                Our chefs use traditional recipes passed down through generations, combined with locally sourced
                ingredients to create a unique dining experience that transports you to the bustling streets of India.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Gallery Section */}
      <GallerySection2 />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Location Section */}
      <LocationSection />
    </div>
  )
}