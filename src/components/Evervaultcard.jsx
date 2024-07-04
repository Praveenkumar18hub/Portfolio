import React from 'react';
import { useMotionValue } from 'framer-motion';
import { motion, useMotionTemplate } from 'framer-motion';

export const EvervaultCard = ({ text, icon }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
    // const style = { maskImage, WebkitMaskImage: maskImage };

    return (
       <div className="bg-transparent aspect-square flex items-center justify-center w-full h-full relative">
            <div
                onMouseMove={onMouseMove}
                className="group/card relative flex size-full items-center justify-center overflow-hidden bg-transparent"
            >
                <div className="relative z-10 flex items-center justify-center">
                    <div className="relative flex flex-col items-center justify-center rounded-full text-2xl font-bold text-[#13c8c6] ">
                        <div className="relative size-full text-[#13c8c6]  blur-sm dark:bg-black/[0.8]" />
                        <span className="z-20 whitespace-nowrap dark:text-white">{text}</span>
                        <span className="z-20  mt-3 whitespace-nowrap text-[#13c8c6] text-4xl">{icon}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Icon = ({ className, ...rest }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
    );
};
