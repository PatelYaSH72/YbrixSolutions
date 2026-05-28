import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
    {
        num: "01",
        title: "Shopify Development",
        desc: "High-end custom themes, headless storefront architectures, custom app development, and checkout scaling systems tailored for premium brands.",
        tags: ["Custom Headless Hydrogen", "Liquid Performance Architecture", "Intelligent App Integrations"],
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "WordPress Engineering",
        desc: "Enterprise Gutenberg environments, headless WordPress REST API / GraphQL builds, premium multisite setups, and bulletproof security structures.",
        tags: ["Custom Block Editor Blocks", "Next.js/React Decoupled Frontend", "High-scale Enterprise Hosting"],
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "AI Workflow Automation",
        desc: "Automated operations linking CRM, ERP, and communication tools. Workflow templates with n8n, Make, Custom Python Agents, and generative AI models.",
        tags: ["Custom n8n Enterprise Automations", "AI Agent Integration (LLMs, OCR)", "SaaS Integration Systems"],
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const introRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 1024;
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
        const cardsContainer = cardsContainerRef.current;
        const intro = introRef.current;

        if (section && wrapper && cardsContainer && intro && !isMobile) {
            let ctx = gsap.context(() => {
                const getScrollAmount = () => {
                    const containerWidth = cardsContainer.scrollWidth;
                    const viewWidth = window.innerWidth;
                    const introWidth = intro.offsetWidth;
                    return containerWidth + introWidth + (viewWidth * 0.1) - viewWidth;
                };

                // Horizontal scroll animation — unchanged
                gsap.fromTo(wrapper,
                    { x: () => -getScrollAmount() },
                    {
                        x: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: () => `+=${getScrollAmount()}`,
                            pin: true,
                            scrub: 1,
                            invalidateOnRefresh: true,
                        }
                    }
                );

                // Background dark → light transition
                gsap.fromTo(wrapper,
                    { backgroundColor: "#0B0907" },
                    {
                        backgroundColor: "#EDEAE3",
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: () => `+=${getScrollAmount()}`,
                            scrub: 1,
                            invalidateOnRefresh: true,
                        }
                    }
                );

                // Text color dark → light
                gsap.fromTo(section,
                    { "--text-color": "#EDE9E1", "--muted-color": "rgba(237,233,225,0.45)" },
                    {
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: () => `+=${getScrollAmount()}`,
                            scrub: 1,
                            invalidateOnRefresh: true,
                            onUpdate: (self) => {
                                const p = self.progress;
                                // interpolate white → dark
                                const light = [237, 233, 225];
                                const dark = [20, 18, 15];
                                const r = Math.round(light[0] + (dark[0] - light[0]) * p);
                                const g = Math.round(light[1] + (dark[1] - light[1]) * p);
                                const b = Math.round(light[2] + (dark[2] - light[2]) * p);
                                section.style.setProperty("--srv-text", `rgb(${r},${g},${b})`);
                                section.style.setProperty("--srv-muted", `rgba(${r},${g},${b},0.5)`);
                                section.style.setProperty("--srv-border", `rgba(${r},${g},${b},0.12)`);
                                section.style.setProperty("--srv-accent", p > 0.5 ? "#B84015" : "#C94E18");
                            },
                        }
                    }
                );

            }, section);

            return () => ctx.revert();
        }
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap');
                #services {
                    --srv-text: #EDE9E1;
                    --srv-muted: rgba(237,233,225,0.45);
                    --srv-border: rgba(237,233,225,0.12);
                    --srv-accent: #C94E18;
                }
            `}</style>

            <section
                ref={sectionRef}
                id="services"
                style={{ padding: 0, height: "auto", overflow: "visible" }}
                className="lg:h-screen lg:overflow-hidden"
            >
                <div
                    ref={wrapperRef}
                    style={{ backgroundColor: "#0B0907" }}
                    className="flex flex-col lg:flex-row-reverse w-full lg:w-[300vw] h-auto lg:h-screen items-stretch lg:items-center py-20 lg:py-0 pr-0 lg:pr-[6%]"
                >
                    {/* ── INTRO ── */}
                    <div
                        ref={introRef}
                        className="w-full lg:w-[480px] shrink-0 ml-0 lg:ml-[120px] mb-[50px] lg:mb-0 px-[6%] lg:px-0"
                    >
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.28em", color: "var(--srv-accent)", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--srv-accent)", display: "inline-block" }} />
                            WHAT WE BUILD
                        </div>

                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 3.5vw, 3.8rem)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-0.02em", color: "var(--srv-text)", marginBottom: 24, textTransform: "uppercase" }}>
                            Modular blocks<br />
                            <em style={{ fontStyle: "italic", color: "var(--srv-accent)" }}>of digital</em><br />
                            success.
                        </h2>

                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0rem", lineHeight: 1.75, color: "var(--srv-muted)", marginBottom: 32, fontWeight: 300 }}>
                            Every project we engineer serves as a brick designed to scale your business upward. Scroll right to explore our core specializations.
                        </p>

                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "var(--srv-accent)", display: "flex", alignItems: "center", gap: 8 }}>
                            <span style={{ fontSize: 18 }}>→</span> Scroll to explore
                        </div>
                    </div>

                    {/* ── CARDS ── */}
                    <div
                        ref={cardsContainerRef}
                        className="flex flex-col lg:flex-row-reverse w-full lg:w-auto gap-[30px] lg:gap-10 pl-[6%] lg:pl-[10%] pr-[6%] lg:pr-0"
                    >
                        {CARDS.map((card, i) => (
                            <div
                                key={card.num}
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    border: "1px solid var(--srv-border)",
                                    padding: "48px 44px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    transition: "border-color 0.3s, transform 0.3s",
                                    cursor: "pointer",
                                    background: "transparent",
                                }}
                                className="lg:w-[400px] lg:h-[500px]"
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                {/* Number */}
                                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 72, fontWeight: 300, lineHeight: 1, color: "var(--srv-accent)", opacity: 0.18, letterSpacing: "-0.04em" }}>
                                    {card.num}
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                    {/* Icon */}
                                    <div style={{ color: "var(--srv-accent)", opacity: 0.8 }}>
                                        {card.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 400, letterSpacing: "-0.01em", color: "var(--srv-text)", textTransform: "uppercase", lineHeight: 1.1 }}>
                                        {card.title}
                                    </h3>

                                    {/* Desc */}
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: "var(--srv-muted)", fontWeight: 300 }}>
                                        {card.desc}
                                    </p>

                                    {/* Tags */}
                                    <ul style={{ listStyle: "none", borderTop: "1px solid var(--srv-border)", paddingTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                                        {card.tags.map((tag) => (
                                            <li key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em", color: "var(--srv-text)", display: "flex", alignItems: "center", gap: 8 }}>
                                                <span style={{ width: 3, height: 3, background: "var(--srv-accent)", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}