import React from "react";

export default function TechMarquee() {
    return (
        <section className="py-15 bg-bg-black border-t border-b border-white/[0.02]">
            <div className="overflow-hidden w-full flex">
                <div className="flex gap-20 animate-marquee-loop whitespace-nowrap pl-10 hover:[animation-play-state:paused]">
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> React
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> Next.js
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> GSAP
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> WordPress
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> Shopify
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> Tailwind
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> Framer Motion
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> n8n
                    </span>
                    
                    {/* Loop duplication */}
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> React
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> Next.js
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> GSAP
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> WordPress
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> Shopify
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> Tailwind
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> Framer Motion
                    </span>
                    <span className="font-heading text-[1.6rem] font-bold tracking-[1px] text-text-muted flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-orange-primary hover:[text-shadow:0_0_15px_var(--color-orange-glow)] group/item">
                        <span className="w-2 h-2 bg-white/15 rounded-full transition-all duration-300 group-hover/item:bg-orange-primary group-hover/item:shadow-[0_0_10px_var(--color-orange-primary)]"></span> n8n
                    </span>
                </div>
            </div>
        </section>
    );
}
