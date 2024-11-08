import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Product = () => {
  const discountedPrice = Math.abs(15 * (1 - 1500 / 100))

  return (
    <Card className="overflow-hidden w-3/4 sm:w-48 md:w-60 transition-all duration-300">
      <div className="relative aspect-square">
        <img
          src="https://www.jiomart.com/images/product/original/494352580/poco-c65-256-gb-8-gb-ram-mobile-phone-green-digital-o494352580-p608241590-0-202402282049.jpeg?im=Resize=(420,420)"
          alt="POCO C65 Mobile Phone"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-red-500 text-white">
          {15} % OFF
        </Badge>
      </div>
      <CardContent className="p-2 sm:p-4">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 truncate">POCO C65 256 GB, 8 GB RAM, Mobile Phone, Green</h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="text-lg sm:text-xl font-bold text-primary">₹ {discountedPrice.toFixed(2)}</span>
            <span className="text-xs sm:text-sm text-gray-500 line-through sm:ml-2">₹ {1500}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 sm:p-4 pt-0 flex justify-between">
        <Button className="flex-1 mr-2 text-xs sm:text-sm" size="sm">
          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          View Now
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Product