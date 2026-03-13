import React from 'react'
import ReactDOM from 'react-dom/client'
import { ServicesGrid } from './components/services-grid'

const mountPoint = document.getElementById('services-content-mount');
if (mountPoint) {
    ReactDOM.createRoot(mountPoint).render(
        <React.StrictMode>
            <ServicesGrid />
        </React.StrictMode>
    )
}
