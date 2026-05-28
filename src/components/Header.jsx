    import React, { useEffect, useRef, useState } from "react";
    import gsap from "gsap";
    import { Menu, X } from "lucide-react";

    export default function Header() {
        const [menuOpen, setMenuOpen] = useState(false);

        const overlayRef = useRef(null);
        const menuRef = useRef(null);
        const linksRef = useRef([]);

        // MAGNET BUTTONS
        useEffect(() => {
            const magnets = document.querySelectorAll(".magnet-btn");

            magnets.forEach((btn) => {
                const move = (e) => {
                    const rect = btn.getBoundingClientRect();

                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(btn, {
                        x: x * 0.25,
                        y: y * 0.25,
                        duration: 0.4,
                        ease: "power3.out",
                    });
                };

                const leave = () => {
                    gsap.to(btn, {
                        x: 0,
                        y: 0,
                        duration: 0.7,
                        ease: "expo.out",
                    });
                };

                btn.addEventListener("mousemove", move);
                btn.addEventListener("mouseleave", leave);

                return () => {
                    btn.removeEventListener("mousemove", move);
                    btn.removeEventListener("mouseleave", leave);
                };
            });
        }, []);

        // MENU ANIMATION
        useEffect(() => {
            if (menuOpen) {
                gsap.set(overlayRef.current, {
                    display: "block",
                });

                gsap.fromTo(
                    overlayRef.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                    }
                );

                gsap.fromTo(
                    ".menu-box",
                    {
                        scale: 0,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        stagger: 0.03,
                        duration: 0.5,
                        ease: "expo.out",
                    }
                );

                gsap.fromTo(
                    linksRef.current,
                    {
                        y: 80,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.08,
                        delay: 0.25,
                        duration: 1,
                        ease: "expo.out",
                    }
                );
            } else {
                gsap.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    onComplete: () => {
                        gsap.set(overlayRef.current, {
                            display: "none",
                        });
                    },
                });
            }
        }, [menuOpen]);

        return (
            <>
                {/* HEADER */}
                <header
                    className="
                    
                        w-full
                        
                        px-[5%]
                        py-6
                        flex
                        items-center
                        justify-between
                        
                        bg-transparent
                        border-white/[0.05]
                       
                    "
                >
                    {/* LOGO */}
                    <div
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <div
                            className="
                                w-10
                                h-10
                                rounded-xl
                                border
                                border-orange-500/20
                               
                                flex
                                items-center
                                justify-center
                                shadow-[0_0_40px_rgba(255,107,0,0.18)]
                            "
                        >
                            <span
                                className="text-[20px] text-orange-400"
                                style={{
                                    fontFamily: "Architype Van",
                                }}
                            >
                                Y
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <span
                                className="
                                    text-[22px]
                                    leading-none
                                    tracking-[-0.05em]
                                    uppercase
                                "
                                style={{
                                    fontFamily: "Architype Van",
                                }}
                            >
                                YBRIX
                            </span>

                            <span className="text-[10px] tracking-[4px] text-white/40 uppercase">
                                Solutions
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-5">

                        <button
                            className="
                                hidden
                                md:flex
                                magnet-btn
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.03]
                                backdrop-blur-xl
                                px-6
                                py-3
                                text-[13px]
                                uppercase
                                tracking-[2px]
                                text-white/80
                                transition-all
                                duration-500
                                hover:border-orange-500/30
                                hover:bg-orange-500/10
                            "
                        >
                            Book Call
                        </button>

                        {/* MENU BTN */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="
                                relative
                                w-[56px]
                                h-[56px]
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.03]
                                backdrop-blur-xl
                                flex
                                items-center
                                justify-center
                                overflow-hidden
                                transition-all
                                duration-500
                                hover:border-orange-500/30
                            "
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </header>

                {/* FULLSCREEN MENU */}
                <div
                    ref={overlayRef}
                    className="
                        fixed
                        inset-0
                        z-[999]
                        hidden
                        bg-[#f5f1ea]
                        overflow-hidden
                    "
                >
                    {/* BOX GRID ANIMATION */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">

                        {[...Array(48)].map((_, i) => (
                            <div
                                key={i}
                                className="
                                    menu-box
                                    border
                                    border-black/[0.04]
                                    bg-[#f5f1ea]
                                "
                            />
                        ))}
                    </div>

                    {/* TOP BAR */}
                    <div
                        className="
                            relative
                            z-20
                            flex
                            items-center
                            justify-between
                            px-[5%]
                            py-8
                        "
                    >
                        <div className="flex flex-col">
                            <span
                                className="
                                    text-[26px]
                                    text-black
                                    tracking-[-0.05em]
                                "
                                style={{
                                    fontFamily: "Architype Van",
                                }}
                            >
                                YBRIX
                            </span>

                            <span className="text-[10px] tracking-[4px] text-black/40 uppercase">
                                Solutions
                            </span>
                        </div>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="
                                w-[56px]
                                h-[56px]
                                rounded-full
                                border
                                border-black/10
                                flex
                                items-center
                                justify-center
                                text-black
                            "
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* MENU CONTENT */}
                    <div
                        ref={menuRef}
                        className="
                            relative
                            z-20
                            h-full
                            px-[7%]
                            flex
                            items-center
                            justify-between
                        "
                    >
                        {/* LEFT LINKS */}
                        <div className="flex flex-col gap-5">

                            {[
                                "Home",
                                "Services",
                                "Portfolio",
                                "Pricing",
                                "About",
                                "Contact",
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    ref={(el) =>
                                        (linksRef.current[i] = el)
                                    }
                                    href="/"
                                    className="
                                        group
                                        relative
                                        w-fit
                                        text-[clamp(3rem,7vw,8rem)]
                                        leading-[0.9]
                                        uppercase
                                        tracking-[-0.06em]
                                        text-black
                                        transition-all
                                        duration-500
                                    "
                                    style={{
                                        fontFamily: "Architype Van",
                                    }}
                                >
                                    {item}

                                    <span
                                        className="
                                            absolute
                                            left-0
                                            bottom-0
                                            h-[3px]
                                            w-0
                                            bg-orange-500
                                            transition-all
                                            duration-500
                                            group-hover:w-full
                                        "
                                    />
                                </a>
                            ))}
                        </div>

                        {/* RIGHT INFO */}
                        <div className="hidden lg:flex flex-col items-end gap-8">

                            <div className="text-right">
                                <p className="text-[12px] uppercase tracking-[4px] text-black/40 mb-3">
                                    Contact
                                </p>

                                <h4 className="text-[24px] text-black">
                                    hello@ybrixsolutions.com
                                </h4>
                            </div>

                            <div className="text-right">
                                <p className="text-[12px] uppercase tracking-[4px] text-black/40 mb-3">
                                    Based In
                                </p>

                                <h4 className="text-[24px] text-black">
                                    Gujarat, India
                                </h4>
                            </div>

                            <div className="flex gap-5 mt-4">
                                <a
                                    href="/"
                                    className="text-black/60 hover:text-orange-500 transition-all"
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href="/"
                                    className="text-black/60 hover:text-orange-500 transition-all"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="/"
                                    className="text-black/60 hover:text-orange-500 transition-all"
                                >
                                    Behance
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }