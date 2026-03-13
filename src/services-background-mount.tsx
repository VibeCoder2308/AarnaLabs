import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShaderAnimation } from './components/ui/shader-animation'

const mountPoint = document.getElementById('services-background-mount');
if (mountPoint) {
    ReactDOM.createRoot(mountPoint).render(
        <React.StrictMode>
            <ShaderAnimation />
        </React.StrictMode>
    )
}
