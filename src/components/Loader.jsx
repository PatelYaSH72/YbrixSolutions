import React, { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
    useEffect(() => {
        const isMobile = window.innerWidth <= 1024;
        const loaderTl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // 1. Assembling the Y logo block by block
        loaderTl.to(".block-top-left", { opacity: 1, duration: 0.3, ease: "power2.out" })
                .to(".block-top-right", { opacity: 1, duration: 0.3, ease: "power2.out" }, "-=0.15")
                .to(".block-middle", { opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.1")
                .to(".block-bottom", { opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.1");

        // 2. Add logo pulsing glow
        loaderTl.to(".logo-block", {
            boxShadow: "0 0 40px rgba(255, 85, 0, 0.95)",
            duration: 0.4,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut"
        });

        // 3. Stagger brand letters
        loaderTl.to(".loader-brand .word", {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.2");

        // 4. Reveal subtitle
        loaderTl.to(".loader-subtitle", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3");

        // 5. Split curtains exit animation
        loaderTl.to(".loader-content", {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            ease: "power2.in"
        }, "+=0.3");

        loaderTl.to(".loader-curtain.left", {
            xPercent: -100,
            duration: 0.8,
            ease: "power4.inOut"
        }, "-=0.1");

        loaderTl.to(".loader-curtain.right", {
            xPercent: 100,
            duration: 0.8,
            ease: "power4.inOut"
        }, "-=0.8");

        loaderTl.to(".loader-container", {
            pointerEvents: "none",
            display: "none",
            duration: 0.1
        });
    }, [onComplete]);

    return (
        <div className="loader-container">
            <div className="loader-curtain left"></div>
            <div className="loader-curtain right"></div>
            
            <div className="loader-content">
                <div className="logo-builder">
                    <div className="logo-block block-top-left"></div>
                    <div className="logo-block block-top-right"></div>
                    <div className="logo-block block-middle"></div>
                    <div className="logo-block block-bottom"></div>
                </div>
                
                <div className="loader-brand">
                    <span className="word">YBRIX</span>
                    <span className="word orange">SOLUTIONS</span>
                </div>
                
                <div className="loader-subtitle">BUILDING DIGITAL GROWTH BRICK BY BRICK</div>
            </div>
        </div>
    );
}
