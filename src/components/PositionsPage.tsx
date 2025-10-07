import React from 'react'
import { Link } from 'react-router-dom'

// Job position data
const jobPositions = [
    {
        id: 'blockchain-developer',
        title: '🔗 Blockchain / Smart Contract Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'If you geek out on blockchain, smart contracts, and building cool stuff on the blockchain, we want you! Join our tech team to bring innovative blockchain solutions to life.',
        url: '/positions/blockchain-developer'
    },
    {
        id: 'web-designer',
        title: '🎨 Web Designer',
        department: 'Design',
        location: 'Remote',
        type: 'Full-time',
        description: 'If design is your thing and you love making websites both pretty and easy to use, this role\'s for you! Create beautiful, user-friendly web interfaces that users will love.',
        url: '/positions/web-designer'
    },
    {
        id: 'marketing-va',
        title: '🚀 Marketing VA (Fully Remote)',
        department: 'Marketing',
        location: 'Remote',
        type: 'Full-time',
        description: 'DTF Collective is on the lookout for a creative and reliable Marketing VA to join our awesome remote team! If you\'ve got experience in video editing, paid ads, social media marketing, or copywriting, we\'d love to meet you!',
        url: '/positions/marketing-va'
    },
    {
        id: 'flight-va',
        title: '✈️ Flight VA (Virtual Assistant)',
        department: 'Operations',
        location: 'Remote',
        type: 'Full-time',
        description: 'If you enjoy organizing and helping people with their travel, this could be a great fit! Join our team to help clients with their flight bookings and travel needs.',
        url: '/positions/flight-va'
    }
]

const PositionsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h1>
                    <p className="text-xl text-gray-600">Find your next career opportunity with us</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobPositions.map((position) => (
                        <div key={position.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{position.title}</h2>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        {position.department}
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                        {position.location}
                                    </span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                        {position.type}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-6 line-clamp-3">{position.description}</p>

                                <Link
                                    to={position.url}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                                >
                                    View Details & Apply
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PositionsPage
