import { useEffect, useMemo, useState } from "react";

export default function App() {
  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "industries", label: "Industries" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = "home";
      for (const n of nav) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) current = n.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [nav]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <div className="page">
      <style>{css}</style>

      {/* Top strip */}
      <div className="top">
        <div className="wrap wide">
          <div className="topRow">
            <div className="topLeft">Atlanta, GA • Corporate Consulting</div>
            <div className="topRight">
              <a href="tel:+14044527751">(404) 452-7751</a>
              <span className="sep">•</span>
              <a href="mailto:contact@sitouconsulting.com">contact@sitouconsulting.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="wrap wide headerRow">
          <button className="brand" onClick={() => go("home")} aria-label="Go to home">
            {/* Modernized logo (built-in, always shows) */}
            <div className="mark" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="1.5" y="1.5" width="25" height="25" rx="7" stroke="white" strokeWidth="1.5" />
                <path d="M8 19V9H20V11.6H10.7V13.6H18.7V16.1H10.7V19H8Z" fill="white" />
              </svg>
            </div>
            <div className="brandText">
              <div className="brandName">Sitou Consulting</div>
              <div className="brandSub">Strategy • Operations • Execution</div>
            </div>

            {/* Later we can swap to your image logo by uploading to /public and using:
                <img className="logoImg" src="/logo-sitou-consulting.jpeg" alt="Sitou Consulting" />
            */}
          </button>

          <nav className="nav" aria-label="Primary">
            {nav.map((n) => (
              <button
                key={n.id}
                className={`navLink ${active === n.id ? "active" : ""}`}
                onClick={() => go(n.id)}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <button className="cta" onClick={() => go("contact")}>
            Request a Consultation
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="wrap wide heroGrid">
          <div>
            <div className="kicker">SITOU CONSULTING</div>
            <h1 className="h1">
              Executive consulting for leaders who want clearer strategy, stronger operations, and measurable results.
            </h1>
            <p className="lead">
              We provide professional business consulting and management services across all industries—helping
              organizations improve performance, optimize processes, and execute with confidence.
            </p>

            <div className="heroBtns">
              <button className="btnPrimary" onClick={() => go("contact")}>Talk to Us</button>
              <button className="btnGhost" onClick={() => go("services")}>Explore Services</button>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statV">All sectors</div>
                <div className="statT">Cross-industry expertise</div>
              </div>
              <div className="stat">
                <div className="statV">Hands-on</div>
                <div className="statT">Engagement style</div>
              </div>
              <div className="stat">
                <div className="statV">Outcomes</div>
                <div className="statT">Focus</div>
              </div>
            </div>
          </div>

          <div className="heroCard">
            <div className="heroCardTop">
              <div className="heroCardTitle">What we deliver</div>
              <div className="pill">Corporate-grade delivery</div>
            </div>

            <div className="bullets">
              <Bullet title="Actionable strategy" text="Clear priorities, plans, and executive-ready reporting." />
              <Bullet title="Operational excellence" text="Reduce friction, improve throughput, build repeatable systems." />
              <Bullet title="Management support" text="Operating cadence, governance, and change management that sticks." />
            </div>

            <div className="heroCardBottom">
              <div className="small">Atlanta-based • Serving clients locally & remotely</div>
              <button className="btnSoft" onClick={() => go("contact")}>Schedule a call</button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section white">
        <div className="wrap">
          <h2 className="h2">A consulting partner built for execution</h2>
          <p className="sub">
            We bring clarity to complex business challenges and deliver practical solutions that improve performance and
            sustain growth—without unnecessary complexity.
          </p>

          <div className="twoCol">
            <div className="panel">
              <div className="panelTitle">Our approach</div>
              <p className="p">
                We start with what matters: outcomes, constraints, and root causes. Then we design a plan your team can
                implement—aligned to your people, operations, and timeline.
              </p>

              <div className="steps">
                <Step n="01" t="Diagnose" d="Assess goals, constraints, and root causes." />
                <Step n="02" t="Design" d="Build a focused plan and operating rhythm." />
                <Step n="03" t="Deliver" d="Support execution and measure outcomes." />
              </div>
            </div>

            <div className="panel alt">
              <div className="panelTitle">Why leaders choose Sitou</div>
              <ul className="list">
                <li>Confidential, professional, and reliable</li>
                <li>Industry-agnostic across diverse business models</li>
                <li>Customized solutions—no templates, no fluff</li>
                <li>Clear communication and executive-level support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section dark">
        <div className="wrap">
          <h2 className="h2 darkT">Services</h2>
          <p className="sub darkS">
            Advisory and execution support designed to strengthen leadership, operations, and performance.
          </p>

          <div className="cards3">
            <Service
              title="Business Strategy"
              text="Strategic planning, market positioning, growth strategy, KPI frameworks, executive reporting."
              items={["Strategic planning", "Growth roadmaps", "Executive reporting"]}
            />
            <Service
              title="Management Consulting"
              text="Operating models, organizational structure, leadership support, governance, and change management."
              items={["Org structure", "Change management", "Governance & cadence"]}
            />
            <Service
              title="Process Optimization"
              text="Workflow redesign, cost reduction, scalable systems, SOP development, quality improvement."
              items={["Workflow redesign", "SOPs & controls", "Efficiency improvements"]}
            />
          </div>

          <div className="band">
            <div>
              <div className="bandT">Need a tailored scope?</div>
              <div className="bandS">We’ll align a simple engagement to your goals, timeline, and budget.</div>
            </div>
            <button className="btnPrimary" onClick={() => go("contact")}>Request a consultation</button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="section white">
        <div className="wrap">
          <h2 className="h2">Industries</h2>
          <p className="sub">
            We support clients across <strong>all types of industries</strong>, adapting our approach to your operating reality.
          </p>

          <div className="grid4">
            {[
              "Professional Services",
              "Healthcare & Wellness",
              "Real Estate & Construction",
              "Retail & Consumer",
              "Logistics & Transportation",
              "Technology",
              "Finance & Insurance",
              "Nonprofit & Public Sector",
            ].map((x) => (
              <div key={x} className="tile">
                <span className="dot" aria-hidden />
                <span className="tileText">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section white">
        <div className="wrap">
          <h2 className="h2">Contact</h2>
          <p className="sub">Let’s discuss your goals and define the right consulting support.</p>

          <div className="contactGrid">
            <div className="panel">
              <div className="panelTitle">Sitou Consulting</div>

              <div className="line">
                <strong>Address</strong>
                <div>1201 W Peachtree St NW, Suite 2625</div>
                <div>Atlanta, GA 30309</div>
              </div>

              <div className="line">
                <strong>Phone</strong>
                <a href="tel:+14044527751">(404) 452-7751</a>
              </div>

              <div className="line">
                <strong>Email</strong>
                <a href="mailto:contact@sitouconsulting.com">contact@sitouconsulting.com</a>
              </div>

              <div className="social">
                {/* Replace # with your real links later */}
                <a className="chip" href="#" aria-label="LinkedIn">LinkedIn</a>
                <a className="chip" href="#" aria-label="Twitter / X">Twitter</a>
              </div>

              <div className="note">
                Next: we can make the form send emails to you (so clients can contact you directly).
              </div>
            </div>

            <div className="panel alt">
              <div className="panelTitle">Request a Consultation</div>
              <p className="p" style={{ marginTop: 8 }}>
                This form is visual for now. After the design is approved, we’ll connect it to email.
              </p>

              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message received! Next step: connect form to email.");
                }}
              >
                <div className="row2">
                  <Field label="Full name" placeholder="Your name" />
                  <Field label="Email" placeholder="name@email.com" />
                </div>

                <Field label="Company / Industry" placeholder="Optional" />
                <Field label="How can we help?" placeholder="Tell us what you’re working on..." textarea />

                <button className="btnPrimary" type="submit">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap wide footRow">
          <div>
            <div className="footBrand">Sitou Consulting</div>
            <div className="footSub">Corporate consulting • Atlanta, GA</div>
          </div>
          <div className="footRight">
            <div>© {year} Sitou Consulting</div>
            <div>sitouconsulting.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---- small components ---- */

function Bullet({ title, text }) {
  return (
    <div className="bullet">
      <span className="bDot" aria-hidden />
      <div>
        <div className="bT">{title}</div>
        <div className="bS">{text}</div>
      </div>
    </div>
  );
}

function Step({ n, t, d }) {
  return (
    <div className="step">
      <div className="stepN">{n}</div>
      <div>
        <div className="stepT">{t}</div>
        <div className="stepD">{d}</div>
      </div>
    </div>
  );
}

function Service({ title, text, items }) {
  return (
    <div className="card">
      <div>
        <div className="cardT">{title}</div>
        <div className="cardS">{text}</div>
      </div>
      <div className="divider" />
      <ul className="ul">
        {items.map((x) => (
          <li key={x} className="li">
            <span className="chk" aria-hidden />
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({ label, placeholder, textarea }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      {textarea ? (
        <textarea className="input" rows={5} placeholder={placeholder} />
      ) : (
        <input className="input" placeholder={placeholder} />
      )}
    </div>
  );
}

/* ---- CSS ---- */

const css = `
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;background:#0b0b0c;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial}
  a{color:inherit}
  .page{background:#0b0b0c}

  .wrap{max-width:1040px;margin:0 auto;padding:0 20px}
  .wrap.wide{max-width:1160px}

  .top{background:#0b0b0c;color:rgba(255,255,255,.85);border-bottom:1px solid rgba(255,255,255,.08)}
  .topRow{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:10px 0;font-size:12px;letter-spacing:.3px}
  .topRight a{text-decoration:none;opacity:.95}
  .sep{opacity:.4;margin:0 8px}

  .header{position:sticky;top:0;z-index:50;background:rgba(11,11,12,.78);backdrop-filter:blur(10px);border-bottom:1px solid rgba(255,255,255,.10)}
  .headerRow{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0;flex-wrap:wrap}
  .brand{display:flex;align-items:center;gap:12px;background:transparent;border:0;color:white;cursor:pointer;padding:0;text-align:left}
  .mark{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14)}
  .brandName{font-weight:820;letter-spacing:-.2px}
  .brandSub{font-size:12px;opacity:.68;letter-spacing:.8px;margin-top:2px}

  .nav{display:flex;gap:6px;flex-wrap:wrap}
  .navLink{background:transparent;border:1px solid transparent;color:rgba(255,255,255,.82);padding:10px 12px;border-radius:999px;font-size:13px;cursor:pointer}
  .navLink.active{border-color:rgba(255,255,255,.20);background:rgba(255,255,255,.06);color:white}

  .cta{background:white;color:#0b0b0c;border:1px solid rgba(255,255,255,.2);padding:10px 14px;border-radius:14px;font-weight:800;font-size:13px;cursor:pointer}

  .hero{color:white;padding:56px 0 28px}
  .heroGrid{display:grid;grid-template-columns:1.15fr .85fr;gap:28px;align-items:start}
  .kicker{font-size:12px;letter-spacing:2.2px;opacity:.7;margin-bottom:14px}
  .h1{font-size:44px;line-height:1.06;margin:0;letter-spacing:-.6px;font-weight:860}
  .lead{font-size:16px;line-height:1.7;opacity:.78;margin:16px 0 0;max-width:680px}
  .heroBtns{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}
  .btnPrimary{background:white;color:#0b0b0c;border:1px solid rgba(255,255,255,.15);padding:12px 16px;border-radius:14px;font-weight:850;cursor:pointer}
  .btnGhost{background:transparent;color:white;border:1px solid rgba(255,255,255,.22);padding:12px 16px;border-radius:14px;font-weight:780;cursor:pointer}
  .btnSoft{background:rgba(255,255,255,.92);color:#0b0b0c;border:1px solid rgba(255,255,255,.15);padding:10px 12px;border-radius:14px;font-weight:850;cursor:pointer}

  .stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:26px}
  .stat{border:1px solid rgba(255,255,255,.16);background:rgba(

