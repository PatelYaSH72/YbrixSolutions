import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Menu } from "lucide-react";

const T = {
  bg:    "#0B0907",
  cream: "#EDE9E1",
  orange:"#C94E18",
  dim:   "rgba(237,233,225,0.45)",
  line:  "rgba(237,233,225,0.07)",
  serif: "'Cormorant Garamond', serif",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you fill out a contact form or book a call, we collect your name, email address, and any project details you voluntarily provide. We do not collect payment information directly — all transactions are handled through Razorpay or UPI, which have their own privacy policies.\n\nWe also collect standard server logs (IP address, browser type, pages visited) through Vercel Analytics and Plausible — both privacy-friendly tools that do not use cookies or sell your data.`,
  },
  {
    title: "How We Use Your Information",
    body: `Your information is used solely to respond to your enquiry, deliver the agreed project, and send occasional updates relevant to your project. We do not send unsolicited marketing emails. We do not sell, rent, or trade your personal data to any third party under any circumstances.`,
  },
  {
    title: "Third-Party Tools",
    body: `We use the following third-party tools that may process limited data:\n\n— Resend (email delivery)\n— Calendly (meeting scheduling)\n— Vercel Analytics (anonymous site analytics)\n— Razorpay / UPI (payment processing)\n\nEach of these services operates under their own privacy policy and data processing agreements.`,
  },
  {
    title: "Data Retention",
    body: `Project-related communications are retained for up to 2 years for reference and dispute resolution. You may request deletion of your data at any time by emailing hello@ybrixsolutions.com. We will confirm deletion within 7 business days.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access the personal data we hold about you, request corrections, request deletion, and withdraw consent for communications at any time. To exercise any of these rights, contact us at hello@ybrixsolutions.com.`,
  },
  {
    title: "Contact",
    body: `For any privacy-related questions, email: hello@ybrixsolutions.com\n\nYBRIX Solutions · Gujarat, India`,
  },
];

function Header({ onMenuOpen }) {
  return (
    <header style={{ width: "100%", padding: "24px 7%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", position: "relative", zIndex: 10 }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid rgba(201,78,24,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 18, color: "#fb923c", fontFamily: "serif" }}>Y</span>
        </div>
        <div>
          <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 600, letterSpacing: "0.06em", color: T.cream }}>YBRIX</div>
          <div style={{ fontFamily: T.serif, fontSize: 9, letterSpacing: "0.3em", color: T.dim, textTransform: "uppercase" }}>Solutions</div>
        </div>
      </Link>
      <button onClick={onMenuOpen} style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: T.cream }}>
        <Menu size={20} />
      </button>
    </header>
  );
}

export default function PrivacyPolicy() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      sectionRefs.current.filter(Boolean).forEach((el, i) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "expo.out", delay: i * 0.06,
            scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap'); * { margin:0; padding:0; box-sizing:border-box; }`}</style>

      <div style={{ background: T.bg, color: T.cream, minHeight: "100vh" }}>
        <Header />

        {/* Hero */}
        <section style={{ padding: "60px 7% 80px" }}>
          <span style={{ fontFamily: T.serif, fontSize: 10, letterSpacing: "0.38em", color: T.orange, textTransform: "uppercase" }}>— Legal</span>
          <h1 style={{ fontFamily: T.serif, fontSize: "clamp(40px, 7vw, 96px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.04em", marginTop: 16 }}>Privacy<br /><em>Policy</em></h1>
          <p style={{ fontFamily: T.serif, fontSize: 14, color: T.dim, marginTop: 20, letterSpacing: "0.1em" }}>Last updated: May 2025 · YBRIX Solutions, Gujarat, India</p>
          <div style={{ width: 48, height: 2, background: T.orange, marginTop: 28, borderRadius: 2 }} />
        </section>

        <div style={{ height: 1, background: T.line, margin: "0 7%" }} />

        {/* Sections */}
        <section style={{ padding: "72px 7% 120px", maxWidth: 820 }}>
          {SECTIONS.map((s, i) => (
            <div key={i} ref={el => (sectionRefs.current[i] = el)} style={{ marginBottom: 56 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
                <span style={{ fontFamily: T.serif, fontSize: 11, color: T.orange, letterSpacing: "0.3em" }}>0{i + 1}</span>
                <h2 style={{ fontFamily: T.serif, fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 400, letterSpacing: "-0.02em", color: T.cream }}>{s.title}</h2>
              </div>
              <p style={{ fontFamily: T.serif, fontSize: "clamp(15px, 1.5vw, 18px)", color: T.dim, lineHeight: 1.85, fontWeight: 300, whiteSpace: "pre-line" }}>{s.body}</p>
            </div>
          ))}
        </section>

        {/* Footer strip */}
        <div style={{ height: 1, background: T.line }} />
        <div style={{ padding: "24px 7%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: T.serif, fontSize: 12, color: "rgba(237,233,225,0.2)" }}>© 2026 YBRIX Solutions</span>
          <div style={{ display: "flex", gap: 24 }}>
            <Link to="/terms"         style={{ fontFamily: T.serif, fontSize: 13, color: T.dim, textDecoration: "none" }}>Terms</Link>
            <Link to="/refund-policy" style={{ fontFamily: T.serif, fontSize: 13, color: T.dim, textDecoration: "none" }}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
}