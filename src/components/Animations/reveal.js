'use client'

import React, { useEffect, useRef, useState } from 'react';

const RevealComp = ({ children, threshold, duration, delay, x, y }) => {
    x = x || 0;
    y = y || 0;
    const ref = useRef(null);
    const [intersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (ref.current) {
            const intersectionObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setIntersecting(true);
                } else {
                    setIntersecting(false);
                }
            }, {
                threshold
            });

            intersectionObserver.observe(ref.current);

            return () => {
                if (ref.current) {
                    intersectionObserver.unobserve(ref.current);
                }
            };
        }
    }, [threshold]);

    return (
        <div
            style={{
                transitionDuration: duration,
                transitionDelay: delay,
                transform: !intersecting ? `translate(${x}px, ${y}px)` : "translate(0px, 0px)"
            }}
            className={`transition ${intersecting ? "opacity-100" : "opacity-0"}`}
            ref={ref}
        >
            {children}
        </div>
    );
};

export default RevealComp;
