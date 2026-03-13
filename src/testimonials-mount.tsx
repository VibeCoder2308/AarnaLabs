import React from 'react'
import ReactDOM from 'react-dom/client'
import { TestimonialsWrapper } from './components/testimonials-wrapper'

const mountPoint = document.getElementById('testimonials');
if (mountPoint) {
    ReactDOM.createRoot(mountPoint).render(
        <React.StrictMode>
            <TestimonialsWrapper />
        </React.StrictMode>
    )
}
