# YBRIX SOLUTIONS - Premium Cinematic React.js Walkthrough

We have successfully rebuilt the entire cinematic digital agency experience for **YBRIX SOLUTIONS** as a modular **React.js** application. Powered by **Vite**, **GSAP ScrollTrigger**, and **Lenis Smooth Scroll**, the project is structured with high-performance hooks and dynamic React layout components.

---

## 🏗️ React.js Component Architecture

1. **[index.html](file:///d:/Y%20BRIX%20SOLUTIONS/Website/index.html)**: The HTML5 wrapper mounting the React root. Contains preloaded luxury typography (Space Grotesk, Syne, Inter), OpenGraph tags, and JSON-LD structured schemas.
2. **[src/main.jsx](file:///d:/Y%20BRIX%20SOLUTIONS/Website/src/main.jsx)**: React DOM entry point that imports the primary stylesheet and mounts `<App />`.
3. **[src/App.jsx](file:///d:/Y%20BRIX%20SOLUTIONS/Website/src/App.jsx)**: Main dashboard. Configures the global Lenis smooth scroll instance, controls the loader state, and arranges the layout sequence.
4. **[src/index.css](file:///d:/Y%20BRIX%20SOLUTIONS/Website/src/index.css)**: Implements custom Obsidian Black and glowing Cyber-Orange variables, floating card matrixes, glassmorphism boundaries, and zero-lag mobile stack fallbacks.
5. **[src/components/](file:///d:/Y%20BRIX%20SOLUTIONS/Website/src/components)**:
   - `CustomCursor.jsx`: Dual-circle hardware-accelerated cursor following the mouse with soft delay interpolation.
   - `Loader.jsx`: Interactive orange block assembling into a glowing "Y" logo with curtain-split exit transitions.
   - `Header.jsx`: Main navigation links and magnetic CTA tags.
   - `Hero.jsx`: Bold left headline staggers with right-side 3D cards tilting on mouse moves.
   - `TypographyScroll.jsx`: Vertical scroll pinned gate that slides "YBRIX SOLUTIONS" horizontally from right to left before releasing scroll.
   - `Services.jsx`: Horizontal scroll panel shifting cards in an inverted right-to-left layout.
   - `Process.jsx`: Guides prospective clients through Discover → Design → Develop → Launch via dynamic vertical progress path filling.
   - `Portfolio.jsx`: Modern bento grid matrix with custom tilt, zoom, and link overlays.
   - `TechMarquee.jsx`: Infinite scrolling technology marquees.
   - `Testimonials.jsx`: client review carousel sliders.
   - `Pricing.jsx`: packages with count-up text digits and stateful FAQ accordion blocks.
   - `FinalCTA.jsx`: Glowing strategy button with custom particles array.
   - `Footer.jsx`: Copyright grids, legal layouts, and sticky floating WhatsApp triggers.

---

## ⚡ React Animations & Mobile Performance Fallbacks

- **Lenis Scroll**: Connected directly with GSAP ScrollTrigger to ensure smooth, hardware-accelerated animations on desktop.
- **Card Stack & Bento Tilts**: Mousemove event handlers are bound directly inside React references (`useRef`). These are automatically bypassed on touchscreen device viewports to eliminate overhead and lag.
- **Inverted Panning**: Mobile views stack the services blocks vertically to guarantee high FPS scroll performance.

---

## 🚀 How to Run and Preview the React App

We have initialized and launched the local Vite development server in the background:
1. Open your browser and navigate to: **[http://localhost:5173/](http://localhost:5173/)**
2. Interact with the website, test the cursors, drag horizontally, trigger count-up plans, and enjoy the cinematic React transition.
