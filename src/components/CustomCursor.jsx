import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const dotRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 1024;
        if (isMobile) return;

        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instantly move center dot
            if (dotRef.current) {
                gsap.set(dotRef.current, { x: mouseX, y: mouseY });
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        // Animate the glow circle using ticker for smooth interpolation
        const tickerCallback = () => {
            const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
            glowX += (mouseX - glowX) * dt;
            glowY += (mouseY - glowY) * dt;
            if (glowRef.current) {
                gsap.set(glowRef.current, { x: glowX, y: glowY });
            }
        };

        gsap.ticker.add(tickerCallback);

        // Set up mouseenter/mouseleave hover class overrides
        const setupHovers = () => {
            const interactiveElements = document.querySelectorAll(
                "a, button, .btn, .parallax-card, .service-block-card, .bento-card, .faq-trigger"
            );
            
            interactiveElements.forEach((el) => {
                const onEnter = () => {
                    document.body.classList.add("hover-interactive");
                    if (el.classList.contains("bento-card") || el.classList.contains("parallax-card")) {
                        document.body.classList.add("hover-card-link");
                    }
                };
                
                const onLeave = () => {
                    document.body.classList.remove("hover-interactive");
                    document.body.classList.remove("hover-card-link");
                };

                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
            });
        };

        // Delay setup slightly to allow full DOM mount
        const timeoutId = setTimeout(setupHovers, 1500);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            gsap.ticker.remove(tickerCallback);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="custom-cursor">
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={glowRef} className="cursor-glow"></div>
            <div className="cursor-text">VIEW</div>
        </div>
    );
}
