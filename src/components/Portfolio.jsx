import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Portfolio() {
    const cardRefs = useRef([]);

    useEffect(() => {
        const isMobile = window.innerWidth <= 1024;
        const cards = cardRefs.current;

        if (cards.length && !isMobile) {
            cards.forEach((card) => {
                if (!card) return;

                const onMouseMove = (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const xc = rect.width / 2;
                    const yc = rect.height / 2;

                    const angleX = -(y - yc) / 18;
                    const angleY = (x - xc) / 18;

                    gsap.to(card, {
                        rotateX: angleX,
                        rotateY: angleY,
                        duration: 0.3,
                        ease: "power2.out",
                        transformPerspective: 800
                    });
                };

                const onMouseLeave = () => {
                    gsap.to(card, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                };

                card.addEventListener("mousemove", onMouseMove);
                card.addEventListener("mouseleave", onMouseLeave);

                return () => {
                    card.removeEventListener("mousemove", onMouseMove);
                    card.removeEventListener("mouseleave", onMouseLeave);
                };
            });
        }
    }, []);

    return (
        <section className="bg-bg-dark-gray py-24 lg:py-36 px-[6%]" id="portfolio">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-20">
                    <div>
                        <div className="font-heading text-[0.75rem] font-bold tracking-[3px] text-orange-primary inline-flex items-center gap-2 mb-6">
                            <span className="w-1.5 h-1.5 bg-orange-primary rounded-full shadow-[0_0_10px_var(--color-orange-primary)]"></span> BENTO GALLERY
                        </div>
                        <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] leading-none uppercase font-space">Engineered masterpieces.</h2>
                    </div>
                    <p className="text-[1.05rem] text-text-muted max-w-[480px]">
                        Discover how we combine futuristic art with structural stability to build award-winning tech architectures for digital market leaders.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                    {/* Card 1 */}
                    <div 
                        ref={(el) => (cardRefs.current[0] = el)} 
                        className="relative bg-bg-card border border-border-glass overflow-hidden flex flex-col justify-end h-[400px] lg:h-[480px] p-6 lg:p-10 cursor-pointer transition-colors duration-400 hover:border-border-glass-hover group/bento col-span-1 lg:col-span-2"
                    >
                        <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent z-2"></div>
                            <img src="/assets/project1.jpg" alt="Lux E-commerce Experience" className="w-full h-full object-cover opacity-35 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/bento:scale-105 group-hover/bento:opacity-55" loading="lazy" />
                        </div>
                        <div className="relative z-3">
                            <span className="font-heading text-[0.68rem] font-bold tracking-[2px] text-orange-primary uppercase mb-3 block">Shopify Headless</span>
                            <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-3">Aura Luxury Goods</h3>
                            <p className="text-[0.9rem] text-text-muted mb-6 max-w-[520px]">
                                Headless Shopify platform built with Hydrogen and custom React modules. Reached a 97 page-speed rating, driving a 38% increase in conversion rate.
                            </p>
                            <div className="flex justify-between items-center border-t border-white/5 pt-5">
                                <span className="font-heading text-[0.75rem] tracking-[1px] text-text-muted">Next.js / Shopify / GSAP</span>
                                <a href="#" className="font-heading text-[0.85rem] font-bold text-text-white inline-flex items-center gap-1.5 transition-colors duration-300 group-hover/bento:text-orange-primary">Live Case <span className="transition-transform duration-300 group-hover/bento:translate-x-0.5 group-hover/bento:-translate-y-0.5">↗</span></a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div 
                        ref={(el) => (cardRefs.current[1] = el)} 
                        className="relative bg-bg-card border border-border-glass overflow-hidden flex flex-col justify-end h-[400px] lg:h-[480px] p-6 lg:p-10 cursor-pointer transition-colors duration-400 hover:border-border-glass-hover group/bento col-span-1 lg:col-span-1"
                    >
                        <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent z-2"></div>
                            <img src="/assets/project2.jpg" alt="Autonomous Workspace Agent" className="w-full h-full object-cover opacity-35 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/bento:scale-105 group-hover/bento:opacity-55" loading="lazy" />
                        </div>
                        <div className="relative z-3">
                            <span className="font-heading text-[0.68rem] font-bold tracking-[2px] text-orange-primary uppercase mb-3 block">AI Integration</span>
                            <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-3">Apex Autonomous Agent</h3>
                            <p className="text-[0.9rem] text-text-muted mb-6 max-w-[520px]">
                                Integrated automated agent utilizing n8n pipelines, orchestrating customer responses and syncing invoicing on autopilot.
                            </p>
                            <div className="flex justify-between items-center border-t border-white/5 pt-5">
                                <span className="font-heading text-[0.75rem] tracking-[1px] text-text-muted">n8n / OpenAI / Python</span>
                                <a href="#" className="font-heading text-[0.85rem] font-bold text-text-white inline-flex items-center gap-1.5 transition-colors duration-300 group-hover/bento:text-orange-primary">View Flow <span className="transition-transform duration-300 group-hover/bento:translate-x-0.5 group-hover/bento:-translate-y-0.5">↗</span></a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div 
                        ref={(el) => (cardRefs.current[2] = el)} 
                        className="relative bg-bg-card border border-border-glass overflow-hidden flex flex-col justify-end h-[400px] lg:h-[480px] p-6 lg:p-10 cursor-pointer transition-colors duration-400 hover:border-border-glass-hover group/bento col-span-1 lg:col-span-1"
                    >
                        <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent z-2"></div>
                            <img src="/assets/project3.jpg" alt="Creative WordPress Platform" className="w-full h-full object-cover opacity-35 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/bento:scale-105 group-hover/bento:opacity-55" loading="lazy" />
                        </div>
                        <div className="relative z-3">
                            <span className="font-heading text-[0.68rem] font-bold tracking-[2px] text-orange-primary uppercase mb-3 block">WordPress Custom</span>
                            <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-3">Krypton Architects</h3>
                            <p className="text-[0.9rem] text-text-muted mb-6 max-w-[520px]">
                                High-end corporate portfolio incorporating horizontal smooth scroll modules and responsive structural layouts.
                            </p>
                            <div className="flex justify-between items-center border-t border-white/5 pt-5">
                                <span className="font-heading text-[0.75rem] tracking-[1px] text-text-muted">WordPress / Vanilla JS / GSAP</span>
                                <a href="#" className="font-heading text-[0.85rem] font-bold text-text-white inline-flex items-center gap-1.5 transition-colors duration-300 group-hover/bento:text-orange-primary">Explore <span className="transition-transform duration-300 group-hover/bento:translate-x-0.5 group-hover/bento:-translate-y-0.5">↗</span></a>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div 
                        ref={(el) => (cardRefs.current[3] = el)} 
                        className="relative bg-bg-card border border-border-glass overflow-hidden flex flex-col justify-end h-[400px] lg:h-[480px] p-6 lg:p-10 cursor-pointer transition-colors duration-400 hover:border-border-glass-hover group/bento col-span-1 lg:col-span-2"
                    >
                        <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent z-2"></div>
                            <img src="/assets/project4.jpg" alt="Corporate Enterprise System" className="w-full h-full object-cover opacity-35 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/bento:scale-105 group-hover/bento:opacity-55" loading="lazy" />
                        </div>
                        <div className="relative z-3">
                            <span className="font-heading text-[0.68rem] font-bold tracking-[2px] text-orange-primary uppercase mb-3 block">Custom Web App</span>
                            <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-3">Vektor Logistics</h3>
                            <p className="text-[0.9rem] text-text-muted mb-6 max-w-[520px]">
                                Premium system managing fleet tracking, cargo flow sheets, and client automated updates. Designed on highly scalable cloud architectures.
                            </p>
                            <div className="flex justify-between items-center border-t border-white/5 pt-5">
                                <span className="font-heading text-[0.75rem] tracking-[1px] text-text-muted">React / Node.js / Google Cloud</span>
                                <a href="#" className="font-heading text-[0.85rem] font-bold text-text-white inline-flex items-center gap-1.5 transition-colors duration-300 group-hover/bento:text-orange-primary">Live App <span className="transition-transform duration-300 group-hover/bento:translate-x-0.5 group-hover/bento:-translate-y-0.5">↗</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
