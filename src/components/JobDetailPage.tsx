import React from 'react'
import { Link, useParams } from 'react-router-dom'

// Job position data
const jobPositions = [
    {
        id: 'blockchain-developer',
        title: '🔗 Blockchain / Smart Contract Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'If you geek out on blockchain, smart contracts, and building cool stuff on the blockchain, we want you! Join our tech team to bring innovative blockchain solutions to life.',
        requirements: [
            'Build and deploy smart contracts',
            'Ensure everything is secure, fast, and scalable',
            'Work with the tech team to bring ideas to life',
            'Keep up with the latest blockchain trends',
            'Experience with Solidity, Ethereum, or similar platforms',
            'Strong knowledge of blockchain tools and architecture',
            'Skills in testing, debugging, and deploying contracts',
            'A problem-solving mindset and eye for detail'
        ],
        benefits: [
            '100% remote work setup',
            'Flexible schedule',
            'Creative, innovative projects',
            'A chance to grow and glow with us!',
            'Latest blockchain technology exposure'
        ],
        applicationEmail: 'hr@dtfcollective.com',
        emailSubject: 'Blockchain/Smart Contract Developer Applicant',
        resumeFormat: 'Your Name_Blockchain Developer',
        url: '/positions/blockchain-developer'
    },
    {
        id: 'web-designer',
        title: '🎨 Web Designer',
        department: 'Design',
        location: 'Remote',
        type: 'Full-time',
        description: 'If design is your thing and you love making websites both pretty and easy to use, this role\'s for you! Create beautiful, user-friendly web interfaces that users will love.',
        requirements: [
            'Design clean, user-friendly web interfaces',
            'Create wireframes, mockups, and prototypes',
            'Ensure everything looks great on desktop & mobile',
            'Work with our dev team to turn designs into reality',
            'Stay updated on design trends and best practices',
            'Experience as a Web Designer (portfolio required)',
            'Skills in Figma, Adobe XD, Sketch, or similar tools',
            'A good eye for layout, colors, and typography',
            'Bonus points if you know HTML/CSS',
            'Team player with good communication skills'
        ],
        benefits: [
            '100% remote work setup',
            'Flexible schedule',
            'Creative, innovative projects',
            'A chance to grow and glow with us!',
            'Creative freedom and design ownership'
        ],
        applicationEmail: 'hr@dtfcollective.com',
        emailSubject: 'Web Designer Applicant',
        resumeFormat: 'Your Name_Web Designer',
        url: '/positions/web-designer'
    },
    {
        id: 'marketing-va',
        title: '🚀 Marketing VA (Fully Remote)',
        department: 'Marketing',
        location: 'Remote',
        type: 'Full-time',
        description: 'DTF Collective is on the lookout for a creative and reliable Marketing VA to join our awesome remote team! If you\'ve got experience in video editing, paid ads, social media marketing, or copywriting, we\'d love to meet you!',
        requirements: [
            'Experience in at least one of the following areas:',
            '🎬 Video Editing - Create engaging video content',
            '📢 Paid Ads - Manage campaigns on IG, Facebook, Twitter, TikTok, YouTube, or Google',
            '📱 Social Media Marketing - Build and grow social media presence',
            '✍️ Copywriting - Write compelling marketing copy',
            'Creative and reliable work approach',
            'Team player with good communication skills',
            'Ability to work independently in a remote environment',
            'Passion for marketing and growth'
        ],
        benefits: [
            '100% remote work setup',
            'Flexible schedule',
            'Creative, innovative projects',
            'A chance to grow and glow with us!',
            'Work with an awesome remote team',
            'Opportunity to work on diverse marketing projects'
        ],
        applicationEmail: 'hr@dtfcollective.com',
        emailSubject: 'Marketing VA Applicant',
        resumeFormat: 'Your Name_Marketing VA',
        url: '/positions/marketing-va'
    },
    {
        id: 'flight-va',
        title: '✈️ Flight VA (Virtual Assistant)',
        department: 'Operations',
        location: 'Remote',
        type: 'Full-time',
        description: 'If you enjoy organizing and helping people with their travel, this could be a great fit! Join our team to help clients with their flight bookings and travel needs.',
        requirements: [
            'Book, change, or cancel flights for clients',
            'Help clients with questions and concerns',
            'Keep records neat and updated',
            'Work with the team to ensure bookings run smoothly',
            'Learn more about flights & travel while on the job',
            'Good communication skills',
            'Organized and detail-oriented',
            'Team player with a positive attitude'
        ],
        benefits: [
            'Fully remote work',
            'Learn about travel industry',
            'Flexible working hours',
            'Growth opportunities',
            'Positive team environment'
        ],
        applicationEmail: 'hr@dtfcollective.com',
        emailSubject: 'General VA (Flights) Applicant',
        resumeFormat: 'Your Name_General VA (Flights)',
        url: '/positions/flight-va'
    }
]

const JobDetailPage = () => {
    const { id } = useParams<{ id: string }>()
    const position = jobPositions.find(job => job.id === id)

    if (!position) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Position Not Found</h1>
                        <p className="text-xl text-gray-600 mb-8">The job position you're looking for doesn't exist.</p>
                        <Link
                            to="/positions"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            View All Positions
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/positions"
                    className="mb-8 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2 w-fit"
                >
                    <span>←</span> Back to Positions
                </Link>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Job Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                        <h1 className="text-4xl font-bold mb-4">{position.title}</h1>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                                {position.department}
                            </span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                                {position.location}
                            </span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                                {position.type}
                            </span>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Job Description */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                            <p className="text-gray-700 leading-relaxed">{position.description}</p>
                        </section>

                        {/* Requirements */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                            <ul className="space-y-3">
                                {position.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span className="text-gray-700">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Benefits */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
                            <ul className="space-y-3">
                                {position.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Application Info */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Apply</h3>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Send your resume to:</strong> {position.applicationEmail}</p>
                                <p><strong>Email Subject:</strong> {position.emailSubject}</p>
                                <p><strong>Resume File Name Format:</strong> {position.resumeFormat}</p>
                                {position.id === 'web-designer' && (
                                    <p className="text-blue-600 font-medium"><strong>Note:</strong> Please include your portfolio with your application</p>
                                )}
                            </div>
                        </div>

                        {/* Apply Button */}
                        <div className="text-center">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Apply for this Position
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetailPage
