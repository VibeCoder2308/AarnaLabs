
import { ParticleTextEffect } from './ui/particle-text-effect'

export function Footer() {
    return (
        <footer className="w-full bg-black py-16 z-50 relative pointer-events-auto border-t border-white/5" style={{ overflow: 'hidden' }}>
            {/* Particle text background */}
            <ParticleTextEffect words={["AARNA", "SYSTEMS", "AUTOMATION", "SOFTWARE", "LABS"]} />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 relative z-10">

                {/* Footer Brand */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-white text-2xl font-medium tracking-wider">AARNA LABS</span>
                    <span className="text-gray-500 text-sm tracking-widest">Intelligent Systems Studio</span>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="text-gray-600 text-xs tracking-widest uppercase">Design</span>
                        <span className="text-gray-700">·</span>
                        <span className="text-gray-600 text-xs tracking-widest uppercase">Software</span>
                        <span className="text-gray-700">·</span>
                        <span className="text-gray-600 text-xs tracking-widest uppercase">Automation</span>
                        <span className="text-gray-700">·</span>
                        <span className="text-gray-600 text-xs tracking-widest uppercase">Intelligence</span>
                    </div>
                    <a href="mailto:hello@aarnalabs.ai" className="text-gray-500 text-sm hover:text-white transition-colors mt-2">hello@aarnalabs.ai</a>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="w-full pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-[11px] uppercase tracking-[0.2em] font-medium">
                        © 2026 Aarna Labs
                    </p>
                    <div className="flex gap-x-8">
                        <a href="#" className="text-gray-600 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-medium">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-medium">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
