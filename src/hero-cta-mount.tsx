import React from 'react'
import ReactDOM from 'react-dom/client'
import { ArrowRight } from 'lucide-react'

function HeroCTA() {
    return (
        <div className="hero-cta-group">
            <a href="#services" className="hero-cta-primary">
                Explore Services
                <ArrowRight className="hero-cta-icon" />
            </a>
            <a href="#contact" className="hero-cta-secondary">
                Book a Call
            </a>
        </div>
    )
}

export default HeroCTA

const mountPoint = document.getElementById('hero-cta-container');
if (mountPoint) {
    ReactDOM.createRoot(mountPoint).render(
        <React.StrictMode>
            <HeroCTA />
        </React.StrictMode>
    )
}
