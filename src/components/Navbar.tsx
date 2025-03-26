import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-semibold text-primary-600">
            Therapist Worksheets
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Home
            </Link>
            <Link to="/worksheets" className="text-gray-600 hover:text-primary-600">
              Worksheets
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 