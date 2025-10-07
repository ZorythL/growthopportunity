import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import PositionsPage from './components/PositionsPage'
import JobDetailPage from './components/JobDetailPage'

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/positions" element={<PositionsPage />} />
                        <Route path="/positions/:id" element={<JobDetailPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App