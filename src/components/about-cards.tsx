"use client";

import React from "react";
import { Zap, Layers, ShieldCheck, Rocket } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const cards = [
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Innovation",
        description: "We push the boundaries of what's possible, exploring the bleeding edge of AI to deliver truly unique and competitive advantages.",
    },
    {
        icon: <Layers className="h-6 w-6" />,
        title: "Scalability",
        description: "Our systems are built to grow. Whether you're a startup or an enterprise, our infrastructure adapts to your expanding needs seamlessly.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Security",
        description: "Enterprise-grade safety is woven into our DNA. We prioritize data integrity and privacy at every layer of the AI development cycle.",
    },
    {
        icon: <Rocket className="h-6 w-6" />,
        title: "Execution",
        description: "Speed meets strategy. We translate complex AI concepts into high-performance, real-world applications that deliver immediate value.",
    },
];

export function AboutCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full px-4 md:px-0">
            {cards.map((card, index) => (
                <AboutCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
}

interface AboutCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function AboutCard({ icon, title, description }: AboutCardProps) {
    return (
        <div className="relative h-full min-h-[16rem] list-none">
            <div className="relative h-full rounded-[1.5rem] p-0.5">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[1.4rem] bg-[#080808] p-8 transition-all hover:bg-[#0a0a0a]">
                    <div className="relative flex flex-1 flex-col justify-between gap-6">
                        <div className="w-fit rounded-xl bg-orange-500/10 p-3 text-[#FF7722] hover-icon transition-all duration-300">
                            {icon}
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-medium tracking-tight text-white font-serif">
                                {title}
                            </h3>
                            <p className="text-base leading-relaxed text-[#9CA3AF]">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
