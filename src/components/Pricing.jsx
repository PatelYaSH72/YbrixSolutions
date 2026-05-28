import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
    const cardRefs = useRef([]);
    const [faqActive, setFaqActive] = useState({});

    useEffect(() => {
        const cards = cardRefs.current;
        
        cards.forEach((card) => {
            if (!card) return;
            const priceEl = card.querySelector(".plan-price");
            if (priceEl) {
                const targetPrice = parseInt(priceEl.getAttribute("data-price"));
                const obj = { value: 0 };
                
                ScrollTrigger.create({
                    trigger: card,
                    start: "top bottom-=100",
                    onEnter: () => {
                        gsap.to(obj, {
                            value: targetPrice,
                            duration: 1.5,
                            ease: "power3.out",
                            onUpdate: () => {
                                priceEl.textContent = `$${Math.round(obj.value).toLocaleString()}`;
                            }
                        });
                    },
                    once: true
                });
            }
        });
    }, []);

    const toggleFaq = (index) => {
        setFaqActive((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section className="bg-bg-black py-24 lg:py-36 px-[6%] border-t border-white/[0.02]" id="pricing">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="font-heading text-[0.75rem] font-bold tracking-[3px] text-orange-primary inline-flex items-center gap-2 mb-6 justify-center w-full">
                    <span className="w-1.5 h-1.5 bg-orange-primary rounded-full shadow-[0_0_10px_var(--color-orange-primary)]"></span> PRICING STRUCTURE
                </div>
                <h2 className="text-[clamp(2rem,3.8vw,3.8rem)] mb-20 uppercase font-space text-center">
                    Transparent modules. No hidden margins.
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-7 max-w-[1400px] mx-auto mb-[120px]">
                    {/* Plan 1 */}
                    <div ref={(el) => (cardRefs.current[0] = el)} className="relative bg-bg-card border border-border-glass p-10 lg:py-14 lg:px-10 flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 hover:border-border-glass-hover">
                        <div className="card-glow"></div>
                        <span className="font-heading text-[0.85rem] font-bold tracking-[2px] text-text-muted mb-6 block">STARTER BRICK</span>
                        <div className="text-[3.6rem] font-bold mb-6 text-text-white font-space plan-price" data-price="4900">$0</div>
                        <p className="text-[0.92rem] mb-10 h-[60px]">
                            Perfect launch block for ambitious brands seeking a high-end customized corporate interface.
                        </p>
                        <ul className="list-none flex flex-col gap-4 mb-14 border-t border-white/5 pt-10">
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Custom Web Design (Figma Framework)</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Modular WordPress / Custom Code</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Basic GSAP Scroll Animations</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Lighthouse Core Web Vitals optimization</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">1 Month Premium Support</li>
                        </ul>
                        <a href="#contact" className="btn btn-secondary w-full text-center justify-center">Get Started</a>
                    </div>

                    {/* Plan 2 */}
                    <div ref={(el) => (cardRefs.current[1] = el)} className="relative bg-bg-card border border-orange-primary bg-orange-primary/[0.02] p-10 lg:py-14 lg:px-10 flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 hover:border-border-glass-hover">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-primary text-text-white font-heading text-[0.7rem] font-bold tracking-[2px] px-4 py-1.5 shadow-[0_0_15px_var(--color-orange-glow)]">MOST POPULAR</div>
                        <div className="card-glow animate-glow"></div>
                        <span className="font-heading text-[0.85rem] font-bold tracking-[2px] text-orange-primary mb-6 block">GROWTH STACK</span>
                        <div className="text-[3.6rem] font-bold mb-6 text-text-white font-space plan-price" data-price="9500">$0</div>
                        <p className="text-[0.92rem] mb-10 h-[60px]">
                            Engineered for high-performing e-commerce and operational automatons seeking pure digital expansion.
                        </p>
                        <ul className="list-none flex flex-col gap-4 mb-14 border-t border-white/5 pt-10">
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Premium Headless Shopify Store / Advanced WP</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Full GSAP & Interactive Cursor Physics</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">n8n / Make Workflow automations</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Lighthouse score guaranteed 95+</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Advanced parallax 3D cards & visual assets</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">3 Months Structural Support</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary btn-glow w-full text-center justify-center">Get Stacked</a>
                    </div>

                    {/* Plan 3 */}
                    <div ref={(el) => (cardRefs.current[2] = el)} className="relative bg-bg-card border border-border-glass p-10 lg:py-14 lg:px-10 flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 hover:border-border-glass-hover">
                        <div className="card-glow"></div>
                        <span className="font-heading text-[0.85rem] font-bold tracking-[2px] text-text-muted mb-6 block">PREMIUM STRUCTURE</span>
                        <div className="text-[3.6rem] font-bold mb-6 text-text-white font-space plan-price" data-price="18500">$0</div>
                        <p className="text-[0.92rem] mb-10 h-[60px]">
                            For large corporate operations looking for tailored digital infrastructures and AI scaling layers.
                        </p>
                        <ul className="list-none flex flex-col gap-4 mb-14 border-t border-white/5 pt-10">
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Full Decoupled Next.js Custom Frontend</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Tailored Custom AI Integration Agents</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Infinite Scrolling, Storytelling Blueprints</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Dedicated developer & server architecture</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">Enterprise Security & Database scaling</li>
                            <li className="text-[0.9rem] text-text-muted flex gap-3 items-start before:content-['✓'] before:text-orange-primary before:font-bold">6 Months Ongoing Support</li>
                        </ul>
                        <a href="#contact" className="btn btn-secondary w-full text-center justify-center">Consult Architecture</a>
                    </div>
                </div>

                {/* FAQ ACCORDION */}
                <div className="max-w-[800px] mx-auto">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-12 uppercase font-space text-center">Frequently Built Answers</h3>
                    <div className="flex flex-col gap-4">
                        <div className="border border-border-glass bg-bg-card">
                            <button className="w-full bg-transparent border-none py-6 px-8 font-heading text-[1.05rem] font-semibold text-text-white flex justify-between items-center cursor-pointer text-left" onClick={() => toggleFaq(0)}>
                                <span>Why do you use GSAP and Lenis instead of other engines?</span>
                                <span className={`text-[1.3rem] text-orange-primary transition-transform duration-300 ${faqActive[0] ? "rotate-45" : ""}`}>{faqActive[0] ? "+" : "+"}</span>
                            </button>
                            <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ maxHeight: faqActive[0] ? "200px" : "0px" }}>
                                <p className="px-8 pb-8 pt-0 text-[0.95rem]">
                                    GSAP (GreenSock) combined with Lenis delivers the most performant, hardware-accelerated 60fps animations. It gives Awwwards-winning websites their cinematic smoothness while preventing horizontal scroll lag on mobile platforms.
                                </p>
                            </div>
                        </div>

                        <div className="border border-border-glass bg-bg-card">
                            <button className="w-full bg-transparent border-none py-6 px-8 font-heading text-[1.05rem] font-semibold text-text-white flex justify-between items-center cursor-pointer text-left" onClick={() => toggleFaq(1)}>
                                <span>Can we integrate automated CRM workflows?</span>
                                <span className={`text-[1.3rem] text-orange-primary transition-transform duration-300 ${faqActive[1] ? "rotate-45" : ""}`}>{faqActive[1] ? "+" : "+"}</span>
                            </button>
                            <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ maxHeight: faqActive[1] ? "200px" : "0px" }}>
                                <p className="px-8 pb-8 pt-0 text-[0.95rem]">
                                    Absolutely. Our AI Workflow Automation module integrates tools like n8n or Make directly into Salesforce, HubSpot, Stripe, Slack, and GPT nodes, automating leads and transactions without manual coding lag.
                                </p>
                            </div>
                        </div>

                        <div className="border border-border-glass bg-bg-card">
                            <button className="w-full bg-transparent border-none py-6 px-8 font-heading text-[1.05rem] font-semibold text-text-white flex justify-between items-center cursor-pointer text-left" onClick={() => toggleFaq(2)}>
                                <span>How long does a premium build take?</span>
                                <span className={`text-[1.3rem] text-orange-primary transition-transform duration-300 ${faqActive[2] ? "rotate-45" : ""}`}>{faqActive[2] ? "+" : "+"}</span>
                            </button>
                            <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ maxHeight: faqActive[2] ? "200px" : "0px" }}>
                                <p className="px-8 pb-8 pt-0 text-[0.95rem]">
                                    A bespoke high-end brand stack takes between 3 to 6 weeks, depending on the operational scale. Every digital structure is crafted brick-by-brick to ensure perfect SEO indexing and visual performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
