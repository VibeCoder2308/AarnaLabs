import React from 'react'
import ReactDOM from 'react-dom/client'
import { BeamsBackground } from './components/ui/beams-background'

ReactDOM.createRoot(document.getElementById('about-background-mount')!).render(
    <React.StrictMode>
        <BeamsBackground className="absolute inset-0 z-0" intensity="strong" />
    </React.StrictMode>
)
