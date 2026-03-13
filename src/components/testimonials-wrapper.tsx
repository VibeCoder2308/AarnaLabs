"use client";

import { TestimonialSlider } from "./ui/testimonial-slider";

export function TestimonialsWrapper() {
    const testimonials = [
        {
            img: "https://randomuser.me/api/portraits/men/91.jpg",
            quote: "Aarna Labs transformed our vision into a high-performance digital reality. Their AI implementation is state-of-the-art.",
            name: "Jessie J",
            role: "CEO @ Acme Technologies",
        },
        {
            img: "https://randomuser.me/api/portraits/women/12.jpg",
            quote: "The attention to detail in their UI/UX design is unparalleled. They don't just build apps; they build premium experiences.",
            name: "Nicki V",
            role: "Founder of Malika Creative",
        },
        {
            img: "https://randomuser.me/api/portraits/men/45.jpg",
            quote: "Implementing focus-driven workflows with their automation tools has saved our team hundreds of hours every month.",
            name: "Amelia W",
            role: "Product Lead @ Panda AI",
        },
    ];

    return (
        <div className="section-container py-24 flex flex-col items-center justify-center">
            <div className="text-center mb-16">
                <span className="section-tag mb-4 inline-block text-fuchsia-400 font-mono tracking-wider">AARNA VOICES</span>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                    Trusted by Industry Leaders
                </h2>
            </div>

            <TestimonialSlider testimonials={testimonials} />
        </div>
    );
}
