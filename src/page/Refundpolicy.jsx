import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const T = {
  bg:    "#0B0907",
  cream: "#EDE9E1",
  orange:"#C94E18",
  dim:   "rgba(237,233,225,0.45)",
  line:  "rgba(237,233,225,0.07)",
  serif: "'Cormorant Garamond', serif",
};

/* visual refund timeline */
const TIMELINE = [
  { stage: "Before work starts",      refund: "100%",  note: "Full refund, no questions asked." },
  { stage: "After planning / design",  refund: "50%",   note: "Partial refund — planning work is non-recoverable." },
  { stage: "After development begins", refund: "0%",    note: "Advance non-refundable; final invoice waived." },
  { stage: "After final delivery",     refund: "0%",    note: "No refund once delivered and approved." },
];

const SECTIONS = [
  {
    title: "Standard Refund Schedule",
    body: `Refund eligibility is determined by the stage at which a cancellation or dispute is raised. The timeline above summarises the standard policy. All percentages refer to the initial advance payment.`,
  },
  {
    title: "How to Request a Refund",
    body: `Send a written request to hello@ybrixsolutions.com with your project name, invoice number, and reason for the request. We acknowledge all requests within 2 business days.\n\nValid refunds are processed within 7–10 business days via the original payment method (UPI / Razorpay / bank transfer).`,
  },
  {
    title: "Dispute Process",
    body: `If you are unsatisfied with a delivered project, please raise a concern before requesting a refund. We offer one free revision round for disputes related to work not matching the agreed brief.\n\nIf the dispute cannot be resolved through revisions, we will negotiate a fair partial refund based on the extent of usable work delivered. Our goal is always a fair outcome for both parties.`,
  },
  {
    title: "Exceptions",
    body: `Refunds will not be issued for:\n\n— Delays caused by late client feedback or missing assets\n— Scope changes requested by the client after work began\n— Change of mind after development has started\n— Third-party service failures (hosting, domain, payment gateway) post-handover\n\nIn cases of genuine technical failure on our end, we will make it right — always.`,
  },
  {
    title: "Contact",
    body: `For all refund and billing enquiries:\nhello@ybrixsolutions.com\n\nYBRIX Solutions · Gujarat, India`,
  },
];

function Header() {
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
    </header>
  );
}

export default function RefundPolicy() {
  const timelineRefs = useRef([]);
  const sectionRefs  = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {

      /* timeline cards */
      timelineRefs.current.filter(Boolean).forEach((el, i) => {
        gsap.fromTo(el,
          { x: -24, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.65, ease: "expo.out", delay: i * 0.08,
            scrollTrigger: { trigger: el, start: "top 90%" } }
        );
      });

      /* text sections */
      sectionRefs.current.filter(Boolean).forEach((el, i) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "expo.out", delay: i * 0.05,
            scrollTrigger: { trigger: el, start: "top 88%" } }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  /* refund % → colour */
  const pctColor = (pct) =>
    pct === "100%" ? "#4ade80" : pct === "50%" ? T.orange : "rgba(237,233,225,0.2)";

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap'); * { margin:0; padding:0; box-sizing:border-box; }`}</style>

      <div style={{ background: T.bg, color: T.cream, minHeight: "100vh" }}>
        <Header />

        <section style={{ padding: "60px 7% 80px" }}>
          <span style={{ fontFamily: T.serif, fontSize: 10, letterSpacing: "0.38em", color: T.orange, textTransform: "uppercase" }}>— Legal</span>
          <h1 style={{ fontFamily: T.serif, fontSize: "clamp(40px, 7vw, 96px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.04em", marginTop: 16 }}>Refund<br /><em>Policy</em></h1>
          <p style={{ fontFamily: T.serif, fontSize: 14, color: T.dim, marginTop: 20, letterSpacing: "0.1em" }}>Last updated: May 2025 · YBRIX Solutions, Gujarat, India</p>
          <div style={{ width: 48, height: 2, background: T.orange, marginTop: 28, borderRadius: 2 }} />
        </section>

        <div style={{ height: 1, background: T.line, margin: "0 7%" }} />

        {/* ── visual timeline ── */}
        <section style={{ padding: "72px 7% 56px" }}>
          <span style={{ fontFamily: T.serif, fontSize: 10, letterSpacing: "0.38em", color: T.orange, textTransform: "uppercase" }}>— Refund Schedule</span>

          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
            {TIMELINE.map((row, i) => (
              <div key={i} ref={el => (timelineRefs.current[i] = el)}
                style={{ padding: "32px 28px", border: `1px solid ${T.line}`, position: "relative", background: "rgba(237,233,225,0.015)" }}>
                {/* stage number */}
                <span style={{ fontFamily: T.serif, fontSize: 10, letterSpacing: "0.3em", color: "rgba(237,233,225,0.2)", textTransform: "uppercase" }}>Stage {String(i + 1).padStart(2, "0")}</span>
                {/* refund % */}
                <p style={{ fontFamily: T.serif, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300, lineHeight: 1, color: pctColor(row.refund), letterSpacing: "-0.04em", marginTop: 12 }}>{row.refund}</p>
                {/* stage label */}
                <p style={{ fontFamily: T.serif, fontSize: 14, color: T.cream, marginTop: 10, fontWeight: 400 }}>{row.stage}</p>
                {/* note */}
                <p style={{ fontFamily: T.serif, fontSize: 13, color: T.dim, marginTop: 6, lineHeight: 1.6, fontStyle: "italic" }}>{row.note}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: 1, background: T.line, margin: "0 7%" }} />

        {/* ── text sections ── */}
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

        <div style={{ height: 1, background: T.line }} />
        <div style={{ padding: "24px 7%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: T.serif, fontSize: 12, color: "rgba(237,233,225,0.2)" }}>© 2026 YBRIX Solutions</span>
          <div style={{ display: "flex", gap: 24 }}>
            <Link to="/privacy-policy" style={{ fontFamily: T.serif, fontSize: 13, color: T.dim, textDecoration: "none" }}>Privacy Policy</Link>
            <Link to="/terms"          style={{ fontFamily: T.serif, fontSize: 13, color: T.dim, textDecoration: "none" }}>Terms</Link>
          </div>
        </div>
      </div>
    </>
  );
}