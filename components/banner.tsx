"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// Data for slides
const slideData = [
  {
    id: 1,
    title: "Experience Authentic <span className=\"text-yellow-400\">Indian Street Food</span>",
    address: "Sinhgad Rd, near Pu. La. Deshpande Garden, Sarita Vihar Phase 2, Dattawadi, Pune, Maharashtra 411030",
    contact: {
      text: "Need help? Call us",
      phone: "+4800 567 8900",
      email: "support@example.com"
    },
    circleImage: "/images/food_image_2.webp",
    moonImage: "/images/food_image_1.webp"
  },
  {
    id: 2,
    title: "Taste The <span className=\"text-yellow-400\">Flavors of India</span>",
    address: "MG Road, near City Mall, Koregaon Park, Pune, Maharashtra 411001",
    contact: {
      text: "For reservations, call",
      phone: "+4800 123 4567",
      email: "reservations@example.com"
    },
    circleImage: "/images/food_image_4.webp",
    moonImage: "/images/food_image_5.webp"
  },
  {
    id: 3,
    title: "Discover <span className=\"text-yellow-400\">Culinary Excellence</span>",
    address: "FC Road, opposite Fergusson College, Shivajinagar, Pune, Maharashtra 411005",
    contact: {
      text: "For special events, call",
      phone: "+4800 987 6543",
      email: "events@example.com"
    },
    circleImage: "/images/food_image_6.webp",
    moonImage: "/images/food_image_8.webp"
  }
];

export default function Banner() {
  const heroRef = useRef<HTMLDivElement>(null)
  const floatingDishRef = useRef<HTMLDivElement>(null)
  const moonImageRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Function to handle slide change
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
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
          ".moon-image",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0,
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

    // Moon image zoom effect on scroll
    if (moonImageRef.current) {
      // Zoom in effect
      gsap.fromTo(".moon-image-inner",
        { scale: 1 },
        {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "center center",
            scrub: true,
          },
          scale: 1.3,
          ease: "none"
        }
      );

      // Zoom out effect
      gsap.fromTo(".moon-image-inner",
        { scale: 1.3 },
        {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "center center",
            end: "bottom top",
            scrub: true,
          },
          scale: 1,
          ease: "none"
        }
      );
    }

    // Auto-slide effect for hero section
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length)
    }, 8000) // Change slide every 8 seconds

    return () => {
      clearInterval(slideInterval)
    }
  }, [])

  const currentContent = slideData[currentSlide];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/food_image_7.webp"
          alt="Chaat Cafe Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="container relative z-10 px-4 pt-24 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="w-full md:w-4/12 flex">
          <div className="w-full text-center md:text-left mb-12">
            <div className="inline-block bg-yellow-500 px-4 py-1 rounded-full mb-4">
              <span className="text-black font-medium">Authentic Indian Cuisine</span>
            </div>
            <h1
              className="hero-title text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6"
              dangerouslySetInnerHTML={{ __html: currentContent.title }}
            ></h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 max-w-xl mx-auto md:mx-0">
              {currentContent.address}
            </p>
            <div className="mb-8">
              <p className="text-gray-300 mb-2">{currentContent.contact.text}</p>
              <p className="text-yellow-400 text-2xl font-bold mb-2">{currentContent.contact.phone}</p>
              <p className="text-gray-300">{currentContent.contact.email}</p>
            </div>
            <Button
              className="hero-button bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 text-lg rounded-full"
              size="lg"
            >
              View Our Menu <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="w-full md:w-8/12 flex flex-col md:flex-row md:justify-center py-8 ml-4 gap-8 md:gap-0">
          {/* Circular floating image - full width on mobile, half on desktop */}
          <div className="w-full md:w-4/12 z-10 flex justify-center md:justify-start">
            <div
              ref={floatingDishRef}
              className="w-[17rem] h-[20rem]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-b-full">
                <Image
                  src={currentContent.circleImage}
                  alt="Floating Dish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 250px, 300px"
                />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-30">
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-yellow-500 w-10' : 'bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Quarter moon image - full width on mobile, half on desktop */}
          <div className="w-full md:w-7/12 flex ml-0 md:ml-4 justify-center md:justify-end">
            <div
              ref={moonImageRef}
              className="moon-image relative w-full h-[45rem]"
            >
              <div className="relative w-full h-full overflow-hidden">
                <div className="moon-image-inner absolute inset-0 w-full h-full">
                  <Image
                    src={currentContent.moonImage}
                    alt="Moon Shaped Dish"
                    fill
                    className="object-cover rounded-tl-full rounded-3xl"
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}