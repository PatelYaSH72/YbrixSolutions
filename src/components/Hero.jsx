import React, { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "Services", "Portfolio", "Pricing", "About", "Contact"];

/* ─────────────────────────────────────────
   MENU OVERLAY  (from Hero.jsx)
───────────────────────────────────────── */
function MenuOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const infoRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (isOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: "expo.out", delay: 0.1 }
      );
      if (infoRef.current)
        gsap.fromTo(
          infoRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, delay: 0.45 }
        );
    } else {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => gsap.set(overlay, { display: "none" }),
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      style={{
        display: "none",
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#EDEAE3",
        flexDirection: "column",
      }}
    >
      {/* Grid lines */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i / 5) * 100}%`,
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(0,0,0,0.055)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "28px 48px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#111",
            }}
          >
            YBRIX
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 10,
              letterSpacing: "0.32em",
              color: "#999",
              marginTop: 1,
            }}
          >
            SOLUTIONS
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.14)",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            color: "#333",
          }}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          alignItems: "end",
          padding: "0 48px 56px",
          position: "relative",
          zIndex: 2,
          gap: 32,
        }}
      >
        <nav>
          {NAV_LINKS.map((link, i) => (
            <div key={link} ref={(el) => (linksRef.current[i] = el)}>
              <a
                href={`/${link}`}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(52px, 8.5vw, 112px)",
                  fontWeight: 300,
                  color: "#111",
                  textDecoration: "none",
                  display: "block",
                  lineHeight: 1.04,
                  letterSpacing: "-0.02em",
                  transition: "color 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C94E18")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
              >
                {link.toUpperCase()}
              </a>
            </div>
          ))}
        </nav>

        <div ref={infoRef} style={{ textAlign: "right", paddingBottom: 6 }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 10,
              letterSpacing: "0.3em",
              color: "#aaa",
              marginBottom: 6,
            }}
          >
            CONTACT
          </p>
          <a
            href="mailto:hello@ybrixsolutions.com"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              fontWeight: 500,
              color: "#111",
              textDecoration: "none",
              display: "block",
              marginBottom: 22,
            }}
          >
            hello@ybrixsolutions.com
          </a>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 10,
              letterSpacing: "0.3em",
              color: "#aaa",
              marginBottom: 6,
            }}
          >
            BASED IN
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17,
              fontWeight: 600,
              color: "#111",
              marginBottom: 22,
            }}
          >
            Gujarat, India
          </p>
          <div style={{ display: "flex", gap: 18, justifyContent: "flex-end" }}>
            {["LinkedIn", "GitHub", "Behance"].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  color: "#999",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C94E18")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   HEADER  (from Header.jsx — magnet btn logic preserved)
───────────────────────────────────────── */
function Header({ onMenuOpen }) {
  // MAGNET BUTTONS
  useEffect(() => {
    const magnets = document.querySelectorAll(".magnet-btn");

    magnets.forEach((btn) => {
      const move = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: "power3.out" });
      };

      const leave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "expo.out" });
      };

      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);

      return () => {
        btn.removeEventListener("mousemove", move);
        btn.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  return (
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
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div
          className="
            w-10 h-10 rounded-xl
            border border-orange-500/20
            flex items-center justify-center
            shadow-[0_0_40px_rgba(255,107,0,0.18)]
          "
        >
          <span
            className="text-[20px] text-orange-400"
            style={{ fontFamily: "Architype Van" }}
          >
            Y
          </span>
        </div>

        <div className="flex flex-col">
          <span
            className="text-[22px] leading-none tracking-[-0.05em] uppercase"
            style={{ fontFamily: "Architype Van" }}
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
            hidden md:flex magnet-btn
            rounded-full border border-white/10
            bg-white/[0.03] backdrop-blur-xl
            px-6 py-3 text-[13px] uppercase tracking-[2px]
            text-white/80 transition-all duration-500
            hover:border-orange-500/30 hover:bg-orange-500/10
          "
        >
          Book Call
        </button>

        {/* MENU BTN */}
        <button
          onClick={onMenuOpen}
          className="
            relative w-[56px] h-[56px]
            rounded-full border border-white/10
            bg-white/[0.03] backdrop-blur-xl
            flex items-center justify-center overflow-hidden
            transition-all duration-500
            hover:border-orange-500/30
          "
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────
   HERO  (main export — wires everything together)
───────────────────────────────────────── */
export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    const rect = hero.getBoundingClientRect();
    gsap.to(glow, {
      x: e.clientX - rect.left - 300,
      y: e.clientY - rect.top - 300,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.addEventListener("mousemove", handleMouseMove);
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      if (glowRef.current) gsap.killTweensOf(glowRef.current);
    };
  }, [handleMouseMove]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
      `}</style>

      {/* Single shared MenuOverlay — controlled by one menuOpen state */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "100vh",
          maxHeight: "100vh",
          width: "100%",
          background: "#0B0907",
          color: "#EDE9E1",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* HEADER — absolute overlay, transparent over hero */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
          <Header onMenuOpen={() => setMenuOpen(true)} />
        </div>

        {/* Grid lines */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={`col-${i}`}
            style={{
              position: "absolute",
              left: `${(i / 5) * 100}%`,
              top: 0,
              bottom: 0,
              width: "1px",
              background: "rgba(237,233,225,0.045)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        ))}
        {[1, 2, 3].map((i) => (
          <div
            key={`row-${i}`}
            style={{
              position: "absolute",
              top: `${(i / 4) * 100}%`,
              left: 0,
              right: 0,
              height: "1px",
              background: "rgba(237,233,225,0.03)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        ))}

        {/* Mouse glow */}
        <div
          ref={glowRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 600,
            height: 600,
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(201,78,24,0.10) 0%, rgba(201,78,24,0.04) 45%, transparent 70%)",
            filter: "blur(32px)",
            zIndex: 1,
          }}
        />

        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 60% 50%, transparent 25%, rgba(11,9,7,0.75) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Title */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(80px, 18vw, 260px)",
              fontWeight: 300,
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              color: "#EDE9E1",
              textTransform: "uppercase",
            }}
          >
            YBRIX
          </h1>

          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(10px, 1.2vw, 16px)",
              letterSpacing: "0.55em",
              color: "#C94E18",
              textTransform: "uppercase",
              marginTop: 8,
              paddingLeft: "0.55em",
            }}
          >
            SOLUTIONS
          </div>
        </div>
      </section>
    </>
  );
}