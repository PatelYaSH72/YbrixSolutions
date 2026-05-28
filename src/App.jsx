import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// Pages


// Global Components
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import Home from "./page/Home";
import About from "./page/about";
import Footer from "./components/Footer";
import PrivacyPolicy from "./page/Privacypolicy";
import Terms from "./page/termandcondition";
import RefundPolicy from "./page/refundpolicy";

export default function App() {
    const [loaderActive, setLoaderActive] = useState(true);

    useEffect(() => {
        // ── Lenis Smooth Scroll Setup ──
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Sync GSAP ticker with Lenis
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // Block scroll while loader is active
        if (loaderActive) {
            lenis.stop();
            document.body.style.overflow = "hidden";
        } else {
            lenis.start();
            document.body.style.overflow = "auto";
        }

        // Scroll progress bar
        const progressBar = document.querySelector(".scroll-progress-bar");
        const onScroll = () => {
            const scrollTop  = window.scrollY || document.documentElement.scrollTop;
            const docHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const pct        = (scrollTop / docHeight) * 100;
            if (progressBar) progressBar.style.width = pct + "%";
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            lenis.destroy();
            window.removeEventListener("scroll", onScroll);
        };
    }, [loaderActive]);

    const handleLoaderComplete = () => {
        setLoaderActive(false);

        const isMobile = window.innerWidth <= 1024;
        const heroTl   = gsap.timeline();

        heroTl
            .from(".header",        { y: -50, opacity: 0, duration: 0.6, ease: "power3.out" })
            .from(".hero-tag",      { opacity: 0, y: 15, duration: 0.4, ease: "power2.out" }, "-=0.3")
            .from(".hero-title span", { yPercent: 100, stagger: 0.15, duration: 0.7, ease: "power4.out" }, "-=0.3")
            .from(".hero-subtitle", { opacity: 0, y: 15, duration: 0.5, ease: "power2.out" }, "-=0.4")
            .from(".hero-ctas",     { opacity: 0, y: 15, duration: 0.5, ease: "power2.out" }, "-=0.4");

        if (!isMobile) {
            heroTl.from(".parallax-card", {
                opacity: 0,
                x: 60,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
            }, "-=0.7");
        }
    };

    return (
        <BrowserRouter>
            <CustomCursor />

            {/* Loader only shown once on first load */}
            {loaderActive && <Loader onComplete={handleLoaderComplete} />}

            <main className="smooth-content-wrapper">
                {/* Scroll progress bar */}
                <div className="scroll-progress-container">
                    <div className="scroll-progress-bar" />
                </div>

                <Routes>
                    <Route path="/"       element={<Home />} />
                    <Route path="/about"  element={<About />} />
                    <Route path="/privacy-policy"  element={< PrivacyPolicy/>} />
                    <Route path="/terms"  element={<Terms />} />
                    <Route path="/refund-policy"  element={<RefundPolicy />} />
                </Routes>
                <Footer/>
            </main>
        </BrowserRouter>
    );
}