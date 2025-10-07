import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
    const location = useLocation()

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-blue-600">
                            GrowthOpportunity
                        </Link>
                    </div>
                    <div className="flex space-x-8">
                        <Link
                            to="/"
                            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${location.pathname === '/'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/positions"
                            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${location.pathname.startsWith('/positions')
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            Positions
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
