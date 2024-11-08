'use client'

import { useState } from 'react'
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
// import Image from 'next/legacy/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

// This would typically come from an API or database based on the product ID
const product = {
  id: 1,
  name: 'Premium Wireless Earbuds',
  description: 'Experience crystal-clear sound with our premium wireless earbuds. Featuring advanced noise cancellation technology, these earbuds deliver an immersive audio experience whether youre commuting, working out, or relaxing at home.',
  price: 199,
  discount: 20,
  images: [
    'https://m.media-amazon.com/images/I/71oKDybKyHL._SY450_.jpg',
    'https://m.media-amazon.com/images/I/71FvvlyAMJL.jpg',
  ],
}

export default function ProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const discountedPrice = product.price * (1 - product.discount / 100)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="container mx-auto py-8 px-2  ">
      <div className="grid md:grid-cols-2 gap-8 my-8">
        <Card className="relative overflow-hidden ">
          <CardContent className="p-0 w-96 mx-auto">
            <div className="relative">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {product.images.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <span className="sr-only">Go to image {index + 1}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col justify-evenly">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
          </div>
          <div>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold mr-2 text-primary">${discountedPrice.toFixed(2)}</span>
              <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
              <Badge variant="secondary" className="ml-2 text-primary">
                {product.discount}% OFF
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now
              </Button>
              <Button variant="outline" className="flex-1">
                <Heart className="w-4 h-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}