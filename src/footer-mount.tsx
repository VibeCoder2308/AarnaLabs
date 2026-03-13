import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './components/footer'

const mountPoint = document.getElementById('footer-mount');
if (mountPoint) {
    ReactDOM.createRoot(mountPoint).render(
        <React.StrictMode>
            <Footer />
        </React.StrictMode>
    )
}
