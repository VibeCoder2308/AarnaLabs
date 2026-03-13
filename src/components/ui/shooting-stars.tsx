"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useId } from "react";

interface ShootingStar {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

interface ShootingStarsProps {
    minSpeed?: number;
    maxSpeed?: number;
    minDelay?: number;
    maxDelay?: number;
    starColor?: string;
    trailColor?: string;
    starWidth?: number;
    starHeight?: number;
    className?: string;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
    minSpeed = 10,
    maxSpeed = 30,
    minDelay = 1200,
    maxDelay = 4200,
    starColor = "#9E00FF",
    trailColor = "#2EB9DF",
    starWidth = 30,
    starHeight = 2,
    className,
}) => {
    const [star, setStar] = useState<ShootingStar | null>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const gradientId = useId().replace(/:/g, "_");

    const getRandomStartPoint = () => {
        const svg = svgRef.current;
        const w = svg ? svg.clientWidth : window.innerWidth;
        const h = svg ? svg.clientHeight : window.innerHeight;
        const side = Math.floor(Math.random() * 4);
        const offset = Math.random() * Math.max(w, h);

        switch (side) {
            case 0:
                return { x: offset, y: 0, angle: 45 };
            case 1:
                return { x: w, y: offset, angle: 135 };
            case 2:
                return { x: offset, y: h, angle: 225 };
            case 3:
                return { x: 0, y: offset, angle: 315 };
            default:
                return { x: 0, y: 0, angle: 45 };
        }
    };

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const createStar = () => {
            const { x, y, angle } = getRandomStartPoint();
            const newStar: ShootingStar = {
                id: Date.now(),
                x,
                y,
                angle,
                scale: 1,
                speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                distance: 0,
            };
            setStar(newStar);

            const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
            timeoutId = setTimeout(createStar, randomDelay);
        };

        createStar();

        return () => clearTimeout(timeoutId);
    }, [minSpeed, maxSpeed, minDelay, maxDelay]);

    useEffect(() => {
        const moveStar = () => {
            if (star) {
                setStar((prevStar) => {
                    if (!prevStar) return null;
                    const newX =
                        prevStar.x +
                        prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
                    const newY =
                        prevStar.y +
                        prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
                    const newDistance = prevStar.distance + prevStar.speed;
                    const newScale = 1 + newDistance / 100;

                    const svg = svgRef.current;
                    const w = svg ? svg.clientWidth : window.innerWidth;
                    const h = svg ? svg.clientHeight : window.innerHeight;

                    if (
                        newX < -100 ||
                        newX > w + 100 ||
                        newY < -100 ||
                        newY > h + 100
                    ) {
                        return null;
                    }
                    return {
                        ...prevStar,
                        x: newX,
                        y: newY,
                        distance: newDistance,
                        scale: newScale,
                    };
                });
            }
        };

        const animationFrame = requestAnimationFrame(moveStar);
        return () => cancelAnimationFrame(animationFrame);
    }, [star]);

    return (
        <svg
            ref={svgRef}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
            {star && (
                <rect
                    key={star.id}
                    x={star.x}
                    y={star.y}
                    width={starWidth * star.scale}
                    height={starHeight}
                    fill={`url(#${gradientId})`}
                    transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2
                        }, ${star.y + starHeight / 2})`}
                />
            )}
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
                    <stop
                        offset="100%"
                        style={{ stopColor: starColor, stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};
