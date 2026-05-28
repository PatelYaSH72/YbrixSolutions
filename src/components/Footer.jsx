import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV   = ["Services", "Process", "Portfolio", "Pricing", "About"];
const LEGAL = [
  { label: "Privacy Policy",   to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund Policy",    to: "/refund-policy" },
];
const SOCIAL = [
  { label: "WhatsApp", href: "https://wa.me/10000000000", accent: true },
  { label: "LinkedIn",  href: "https://linkedin.com" },
  { label: "GitHub",    href: "https://github.com" },
  { label: "Behance",   href: "https://behance.net" },
];

/* tiny helper — same design tokens as Hero / About */
const T = {
  bg:     "#0B0907",
  cream:  "#EDE9E1",
  orange: "#C94E18",
  dim:    "rgba(237,233,225,0.38)",
  serif:  "'Cormorant Garamond', serif",
  line:   "rgba(237,233,225,0.07)",
};

export default function Footer() {
  const rootRef    = useRef(null);
  const bigWordRef = useRef(null);
  const colRefs    = useRef([]);
  const bottomRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* big "YBRIX" word reveal */
      if (bigWordRef.current) {
        gsap.fromTo(bigWordRef.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1.4, ease: "expo.out",
            scrollTrigger: { trigger: bigWordRef.current, start: "top 90%" } }
        );
      }

      /* columns stagger */
      gsap.fromTo(colRefs.current.filter(Boolean),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "expo.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 85%" } }
      );

      /* bottom bar */
      if (bottomRef.current) {
        gsap.fromTo(bottomRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: bottomRef.current, start: "top 98%" } }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkStyle = (accent = false) => ({
    display: "block",
    fontFamily: T.serif,
    fontSize: 15,
    color: accent ? T.orange : T.dim,
    textDecoration: "none",
    marginBottom: 14,
    letterSpacing: "0.04em",
    transition: "color 0.22s, letter-spacing 0.22s",
    width: "fit-content",
  });

  const hoverOn  = (e, accent) => { e.currentTarget.style.color = accent ? "#e8600a" : T.cream; e.currentTarget.style.letterSpacing = "0.08em"; };
  const hoverOff = (e, accent) => { e.currentTarget.style.color = accent ? T.orange : T.dim;   e.currentTarget.style.letterSpacing = "0.04em"; };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        /* WhatsApp float */
        .wa-float {
          position: fixed;
          bottom: 32px; right: 32px;
          z-index: 999;
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #25D366;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 24px rgba(37,211,102,0.35);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .wa-float:hover { transform: scale(1.1); box-shadow: 0 6px 32px rgba(37,211,102,0.55); }
        .wa-float svg { width: 26px; height: 26px; fill: #fff; }

        /* tooltip */
        .wa-float .tip {
          position: absolute;
          right: 62px;
          background: rgba(11,9,7,0.92);
          color: #EDE9E1;
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          white-space: nowrap;
          padding: 7px 14px;
          border-radius: 3px;
          border: 1px solid rgba(237,233,225,0.1);
          opacity: 0; pointer-events: none;
          transition: opacity 0.2s;
        }
        .wa-float:hover .tip { opacity: 1; }
      `}</style>

      <footer ref={rootRef} style={{ background: T.bg, borderTop: `1px solid ${T.line}`, padding: "0 7% 0", position: "relative", overflow: "hidden" }}>

        {/* ── big decorative word ── */}
        <div style={{ borderBottom: `1px solid ${T.line}`, paddingTop: 80, paddingBottom: 0, overflow: "hidden" }}>
          <p ref={bigWordRef} style={{ fontFamily: T.serif, fontSize: "clamp(80px, 17vw, 220px)", fontWeight: 300, color: "rgba(237,233,225,0.04)", lineHeight: 1, letterSpacing: "-0.06em", userSelect: "none", marginBottom: -12 }}>
            YBRIX
          </p>
        </div>

        {/* ── main grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48, padding: "64px 0 56px" }}>

          {/* col 0 — brand */}
          <div ref={el => (colRefs.current[0] = el)}>
            <div onClick={scrollToTop} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid rgba(201,78,24,0.25)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 32px rgba(201,78,24,0.15)" }}>
                <span style={{ fontFamily: "Architype Van, serif", fontSize: 18, color: "#fb923c" }}>Y</span>
              </div>
              <div>
                <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 600, letterSpacing: "0.06em", color: T.cream }}>YBRIX</div>
                <div style={{ fontFamily: T.serif, fontSize: 9, letterSpacing: "0.3em", color: T.dim, textTransform: "uppercase" }}>Solutions</div>
              </div>
            </div>

            <p style={{ fontFamily: T.serif, fontSize: 16, color: T.dim, lineHeight: 1.75, maxWidth: 240, fontWeight: 300 }}>
              Building digital growth,<br />brick by brick.
            </p>

            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#25D366", boxShadow: "0 0 8px #25D366" }} />
              <span style={{ fontFamily: T.serif, fontSize: 12, color: T.dim, letterSpacing: "0.12em", textTransform: "uppercase" }}>Available for projects</span>
            </div>

            <p style={{ fontFamily: T.serif, fontSize: 13, color: "rgba(237,233,225,0.2)", marginTop: 12, letterSpacing: "0.06em" }}>
              Gujarat, India · Global reach
            </p>
          </div>

          {/* col 1 — navigation */}
          <div ref={el => (colRefs.current[1] = el)}>
            <h4 style={{ fontFamily: T.serif, fontSize: 10, letterSpacing: "0.35em", color: T.orange, textTransform: "uppercase", marginBottom: 24 }}>Navigation</h4>
            {NAV.map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} style={linkStyle()}
                onMouseEnter={e => hoverOn(e, false)} onMouseLeave={e => hoverOff(e, false)}>{n}</a>
            ))}
          </div>

          {/* col 2 — legal */}
          <div ref={el => (colRefs.current[2] = el)}>
            <h4 style={{ fontFamily: T.serif, fontSize: 10, letterSpacing: "0.35em", color: T.orange, textTransform: "uppercase", marginBottom: 24 }}>Legal</h4>
            {LEGAL.map(l => (
              <Link key={l.to} to={l.to} style={linkStyle()}
                onMouseEnter={e => hoverOn(e, false)} onMouseLeave={e => hoverOff(e, false)}>{l.label}</Link>
            ))}
          </div>

          {/* col 3 — connect */}
          <div ref={el => (colRefs.current[3] = el)}>
            <h4 style={{ fontFamily: T.serif, fontSize: 10, letterSpacing: "0.35em", color: T.orange, textTransform: "uppercase", marginBottom: 24 }}>Connect</h4>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={linkStyle(s.accent)}
                onMouseEnter={e => hoverOn(e, s.accent)} onMouseLeave={e => hoverOff(e, s.accent)}>{s.label}</a>
            ))}

            <div style={{ marginTop: 28, padding: "16px 20px", border: `1px solid rgba(201,78,24,0.2)`, borderRadius: 4, background: "rgba(201,78,24,0.04)" }}>
              <p style={{ fontFamily: T.serif, fontSize: 11, letterSpacing: "0.2em", color: T.dim, textTransform: "uppercase", marginBottom: 6 }}>Response time</p>
              <p style={{ fontFamily: T.serif, fontSize: 14, color: T.cream, fontWeight: 500 }}>Within 4–6 hours</p>
              <p style={{ fontFamily: T.serif, fontSize: 12, color: T.dim, marginTop: 2 }}>Weekdays · IST</p>
            </div>
          </div>
        </div>

        {/* ── bottom bar ── */}
        <div ref={bottomRef} style={{ borderTop: `1px solid ${T.line}`, padding: "24px 0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: T.serif, fontSize: 12, color: "rgba(237,233,225,0.2)", letterSpacing: "0.08em" }}>
            © 2026 YBRIX Solutions. All rights architected.
          </p>

          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <span style={{ fontFamily: T.serif, fontSize: 11, color: "rgba(237,233,225,0.15)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Crafted for Awwwards standards</span>
            <a href="#" onClick={scrollToTop} style={{ fontFamily: T.serif, fontSize: 13, color: T.dim, textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = T.orange)}
              onMouseLeave={e => (e.currentTarget.style.color = T.dim)}>
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* ── WhatsApp Float ── */}
      <a href="https://wa.me/10000000000" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32">
          <path d="M16 2a13.92 13.92 0 00-12 21.08L2 29l6.19-2A13.9 13.9 0 0030 16c0-7.72-6.28-14-14-14zm7.91 19.89c-.33.92-1.63 1.8-2.63 1.93-1 .13-2.28.32-6.62-1.48-5.56-2.3-9.14-8-9.42-8.38s-2.24-3-2.24-5.72 1.4-4.08 1.9-4.58.91-.42 1.25-.42.67 0 1 .05.83-.21 1.29.92 1.58 3.84 1.71 4.1.21.5.08 1-.5.79-.83 1.13c-.33.33-.67.71-.29 1.37a11.16 11.16 0 004.53 4A10.32 10.32 0 0019 16c.46-.08.92-.58 1.21-.92s.58-.33.92-.21c.33.13 2.13 1 2.5 1.17s.63.29.71.42a2.91 2.91 0 01-.43 2.43z"/>
        </svg>
        <span className="tip">Need help? Chat now →</span>
      </a>
    </>
  );
}