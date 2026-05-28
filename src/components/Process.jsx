import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
    const sectionRef = useRef(null);
    const glowFillRef = useRef(null);
    const stepRefs = useRef([]);
    const activeBlockRef = useRef(null);

    useEffect(() => {
        const steps = stepRefs.current;
        const glowFill = glowFillRef.current;
        const activeBlock = activeBlockRef.current;
        const section = sectionRef.current;

        if (steps.length && glowFill && section) {
            let ctx = gsap.context(() => {
                // Line scroll filling
                gsap.to(glowFill, {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top center",
                        end: "bottom center",
                        scrub: 0.5
                    }
                });

                // Active step highlighting and block translate
                steps.forEach((step, idx) => {
                    if (!step) return;
                    ScrollTrigger.create({
                        trigger: step,
                        start: "top center+=100",
                        end: "bottom center",
                        onEnter: () => {
                            step.classList.add("active");
                            if (activeBlock) {
                                gsap.to(activeBlock, {
                                    x: idx * 30,
                                    y: idx * 30,
                                    rotate: idx * 45,
                                    borderColor: idx % 2 === 0 ? "#ff5500" : "#ffffff",
                                    duration: 0.5,
                                    ease: "power2.out"
                                });
                            }
                        },
                        onLeaveBack: () => {
                            step.classList.remove("active");
                        }
                    });
                });
            }, section);

            return () => ctx.revert();
        }
    }, []);

    return (
        <section ref={sectionRef} className="bg-bg-black py-40 px-[6%] lg:px-0" id="process">
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-20">
                <div className="relative">
                    <div className="relative lg:sticky lg:top-[180px] h-max">
                        <div className="font-heading text-[0.75rem] font-bold tracking-[3px] text-orange-primary inline-flex items-center gap-2 mb-6">
                            <span className="w-1.5 h-1.5 bg-orange-primary rounded-full shadow-[0_0_10px_var(--color-orange-primary)]"></span> ARCHITECTURAL SYSTEM
                        </div>
                        <h2 className="text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.05] mb-6 uppercase font-space">
                            Structured steps.<br />Brick by brick.
                        </h2>
                        <p className="text-[1.08rem] text-text-muted max-w-[480px] mb-10">
                            We avoid chaotic workflows. Every project goes through a rigorous digital construction sequence to guarantee high-performance, scalability, and premium look.
                        </p>
                        
                        <div className="blueprint-animation-box w-full relative h-[200px] border border-orange-primary/10 bg-orange-primary/[0.01] overflow-hidden">
                            <div className="blueprint-lines"></div>
                            <div ref={activeBlockRef} className="blueprint-active-block"></div>
                        </div>
                    </div>
                </div>

                <div className="relative pl-10 lg:pl-[60px]">
                    <div className="timeline-glow-path">
                        <div ref={glowFillRef} className="timeline-glow-fill"></div>
                    </div>

                    {/* Step 1 */}
                    <div 
                        ref={(el) => (stepRefs.current[0] = el)} 
                        className="process-step" 
                        id="step-discover"
                    >
                        <div className="step-badge">01</div>
                        <h3 className="text-3xl font-bold uppercase mb-4 font-space">Discover</h3>
                        <p className="text-base text-text-muted leading-relaxed max-w-[580px]">
                            We deep dive into your existing digital architecture. Examining codebases, databases, user paths, and workflow bottlenecks to design a perfect blueprint tailored for your expansion.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div 
                        ref={(el) => (stepRefs.current[1] = el)} 
                        className="process-step" 
                        id="step-design"
                    >
                        <div className="step-badge">02</div>
                        <h3 className="text-3xl font-bold uppercase mb-4 font-space">Design</h3>
                        <p className="text-base text-text-muted leading-relaxed max-w-[580px]">
                            Our Awwwards-standard design layout is shaped brick by brick. We utilize ultra-premium minimalist design philosophies, high-contrast layouts, custom micro-interactions, and glassmorphism elements.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div 
                        ref={(el) => (stepRefs.current[2] = el)} 
                        className="process-step" 
                        id="step-develop"
                    >
                        <div className="step-badge">03</div>
                        <h3 className="text-3xl font-bold uppercase mb-4 font-space">Develop</h3>
                        <p className="text-base text-text-muted leading-relaxed max-w-[580px]">
                            We compile state-of-the-art web layers using modular blocks. Utilizing high-performance custom JS models, blazing-fast e-commerce backends, and fully secure automated infrastructure.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div 
                        ref={(el) => (stepRefs.current[3] = el)} 
                        className="process-step" 
                        id="step-launch"
                    >
                        <div className="step-badge">04</div>
                        <h3 className="text-3xl font-bold uppercase mb-4 font-space">Launch</h3>
                        <p className="text-base text-text-muted leading-relaxed max-w-[580px]">
                            Rigorous performance auditing is applied to target Lighthouse scores above 95. We verify responsiveness, deploy optimized code to edge CDNs, and activate your custom automated workflow funnels.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
