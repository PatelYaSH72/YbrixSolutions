import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TypographyScroll() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const glow = glowRef.current;

        if (!section || !text) return;

        const isMobile = window.innerWidth <= 1024;

        let ctx = gsap.context(() => {

            // MAIN SCROLL ANIMATION
            if (!isMobile) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "+=160%",
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                    }
                })
                .fromTo(
                    text,
                    {
                        x: "120vw",
                        scale: 0.85,
                        rotate: -2,
                    },
                    {
                        x: "-10vw",
                        scale: 1,
                        rotate: 0,
                        ease: "power3.out",
                    }
                );
            } else {
                gsap.fromTo(
                    text,
                    {
                        x: "40vw",
                        scale: 0.92,
                    },
                    {
                        x: "0vw",
                        scale: 1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                        }
                    }
                );
            }

            // HOVER EFFECT
            text.addEventListener("mouseenter", () => {
                gsap.to(text, {
                    scale: 1.03,
                    letterSpacing: "-0.05em",
                    duration: 0.6,
                    ease: "power3.out",
                });

                gsap.to(glow, {
                    opacity: 1,
                    scale: 1.2,
                    duration: 0.8,
                    ease: "power3.out",
                });
            });

            text.addEventListener("mouseleave", () => {
                gsap.to(text, {
                    scale: 1,
                    letterSpacing: "-0.07em",
                    duration: 0.8,
                    ease: "expo.out",
                });

                gsap.to(glow, {
                    opacity: 0.4,
                    scale: 1,
                    duration: 1,
                    ease: "expo.out",
                });
            });

        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                h-screen
                overflow-hidden
                bg-[#070707]
                border-y
                border-white/[0.04]
                flex
                items-center
            "
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">

                {/* GRID */}
                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.05]
                        [background-size:90px_90px]
                        [background-image:
                        linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
                        linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
                    "
                />

                {/* GLOW */}
                <div
                    ref={glowRef}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[900px]
                        h-[900px]
                        rounded-full
                        bg-orange-500/10
                        blur-[160px]
                        opacity-40
                    "
                />

                {/* VIGNETTE */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070707_85%)]" />
            </div>

            {/* TYPOGRAPHY */}
            <div className="relative z-20 pl-[5%] w-full overflow-hidden">

                <h2
                    ref={textRef}
                    className="
                        uppercase
                        whitespace-nowrap
                        leading-[0.82]
                        tracking-[-0.07em]
                        text-[clamp(7rem,18vw,22rem)]
                        text-white
                        cursor-default
                        select-none
                        [will-change:transform]
                    "
                    style={{
                        fontFamily: "Architype Van",
                    }}
                >
                    YBRIX{" "}
                    <span className="text-orange-500">
                        SOLUTIONS
                    </span>
                </h2>

                {/* SMALL LABEL */}
                <div
                    className="
                        mt-6
                        ml-3
                        text-[12px]
                        uppercase
                        tracking-[8px]
                        text-white/40
                    "
                >
                    Luxury Motion Studio
                </div>
            </div>
        </section>
    );
}