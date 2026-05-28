import React from "react";

// ── Home Page Sections (blueprint order) ──
import Hero          from "../components/Hero";
import TypographyScroll from "../components/TypographyScroll";
import Services      from "../components/Services";
import Process       from "../components/Process";
import Portfolio     from "../components/Portfolio";
import TechMarquee   from "../components/TechMarquee";
import Testimonials  from "../components/Testimonials";
import Pricing       from "../components/Pricing";
import FinalCTA      from "../components/FinalCTA";
import Footer        from "../components/Footer";

export default function Home() {
    return (
        <>
            {/* 01 Hero */}
            <Hero />

            {/* 02 Brand Marquee / Typography Scroll */}
            <TypographyScroll />

            {/* 03 Services — Horizontal Scroll */}
            <Services />

            {/* 04 Process Storytelling */}
            <Process />

            {/* 05 Portfolio Bento Grid */}
            <Portfolio />

            {/* 06 Technologies Marquee */}
            <TechMarquee />

            {/* 07 Testimonials */}
            <Testimonials />

            {/* 08 Pricing Preview */}
            <Pricing />

            {/* 09 Final CTA */}
            <FinalCTA />

           
        </>
    );
}