import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FinalCTA() {
    const containerRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 1024;
        const container = containerRef.current;
        if (!container) return;

        const particleCount = isMobile ? 12 : 30;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "floating-particle";
            
            const size = Math.random() * 4 + 2;
            particle.style.position = "absolute";
            particle.style.width = size + "px";
            particle.style.height = size + "px";
            particle.style.backgroundColor = Math.random() > 0.5 ? "#ff5500" : "#ffffff";
            particle.style.borderRadius = "50%";
            particle.style.opacity = Math.random() * 0.4 + 0.1;
            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";
            
            container.appendChild(particle);
            particles.push(particle);

            gsap.to(particle, {
                y: -100 - Math.random() * 150,
                x: (Math.random() - 0.5) * 80,
                opacity: 0,
                duration: 4 + Math.random() * 6,
                repeat: -1,
                ease: "none",
                delay: Math.random() * 5
            });
        }

        return () => {
            particles.forEach((p) => p.remove());
        };
    }, []);

    return (
        <section className="bg-bg-black py-44 px-[6%] text-center flex justify-center items-center relative overflow-hidden" id="contact">
            <div ref={containerRef} className="absolute inset-0 pointer-events-none"></div>
            <div className="cta-glowing-core"></div>
            
            <div className="relative z-5 max-w-[800px] flex flex-col items-center">
                <span className="font-heading text-[0.75rem] font-bold tracking-[3px] text-orange-primary inline-flex items-center gap-2 mb-8 justify-center">
                    <span className="w-1.5 h-1.5 bg-orange-primary rounded-full shadow-[0_0_10px_var(--color-orange-primary)]"></span> SECURE PROGRESSION
                </span>
                <h2 className="text-[clamp(2.8rem,5.5vw,5.8rem)] leading-none mb-7 uppercase font-syne">
                    Let’s Build Something<br />
                    <span className="text-orange">Exceptional.</span>
                </h2>
                <p className="text-[1.15rem] text-text-muted mb-12 max-w-[640px]">
                    Connect with our luxury digital architects and schedule an onboarding call to structure your company's exponential growth strategy.
                </p>
                <div className="flex justify-center">
                    <a 
                        href="https://wa.me/10000000000" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-glow magnet-btn"
                    >
                        Book a Strategy Call
                        <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
