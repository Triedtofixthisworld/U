import React from "react"; import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; import { motion } from "framer-motion";

// NOTE: This single-file React app assumes Tailwind CSS is configured in your project. // Drop this component into src/App.jsx (or similar) and ensure React Router, Framer Motion and Tailwind are installed.

export default function RadheyBioApp() { return ( <Router> <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#06102a] to-[#001021] text-slate-100"> <Loader /> <header className="max-w-6xl mx-auto p-6 flex items-center justify-between"> <Logo /> <Nav /> </header>

<main className="max-w-6xl mx-auto p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>

    <footer className="text-center py-8 opacity-70">© {new Date().getFullYear()} — Built by Radhey</footer>
  </div>
</Router>

); }

/* ---------- Loader (full-screen) ---------- */ function Loader() { // simple full-screen one-time loader — toggles off after CSS animation completes return ( <div id="app-loader" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"> <div className="relative flex flex-col items-center gap-6"> <GlowingRing /> <div className="text-center text-slate-200 select-none"> <AnimatedLetters text="RADHEY" /> <div className="mt-2 text-xs opacity-80">Exploring • Creating • Learning</div> </div> </div> <style>{#app-loader { animation: loaderFade 1s ease-in-out 2.8s forwards; } @keyframes loaderFade { to { opacity: 0; pointer-events: none; visibility: hidden; } }}</style> </div> ); }

function GlowingRing() { return ( <div className="relative w-44 h-44 flex items-center justify-center"> <svg viewBox="0 0 120 120" className="w-44 h-44"> <defs> <radialGradient id="g1" cx="50%" cy="50%"> <stop offset="0%" stopColor="#ffd27f" stopOpacity="1" /> <stop offset="60%" stopColor="#7be2ff" stopOpacity="0.12" /> <stop offset="100%" stopColor="#7b7bff" stopOpacity="0" /> </radialGradient> </defs> <circle cx="60" cy="60" r="34" fill="url(#g1)" className="animate-pulse-slow" /> </svg>

{/* center 'R' */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#111827] to-[#0b1220] flex items-center justify-center shadow-2xl border border-white/10">
      <span className="text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ffd27f] via-[#9be7ff] to-[#b3a6ff]">R</span>
    </div>
  </div>

  {/* outer electric ring (CSS animated) */}
  <div className="absolute w-full h-full"> 
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <g>
        <path id="ring" d="M100,10 A90,90 0 1,1 99.99,10" fill="none" stroke="url(#s1)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="s1" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#9be7ff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffd27f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#b3a6ff" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  </div>

  <style>{`
    .animate-pulse-slow { animation: pulse 2.2s ease-in-out infinite; }
    @keyframes pulse { 0% { transform: scale(1);} 50% { transform: scale(1.06);} 100% { transform: scale(1);} }

    /* animate the ring stroke dash offset to look like electricity */
    #ring { stroke-dasharray: 10 6 2 6; stroke-dashoffset: 0; animation: dash 1.6s linear infinite; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.6)); }
    @keyframes dash { to { stroke-dashoffset: -40; } }
  `}</style>
</div>

); }

/* ---------- Logo & Nav ---------- */ function Logo() { return ( <Link to="/" className="flex items-center gap-3"> <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1e293b] to-[#071431] flex items-center justify-center border border-white/10 shadow-md"> <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#ffd27f] to-[#b3a6ff]">R</span> </div> <div className="hidden sm:block"> <div className="font-semibold">Radhey</div> <div className="text-xs text-slate-400 -mt-1">Developer • Learner</div> </div> </Link> ); }

function Nav() { const links = [ ["/", "Home"], ["/about", "About"], ["/skills", "Skills"], ["/socials", "Socials"], ["/contact", "Contact"], ]; return ( <nav className="flex gap-4 items-center"> {links.map(([p, t]) => ( <Link to={p} key={p} className="px-3 py-2 rounded-md text-sm hover:bg-white/5 transition"> {t} </Link> ))} </nav> ); }

/* ---------- Pages ---------- */ function Home() { return ( <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12"> <div> <h1 className="text-4xl md:text-5xl font-extrabold leading-tight"> <AnimatedLetters text={"Hi, I'm Radhey."} className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd27f] via-[#9be7ff] to-[#b3a6ff]" /> </h1> <p className="mt-4 text-slate-300 max-w-xl">A beginner web developer and Python tool builder who loves building tools, solving problems, and learning fast. I craft clean, attractive, and modern web experiences with a cosmic touch.</p>

<div className="mt-6 flex gap-3">
      <Link to="/contact" className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#ffd27f] to-[#9be7ff] text-black font-semibold shadow-lg">Contact</Link>
      <Link to="/skills" className="px-5 py-3 rounded-2xl border border-white/10">See my skills</Link>
    </div>
  </div>

  <div className="relative">
    <FloatingCard />
  </div>
</section>

); }

function About() { return ( <section className="py-8"> <h2 className="text-3xl font-bold mb-4">About me</h2> <p className="text-slate-300 max-w-3xl">Put your long-form bio here. Consider mentioning your study (12th pass-out), your interests (web dev, Python), projects (5+ projects), and contact preference (Telegram: Bolo Radhe). Use energetic language and concrete achievements.</p> </section> ); }

function Skills() { const skills = ["HTML", "CSS / Tailwind", "JavaScript", "React", "Node.js", "Python", "Tooling", "Problem Solving"]; return ( <section className="py-8"> <h2 className="text-3xl font-bold mb-8">Skills</h2> <div className="grid grid-cols-2 sm:grid-cols-4 gap-4"> {skills.map((s) => ( <motion.div whileHover={{ scale: 1.05 }} key={s} className="p-4 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/6"> <div className="font-semibold">{s}</div> <div className="text-xs opacity-80 mt-2">Years learning / projects: add details</div> </motion.div> ))} </div> </section> ); }

function Socials() { const list = [ ["Telegram", "https://t.me/BoloRadhe"], ["Instagram", "https://instagram.com/Mr.dimension"], ["Snapchat", "https://snapchat.com/add/Mr.dimension"], ]; return ( <section className="py-8"> <h2 className="text-3xl font-bold mb-4">Socials</h2> <ul className="space-y-3"> {list.map(([n, u]) => ( <li key={n}><a href={u} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg bg-white/4 hover:bg-white/6">{n}</a></li> ))} </ul> </section> ); }

function Contact() { return ( <section className="py-8"> <h2 className="text-3xl font-bold mb-4">Contact</h2> <p className="text-slate-300 max-w-2xl">Email: <a href="mailto:radheyjii@outlook.in" className="underline">radheyjii@outlook.in</a> • Telegram: <span className="font-medium">@BoloRadhe</span> • Phone: +91 7304937349</p>

<form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
    <input placeholder="Your name" className="p-3 rounded-lg bg-white/5 border border-white/6" />
    <input placeholder="Email" className="p-3 rounded-lg bg-white/5 border border-white/6" />
    <textarea placeholder="Message" className="p-3 rounded-lg bg-white/5 border border-white/6 col-span-1 sm:col-span-2" rows={5} />
    <button className="col-span-1 sm:col-span-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#ffd27f] to-[#9be7ff] text-black font-semibold">Send message</button>
  </form>
</section>

); }

/* ---------- Small components ---------- */ function FloatingCard() { return ( <motion.div initial={{ y: 10 }} animate={{ y: -6 }} transition={{ yoyo: Infinity, duration: 3 }} className="p-6 rounded-3xl bg-gradient-to-b from-white/4 to-white/3 border border-white/8 shadow-2xl max-w-sm"> <img src="/avatar-placeholder.png" alt="avatar" className="w-28 h-28 rounded-full border-4 border-white/10 shadow-md object-cover" /> <div className="mt-4"> <div className="font-bold text-lg">Radhey</div> <div className="text-sm opacity-80">Beginner Web Developer • Python Tool Builder</div> </div> <div className="mt-4 text-xs opacity-70">Interactive floating card. Replace avatar-placeholder.png with your photo in /public.</div> </motion.div> ); }

function AnimatedLetters({ text = "", className = "" }) { // split into chars and animate each with staggered delay const chars = Array.from(text); return ( <div className={inline-flex flex-wrap ${className}}> {chars.map((ch, i) => ( <motion.span key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i, type: "spring", stiffness: 90 }} className="inline-block">{ch}</motion.span> ))} </div> ); }

/* ---------- End of file ---------- */

