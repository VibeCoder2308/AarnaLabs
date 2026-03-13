import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShootingStars } from './components/ui/shooting-stars'

const mountPoint = document.getElementById('contact-background-mount');
if (mountPoint) {
    ReactDOM.createRoot(mountPoint).render(
        <React.StrictMode>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Subtle star field */}
                <div className="absolute inset-0 stars-bg" />
                {/* Radial glow */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,119,34,0.06) 0%, rgba(0,0,0,0) 70%)' }} />
                {/* Shooting star layers */}
                <ShootingStars
                    starColor="#FF7722"
                    trailColor="#FF5500"
                    starWidth={50}
                    starHeight={3}
                    minSpeed={15}
                    maxSpeed={35}
                    minDelay={800}
                    maxDelay={2500}
                />
                <ShootingStars
                    starColor="#FF9944"
                    trailColor="#FFB800"
                    starWidth={40}
                    starHeight={2}
                    minSpeed={10}
                    maxSpeed={25}
                    minDelay={1500}
                    maxDelay={3500}
                />
                <ShootingStars
                    starColor="#FFFFFF"
                    trailColor="#AAAAAA"
                    starWidth={35}
                    starHeight={2}
                    minSpeed={20}
                    maxSpeed={40}
                    minDelay={1200}
                    maxDelay={3000}
                />
            </div>
        </React.StrictMode>
    )
}
