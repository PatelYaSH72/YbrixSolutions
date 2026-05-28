import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
    title: "Payment Terms",
    body: `All projects require a 50% advance payment before work begins. The remaining 50% is due upon project completion, before final files or live deployment are handed over.\n\nAccepted payment methods: UPI, Razorpay, or direct bank transfer. Invoices are issued in INR. International clients may pay via bank wire — exchange rates apply at the time of transfer.`,
  },
  {
    title: "Revision Policy",
    body: `Each project package includes a defined number of revision rounds, as agreed in the project proposal. A revision is defined as minor changes to existing work — not new features or significant scope changes.\n\nRevisions beyond the agreed scope will be quoted separately at ₹500–₹1500 per hour depending on complexity. Revision requests must be submitted within 14 days of delivery.`,
  },
  {
    title: "Project Timeline & Delays",
    body: `Project timelines are estimates provided in good faith. Delays caused by late client feedback, missing assets, or scope changes are not the responsibility of YBRIX Solutions.\n\nIf YBRIX Solutions causes a significant delay beyond the agreed deadline without prior communication, a partial refund or discount may be negotiated at our discretion.`,
  },
  {
    title: "Project Cancellation",
    body: `If a client cancels a project after work has begun:\n\n— Before any work: 100% refund of advance\n— After design/planning stage: 50% of advance refunded\n— After development begins: No refund of advance; final invoice waived\n\nCancellation must be submitted in writing via email to hello@ybrixsolutions.com.`,
  },
  {
    title: "Intellectual Property & Ownership",
    body: `Upon receipt of full payment, the client receives full ownership of all final deliverables — including source code, design files, and all associated assets created specifically for their project.\n\nYBRIX Solutions retains the right to display the completed project in our portfolio unless the client requests otherwise in writing before project sign-off.\n\nThird-party assets (stock photos, icon libraries, fonts) remain subject to their respective licenses. It is the client's responsibility to ensure continued licensing for any such assets post-handover.`,
  },
  {
    title: "Liability",
    body: `YBRIX Solutions is not liable for any indirect, incidental, or consequential damages arising from the use of delivered work. Our total liability in any dispute shall not exceed the amount paid for the specific project in question.\n\nWe are not responsible for third-party service outages (hosting, CMS platforms, payment gateways) after handover.`,
  },
  {
    title: "Governing Law",
    body: `These terms are governed by the laws of Gujarat, India. Any disputes shall be resolved through mutual negotiation first. If unresolved, disputes will be subject to the jurisdiction of courts in Gujarat, India.`,
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

export default function Terms() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
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

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap'); * { margin:0; padding:0; box-sizing:border-box; }`}</style>

      <div style={{ background: T.bg, color: T.cream, minHeight: "100vh" }}>
        <Header />

        <section style={{ padding: "60px 7% 80px" }}>
          <span style={{ fontFamily: T.serif, fontSize: 10, letterSpacing: "0.38em", color: T.orange, textTransform: "uppercase" }}>— Legal</span>
          <h1 style={{ fontFamily: T.serif, fontSize: "clamp(40px, 7vw, 96px)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.04em", marginTop: 16 }}>Terms &<br /><em>Conditions</em></h1>
          <p style={{ fontFamily: T.serif, fontSize: 14, color: T.dim, marginTop: 20, letterSpacing: "0.1em" }}>Last updated: May 2025 · YBRIX Solutions, Gujarat, India</p>
          <div style={{ width: 48, height: 2, background: T.orange, marginTop: 28, borderRadius: 2 }} />
        </section>

        <div style={{ height: 1, background: T.line, margin: "0 7%" }} />

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
            <Link to="/refund-policy"  style={{ fontFamily: T.serif, fontSize: 13, color: T.dim, textDecoration: "none" }}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
}