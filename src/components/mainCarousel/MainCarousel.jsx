'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    title: "Flat 20% Off on Top Mobile Brands",
    description: "Discover amazing Offers that will amaze you mind.",
    image: "https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    bgColor: "bg-blue-100",
  },
  {
    title: "Innovative Solutions",
    description: "We provide cutting-edge solutions to meet your business needs.",
    image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-realistic-models-smartphone-mockup-collection-device-front-view-3d-mobile-phone-png-image_5857101.jpg",
    bgColor: "bg-green-100",
  },
  {
    title: "Expert Support",
    description: "Our team of experts is always ready to assist you.",
    image: "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png",
    bgColor: "bg-purple-100",
  },
]

export default function ResponsiveMainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setDirection(-1)
    setCurrentIndex(newIndex)
  }

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setDirection(1)
    setCurrentIndex(newIndex)
  }, [currentIndex])

  const goToSlide = (slideIndex) => {
    setDirection(slideIndex > currentIndex ? 1 : -1)
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000) // Change slide every 5 seconds
    return () => clearInterval(slideInterval)
  }, [goToNext])

  return (
    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-lg">
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${slides[currentIndex].bgColor}`}
        style={{ transform: `translateX(${-direction * 100}%)` }}
      ></div>
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${slides[(currentIndex + 1) % slides.length].bgColor}`}
        style={{ transform: `translateX(${(1 - direction) * 100}%)` }}
      ></div>
      
      <div className="relative w-full h-full flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex">
            <div className="w-2/3 sm:w-3/5 md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-sm sm:text-lg md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: currentIndex === index ? 1 : 0 }}>
                {slide.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base transition-opacity duration-500 ease-in-out"
                 style={{ opacity: currentIndex === index ? 1 : 0 }}>
                {slide.description}
              </p>
            </div>
            <div className="w-1/3 sm:w-2/5 md:w-1/2 flex items-center justify-center">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="max-w-full max-h-full object-contain transition-opacity duration-500 ease-in-out"
                style={{ opacity: currentIndex === index ? 1 : 0 }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-black w-4' : 'bg-black/50'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}