import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── design tokens (same as Hero.jsx) ── */
const C = {
  bg:      "#0B0907",
  cream:   "#EDE9E1",
  orange:  "#C94E18",
  dim:     "rgba(237,233,225,0.38)",
  line:    "rgba(237,233,225,0.045)",
  serif:   "'Cormorant Garamond', serif",
};

const TOOLS = [
  { name: "Next.js",    icon: "▲" },
  { name: "React",      icon: "⬡" },
  { name: "Tailwind",   icon: "✦" },
  { name: "GSAP",       icon: "◈" },
  { name: "Shopify",    icon: "⬟" },
  { name: "WordPress",  icon: "◉" },
  { name: "n8n",        icon: "⬡" },
  { name: "Figma",      icon: "◎" },
  { name: "Vercel",     icon: "▲" },
  { name: "Framer",     icon: "✦" },
];

const STATS = [
  { num: "30+", label: "Projects\nDelivered" },
  { num: "20+", label: "Clients\nServed" },
  { num: "2+",  label: "Years\nExperience" },
  { num: "∞",   label: "Ideas\nBrewing" },
];

/* ── tiny reusable grid-line strip (decorative) ── */
function GridLines() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            left: `${(i / 5) * 100}%`,
            top: 0, bottom: 0, width: "1px",
            background: C.line,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}

/* ── section label pill ── */
function Label({ children }) {
  return (
    <span style={{
      fontFamily: C.serif,
      fontSize: 10,
      letterSpacing: "0.38em",
      color: C.orange,
      textTransform: "uppercase",
      display: "inline-block",
      marginBottom: 24,
    }}>
      {children}
    </span>
  );
}

/* ════════════════════════════════════════
   MENU OVERLAY  — identical to Hero.jsx
════════════════════════════════════════ */
const NAV_LINKS = ["Home", "Services", "Portfolio", "Pricing", "About", "Contact"];

function MenuOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const linksRef   = useRef([]);
  const infoRef    = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    if (isOpen) {
      gsap.set(el, { display: "flex" });
      gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: "expo.out", delay: 0.1 }
      );
      if (infoRef.current)
        gsap.fromTo(infoRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.45 });
    } else {
      gsap.to(el, { opacity: 0, duration: 0.25, onComplete: () => gsap.set(el, { display: "none" }) });
    }
  }, [isOpen]);

  return (
    <div ref={overlayRef} style={{ display:"none", position:"fixed", inset:0, zIndex:200, background:"#EDEAE3", flexDirection:"column" }}>
      {[1,2,3,4].map(i => (
        <div key={i} style={{ position:"absolute", left:`${(i/5)*100}%`, top:0, bottom:0, width:"1px", background:"rgba(0,0,0,0.055)", pointerEvents:"none" }} />
      ))}

      {/* top bar */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", padding:"28px 48px", position:"relative", zIndex:2 }}>
        <div>
          <div style={{ fontFamily: C.serif, fontSize:18, fontWeight:600, letterSpacing:"0.08em", color:"#111" }}>YBRIX</div>
          <div style={{ fontFamily: C.serif, fontSize:10, letterSpacing:"0.32em", color:"#999", marginTop:1 }}>SOLUTIONS</div>
        </div>
        <button onClick={onClose} style={{ width:44, height:44, borderRadius:"50%", border:"1px solid rgba(0,0,0,0.14)", background:"transparent", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, color:"#333" }} aria-label="Close menu">×</button>
      </div>

      {/* nav links */}
      <div style={{ flex:1, display:"grid", gridTemplateColumns:"1fr 320px", alignItems:"end", padding:"0 48px 56px", position:"relative", zIndex:2, gap:32 }}>
        <nav>
          {NAV_LINKS.map((link, i) => (
            <div key={link} ref={el => (linksRef.current[i] = el)}>
              <a href="#" style={{ fontFamily: C.serif, fontSize:"clamp(52px,8.5vw,112px)", fontWeight:300, color:"#111", textDecoration:"none", display:"block", lineHeight:1.04, letterSpacing:"-0.02em", transition:"color 0.18s" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.orange)}
                onMouseLeave={e => (e.currentTarget.style.color = "#111")}>
                {link.toUpperCase()}
              </a>
            </div>
          ))}
        </nav>
        <div ref={infoRef} style={{ textAlign:"right", paddingBottom:6 }}>
          <p style={{ fontFamily: C.serif, fontSize:10, letterSpacing:"0.3em", color:"#aaa", marginBottom:6 }}>CONTACT</p>
          <a href="mailto:hello@ybrixsolutions.com" style={{ fontFamily: C.serif, fontSize:16, fontWeight:500, color:"#111", textDecoration:"none", display:"block", marginBottom:22 }}>hello@ybrixsolutions.com</a>
          <p style={{ fontFamily: C.serif, fontSize:10, letterSpacing:"0.3em", color:"#aaa", marginBottom:6 }}>BASED IN</p>
          <p style={{ fontFamily: C.serif, fontSize:17, fontWeight:600, color:"#111", marginBottom:22 }}>Gujarat, India</p>
          <div style={{ display:"flex", gap:18, justifyContent:"flex-end" }}>
            {["LinkedIn","GitHub","Behance"].map(s => (
              <a key={s} href="#" style={{ fontFamily: C.serif, fontSize:13, color:"#999", textDecoration:"none" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.orange)}
                onMouseLeave={e => (e.currentTarget.style.color = "#999")}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   HEADER  — identical to Hero.jsx
════════════════════════════════════════ */
function Header({ onMenuOpen }) {
  useEffect(() => {
    const magnets = document.querySelectorAll(".magnet-btn");
    magnets.forEach(btn => {
      const move  = e => { const r = btn.getBoundingClientRect(); gsap.to(btn, { x:(e.clientX-r.left-r.width/2)*0.25, y:(e.clientY-r.top-r.height/2)*0.25, duration:0.4, ease:"power3.out" }); };
      const leave = () => gsap.to(btn, { x:0, y:0, duration:0.7, ease:"expo.out" });
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      return () => { btn.removeEventListener("mousemove", move); btn.removeEventListener("mouseleave", leave); };
    });
  }, []);

  return (
    <header style={{ width:"100%", padding:"24px 5%", display:"flex", alignItems:"center", justifyContent:"space-between", background:"transparent" }}>
      <div onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} style={{ display:"flex", alignItems:"center", gap:12, cursor:"pointer" }}>
        <div style={{ width:40, height:40, borderRadius:12, border:"1px solid rgba(201,78,24,0.2)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 40px rgba(255,107,0,0.18)" }}>
          <span style={{ fontSize:20, color:"#fb923c", fontFamily:"Architype Van" }}>Y</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <span style={{ fontSize:22, lineHeight:1, letterSpacing:"-0.05em", textTransform:"uppercase", color: C.cream, fontFamily:"Architype Van" }}>YBRIX</span>
          <span style={{ fontSize:10, letterSpacing:"4px", color:"rgba(237,233,225,0.4)", textTransform:"uppercase" }}>Solutions</span>
        </div>
      </div>

      <div style={{ display:"flex", alignItems:"center", gap:20 }}>
        <button className="magnet-btn" style={{ display:"none", borderRadius:9999, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.03)", backdropFilter:"blur(20px)", padding:"12px 24px", fontSize:13, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(237,233,225,0.8)", cursor:"pointer", transition:"all 0.5s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(201,78,24,0.3)"; e.currentTarget.style.background="rgba(201,78,24,0.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.background="rgba(255,255,255,0.03)"; }}>
          Book Call
        </button>
        <button onClick={onMenuOpen} style={{ width:56, height:56, borderRadius:9999, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.03)", backdropFilter:"blur(20px)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color: C.cream, transition:"border-color 0.5s" }}
          onMouseEnter={e => (e.currentTarget.style.borderColor="rgba(201,78,24,0.3)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor="rgba(255,255,255,0.1)")}>
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

/* ════════════════════════════════════════
   ABOUT PAGE
════════════════════════════════════════ */
export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* refs for GSAP */
  const heroWordRefs  = useRef([]);
  const photoRef      = useRef(null);
  const storyRef      = useRef(null);
  const statsRef      = useRef([]);
  const toolsRef      = useRef([]);
  const missionRef    = useRef(null);
  const ctaRef        = useRef(null);
  const dividerRefs   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── HERO words stagger ── */
      gsap.fromTo(
        heroWordRefs.current.filter(Boolean),
        { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.1, stagger: 0.09, ease: "expo.out", delay: 0.2 }
      );

      /* ── photo reveal ── */
      if (photoRef.current) {
        gsap.fromTo(photoRef.current,
          { scaleY: 0, transformOrigin: "bottom center", opacity: 0 },
          { scaleY: 1, opacity: 1, duration: 1.2, ease: "expo.out",
            scrollTrigger: { trigger: photoRef.current, start: "top 82%" } }
        );
      }

      /* ── story text lines ── */
      if (storyRef.current) {
        const paras = storyRef.current.querySelectorAll("p");
        gsap.fromTo(paras,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "expo.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 78%" } }
        );
      }

      /* ── stat numbers ── */
      statsRef.current.filter(Boolean).forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "expo.out", delay: i * 0.08,
            scrollTrigger: { trigger: el, start: "top 85%" } }
        );
      });

      /* ── tools grid ── */
      toolsRef.current.filter(Boolean).forEach((el, i) => {
        gsap.fromTo(el,
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.4)", delay: i * 0.04,
            scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });

      /* ── mission ── */
      if (missionRef.current) {
        gsap.fromTo(missionRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "expo.out",
            scrollTrigger: { trigger: missionRef.current, start: "top 80%" } }
        );
      }

      /* ── CTA ── */
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
            scrollTrigger: { trigger: ctaRef.current, start: "top 88%" } }
        );
      }

      /* ── horizontal divider lines ── */
      dividerRefs.current.filter(Boolean).forEach(el => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.2, ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 90%" } }
        );
      });

    });

    return () => ctx.revert();
  }, []);

  /* hero headline words */
  const headline = ["Built", "on", "craft,", "driven", "by", "results."];

  const sectionPad = { padding: "100px 8% 100px" };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${C.bg}; }
        ::selection { background: ${C.orange}; color: #fff; }
      `}</style>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div style={{ background: C.bg, color: C.cream, minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
        <GridLines />

        {/* ─── HEADER ─── */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <Header onMenuOpen={() => setMenuOpen(true)} />
        </div>

        {/* ════════════════════════════════════════
            01  HERO
        ════════════════════════════════════════ */}
        <section style={{ ...sectionPad, paddingTop: 60, paddingBottom: 120, position: "relative", zIndex: 1 }}>

          {/* page label */}
          <Label>— About</Label>

          {/* headline */}
          <h1 style={{ fontFamily: C.serif, fontWeight: 300, fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.92, letterSpacing: "-0.04em", maxWidth: 900 }}>
            {headline.map((word, i) => (
              <span key={i} ref={el => (heroWordRefs.current[i] = el)} style={{ display: "inline-block", marginRight: "0.22em", overflow: "hidden" }}>
                {word}
              </span>
            ))}
          </h1>

          {/* sub tagline */}
          <p style={{ fontFamily: C.serif, fontStyle: "italic", fontSize: "clamp(16px, 2vw, 22px)", color: C.dim, marginTop: 32, maxWidth: 480, lineHeight: 1.6, fontWeight: 300 }}>
            Web experiences that convert visitors into clients — built from Gujarat, delivered globally.
          </p>

          {/* orange accent line */}
          <div style={{ width: 64, height: 2, background: C.orange, marginTop: 40, borderRadius: 2 }} />
        </section>

        {/* ════════════════════════════════════════
            02  PHOTO + STORY  (asymmetric split)
        ════════════════════════════════════════ */}
        <div ref={el => (dividerRefs.current[0] = el)} style={{ height: 1, background: "rgba(237,233,225,0.08)", margin: "0 8%" }} />

        <section style={{ ...sectionPad, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", position: "relative", zIndex: 1 }}>

          {/* photo placeholder */}
          <div ref={photoRef} style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "3/4",
              background: "linear-gradient(160deg, rgba(201,78,24,0.12) 0%, rgba(11,9,7,0.8) 100%)",
              border: "1px solid rgba(237,233,225,0.07)",
              borderRadius: 4,
              display: "flex", alignItems: "flex-end",
              padding: 28,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* decorative corner mark */}
              <div style={{ position: "absolute", top: 20, left: 20, width: 32, height: 32, borderTop: `1px solid ${C.orange}`, borderLeft: `1px solid ${C.orange}` }} />
              <div style={{ position: "absolute", bottom: 20, right: 20, width: 32, height: 32, borderBottom: `1px solid ${C.orange}`, borderRight: `1px solid ${C.orange}` }} />

              {/* name card */}
              <div>
                <p style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 500, color: C.cream, letterSpacing: "-0.02em" }}>Founder, YBRIX Solutions</p>
                <p style={{ fontFamily: C.serif, fontSize: 11, letterSpacing: "0.3em", color: C.dim, textTransform: "uppercase", marginTop: 4 }}>Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* story */}
          <div ref={storyRef}>
            <Label>— My Story</Label>

            <p style={{ fontFamily: C.serif, fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.8, color: C.dim, fontWeight: 300, marginBottom: 24 }}>
              YBRIX Solutions started from a simple frustration — most agency websites are built to impress other designers, not to win clients. I wanted to fix that.
            </p>
            <p style={{ fontFamily: C.serif, fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.8, color: C.dim, fontWeight: 300, marginBottom: 24 }}>
              Every project I take on begins with one question: <em style={{ color: C.cream }}>what does your client need to feel in order to trust you?</em> The answer shapes every decision — typography, motion, copy, structure.
            </p>
            <p style={{ fontFamily: C.serif, fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.8, color: C.dim, fontWeight: 300 }}>
              I specialise in Shopify stores, WordPress sites, and n8n workflow automation. Based in Gujarat, I work with founders and small teams globally who want more than a template — they want a presence.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════
            03  STATS
        ════════════════════════════════════════ */}
        <div ref={el => (dividerRefs.current[1] = el)} style={{ height: 1, background: "rgba(237,233,225,0.08)", margin: "0 8%" }} />

        <section style={{ ...sectionPad, position: "relative", zIndex: 1 }}>
          <Label>— Numbers</Label>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {STATS.map((s, i) => (
              <div key={i} ref={el => (statsRef.current[i] = el)}
                style={{ padding: "48px 32px", border: "1px solid rgba(237,233,225,0.06)", position: "relative", overflow: "hidden" }}>
                {/* hover glow — CSS only via inline transition */}
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 50%, rgba(201,78,24,0.06) 0%, transparent 70%)`, pointerEvents: "none" }} />
                <p style={{ fontFamily: C.serif, fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, color: C.cream, lineHeight: 1, letterSpacing: "-0.04em" }}>{s.num}</p>
                <p style={{ fontFamily: C.serif, fontSize: 12, letterSpacing: "0.22em", color: C.dim, textTransform: "uppercase", marginTop: 12, lineHeight: 1.6, whiteSpace: "pre-line" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            04  SKILLS & TOOLS
        ════════════════════════════════════════ */}
        <div ref={el => (dividerRefs.current[2] = el)} style={{ height: 1, background: "rgba(237,233,225,0.08)", margin: "0 8%" }} />

        <section style={{ ...sectionPad, position: "relative", zIndex: 1 }}>
          <Label>— Skills & Tools</Label>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
            {TOOLS.map((t, i) => (
              <div key={i} ref={el => (toolsRef.current[i] = el)}
                style={{ padding: "14px 24px", border: "1px solid rgba(237,233,225,0.08)", borderRadius: 2, display: "flex", alignItems: "center", gap: 10, cursor: "default", transition: "border-color 0.3s, background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,78,24,0.35)"; e.currentTarget.style.background = "rgba(201,78,24,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(237,233,225,0.08)"; e.currentTarget.style.background = "transparent"; }}>
                <span style={{ color: C.orange, fontSize: 14 }}>{t.icon}</span>
                <span style={{ fontFamily: C.serif, fontSize: 14, letterSpacing: "0.12em", color: C.dim, textTransform: "uppercase" }}>{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            05  MISSION STATEMENT
        ════════════════════════════════════════ */}
        <div ref={el => (dividerRefs.current[3] = el)} style={{ height: 1, background: "rgba(237,233,225,0.08)", margin: "0 8%" }} />

        <section ref={missionRef} style={{ ...sectionPad, position: "relative", zIndex: 1 }}>
          <Label>— Mission</Label>

          <blockquote style={{ fontFamily: C.serif, fontSize: "clamp(28px, 4.5vw, 64px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.2, letterSpacing: "-0.025em", color: C.cream, maxWidth: 900, borderLeft: `3px solid ${C.orange}`, paddingLeft: 40 }}>
            "Every pixel earns its place. Every interaction earns your client's trust."
          </blockquote>

          <p style={{ fontFamily: C.serif, fontSize: "clamp(15px, 1.5vw, 18px)", color: C.dim, marginTop: 32, maxWidth: 560, lineHeight: 1.8, fontWeight: 300 }}>
            YBrixSolutions stands for the belief that small businesses deserve world-class digital presence — not watered-down templates, not cookie-cutter agencies, not AI slop.
          </p>
        </section>

        {/* ════════════════════════════════════════
            06  CTA
        ════════════════════════════════════════ */}
        <div ref={el => (dividerRefs.current[4] = el)} style={{ height: 1, background: "rgba(237,233,225,0.08)", margin: "0 8%" }} />

        <section ref={ctaRef} style={{ ...sectionPad, paddingBottom: 140, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40, position: "relative", zIndex: 1 }}>
          <div>
            <Label>— Next Step</Label>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.04em", color: C.cream }}>
              Let's build something<br /><em style={{ color: C.orange }}>exceptional.</em>
            </h2>
          </div>

          <a href="/contact" style={{ textDecoration: "none" }}>
            <button
              style={{ padding: "20px 48px", borderRadius: 9999, border: `1px solid rgba(201,78,24,0.4)`, background: "transparent", color: C.cream, fontFamily: C.serif, fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.4s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.orange; e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,78,24,0.4)"; e.currentTarget.style.color = C.cream; }}>
              Work with me →
            </button>
          </a>
        </section>

        {/* ════════════════════════════════════════
            FOOTER STRIP
        ════════════════════════════════════════ */}
        <div style={{ height: 1, background: "rgba(237,233,225,0.08)" }} />
        <footer style={{ padding: "28px 8%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: C.serif, fontSize: 12, letterSpacing: "0.25em", color: "rgba(237,233,225,0.25)", textTransform: "uppercase" }}>© 2025 YBrixSolutions</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["LinkedIn", "GitHub", "Behance"].map(s => (
              <a key={s} href="#" style={{ fontFamily: C.serif, fontSize: 12, color: "rgba(237,233,225,0.3)", textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.orange)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(237,233,225,0.3)")}>{s}</a>
            ))}
          </div>
        </footer>

      </div>
    </>
  );
}