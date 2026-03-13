"use client";

import { CardSpotlight } from "./ui/card-spotlight";
import { Globe, Smartphone, Zap, Brain, Video, Image as ImageIcon, Mic } from "lucide-react";

const services = [
    {
        title: "Websites",
        description: "High-performance, premium web experiences tailored for modern brands.",
        icon: <Globe className="w-8 h-8 text-blue-500" />,
    },
    {
        title: "Mobile Apps",
        description: "Sleek, intuitive mobile applications built for iOS and Android.",
        icon: <Smartphone className="w-8 h-8 text-purple-500" />,
    },
    {
        title: "Automations",
        description: "Streamlining workflows with intelligent, reliable automation systems.",
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
    },
    {
        title: "AI Content Creation",
        description: "Generating high-quality text and copy using advanced neural models.",
        icon: <Brain className="w-8 h-8 text-emerald-500" />,
    },
    {
        title: "Video Generation",
        description: "Creating cinematic and commercial video content through AI vision.",
        icon: <Video className="w-8 h-8 text-red-500" />,
    },
    {
        title: "Image Generation",
        description: "Stunning visual assets and illustrations generated with precision.",
        icon: <ImageIcon className="w-8 h-8 text-cyan-500" />,
    },
    {
        title: "Voice/Audio Generation",
        description: "Natural, expressive vocal synthesis and original audio soundscapes.",
        icon: <Mic className="w-8 h-8 text-rose-500" />,
    },
];

export function ServicesGrid() {
    return (
        <div className="section-container py-20">
            <div className="text-center mb-16">
                <span className="section-tag mb-4 inline-block text-blue-400 font-mono tracking-wider">OUR CAPABILITIES</span>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                    Services We Provide
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {services.map((service, index) => (
                    <CardSpotlight key={index} className="flex flex-col h-full">
                        <div className="mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 font-display">
                            {service.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </CardSpotlight>
                ))}
            </div>
        </div>
    );
}
