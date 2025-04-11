"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
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
  isVegetarian: boolean
  isSpicy?: boolean
}

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("chaats")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollAmount = 1 // Adjust to control scroll speed
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

    const autoScroll = () => {
      if (scrollContainer) {
        scrollPosition = (scrollPosition + scrollAmount) % maxScroll
        scrollContainer.scrollLeft = scrollPosition
      }
      requestAnimationFrame(autoScroll)
    }

    const animation = requestAnimationFrame(autoScroll)

    // Pause scrolling when user hovers over the container
    const handleMouseEnter = () => cancelAnimationFrame(animation)
    const handleMouseLeave = () => requestAnimationFrame(autoScroll)

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animation)
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [selectedCategory])

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
          isVegetarian: true,
          isSpicy: true,
        },
        {
          id: "food-image-2",
          name: "Bhel Puri",
          description: "Puffed rice, vegetables and tangy tamarind sauce",
          price: "$5.99",
          image: "/images/food_image_2.webp",
          isVegetarian: true,
        },
        {
          id: "food-image-3",
          name: "Dahi Puri",
          description: "Crispy puris topped with potatoes, yogurt, and chutneys",
          price: "$7.99",
          image: "/images/food_image_3.webp",
          isVegetarian: true,
        },
        {
          id: "food-image-4",
          name: "Pani Puri",
          description: "Crispy hollow puris filled with spicy potato mixture and tangy tamarind water",
          price: "$6.99",
          image: "/images/food_image_4.webp",
          isVegetarian: true,
          isSpicy: true,
        },
        {
          id: "food-image-5",
          name: "Bhel Puri",
          description: "Puffed rice, vegetables and tangy tamarind sauce",
          price: "$5.99",
          image: "/images/food_image_5.webp",
          isVegetarian: true,
        },
        {
          id: "pani-puri",
          name: "Pani Puri",
          description: "Crispy hollow puris filled with spicy potato mixture and tangy tamarind water",
          price: "$6.99",
          image: "/images/food_image_6.webp",
          isVegetarian: true,
          isSpicy: true,
        },
        {
          id: "bhel-puri",
          name: "Bhel Puri",
          description: "Puffed rice, vegetables and tangy tamarind sauce",
          price: "$5.99",
          image: "/images/food_image_7.webp",
          isVegetarian: true,
        },
        {
          id: "dahi-puri",
          name: "Dahi Puri",
          description: "Crispy puris topped with potatoes, yogurt, and chutneys",
          price: "$7.99",
          image: "/images/food_image_8.webp",
          isVegetarian: true,
        },
      ],
    },
    {
      id: "curries",
      name: "Curries",
      items: [
        {
          id: "butter-chicken",
          name: "Butter Chicken",
          description: "Tender chicken in a rich tomato and butter sauce",
          price: "$14.99",
          image: "/images/food_image_1.webp",
          isVegetarian: false,
        },
        {
          id: "paneer-tikka-masala",
          name: "Paneer Tikka Masala",
          description: "Cottage cheese cubes in a spiced tomato gravy",
          price: "$13.99",
          image: "/images/food_image_2.webp",
          isVegetarian: true,
          isSpicy: true,
        },
      ],
    },
    {
      id: "breads",
      name: "Breads",
      items: [
        {
          id: "naan",
          name: "Butter Naan",
          description: "Soft leavened flatbread brushed with butter",
          price: "$3.99",
          image: "/images/food_image_1.webp",
          isVegetarian: true,
        },
        {
          id: "roti",
          name: "Tandoori Roti",
          description: "Whole wheat flatbread baked in tandoor",
          price: "$2.99",
          image: "/images/food_image_2.webp",
          isVegetarian: true,
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
          isVegetarian: true,
        },
        {
          id: "rasmalai",
          name: "Rasmalai",
          description: "Soft cottage cheese patties in sweetened milk",
          price: "$5.99",
          image: "/images/food_image_2.webp",
          isVegetarian: true,
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

        {/* Menu Items - Horizontal Scrolling */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {currentCategory?.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg flex-shrink-0 snap-center hover:scale-125"
              style={{ width: '300px' }}
            >
              <div className="relative h-64 overflow-hidden rounded-t-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 bg-black"
                  sizes="300px"
                />
                {/* <div className="absolute top-2 right-2 flex space-x-2">
                  {item.isVegetarian && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Veg</span>
                  )}
                  {item.isSpicy && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Spicy</span>}
                </div> */}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-yellow-400 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
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
