"use client"

import Image from "next/image"

export default function GallerySection2() {
  const galleryItems = [
    {
      id: 1,
      image: "/images/food_image_1.webp",
      alt: "Chaat Dish",
      shape: "diamond",
    },
    {
      id: 2,
      image: "/images/food_image_2.webp",
      alt: "Restaurant Interior",
      shape: "door",
    },
    {
      id: 3,
      image: "/images/food_image_3.webp",
      alt: "Spices",
      shape: "circle",
    },
    {
      id: 4,
      image: "/images/food_image_4.webp",
      alt: "Curry Dish",
      shape: "hexagon",
    },
    {
      id: 5,
      image: "/images/food_image_5.webp",
      alt: "Dessert",
      shape: "dome",
    },
    {
      id: 6,
      image: "/images/food_image_6.webp",
      alt: "Chef Cooking",
      shape: "rectangle",
    },
  ]
  const galleryItems2 = [
    {
      id: 1,
      image: "/images/food_image_1.webp",
      alt: "Chaat Dish",
      shape: "dome",
    },
    {
      id: 2,
      image: "/images/food_image_2.webp",
      alt: "Restaurant Interior",
      shape: "dome",
    },
    {
      id: 3,
      image: "/images/food_image_3.webp",
      alt: "Spices",
      shape: "dome",
    },
    {
      id: 4,
      image: "/images/food_image_4.webp",
      alt: "Curry Dish",
      shape: "dome",
    },
    {
      id: 5,
      image: "/images/food_image_5.webp",
      alt: "Dessert",
      shape: "dome",
    },
    {
      id: 6,
      image: "/images/food_image_6.webp",
      alt: "Chef Cooking",
      shape: "dome",
    },
  ]

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "diamond":
        return "rotate-45 overflow-hidden"
      case "door":
        return "rounded-t-[100px]"
      case "circle":
        return "rounded-full"
      case "hexagon":
        return "clip-path-hexagon"
      case "dome":
        return "rounded-t-full"
      case "rectangle":
      default:
        return "rounded-xl"
    }
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-yellow-400">Gallery</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A visual feast of our delicious dishes and vibrant atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems2.map((item) => (
            <div key={item.id} className="gallery-item group">
              <div 
                className={`relative aspect-square overflow-hidden ${getShapeClass(item.shape)} transition-all duration-500 shadow-lg`}
              >
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-125">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className={`object-cover transition-all duration-500 ${item.shape === "diamond" ? "-rotate-45 scale-[1.5]" : ""}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-medium">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .clip-path-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </section>
  )
}