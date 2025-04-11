"use client"

import { useState } from "react"
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
  isVegetarian?: boolean
  isSpicy?: boolean
  isRecommended?: boolean
}

export default function MenuDisplay() {
  const [selectedCategory, setSelectedCategory] = useState<string>("starters")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const menuCategories: MenuCategory[] = [
    {
      id: "starters",
      name: "Starters",
      items: [
        {
          id: "samosa",
          name: "Samosa",
          description: "Crispy pastry filled with spiced potatoes and peas",
          price: "$5.99",
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
          isRecommended: true,
        },
        {
          id: "pakora",
          name: "Vegetable Pakora",
          description: "Assorted vegetables dipped in chickpea batter and deep fried",
          price: "$6.99",
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
        },
        {
          id: "tikka",
          name: "Chicken Tikka",
          description: "Boneless chicken marinated in spices and yogurt, cooked in tandoor",
          price: "$9.99",
          image: "/placeholder.svg?height=300&width=300",
          isSpicy: true,
        },
        {
          id: "paneer-tikka",
          name: "Paneer Tikka",
          description: "Cottage cheese cubes marinated in spices and yogurt, cooked in tandoor",
          price: "$8.99",
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
          isRecommended: true,
        },
      ],
    },
    {
      id: "main-course",
      name: "Main Course",
      items: [
        {
          id: "butter-chicken",
          name: "Butter Chicken",
          description: "Tender chicken in a rich tomato and butter sauce",
          price: "$14.99",
          image: "/placeholder.svg?height=300&width=300",
          isRecommended: true,
        },
        {
          id: "paneer-butter-masala",
          name: "Paneer Butter Masala",
          description: "Cottage cheese cubes in a rich tomato and butter sauce",
          price: "$13.99",
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
        },
        {
          id: "biryani",
          name: "Chicken Biryani",
          description: "Fragrant basmati rice cooked with chicken and aromatic spices",
          price: "$15.99",
          image: "/placeholder.svg?height=300&width=300",
          isSpicy: true,
        },
        {
          id: "dal-makhani",
          name: "Dal Makhani",
          description: "Black lentils and kidney beans slow cooked with cream and butter",
          price: "$11.99",
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
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
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
        },
        {
          id: "garlic-naan",
          name: "Garlic Naan",
          description: "Soft leavened flatbread topped with garlic and butter",
          price: "$4.99",
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
          isRecommended: true,
        },
        {
          id: "roti",
          name: "Tandoori Roti",
          description: "Whole wheat flatbread baked in tandoor",
          price: "$2.99",
          image: "/placeholder.svg?height=300&width=300",
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
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
          isRecommended: true,
        },
        {
          id: "rasmalai",
          name: "Rasmalai",
          description: "Soft cottage cheese patties in sweetened milk",
          price: "$5.99",
          image: "/placeholder.svg?height=300&width=300",
          isVegetarian: true,
        },
        {
          id: "kheer",
          name: "Rice Kheer",
          description: "Rice pudding flavored with cardamom and garnished with nuts",
          price: "$4.99",
          image: "/placeholder.svg?height=300&width=300",
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
    <section className="py-20 bg-black" id="menu">
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

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentCategory?.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg flex"
            >
              <div className="relative w-1/3 min-h-[180px]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute top-2 left-2 flex flex-col space-y-1">
                  {item.isVegetarian && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Veg</span>
                  )}
                  {item.isSpicy && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Spicy</span>}
                  {item.isRecommended && (
                    <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">Chef's Choice</span>
                  )}
                </div>
              </div>
              <div className="p-4 flex-1">
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
    </section>
  )
}
