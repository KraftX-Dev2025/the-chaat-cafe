"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import MenuSection from "@/components/menu-section"
import GallerySection from "@/components/gallery-section"
import GallerySection2 from "@/components/gallery-section-2"
import LocationSection from "@/components/location-section"
import TestimonialSection from "@/components/testimonial-section"
import MobileInfoMenu from "@/components/mobile-info-menu"
import MenuDisplay from "@/components/menu-display"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const floatingDishRef = useRef<HTMLDivElement>(null)

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

    // Hero animations
    if (heroRef.current) {
      const tl = gsap.timeline()
      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-button",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-image-static",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
    }

    // Floating dish animation
    if (floatingDishRef.current) {
      gsap.to(floatingDishRef.current, {
        y: 30,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }

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
      {/* Mobile Info Menu - Only visible on mobile */}
      {/* <MobileInfoMenu /> */}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/food_image_9.webp"
            alt="Chaat Cafe Hero Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 px-4 py-20 pt-24 flex flex-col md:flex-row items-center">
          {/* Text content - Left side on desktop */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <div className="inline-block bg-yellow-500 px-4 py-1 rounded-full mb-4">
              <span className="text-black font-medium">Authentic Indian Cuisine</span>
            </div>
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Experience Authentic <span className="text-yellow-400">Indian Street Food</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 max-w-xl">
            Sinhgad Rd, near Pu. La. Deshpande Garden, Sarita Vihar Phase 2, Dattawadi, Pune, Maharashtra 411030
            </p>
            <div className="mb-8">
              <p className="text-gray-300 mb-2">Need help? Call us</p>
              <p className="text-yellow-400 text-2xl font-bold mb-2">+4800 567 8900</p>
              <p className="text-gray-300">support@example.com</p>
            </div>
            <Button
              className="hero-button bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 text-lg rounded-full"
              size="lg"
            >
              View Our Menu <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Images - Right side on desktop */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
            {/* Static image with unique shape */}
            <div className="hero-image-static absolute top-0 right-0 w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
              <div className="relative w-full h-full overflow-hidden rounded-tr-[80px] rounded-bl-[80px]">
                <Image
                  src="/images/food_image_1.webp"
                  alt="Chaat Dish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 250px, 300px"
                />
              </div>
            </div>

            {/* Floating/moving image */}
            <div
              ref={floatingDishRef}
              className="absolute bottom-0 left-0 md:left-20 w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-full">
                <Image
                  src="/images/food_image_2.webp"
                  alt="Floating Dish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 250px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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

      {/* Menu Display Section */}
      {/* <MenuDisplay /> */}

      {/* Menu Section */}
      <MenuSection />

      {/* Gallery Section */}
      {/* <GallerySection /> */}
      <GallerySection2 />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Location Section */}
      <LocationSection />
    </div>
  )
}
