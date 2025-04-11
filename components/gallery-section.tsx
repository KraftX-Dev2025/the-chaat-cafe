"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (sectionRef.current) {
      // Animate gallery items
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-black" id="gallery">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-yellow-400">Gallery</span>
            </h2>
            <p className="text-gray-300 max-w-xl">A visual feast of our delicious dishes and vibrant atmosphere</p>
          </div>
          <div className="text-yellow-400 text-5xl md:text-6xl italic font-script rotate-[-10deg]">Gallery</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="gallery-item row-span-2 col-span-1">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Gallery Image 1"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="gallery-item">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Gallery Image 2"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="gallery-item">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Gallery Image 3"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="gallery-item col-span-1 sm:col-span-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Gallery Image 4"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
              />
            </div>
          </div>
          <div className="gallery-item">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Gallery Image 5"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="text-white text-[120px] font-bold opacity-10 vertical-text">OUR ROSTAY</div>
        </div>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        .font-script {
          font-family: cursive, serif;
        }
      `}</style>
    </section>
  )
}
