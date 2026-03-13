import React from 'react'
import ReactDOM from 'react-dom/client'
import { AboutCards } from './components/about-cards'

const mountPoint = document.getElementById('about-cards-mount');
if (mountPoint) {
    ReactDOM.createRoot(mountPoint).render(
        <React.StrictMode>
            <AboutCards />
        </React.StrictMode>
    )
}
