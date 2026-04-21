// ─── App.jsx ──────────────────────────────────────────────────────────────
// RENDERING ONLY — no content lives here.
// All text, projects, skills, blogs, experience, and education
// are imported from /src/data/*.js files.
// ──────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Data imports — edit these files to update content
import { HERO, CONTACT, ABOUT } from "./data/hero";
import { PROJECTS }              from "./data/projects";
import { SKILLS }                from "./data/skills";
import { BLOGS }                 from "./data/blog";
import { EXPERIENCE }            from "./data/experience";
import { EDUCATION }             from "./data/education";

// ─── COLOUR PALETTE ───────────────────────────────────────────────────────
const C = {
  navy:       "#0D2545",
  deepBlue:   "#1A4072",
  midBlue:    "#2E6DA4",
  steelBlue:  "#5B9BC8",
  lightSlate: "#E8EDF2",
  offWhite:   "#F5F7F9",
  riskRed:    "#C0392B",
  textLight:  "#5B7A9A",
};

// ─── SHARED PRIMITIVES ────────────────────────────────────────────────────

/** Scroll-triggered fade-in wrapper */
const FadeIn = ({ children, delay = 0, y = 24 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/** Reusable section heading with label + underline bar */
const SectionTitle = ({ label, title, dark = false }) => (
  <FadeIn>
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: dark ? C.steelBlue : C.midBlue, fontWeight: 600, marginBottom: 8 }}>
        {label}
      </div>
      <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontFamily: "'EB Garamond', Georgia, serif", color: dark ? "#fff" : C.navy, fontWeight: 600, margin: 0, lineHeight: 1.2 }}>
        {title}
      </h2>
      <div style={{ width: 40, height: 3, background: dark ? C.steelBlue : C.midBlue, borderRadius: 2, marginTop: 16 }} />
    </div>
  </FadeIn>
);

/** Coloured risk badge */
const RiskBadge = ({ level }) => {
  const map = { High: [C.riskRed, "#fff"], Medium: [C.midBlue, "#fff"], Low: ["#2D7D46", "#fff"] };
  const [bg, fg] = map[level] ?? [C.lightSlate, C.navy];
  return (
    <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: bg, color: fg, letterSpacing: "0.06em", textTransform: "uppercase" }}>
      {level} Risk
    </span>
  );
};

// ─── NAVBAR ───────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "Projects", "Skills", "Blog", "Experience", "Education", "About", "Contact"];

const NavBar = ({ active }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? C.navy : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "background 0.3s, border 0.3s",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <span style={{ color: "#fff", fontFamily: "'EB Garamond', Georgia, serif", fontSize: 20, fontWeight: 600, letterSpacing: "0.02em" }}>
          {HERO.name.split(" ").map(n => n[0]).join(".")}
        </span>

        {/* Desktop links */}
        <div className="desk-nav" style={{ display: "flex", gap: "2rem" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: active === l.toLowerCase() ? C.steelBlue : "rgba(255,255,255,0.75)",
                fontSize: 13, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase",
                transition: "color 0.2s", padding: "4px 0",
                borderBottom: active === l.toLowerCase() ? `1px solid ${C.steelBlue}` : "1px solid transparent",
              }}
            >{l}</button>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 8 }}>
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2 }} />)}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ background: C.navy, overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                style={{ display: "block", width: "100%", background: "none", border: "none", color: "rgba(255,255,255,0.85)", padding: "14px 2rem", textAlign: "left", fontSize: 14, cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media(max-width:768px){.desk-nav{display:none!important}.hamburger{display:flex!important}}`}</style>
    </motion.nav>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────

const Hero = () => (
  <section id="home" style={{ minHeight: "100vh", background: `linear-gradient(160deg, ${C.navy} 0%, ${C.deepBlue} 60%, #1e3a6e 100%)`, display: "flex", alignItems: "center", padding: "120px 2rem 80px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: C.steelBlue, marginBottom: 20, fontWeight: 600 }}>
          {HERO.eyebrow}
        </div>
        <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(42px,6vw,80px)", color: "#fff", fontWeight: 600, lineHeight: 1.1, margin: "0 0 8px" }}>
          {HERO.name}
        </h1>
        <h2 style={{ fontSize: "clamp(18px,2.5vw,26px)", color: C.steelBlue, fontWeight: 400, fontFamily: "'EB Garamond', Georgia, serif", margin: "0 0 28px", fontStyle: "italic" }}>
          {HERO.title}
        </h2>
        <p style={{ fontSize: "clamp(15px,1.8vw,18px)", color: "rgba(255,255,255,0.72)", maxWidth: 580, lineHeight: 1.75, marginBottom: 48 }}>
          {HERO.positioning}
        </p>

        {/* Strength pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
          {HERO.strengths.map(s => (
            <div key={s} style={{ padding: "10px 20px", border: "1px solid rgba(91,155,200,0.4)", borderRadius: 4, color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500, letterSpacing: "0.03em" }}>
              {s}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{ padding: "14px 32px", background: C.midBlue, color: "#fff", border: "none", borderRadius: 4, fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase" }}
            onMouseEnter={e => e.target.style.background = "#2560A0"}
            onMouseLeave={e => e.target.style.background = C.midBlue}>
            View Projects
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ padding: "14px 32px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.35)", borderRadius: 4, fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase" }}
            onMouseEnter={e => e.target.style.borderColor = "rgba(255,255,255,0.7)"}
            onMouseLeave={e => e.target.style.borderColor = "rgba(255,255,255,0.35)"}>
            Contact Me
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── PROJECTS ─────────────────────────────────────────────────────────────

const ProjectCard = ({ p, idx }) => {
  const [open, setOpen] = useState(false);
  const verdictColor = { Approve: "#81C784", Monitor: "#FFD54F", Reject: "#FF8A80" };

  return (
    <FadeIn delay={idx * 0.07}>
      <div style={{ background: "#fff", border: `1px solid ${C.lightSlate}`, borderRadius: 8, overflow: "hidden", boxShadow: open ? "0 8px 32px rgba(13,37,69,0.10)" : "0 2px 8px rgba(13,37,69,0.05)", transition: "box-shadow 0.2s" }}>

        {/* Collapsed header */}
        <div style={{ padding: "1.75rem 2rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}
          onClick={() => setOpen(!open)}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: C.midBlue }}>{p.industry}</span>
              <RiskBadge level={p.riskTag} />
            </div>
            <h3 style={{ fontSize: 20, fontFamily: "'EB Garamond', Georgia, serif", color: C.navy, fontWeight: 600, margin: "0 0 8px" }}>{p.title}</h3>
            <p style={{ fontSize: 14, color: C.textLight, margin: 0 }}>{p.insight}</p>
          </div>
          <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}
            style={{ width: 28, height: 28, borderRadius: "50%", background: C.lightSlate, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18, color: C.navy, lineHeight: 1 }}>
            +
          </motion.div>
        </div>

        {/* Expanded body */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
              <div style={{ padding: "0 2rem 2rem", borderTop: `1px solid ${C.lightSlate}` }}>

                {/* Summary */}
                <div style={{ paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.midBlue, marginBottom: 8 }}>Project Summary</div>
                  <p style={{ fontSize: 15, color: "#334", lineHeight: 1.75, margin: 0 }}>{p.summary}</p>
                </div>

                {/* Outcome */}
                <div style={{ background: C.offWhite, borderRadius: 6, padding: "1.25rem 1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${C.midBlue}` }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.midBlue, marginBottom: 8 }}>Quantifiable Outcome</div>
                  <p style={{ fontSize: 14, color: C.navy, lineHeight: 1.7, margin: 0 }}>{p.outcome}</p>
                </div>

                {/* Tools */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.midBlue, marginBottom: 10 }}>Tools & Skills</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {p.tools.map(t => (
                      <span key={t} style={{ fontSize: 12, padding: "5px 12px", background: C.lightSlate, color: C.deepBlue, borderRadius: 4, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Credit insight */}
                <div style={{ border: `1px solid ${C.lightSlate}`, borderRadius: 6, overflow: "hidden" }}>
                  <div style={{ background: C.navy, padding: "0.875rem 1.5rem", display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Lending Recommendation</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: verdictColor[p.recommendation] ?? "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {p.recommendation}
                    </span>
                  </div>
                  <div style={{ padding: "1.25rem 1.5rem" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.midBlue, marginBottom: 10 }}>Key Risks</div>
                    {p.keyRisks.map((r, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                        <span style={{ color: C.riskRed, fontSize: 14, flexShrink: 0, marginTop: 2 }}>▸</span>
                        <span style={{ fontSize: 14, color: "#334", lineHeight: 1.6 }}>{r}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${C.lightSlate}`, fontSize: 14, color: C.navy, lineHeight: 1.7 }}>
                      <strong style={{ color: C.deepBlue }}>Reasoning: </strong>{p.reasoning}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
};

const Projects = () => (
  <section id="projects" style={{ padding: "100px 2rem", background: C.offWhite }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle label="Portfolio" title="Credit Analysis Projects" />
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} idx={i} />)}
      </div>
    </div>
  </section>
);

// ─── SKILLS ───────────────────────────────────────────────────────────────

const Skills = () => (
  <section id="skills" style={{ padding: "100px 2rem", background: "#fff" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionTitle label="Competencies" title="Skills & Expertise" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {Object.entries(SKILLS).map(([category, items], ci) => (
          <FadeIn key={category} delay={ci * 0.1}>
            <div style={{ background: C.offWhite, borderRadius: 8, padding: "2rem", border: `1px solid ${C.lightSlate}`, height: "100%" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.midBlue, marginBottom: 20 }}>{category}</div>
              {items.map((s, i) => (
                <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < items.length - 1 ? `1px solid ${C.lightSlate}` : "none" }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: C.navy, marginBottom: 4 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: C.textLight, lineHeight: 1.5 }}>{s.detail}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── BLOG ─────────────────────────────────────────────────────────────────

const BlogPost = ({ b, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={idx * 0.1}>
      <div style={{ borderBottom: `1px solid ${C.lightSlate}`, paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
        <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
          <h3 style={{ fontSize: "clamp(18px,2.5vw,22px)", fontFamily: "'EB Garamond', Georgia, serif", color: C.navy, fontWeight: 600, margin: "0 0 12px", lineHeight: 1.3 }}>
            {b.title}
          </h3>
          <p style={{ fontSize: 14, color: C.textLight, margin: "0 0 12px", lineHeight: 1.6 }}>
            {b.context.slice(0, 160)}…
          </p>
          <button style={{ background: "none", border: "none", color: C.midBlue, fontSize: 13, fontWeight: 600, cursor: "pointer", padding: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {open ? "Collapse ↑" : "Read analysis ↓"}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }} style={{ overflow: "hidden" }}>
              <div style={{ paddingTop: "1.5rem" }}>
                {[{ label: "Context", text: b.context }, { label: "Analysis", text: b.analysis }].map(({ label, text }) => (
                  <div key={label} style={{ marginBottom: "1.25rem" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.midBlue, marginBottom: 6 }}>{label}</div>
                    <p style={{ fontSize: 15, color: "#334", lineHeight: 1.75, margin: 0 }}>{text}</p>
                  </div>
                ))}
                <div style={{ background: C.offWhite, borderLeft: `4px solid ${C.midBlue}`, padding: "1rem 1.25rem", borderRadius: "0 6px 6px 0", marginBottom: "1rem" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.midBlue, marginBottom: 6 }}>Credit Implications</div>
                  <p style={{ fontSize: 14, color: C.navy, lineHeight: 1.7, margin: 0 }}>{b.implications}</p>
                </div>
                <div style={{ background: C.navy, borderRadius: 6, padding: "1rem 1.5rem" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.steelBlue, textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Takeaway: </span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>{b.takeaway}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
};

const Blog = () => (
  <section id="blog" style={{ padding: "100px 2rem", background: C.offWhite }}>
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <SectionTitle label="Thought Leadership" title="Credit Market Insights" />
      {BLOGS.map((b, i) => <BlogPost key={i} b={b} idx={i} />)}
    </div>
  </section>
);

// ─── EXPERIENCE ───────────────────────────────────────────────────────────

const Experience = () => (
  <section id="experience" style={{ padding: "100px 2rem", background: "#fff" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle label="Career" title="Work Experience" />
      <div style={{ position: "relative" }}>
        {/* Timeline vertical line */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: C.lightSlate }} />

        {EXPERIENCE.map((e, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{ paddingLeft: "2.5rem", paddingBottom: "3rem", position: "relative" }}>
              {/* Timeline dot */}
              <div style={{ position: "absolute", left: -7, top: 4, width: 16, height: 16, borderRadius: "50%", background: C.midBlue, border: "3px solid #fff", boxShadow: `0 0 0 2px ${C.midBlue}` }} />

              <div style={{ fontSize: 12, color: C.midBlue, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{e.dates}</div>
              <h3 style={{ fontSize: 22, fontFamily: "'EB Garamond', Georgia, serif", color: C.navy, fontWeight: 600, margin: "0 0 4px" }}>{e.role}</h3>
              <div style={{ fontSize: 15, color: C.textLight, marginBottom: 16, fontWeight: 500 }}>{e.company}</div>

              {e.responsibilities.map((r, j) => (
                <div key={j} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                  <span style={{ color: C.midBlue, fontSize: 14, flexShrink: 0, marginTop: 3 }}>▸</span>
                  <span style={{ fontSize: 14, color: "#334", lineHeight: 1.65 }}>{r}</span>
                </div>
              ))}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12, marginBottom: 14 }}>
                {e.skills.map(s => (
                  <span key={s} style={{ fontSize: 12, padding: "4px 10px", background: C.lightSlate, color: C.deepBlue, borderRadius: 4, fontWeight: 500 }}>{s}</span>
                ))}
              </div>

              <div style={{ fontSize: 13, color: C.navy, background: C.offWhite, borderRadius: 6, padding: "10px 16px", borderLeft: `3px solid ${C.steelBlue}` }}>
                <strong>Impact: </strong>{e.outcome}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── EDUCATION ────────────────────────────────────────────────────────────

const Education = () => (
  <section id="education" style={{ padding: "100px 2rem", background: C.offWhite }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle label="Academic Background" title="Education" />
      {EDUCATION.map((e, i) => (
        <FadeIn key={i} delay={i * 0.08}>
          <div style={{ background: "#fff", border: `1px solid ${C.lightSlate}`, borderRadius: 8, padding: "2.5rem", marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: "1.5rem" }}>
              <div>
                <h3 style={{ fontSize: 24, fontFamily: "'EB Garamond', Georgia, serif", color: C.navy, fontWeight: 600, margin: "0 0 4px" }}>{e.degree}</h3>
                <div style={{ fontSize: 15, color: C.midBlue, fontWeight: 500 }}>{e.institution}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: C.textLight, marginBottom: 4 }}>{e.dates}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.deepBlue }}>{e.grade}</div>
              </div>
            </div>

            {/* Modules */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.midBlue, marginBottom: 10 }}>Key Modules</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {e.modules.map(m => (
                  <span key={m} style={{ fontSize: 13, padding: "6px 14px", background: C.offWhite, color: C.navy, borderRadius: 4, fontWeight: 500, border: `1px solid ${C.lightSlate}` }}>{m}</span>
                ))}
              </div>
            </div>

            {/* Dissertation (optional) */}
            {e.dissertation && (
              <div style={{ marginBottom: "1.5rem", fontSize: 14, color: "#334", lineHeight: 1.65 }}>
                <strong style={{ color: C.navy }}>Dissertation: </strong>{e.dissertation}
              </div>
            )}

            {/* Certifications */}
            {e.certifications?.length > 0 && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.midBlue, marginBottom: 10 }}>Certifications</div>
                {e.certifications.map((cert, ci) => (
                  <div key={ci} style={{ display: "flex", gap: 10, marginBottom: 6, alignItems: "center" }}>
                    <span style={{ color: C.midBlue, fontSize: 12 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#334" }}>{cert}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

// ─── ABOUT ────────────────────────────────────────────────────────────────

const About = () => (
  <section id="about" style={{ padding: "100px 2rem", background: C.navy }}>
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <SectionTitle label="About" title="Who I Am" dark />
      {ABOUT.map((item, i) => (
        <FadeIn key={i} delay={i * 0.08}>
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.steelBlue, marginBottom: 8 }}>{item.label}</div>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: 0 }}>{item.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

// ─── CONTACT ──────────────────────────────────────────────────────────────

const Contact = () => (
  <section id="contact" style={{ padding: "100px 2rem", background: "#fff" }}>
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <SectionTitle label="Get in Touch" title="Contact" />
      <FadeIn delay={0.1}>
        <div style={{ background: C.offWhite, borderRadius: 10, padding: "2.5rem", border: `1px solid ${C.lightSlate}` }}>
          <p style={{ fontStyle: "italic", fontFamily: "'EB Garamond', Georgia, serif", fontSize: 20, color: C.navy, lineHeight: 1.75, margin: "0 0 2rem" }}>
            "{CONTACT.cta}"
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <a href={`mailto:${CONTACT.email}`} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: C.midBlue, textDecoration: "none", fontWeight: 500 }}>
              <span style={{ fontSize: 18 }}>✉</span> {CONTACT.email}
            </a>
            <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: C.midBlue, textDecoration: "none", fontWeight: 500 }}>
              <span style={{ fontSize: 18, fontWeight: 700 }}>in</span> {CONTACT.linkedin}
            </a>
          </div>
          <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: `1px solid ${C.lightSlate}` }}>
            <a href={CONTACT.cvUrl} style={{ display: "inline-block", padding: "12px 28px", background: C.navy, color: "#fff", textDecoration: "none", borderRadius: 4, fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Download CV
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────

const Footer = () => (
  <footer style={{ background: C.navy, padding: "2rem", textAlign: "center" }}>
    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: 0 }}>
      © {new Date().getFullYear()} {HERO.name} · {HERO.title}
    </p>
  </footer>
);

// ─── ACTIVE SECTION TRACKER ───────────────────────────────────────────────

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.toLowerCase());
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return active;
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────

export default function App() {
  const active = useActiveSection();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Segoe UI',system-ui,sans-serif;background:#F5F7F9}button:focus{outline:2px solid #5B9BC8;outline-offset:2px}`;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <NavBar active={active} />
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Experience />
      <Education />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
