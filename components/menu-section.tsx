"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type MenuCategory = {
  id: string
  name: string
  items: MenuItem[]
}

type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  image: string
}

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("chaats")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Infinite scroll effect with slow transition
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const currentCategory = menuCategories.find((category) => category.id === selectedCategory)
    if (!currentCategory) return

    const itemCount = currentCategory.items.length
    const itemWidth = 300 // Item width in pixels
    const spacing = 24 // Spacing between items (space-x-6 = 1.5rem = 24px)
    
    const scrollToIndex = (index: number) => {
      if (scrollContainer) {
        const scrollPosition = index * (itemWidth + spacing)
        scrollContainer.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        })
      }
    }

    // Set up the scroll interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % itemCount
        scrollToIndex(nextIndex)
        return nextIndex
      })
    }, 5000) // Change every 5 seconds

    return () => {
      clearInterval(interval)
    }
  }, [selectedCategory])

  const handlePrevClick = () => {
    const currentCategory = menuCategories.find((category) => category.id === selectedCategory)
    if (!currentCategory) return
    
    const itemCount = currentCategory.items.length
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + itemCount) % itemCount
      
      // Scroll to the new index
      if (scrollContainerRef.current) {
        const itemWidth = 300 // Item width
        const spacing = 24 // Spacing between items
        const scrollPosition = newIndex * (itemWidth + spacing)
        
        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        })
      }
      
      return newIndex
    })
  }

  const handleNextClick = () => {
    const currentCategory = menuCategories.find((category) => category.id === selectedCategory)
    if (!currentCategory) return
    
    const itemCount = currentCategory.items.length
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % itemCount
      
      // Scroll to the new index
      if (scrollContainerRef.current) {
        const itemWidth = 300 // Item width
        const spacing = 24 // Spacing between items
        const scrollPosition = newIndex * (itemWidth + spacing)
        
        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        })
      }
      
      return newIndex
    })
  }

  const menuCategories: MenuCategory[] = [
    {
      id: "chaats",
      name: "Chaats",
      items: [
        {
          id: "food-image-1",
          name: "Pani Puri",
          description: "Crispy hollow puris filled with spicy potato mixture and tangy tamarind water",
          price: "$6.99",
          image: "/images/food_image_1.webp",
        },
        {
          id: "food-image-2",
          name: "Dahi Puri",
          description: "Crispy puris topped with potatoes, yogurt, and chutneys",
          price: "$7.99",
          image: "/images/food_image_3.webp",
        },
        {
          id: "food-image-4",
          name: "Pani Puri",
          description: "Crispy hollow puris filled with spicy potato mixture and tangy tamarind water",
          price: "$6.99",
          image: "/images/food_image_4.webp",
        },
        {
          id: "food-image-5",
          name: "Bhel Puri",
          description: "Puffed rice, vegetables and tangy tamarind sauce",
          price: "$5.99",
          image: "/images/food_image_5.webp",
        },
        {
          id: "pani-puri",
          name: "Pani Puri",
          description: "Crispy hollow puris filled with spicy potato mixture and tangy tamarind water",
          price: "$6.99",
          image: "/images/food_image_6.webp",
        },
        {
          id: "bhel-puri",
          name: "Bhel Puri",
          description: "Puffed rice, vegetables and tangy tamarind sauce",
          price: "$5.99",
          image: "/images/food_image_8.webp",
        },
        {
          id: "dahi-puri",
          name: "Dahi Puri",
          description: "Crispy puris topped with potatoes, yogurt, and chutneys",
          price: "$7.99",
          image: "/images/food_image_9.webp",
        },
      ],
    },
    {
      id: "sandwhiches",
      name: "Sandwhiches",
      items: [
        {
          id: "butter-chicken",
          name: "Butter Chicken",
          description: "Tender chicken in a rich tomato and butter sauce",
          price: "$14.99",
          image: "/images/food_image_1.webp",
        },
        {
          id: "paneer-tikka-masala",
          name: "Paneer Tikka Masala",
          description: "Cottage cheese cubes in a spiced tomato gravy",
          price: "$13.99",
          image: "/images/food_image_2.webp",
        },
      ],
    },
    {
      id: "shakes",
      name: "Shakes",
      items: [
        {
          id: "naan",
          name: "Butter Naan",
          description: "Soft leavened flatbread brushed with butter",
          price: "$3.99",
          image: "/images/food_image_1.webp",
        },
        {
          id: "roti",
          name: "Tandoori Roti",
          description: "Whole wheat flatbread baked in tandoor",
          price: "$2.99",
          image: "/images/food_image_2.webp",
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: "gulab-jamun",
          name: "Gulab Jamun",
          description: "Deep-fried milk solids soaked in sugar syrup",
          price: "$4.99",
          image: "/images/food_image_1.webp",
        },
        {
          id: "rasmalai",
          name: "Rasmalai",
          description: "Soft cottage cheese patties in sweetened milk",
          price: "$5.99",
          image: "/images/food_image_2.webp",
        },
      ],
    },
  ]

  const currentCategory = menuCategories.find((category) => category.id === selectedCategory)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const selectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setIsDropdownOpen(false)
    setCurrentIndex(0) // Reset index when changing category
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-yellow-400">Menu</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of authentic Indian dishes, from street food favorites to traditional curries
          </p>
        </div>

        {/* Menu Categories */}
        <div className="mb-12">
          {/* Desktop Categories */}
          <div className="hidden md:flex justify-center space-x-4 mb-8">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => selectCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all",
                  selectedCategory === category.id
                    ? "bg-yellow-500 text-black font-medium"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden relative mb-8">
            <button
              onClick={toggleDropdown}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 rounded-lg text-white"
            >
              <span>{currentCategory ? currentCategory.name : "Select Category"}</span>
              <ChevronDown
                className={cn("h-5 w-5 transition-transform", isDropdownOpen ? "transform rotate-180" : "")}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => selectCategory(category.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 transition-colors",
                      selectedCategory === category.id
                        ? "bg-yellow-500 text-black font-medium"
                        : "text-white hover:bg-gray-700",
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Menu Items - Horizontal Scrolling with Navigation */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth', transitionDuration: '2s' }}
          >
            {currentCategory?.items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden shadow-lg flex-shrink-0 snap-center"
                style={{ width: '300px' }}
              >
                <div className="relative h-64 overflow-hidden rounded-t-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover bg-black"
                    sizes="300px"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-yellow-400 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={handlePrevClick}
              className="bg-yellow-500 text-black rounded-full p-3 hover:bg-yellow-600 transition-colors"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={handleNextClick}
              className="bg-yellow-500 text-black rounded-full p-3 hover:bg-yellow-600 transition-colors"
              aria-label="Next item"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  )
}