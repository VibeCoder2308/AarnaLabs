"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";

interface Testimonial {
    img: string;
    quote: string;
    name: string;
    role: string;
}

export const TestimonialSlider = ({
    testimonials,
}: {
    testimonials: Testimonial[];
}) => {
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<number>(0);
    const [autorotate, setAutorotate] = useState<boolean>(true);
    const autorotateTiming: number = 7000;

    useEffect(() => {
        if (!autorotate) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
        }, autorotateTiming);
        return () => clearInterval(interval);
    }, [active, autorotate, testimonials.length]);

    const heightFix = () => {
        if (testimonialsRef.current && testimonialsRef.current.parentElement) {
            testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
        }
    };

    useEffect(() => {
        heightFix();
    }, []);

    return (
        <div className="mx-auto w-full max-w-4xl text-center px-4">
            {/* Testimonial Image */}
            <div className="relative h-32 mb-8">
                <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-fuchsia-500/20 before:via-fuchsia-500/5 before:via-25% before:to-transparent before:to-75%">
                    <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                        {testimonials.map((testimonial, index) => (
                            <Transition
                                as="div"
                                key={index}
                                show={active === index}
                                className="absolute inset-0 -z-10 h-full"
                                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                                enterFrom="opacity-0 -rotate-[60deg]"
                                enterTo="opacity-100 rotate-0"
                                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                                leaveFrom="opacity-100 rotate-0"
                                leaveTo="opacity-0 rotate-[60deg]"
                                beforeEnter={() => heightFix()}
                            >
                                <img
                                    className="relative left-1/2 top-11 -translate-x-1/2 rounded-full border-2 border-fuchsia-500/30 p-1 bg-black/50"
                                    src={testimonial.img}
                                    width={64}
                                    height={64}
                                    alt={testimonial.name}
                                />
                            </Transition>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mb-12 transition-all delay-300 duration-150 ease-in-out">
                <div className="relative flex flex-col min-h-[120px] justify-center" ref={testimonialsRef}>
                    {testimonials.map((testimonial, index) => (
                        <Transition
                            key={index}
                            show={active === index}
                            enter="transition ease-in-out duration-500 delay-200 order-first"
                            enterFrom="opacity-0 -translate-x-4"
                            enterTo="opacity-100 translate-x-0"
                            leave="transition ease-out duration-300 absolute w-full"
                            leaveFrom="opacity-100 translate-x-0"
                            leaveTo="opacity-0 translate-x-4"
                            beforeEnter={() => heightFix()}
                        >
                            <div className="text-2xl md:text-3xl font-medium text-white font-display leading-tight italic">
                                <span className="text-fuchsia-500 text-4xl mr-1">“</span>
                                {testimonial.quote}
                                <span className="text-fuchsia-500 text-4xl ml-1">”</span>
                            </div>
                        </Transition>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
                {testimonials.map((testimonial, index) => (
                    <button
                        key={index}
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 ${active === index
                                ? "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25"
                                : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        onClick={() => {
                            setActive(index);
                            setAutorotate(false);
                        }}
                    >
                        <span className="font-bold">{testimonial.name}</span>
                        <span className="mx-2 opacity-30">|</span>
                        <span className="text-xs opacity-70 uppercase tracking-wider font-mono lowercase">
                            {testimonial.role}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};
