import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const SectionHeading = ({category}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
    <h2 className="text-2xl font-bold">{category}</h2>
    <Link 
      href="/mobiles"
      className="text-primary hover:underline flex items-center text-sm font-medium"
    >
      View All
      <ChevronRight className="ml-1 h-4 w-4" />
      <span className="sr-only">View all Mobiles</span>
    </Link>
  </div>
  )
}

export default SectionHeading