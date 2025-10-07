import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            GrowthOpportunity
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 text-blue-100">
                            Join our team and grow with us
                        </p>
                        <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-200">
                            We're looking for talented individuals to join our growing team.
                            Explore our open positions and find your next career opportunity.
                        </p>
                        <Link
                            to="/positions"
                            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            View Open Positions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Join GrowthOpportunity?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover what makes us a great place to work and grow your career
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                            <p className="text-gray-600">Advance your career with clear growth paths and learning opportunities.</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300">
                            <div className="text-4xl mb-4">💻</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Tech Stack</h3>
                            <p className="text-gray-600">Work with cutting-edge technologies and best practices.</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Work</h3>
                            <p className="text-gray-600">Remote and hybrid work options to fit your lifestyle.</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-all duration-300">
                            <div className="text-4xl mb-4">👥</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Great Team</h3>
                            <p className="text-gray-600">Collaborate with talented and passionate professionals.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
