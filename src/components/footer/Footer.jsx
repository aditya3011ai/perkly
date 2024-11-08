import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 px-8 ">
      <div className="mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-4 sm:mb-0">&copy; 2024 Your E-commerce Store. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              Facebook
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              Twitter
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              Instagram
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              YouTube
            </Link>
            <Link href="mailto:info@yourecommerce.com" className="text-gray-600">
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer