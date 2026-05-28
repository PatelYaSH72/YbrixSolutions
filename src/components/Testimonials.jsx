import React from "react";

export default function Testimonials() {
    return (
        <section className="bg-bg-black py-24 lg:py-36 px-[6%]">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="font-heading text-[0.75rem] font-bold tracking-[3px] text-orange-primary inline-flex items-center gap-2 mb-6 justify-center w-full">
                    <span className="w-1.5 h-1.5 bg-orange-primary rounded-full shadow-[0_0_10px_var(--color-orange-primary)]"></span> CLIENT VERDICTS
                </div>
                <h2 className="text-[clamp(2rem,3.8vw,3.8rem)] mb-[70px] uppercase font-space text-center">
                    Engineered for architectural growth.
                </h2>

                <div className="w-full overflow-hidden py-5">
                    <div className="flex gap-9 w-max animate-testimonials-auto-scroll hover:[animation-play-state:paused]">
                        {/* Card 1 */}
                        <div className="w-[320px] sm:w-[480px] bg-bg-card border border-border-glass p-[30px] sm:p-10 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-border-glass-hover hover:-translate-y-2">
                            <div className="text-orange-primary mb-6 flex gap-1 text-[1.1rem]">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-base leading-[1.7] text-text-white mb-9">
                                "YBRIX completely engineered our complex digital scaling strategy. The custom headless Shopify layout they assembled works 4x faster than our previous theme, and our mobile conversion grew immediately."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-[1.1rem] text-text-white" style={{ backgroundColor: "#ff5500" }}>M</div>
                                <div className="flex flex-col">
                                    <h4 className="text-[0.95rem] font-bold uppercase mb-1">Marcus Sterling</h4>
                                    <span className="text-[0.8rem] text-text-muted">Director of Product, Aura Luxury</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[320px] sm:w-[480px] bg-bg-card border border-orange-primary/30 bg-orange-primary/[0.01] p-[30px] sm:p-10 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-border-glass-hover hover:-translate-y-2">
                            <div className="text-orange-primary mb-6 flex gap-1 text-[1.1rem]">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-base leading-[1.7] text-text-white mb-9">
                                "Their automation workflow systems built on n8n reduced manual invoicing steps by 90%. Now our support desk flows seamlessly without lagging behind. Exceptional architecture!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-[1.1rem] text-text-white" style={{ backgroundColor: "#ffaa00" }}>E</div>
                                <div className="flex flex-col">
                                    <h4 className="text-[0.95rem] font-bold uppercase mb-1">Evelyn Chen</h4>
                                    <span className="text-[0.8rem] text-text-muted">COO, Apex Systems</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-[320px] sm:w-[480px] bg-bg-card border border-border-glass p-[30px] sm:p-10 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-border-glass-hover hover:-translate-y-2">
                            <div className="text-orange-primary mb-6 flex gap-1 text-[1.1rem]">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-base leading-[1.7] text-text-white mb-9">
                                "We needed a corporate portal that captured our premium visual philosophy. YBRIX designed an Awwwards-standard custom WordPress system with incredibly smooth animations."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-[1.1rem] text-text-white" style={{ backgroundColor: "#333" }}>D</div>
                                <div className="flex flex-col">
                                    <h4 className="text-[0.95rem] font-bold uppercase mb-1">David H. Miller</h4>
                                    <span className="text-[0.8rem] text-text-muted">Founder, Krypton Space</span>
                                </div>
                            </div>
                        </div>

                        {/* Duplicated for smooth loop */}
                        <div className="w-[320px] sm:w-[480px] bg-bg-card border border-border-glass p-[30px] sm:p-10 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-border-glass-hover hover:-translate-y-2">
                            <div className="text-orange-primary mb-6 flex gap-1 text-[1.1rem]">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-base leading-[1.7] text-text-white mb-9">
                                "YBRIX completely engineered our complex digital scaling strategy. The custom headless Shopify layout they assembled works 4x faster than our previous theme, and our mobile conversion grew immediately."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-[1.1rem] text-text-white" style={{ backgroundColor: "#ff5500" }}>M</div>
                                <div className="flex flex-col">
                                    <h4 className="text-[0.95rem] font-bold uppercase mb-1">Marcus Sterling</h4>
                                    <span className="text-[0.8rem] text-text-muted">Director of Product, Aura Luxury</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
